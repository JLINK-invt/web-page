import type { Domain } from '@/types/content';
import { domainSlugs } from '@/lib/routes';

export const domains: Domain[] = [
  {
    id: 'domotics',
    number: '01',
    name: { es: 'Domótica', en: 'Domotics' },
    description: {
      es: 'Software a medida para operar dispositivos, accesos, caja y agenda: telemetría, credenciales y trazabilidad.',
      en: 'Custom software to operate devices, access, cash and scheduling: telemetry, credentials and traceability.',
    },
    status: 'active',
  },
  {
    id: 'agriculture',
    number: '02',
    name: { es: 'Agricultura', en: 'Agriculture' },
    description: {
      es: 'Software para decidir con datos de campo: monitoreo de cultivos, alertas tempranas y trazabilidad.',
      en: 'Software to decide with field data: crop monitoring, early alerts and traceability.',
    },
    status: 'upcoming',
  },
  {
    id: 'industrial',
    number: '03',
    name: { es: 'Industria', en: 'Industrial' },
    description: {
      es: 'Software para ver, clasificar y actuar en la línea y la logística: visión, calidad y automatización.',
      en: 'Software to see, classify and act on the line and in logistics: vision, quality and automation.',
    },
    status: 'upcoming',
  },
  {
    id: 'medical',
    number: '04',
    name: { es: 'Salud', en: 'Medical' },
    description: {
      es: 'Software para operar con privacidad y trazabilidad clínica: agenda, expedientes y documentos.',
      en: 'Software to operate with privacy and clinical traceability: scheduling, records and documents.',
    },
    status: 'upcoming',
  },
];

export function getDomain(id: Domain['id']): Domain | undefined {
  return domains.find((domain) => domain.id === id);
}

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((domain) => Object.values(domainSlugs[domain.id]).includes(slug));
}

export function getActiveDomains(): Domain[] {
  return domains.filter((domain) => domain.status === 'active');
}

export function getUpcomingDomains(): Domain[] {
  return domains.filter((domain) => domain.status === 'upcoming');
}
