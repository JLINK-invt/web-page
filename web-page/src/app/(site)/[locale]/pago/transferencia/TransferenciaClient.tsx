'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import { getProject } from '@/content/projects';

interface BankAccountDetails {
  clabe: string;
  accountName: string;
  bankName: string;
  reference: string;
}

const BANK_DETAILS: BankAccountDetails = {
  clabe: process.env.NEXT_PUBLIC_BANK_CLABE || '012180012345678901',
  accountName: process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || 'Cosmos Compass',
  bankName: process.env.NEXT_PUBLIC_BANK_NAME || 'BBVA México',
  reference: 'PAGO-{projectId}',
};

export default function TransferenciaClient() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get('locale') as 'es' | 'en') || 'es';
  const dict = getDictionary(locale);

  const projectId = searchParams.get('project') || '';
  const project = projectId ? getProject(projectId) : null;

  const [step, setStep] = useState<'details' | 'upload' | 'success'>('details');
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = project?.price
    ? (project.price / 100).toLocaleString(locale, {
        style: 'currency',
        currency: project.currency || 'MXN',
      })
    : '';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 5 * 1024 * 1024) {
        setError(locale === 'es' ? 'El archivo no debe exceder 5MB' : 'File must not exceed 5MB');
        return;
      }
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(selected.type)) {
        setError(
          locale === 'es' ? 'Solo se permiten JPG, PNG o PDF' : 'Only JPG, PNG or PDF allowed'
        );
        return;
      }
      setFile(selected);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError(locale === 'es' ? 'Selecciona un comprobante' : 'Select a proof');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('projectId', projectId);
      formData.append('email', email);
      formData.append('locale', locale);

      const response = await fetch(`/${locale}/pago/transferencia/api/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al subir comprobante');
      }

      setStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setUploading(false);
    }
  };

  const reference = BANK_DETAILS.reference.replace('{projectId}', projectId);

  if (step === 'details') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="win-panel w-full max-w-2xl">
          <h1 className="font-display mb-4 text-[24px] font-bold text-white">
            {dict.project.payment?.transfer?.instructions || 'Datos bancarios'}
          </h1>

          {project && (
            <div className="mb-6 rounded-lg bg-white/95 p-4">
              <p className="mb-2 text-[13px] text-[#3d3d3d]">
                <strong>{project.name}</strong> - {amount}
              </p>
            </div>
          )}

          <div className="mb-6 space-y-4">
            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <p className="mb-1 text-[12px] text-[#47525f]">Banco</p>
              <p className="font-mono text-[14px] font-bold text-[#333]">{BANK_DETAILS.bankName}</p>
            </div>
            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <p className="mb-1 text-[12px] text-[#47525f]">Titular</p>
              <p className="font-mono text-[14px] font-bold text-[#333]">
                {BANK_DETAILS.accountName}
              </p>
            </div>
            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <p className="mb-1 text-[12px] text-[#47525f]">CLABE</p>
              <p className="font-mono text-[14px] font-bold text-[#333]">{BANK_DETAILS.clabe}</p>
            </div>
            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <p className="mb-1 text-[12px] text-[#47525f]">Referencia</p>
              <p className="font-mono text-[14px] font-bold text-[#333]">{reference}</p>
            </div>
          </div>

          <p className="mb-6 text-[12px] text-[#888]">
            {dict.project.payment?.transfer?.description ||
              'Realiza la transferencia y sube el comprobante'}
          </p>

          <button onClick={() => setStep('upload')} className="win-btn w-full">
            {dict.project.payment?.transfer?.uploadProof || 'Subir comprobante'}
          </button>
        </div>
      </div>
    );
  }

  if (step === 'upload') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="win-panel w-full max-w-md">
          <h1 className="font-display mb-4 text-[24px] font-bold text-white">
            {dict.project.payment?.transfer?.uploadProof || 'Subir comprobante'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="win-label mb-1 block">Email (opcional, para confirmación)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-[#d8d8d8] bg-white px-3 py-2 text-[13px]"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="win-label mb-1 block">Comprobante (JPG, PNG, PDF - máx 5MB)</label>
              <input
                type="file"
                accept="image/jpeg,image/png,application/pdf"
                onChange={handleFileChange}
                className="w-full rounded border border-[#d8d8d8] bg-white px-3 py-2 text-[13px]"
                required
              />
            </div>

            {error && <p className="text-center text-[12px] text-[#c06a58]">{error}</p>}

            <button type="submit" disabled={uploading || !file} className="win-btn w-full">
              {uploading ? 'Subiendo...' : 'Enviar comprobante'}
            </button>

            <button
              type="button"
              onClick={() => setStep('details')}
              className="win-btn-ghost w-full text-[12px]"
            >
              Volver a datos bancarios
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="win-panel w-full max-w-md text-center">
        <div className="mb-4 text-6xl text-[#4c9a4c]" aria-hidden="true">
          ✓
        </div>
        <h1 className="font-display mb-2 text-[28px] font-bold text-white">
          {dict.project.payment?.transfer?.pending || 'Comprobante recibido'}
        </h1>
        <p className="mb-6 text-[#eaf2ff]">Verificaremos tu pago en las próximas 24 horas.</p>
        <p className="mb-6 text-[13px] text-[#888]">
          Te enviaremos un email a {email || 'tu correo'} cuando el pago sea confirmado.
        </p>
        <a href={`/${locale}/proyectos/${projectId}`} className="win-btn w-full">
          Ver mi producto
        </a>
      </div>
    </div>
  );
}
