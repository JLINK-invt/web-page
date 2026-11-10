'use client';

import { Suspense } from 'react';
import TransferenciaClient from './TransferenciaClient';

export default function TransferenciaPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center p-4">Cargando...</div>
      }
    >
      <TransferenciaClient />
    </Suspense>
  );
}
