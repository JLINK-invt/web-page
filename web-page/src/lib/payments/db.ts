import fs from 'fs';
import path from 'path';
import { PaymentRecord, CreatePaymentInput } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(PAYMENTS_FILE)) {
    fs.writeFileSync(PAYMENTS_FILE, '[]', 'utf-8');
  }
}

function readPayments(): PaymentRecord[] {
  ensureDataDir();
  try {
    const data = fs.readFileSync(PAYMENTS_FILE, 'utf-8');
    return JSON.parse(data) as PaymentRecord[];
  } catch {
    return [];
  }
}

function writePayments(payments: PaymentRecord[]) {
  ensureDataDir();
  fs.writeFileSync(PAYMENTS_FILE, JSON.stringify(payments, null, 2), 'utf-8');
}

export function createPayment(input: CreatePaymentInput): PaymentRecord {
  const payments = readPayments();
  const now = new Date().toISOString();
  const payment: PaymentRecord = {
    id: crypto.randomUUID(),
    projectId: input.projectId,
    method: input.method,
    amount: input.amount,
    currency: input.currency,
    status: 'pending',
    payerEmail: input.payerEmail,
    metadata: input.metadata,
    createdAt: now,
    updatedAt: now,
  };
  payments.push(payment);
  writePayments(payments);
  return payment;
}

export function getPayment(id: string): PaymentRecord | undefined {
  const payments = readPayments();
  return payments.find((p) => p.id === id);
}

export function getPaymentByExternalId(externalId: string): PaymentRecord | undefined {
  const payments = readPayments();
  return payments.find((p) => p.externalId === externalId);
}

export function getPaymentsByProject(projectId: string): PaymentRecord[] {
  const payments = readPayments();
  return payments.filter((p) => p.projectId === projectId);
}

export function updatePaymentStatus(
  id: string,
  status: PaymentRecord['status'],
  updates: Partial<PaymentRecord> = {}
): PaymentRecord | undefined {
  const payments = readPayments();
  const index = payments.findIndex((p) => p.id === id);
  if (index === -1) return undefined;

  payments[index] = {
    ...payments[index],
    status,
    updatedAt: new Date().toISOString(),
    ...updates,
  };
  writePayments(payments);
  return payments[index];
}

export function updatePaymentByExternalId(
  externalId: string,
  status: PaymentRecord['status'],
  updates: Partial<PaymentRecord> = {}
): PaymentRecord | undefined {
  const payments = readPayments();
  const index = payments.findIndex((p) => p.externalId === externalId);
  if (index === -1) return undefined;

  payments[index] = {
    ...payments[index],
    status,
    updatedAt: new Date().toISOString(),
    ...updates,
  };
  writePayments(payments);
  return payments[index];
}
