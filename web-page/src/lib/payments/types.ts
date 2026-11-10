export type PaymentMethod = 'card' | 'transfer' | 'paypal' | 'mercadopago';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'expired';

export interface PaymentRecord {
  id: string;
  projectId: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  status: PaymentStatus;
  externalId?: string;
  proofUrl?: string;
  payerEmail?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentInput {
  projectId: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  payerEmail?: string;
  metadata?: Record<string, unknown>;
}

export interface StripeSessionData {
  sessionId: string;
  url: string;
}

export interface PayPalOrderData {
  orderId: string;
  approveUrl: string;
}

export interface MercadoPagoPreferenceData {
  preferenceId: string;
  initPoint: string;
  sandboxInitPoint: string;
}

export interface BankAccountDetails {
  clabe: string;
  accountName: string;
  bankName: string;
  reference: string;
}
