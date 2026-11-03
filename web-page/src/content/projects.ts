import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'smart-house',
    name: 'Smart House',
    domain: 'domotics',
    featured: true,
    visual: 'orbits',
    tagline: {
      es: 'Monitoreo y control de dispositivos IoT con evidencia verificable.',
      en: 'IoT device monitoring and control with verifiable evidence.',
    },
    summary: {
      es: 'Plataforma multi-tenant para operar flotas de dispositivos: telemetría en tiempo real, comandos auditables y alertas que llegan antes de que el problema escale.',
      en: 'A multi-tenant platform for operating device fleets: real-time telemetry, auditable commands and alerts that surface before problems escalate.',
    },
    challenge: {
      es: 'Operar dispositivos distribuidos suele terminar en tableros aislados, datos duplicados y comandos que nadie puede comprobar. Cuando algo falla, el equipo pierde tiempo reconstruyendo qué pasó.',
      en: 'Operating distributed devices often ends in isolated dashboards, duplicated data and commands nobody can verify. When something fails, the team loses time reconstructing what happened.',
    },
    approach: {
      es: 'Unificamos ingesta MQTT, inventario, comandos y alertas en una sola plataforma con aislamiento por organización. Cada acción queda registrada y cada comando tiene un estado verificable: enviado, confirmado, fallido o vencido.',
      en: 'We unify MQTT ingestion, inventory, commands and alerts in a single platform with per-organization isolation. Every action is recorded and every command has a verifiable state: sent, acknowledged, failed or expired.',
    },
    capabilities: {
      es: [
        'Registro y activación de dispositivos con credenciales rotables.',
        'Telemetría MQTT validada, idempotente y en tiempo real.',
        'Comandos remotos con ACK, expiración y auditoría.',
        'Alertas por umbral, duración y dispositivo offline.',
        'Roles, permisos y aislamiento estricto entre organizaciones.',
      ],
      en: [
        'Device registration and activation with rotatable credentials.',
        'Validated, idempotent, real-time MQTT telemetry.',
        'Remote commands with ACK, expiration and audit trails.',
        'Threshold, duration and offline-device alerts.',
        'Roles, permissions and strict isolation between organizations.',
      ],
    },
    stack: {
      es: ['Next.js', 'NestJS', 'MQTT', 'PostgreSQL', 'Redis'],
      en: ['Next.js', 'NestJS', 'MQTT', 'PostgreSQL', 'Redis'],
    },
    facts: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        value: { es: 'Domótica · IoT', en: 'Domotics · IoT' },
      },
      {
        label: { es: 'Modelo', en: 'Model' },
        value: { es: 'Multi-tenant', en: 'Multi-tenant' },
      },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'Operativo', en: 'Operational' },
      },
    ],
  },
  {
    slug: 'fitness-gym',
    name: 'Fitness Gym',
    domain: 'domotics',
    featured: true,
    visual: 'waves',
    tagline: {
      es: 'El sistema operativo de tu gimnasio, funcionando incluso sin internet.',
      en: "Your gym's operating system, working even without internet.",
    },
    summary: {
      es: 'Ventas, caja, inventario, socios, membresías, clases y auditoría en una aplicación de escritorio local-first. Tus datos quedan cifrados en tu equipo y la operación no se detiene cuando cae la conexión.',
      en: 'Sales, cash, inventory, members, memberships, classes and audit in a local-first desktop app. Your data stays encrypted on your machine and operations do not stop when the connection drops.',
    },
    challenge: {
      es: 'Los gimnasios independientes pierden horas conciliando caja, accesos y membresías en planillas separadas. Las soluciones en la nube agregan dependencia de internet y costos recurrentes que no siempre se justifican.',
      en: 'Independent gyms lose hours reconciling cash, access and memberships across separate spreadsheets. Cloud solutions add internet dependency and recurring costs that are not always justified.',
    },
    approach: {
      es: 'Diseñamos un core de escritorio con Tauri, Rust y SQLite cifrada que mantiene la operación completa en el local. La sincronización es opcional y transaccional, no un requisito para vender, cobrar o registrar el ingreso de un socio.',
      en: 'We designed a desktop core with Tauri, Rust and encrypted SQLite that keeps the full operation on site. Sync is optional and transactional, not a requirement to sell, charge or check a member in.',
    },
    capabilities: {
      es: [
        'Punto de venta, caja y arqueo con diferencias auditadas.',
        'Socios, membresías, cargos y cobros.',
        'Control de accesos y asistencia con credenciales por socio.',
        'Inventario, compras y valoración por costo promedio.',
        'Clases, reservas, CRM y reportes operativos.',
        'Auditoría inmutable con verificación de integridad.',
      ],
      en: [
        'Point of sale, cash and shift close with audited differences.',
        'Members, memberships, charges and payments.',
        'Access control and attendance with per-member credentials.',
        'Inventory, purchases and average-cost valuation.',
        'Classes, bookings, CRM and operational reports.',
        'Immutable audit with integrity verification.',
      ],
    },
    stack: {
      es: ['Tauri', 'Rust', 'React', 'SQLite cifrada'],
      en: ['Tauri', 'Rust', 'React', 'Encrypted SQLite'],
    },
    facts: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        value: { es: 'Fitness', en: 'Fitness' },
      },
      {
        label: { es: 'Modelo', en: 'Model' },
        value: { es: 'Local-first', en: 'Local-first' },
      },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'Operativo', en: 'Operational' },
      },
    ],
  },
  {
    slug: 'health-psychology',
    name: 'Health Psychology',
    domain: 'domotics',
    featured: true,
    visual: 'grid',
    tagline: {
      es: 'Gestión clínica modular, con la privacidad como punto de partida.',
      en: 'Modular clinical management with privacy as the starting point.',
    },
    summary: {
      es: 'Pacientes, agenda, historias clínicas y planes de tratamiento en una plataforma multi-tenant pensada para consultorios que necesitan orden sin exponer información sensible.',
      en: 'Patients, scheduling, clinical records and treatment plans in a multi-tenant platform built for practices that need order without exposing sensitive information.',
    },
    challenge: {
      es: 'Los equipos clínicos equilibran agenda, documentación y seguimiento en herramientas dispersas. Cada dato sensible adicional multiplica el riesgo y la carga administrativa.',
      en: 'Clinical teams balance scheduling, documentation and follow-up across scattered tools. Every additional piece of sensitive data multiplies risk and administrative load.',
    },
    approach: {
      es: 'Separamos la interfaz de las reglas clínicas y concentramos autorización, persistencia y auditoría en una API con aislamiento por organización. La web se ocupa de la experiencia; el dominio clínico queda protegido y trazable.',
      en: 'We separate the interface from clinical rules and concentrate authorization, persistence and audit in an API with per-organization isolation. The web handles the experience; the clinical domain stays protected and traceable.',
    },
    capabilities: {
      es: [
        'Pacientes, agenda y seguimiento de sesiones.',
        'Historias clínicas y planes de tratamiento.',
        'Archivos y documentos con almacenamiento compatible con S3.',
        'Aislamiento por organización y sesiones seguras.',
        'Auditoría append-only sin contenido clínico.',
      ],
      en: [
        'Patients, scheduling and session follow-up.',
        'Clinical records and treatment plans.',
        'Files and documents with S3-compatible storage.',
        'Per-organization isolation and secure sessions.',
        'Append-only audit without clinical content.',
      ],
    },
    stack: {
      es: ['Next.js', 'NestJS', 'PostgreSQL', 'S3'],
      en: ['Next.js', 'NestJS', 'PostgreSQL', 'S3'],
    },
    facts: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        value: { es: 'Salud', en: 'Health' },
      },
      {
        label: { es: 'Modelo', en: 'Model' },
        value: { es: 'Multi-tenant', en: 'Multi-tenant' },
      },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'MVP clínico', en: 'Clinical MVP' },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByDomain(domain: Project['domain']): Project[] {
  return projects.filter((project) => project.domain === domain);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const nextIndex = index === -1 ? 0 : (index + 1) % projects.length;
  return projects[nextIndex];
}
