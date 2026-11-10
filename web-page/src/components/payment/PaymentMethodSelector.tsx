'use client';

import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import type { Project } from '@/types/content';

interface PaymentMethodSelectorProps {
  project: Project;
  locale: 'es' | 'en';
}

export function PaymentMethodSelector({ project, locale }: PaymentMethodSelectorProps) {
  const dict = getDictionary(locale);

  const amount = project.price
    ? (project.price / 100).toLocaleString(locale, {
        style: 'currency',
        currency: project.currency || 'MXN',
      })
    : '';

  const methods = [
    {
      id: 'card',
      icon: '💳',
      label: dict.project.payment?.card?.title || 'Tarjeta (Stripe)',
      description: dict.project.payment?.card?.description || 'Pago seguro con tarjeta',
      href: `/${locale}/pago/tarjeta/checkout?project=${project.slug}`,
    },
    {
      id: 'transfer',
      icon: '🏦',
      label: dict.project.payment?.transfer?.title || 'Transferencia',
      description: dict.project.payment?.transfer?.description || 'Depósito bancario',
      href: `/${locale}/pago/transferencia?project=${project.slug}`,
    },
    {
      id: 'paypal',
      icon: '🅿️',
      label: dict.project.payment?.paypal?.title || 'PayPal',
      description: dict.project.payment?.paypal?.description || 'Paga con PayPal',
      href: `/${locale}/pago/paypal?project=${project.slug}`,
      disabled: true,
    },
    {
      id: 'mercadopago',
      icon: '🛒',
      label: dict.project.payment?.mercadopago?.title || 'MercadoLibre',
      description: dict.project.payment?.mercadopago?.description || 'Pago en cuotas',
      href: `/${locale}/pago/mercadopago?project=${project.slug}`,
      disabled: true,
    },
  ];

  return (
    <div className="space-y-3">
      {amount && (
        <div className="mb-3 rounded-lg bg-[#f5f5f5] p-3">
          <p className="mb-1 text-[12px] text-[#47525f]">
            {dict.project.payment?.amount || 'Total a pagar'}
          </p>
          <p className="font-display text-[20px] font-bold text-[#2a5db0]">{amount}</p>
        </div>
      )}

      <p className="mb-2 text-[12px] text-[#47525f]">
        {dict.project.payment?.selectMethod || 'Elige cómo pagar'}
      </p>

      <div className="grid gap-2">
        {methods.map((method) => (
          <Link
            key={method.id}
            href={method.disabled ? '#' : method.href}
            className={`flex items-center gap-3 rounded-lg border p-3 ${
              method.disabled
                ? 'cursor-not-allowed border-[#e0e0e0] bg-[#fafafa] opacity-60'
                : 'border-[#d8d8d8] bg-white transition-colors hover:border-[#2a5db0] hover:bg-[#f0f7ff]'
            }`}
            aria-disabled={method.disabled}
          >
            <span aria-hidden="true" className="text-2xl">
              {method.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p
                className={`text-[13px] font-medium ${method.disabled ? 'text-[#888]' : 'text-[#333]'} truncate`}
              >
                {method.label}
              </p>
              <p
                className={`text-[11px] ${method.disabled ? 'text-[#aaa]' : 'text-[#666]'} truncate`}
              >
                {method.description}
              </p>
            </div>
            {!method.disabled && (
              <span aria-hidden="true" className="text-[#2a5db0]">
                →
              </span>
            )}
          </Link>
        ))}
      </div>

      <p className="mt-2 text-center text-[11px] text-[#888]">
        {locale === 'es'
          ? 'PayPal y MercadoLibre próximamente'
          : 'PayPal and MercadoLibre coming soon'}
      </p>
    </div>
  );
}
