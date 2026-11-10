import { NextRequest, NextResponse } from 'next/server';
import { getProject } from '@/content/projects';
import { createPayment, updatePaymentStatus } from '@/lib/payments/db';
import { sendTransferProofReceivedEmail } from '@/lib/payments/email';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const projectId = formData.get('projectId') as string;
    const email = formData.get('email') as string;
    const locale = formData.get('locale') as 'es' | 'en';

    if (!file || !projectId) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    const project = getProject(projectId);
    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
    }

    const amount = project.price || 0;
    const currency = project.currency || 'MXN';

    if (amount <= 0) {
      return NextResponse.json({ error: 'Precio no configurado' }, { status: 400 });
    }

    const payment = createPayment({
      projectId,
      method: 'transfer',
      amount,
      currency,
      payerEmail: email || undefined,
      metadata: {
        locale,
        originalFileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      },
    });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'data', 'proofs', payment.id);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, file.name);
    fs.writeFileSync(filePath, buffer);

    updatePaymentStatus(payment.id, 'pending', {
      proofUrl: `/api/payments/proof/${payment.id}/${file.name}`,
    });

    if (email) {
      await sendTransferProofReceivedEmail(payment, locale);
    }

    return NextResponse.json({
      success: true,
      paymentId: payment.id,
      message:
        locale === 'es'
          ? 'Comprobante recibido, verificamos en 24h'
          : 'Proof received, we verify in 24h',
    });
  } catch (error) {
    console.error('Transfer upload error:', error);
    return NextResponse.json({ error: 'Error al procesar comprobante' }, { status: 500 });
  }
}
