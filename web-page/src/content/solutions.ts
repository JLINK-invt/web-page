import type { Locale } from '@/lib/i18n';
import type { DomainId } from '@/types/content';
import type { SectorSceneName } from '@/components/aero/SectorScene';
import { domainHref, href } from '@/lib/routes';

export type SolutionHref =
  { kind: 'domain'; id: DomainId } | { kind: 'project'; slug: string } | { kind: 'contact' };

export type SolutionStatus = 'live' | 'exploration';

export interface AreaSolution {
  id: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  href: SolutionHref;
  status: SolutionStatus;
}

export interface SolutionArea {
  id: DomainId;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  scene: SectorSceneName;
  href: SolutionHref;
  status: 'active' | 'upcoming';
  solutions: AreaSolution[];
}

export const solutionAreas: SolutionArea[] = [
  {
    id: 'domotics',
    name: { es: 'Domótica', en: 'Domotics' },
    description: {
      es: 'Software para operar dispositivos, accesos y espacios de trabajo personal.',
      en: 'Custom software to operate devices, access and spaces with evidence for every action.',
    },
    scene: 'house',
    href: { kind: 'domain', id: 'domotics' },
    status: 'active',
    solutions: [
      {
        id: 'smart-house',
        name: { es: 'Smart House', en: 'Smart House' },
        description: {
          es: 'Telemetría, comandos y alertas verificables para flotas de dispositivos.',
          en: 'Verifiable telemetry, commands and alerts for device fleets.',
        },
        href: { kind: 'project', slug: 'smart-house' },
        status: 'live',
      },
      {
        id: 'fitness-gym',
        name: { es: 'Fitness Center', en: 'Fitness Center' },
        description: {
          es: 'Caja, accesos, socios e inventario en una operación local-first.',
          en: 'Cash, access, members and inventory in a local-first operation.',
        },
        href: { kind: 'project', slug: 'fitness-gym' },
        status: 'live',
      },
      {
        id: 'health-psychology',
        name: { es: 'Health consultory', en: 'Health consultory' },
        description: {
          es: 'Agenda, historias clínicas y seguimiento con aislamiento por organización.',
          en: 'Scheduling, clinical records and follow-up with per-organization isolation.',
        },
        href: { kind: 'project', slug: 'health-psychology' },
        status: 'live',
      },
    ],
  },
  {
    id: 'agriculture',
    name: { es: 'Agricultura', en: 'Agriculture' },
    description: {
      es: 'Software para decidir con datos de campo: monitoreo, alertas y trazabilidad.',
      en: 'Software to decide with field data: monitoring, alerts and traceability.',
    },
    scene: 'agro',
    href: { kind: 'domain', id: 'agriculture' },
    status: 'upcoming',
    solutions: [
      {
        id: 'cultivos',
        name: { es: 'Monitoreo de cultivos', en: 'Crop monitoring' },
        description: {
          es: 'Sensores y datos de campo para ver el estado real del cultivo.',
          en: 'Sensors and field data to see the real state of the crop.',
        },
        href: { kind: 'domain', id: 'agriculture' },
        status: 'exploration',
      },
      {
        id: 'alertas',
        name: { es: 'Alertas tempranas', en: 'Early alerts' },
        description: {
          es: 'Detección de anomalías antes de que afecten la cosecha.',
          en: 'Anomaly detection before it affects the harvest.',
        },
        href: { kind: 'domain', id: 'agriculture' },
        status: 'exploration',
      },
      {
        id: 'trazabilidad',
        name: { es: 'Trazabilidad de campo', en: 'Field traceability' },
        description: {
          es: 'Registro de lotes, insumos y decisiones para auditar la operación.',
          en: 'Records of batches, inputs and decisions to audit the operation.',
        },
        href: { kind: 'domain', id: 'agriculture' },
        status: 'exploration',
      },
    ],
  },
  {
    id: 'industrial',
    name: { es: 'Industria', en: 'Industry' },
    description: {
      es: 'Software para ver, clasificar y actuar en la línea y la logística.',
      en: 'Software to see, classify and act on the line and in logistics.',
    },
    scene: 'industry',
    href: { kind: 'domain', id: 'industrial' },
    status: 'upcoming',
    solutions: [
      {
        id: 'vision',
        name: { es: 'Visión en línea', en: 'Inline vision' },
        description: {
          es: 'Clasificación y detección en la línea, sin muestreo manual.',
          en: 'Classification and detection on the line, without manual sampling.',
        },
        href: { kind: 'domain', id: 'industrial' },
        status: 'exploration',
      },
      {
        id: 'calidad',
        name: { es: 'Control de calidad', en: 'Quality control' },
        description: {
          es: 'Reglas, evidencia y alertas para cada lote.',
          en: 'Rules, evidence and alerts for every batch.',
        },
        href: { kind: 'domain', id: 'industrial' },
        status: 'exploration',
      },
      {
        id: 'automatizacion',
        name: { es: 'Automatización de planta', en: 'Plant automation' },
        description: {
          es: 'Integración de sensores, equipos y órdenes de trabajo.',
          en: 'Integration of sensors, equipment and work orders.',
        },
        href: { kind: 'domain', id: 'industrial' },
        status: 'exploration',
      },
    ],
  },
  {
    id: 'medical',
    name: { es: 'Salud', en: 'Health' },
    description: {
      es: 'Software para operar con privacidad y trazabilidad clínica.',
      en: 'Software to operate with privacy and clinical traceability.',
    },
    scene: 'lab',
    href: { kind: 'domain', id: 'medical' },
    status: 'upcoming',
    solutions: [
      {
        id: 'historia',
        name: { es: 'Historia clínica', en: 'Clinical records' },
        description: {
          es: 'Expedientes, documentos y auditoría con privacidad desde el diseño.',
          en: 'Records, documents and audit with privacy by design.',
        },
        href: { kind: 'domain', id: 'medical' },
        status: 'exploration',
      },
      {
        id: 'seguimiento',
        name: { es: 'Agenda y seguimiento', en: 'Scheduling and follow-up' },
        description: {
          es: 'Turnos, sesiones y continuidad entre profesionales.',
          en: 'Appointments, sessions and continuity between professionals.',
        },
        href: { kind: 'domain', id: 'medical' },
        status: 'exploration',
      },
      {
        id: 'documentos',
        name: { es: 'Documentos clínicos', en: 'Clinical documents' },
        description: {
          es: 'Archivos y consentimientos con control de acceso.',
          en: 'Files and consents with access control.',
        },
        href: { kind: 'domain', id: 'medical' },
        status: 'exploration',
      },
    ],
  },
];

export function solutionHref(locale: Locale, target: SolutionHref): string {
  if (target.kind === 'domain') return domainHref(locale, target.id);
  if (target.kind === 'project') return href(locale, 'projects', target.slug);
  return href(locale, 'contact');
}
