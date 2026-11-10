import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'smart-house',
    name: 'Smart House',
    domain: 'domotics',
    featured: true,
    visual: 'orbits',
    tagline: {
      es: 'Monitorea tu casa inteligente.',
      en: 'IoT device monitoring and control with verifiable evidence.',
    },
    summary: {
      es: 'Plataforma para operar flotas de dispositivos de tu hogar: telemetría en tiempo real, comandos auditables y alertas que llegan antes de que el problema escale.',
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
    tutorials: [
      {
        title: {
          es: 'Instalación y configuración inicial',
          en: 'Installation and initial setup',
        },
        description: {
          es: 'Pasos para poner en marcha tu casa inteligente en minutos.',
          en: 'Steps to get your smart home running in minutes.',
        },
        steps: {
          es: [
            'Descarga la app Smart House desde la tienda oficial.',
            'Crea tu organización y define el nombre de tu hogar.',
            'Añade dispositivos escaneando el código QR o ingresando el ID manualmente.',
            'Configura credenciales MQTT (broker, puerto, usuario/contraseña).',
            'Verifica la conexión: cada dispositivo debe mostrar "En línea".',
            'Crea tus primeras automatizaciones: luces, clima, seguridad.',
          ],
          en: [
            'Download the Smart House app from the official store.',
            'Create your organization and name your home.',
            'Add devices by scanning the QR code or entering the ID manually.',
            'Configure MQTT credentials (broker, port, user/password).',
            'Verify connection: each device should show "Online".',
            'Create your first automations: lights, climate, security.',
          ],
        },
      },
      {
        title: {
          es: 'Creación de reglas y automatizaciones',
          en: 'Creating rules and automations',
        },
        description: {
          es: 'Aprende a configurar escenas, horarios y desencadenantes.',
          en: 'Learn to set up scenes, schedules, and triggers.',
        },
        steps: {
          es: [
            'Ve a "Automatizaciones" y pulsa "Nueva regla".',
            'Elige el desencadenante: hora, sensor, geolocalización o comando de voz.',
            'Define las acciones: encender/apagar, ajustar temperatura, notificar.',
            'Añade condiciones opcionales (solo si hay gente en casa, solo de noche, etc.).',
            'Guarda y prueba la regla con el botón "Ejecutar ahora".',
            'Revisa el historial de ejecuciones para depurar.',
          ],
          en: [
            'Go to "Automations" and click "New rule".',
            'Choose the trigger: time, sensor, geolocation, or voice command.',
            'Define actions: turn on/off, adjust temperature, notify.',
            'Add optional conditions (only if someone is home, only at night, etc.).',
            'Save and test the rule with the "Run now" button.',
            'Review execution history to debug.',
          ],
        },
      },
    ],
    price: 49900,
    currency: 'MXN',
  },
  {
    slug: 'fitness-gym',
    name: 'Fitness Center',
    domain: 'domotics',
    featured: true,
    visual: 'waves',
    tagline: {
      es: 'Todo lo que tu gimnasio, estudio o centro de entrenamiento necesita.',
      en: "Your gym's operating system, working even without internet.",
    },
    summary: {
      es: 'Ventas, caja, inventario, socios, membresías, clases y auditoría en una aplicación. Tus datos quedan cifrados en tu equipo y la operación no se detiene cuando cae la conexión.',
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
    tutorials: [
      {
        title: {
          es: 'Instalación y primer arranque',
          en: 'Installation and first run',
        },
        description: {
          es: 'Configura tu gimnasio en local sin necesidad de internet.',
          en: 'Set up your gym locally without internet required.',
        },
        steps: {
          es: [
            'Descarga el instalador para tu sistema (Windows/macOS/Linux).',
            'Ejecuta el instalador y elige la carpeta de datos (recomendado: disco local).',
            'Al abrir la app, crea tu organización: nombre del gimnasio, logo, moneda.',
            'Configura la caja: tipos de pago, impresora de tickets, arqueo diario.',
            'Importa socios desde CSV o añádelos uno a uno con foto y huella.',
            'Define membresías: precios, duración, accesos, renovación automática.',
            'Prueba el check-in: escanea carnet o huella y verifica el acceso.',
          ],
          en: [
            'Download the installer for your OS (Windows/macOS/Linux).',
            'Run the installer and choose the data folder (local disk recommended).',
            'On first launch, create your organization: gym name, logo, currency.',
            'Set up the POS: payment types, ticket printer, daily cash-out.',
            'Import members from CSV or add them one by one with photo and fingerprint.',
            'Define memberships: price, duration, access rights, auto-renewal.',
            'Test check-in: scan card or fingerprint and verify access.',
          ],
        },
      },
      {
        title: {
          es: 'Gestión de clases y reservas',
          en: 'Class and booking management',
        },
        description: {
          es: 'Organiza horarios, cupos y lista de espera automática.',
          en: 'Organize schedules, capacity, and automatic waitlists.',
        },
        steps: {
          es: [
            'Ve a "Clases" > "Nueva clase" y define nombre, instructor, sala, capacidad.',
            'Establece recurrencia: semanal, quincenal, mensual o fechas sueltas.',
            'Activa "Lista de espera" para que los socios se apunten si está lleno.',
            'Configura recordatorios: 24h y 1h antes por email/push.',
            'Desde la app del socio, pueden reservar, cancelar (con política) y ver historial.',
            'El instructor marca asistencia en tablet; se genera reporte automático.',
          ],
          en: [
            'Go to "Classes" > "New class" and set name, instructor, room, capacity.',
            'Set recurrence: weekly, biweekly, monthly, or one-off dates.',
            'Enable "Waitlist" so members join automatically if full.',
            'Configure reminders: 24h and 1h before via email/push.',
            'Members book, cancel (with policy), and view history from their app.',
            'Instructor marks attendance on tablet; automatic report generated.',
          ],
        },
      },
    ],
    price: 79900,
    currency: 'MXN',
  },
  {
    slug: 'health-psychology',
    name: 'Health consultory',
    domain: 'domotics',
    featured: true,
    visual: 'grid',
    tagline: {
      es: 'Gestiona tu clinica de forma sencilla y efectiva.',
      en: 'Modular clinical management with privacy as the starting point.',
    },
    summary: {
      es: 'Pacientes, agenda, historias clínicas y planes de tratamiento en una plataforma pensada para consultorios que necesitan orden sin exponer información sensible.',
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
    tutorials: [
      {
        title: {
          es: 'Configuración de la clínica y agenda',
          en: 'Clinic setup and scheduling',
        },
        description: {
          es: 'Pon en marcha tu consultorio con agenda, profesionales y recursos.',
          en: 'Launch your practice with scheduling, professionals, and resources.',
        },
        steps: {
          es: [
            'Crea la organización: nombre de la clínica, logo, datos fiscales, logo.',
            'Añade profesionales: nombre, especialidad, color de agenda, permisos.',
            'Define recursos: consultorios, salas, equipos (ecógrafo, rayos X, etc.).',
            'Configura horarios de atención por profesional y recurso.',
            'Establece tipos de cita: primera vez, control, urgencia, teleconsulta.',
            'Prueba creando una cita de prueba y verifica notificaciones.',
          ],
          en: [
            'Create the organization: clinic name, logo, tax data, logo.',
            'Add professionals: name, specialty, calendar color, permissions.',
            'Define resources: consulting rooms, rooms, equipment (ultrasound, X-ray, etc.).',
            'Set working hours per professional and resource.',
            'Define appointment types: first visit, follow-up, emergency, teleconsultation.',
            'Test by creating a test appointment and verify notifications.',
          ],
        },
      },
      {
        title: {
          es: 'Historia clínica y planes de tratamiento',
          en: 'Clinical records and treatment plans',
        },
        description: {
          es: 'Documenta la evolución del paciente y define tratamientos estructurados.',
          en: 'Document patient progress and define structured treatment plans.',
        },
        steps: {
          es: [
            'Al abrir la ficha del paciente, ve a "Historia clínica" > "Nueva entrada".',
            'Elige plantilla: anamnesis, exploración, evolución, alta, derivación.',
            'Adjunta archivos: PDF, imágenes, resultados de laboratorio (arrastra y suelta).',
            'Para planes de tratamiento: "Tratamientos" > "Nuevo plan", define fases, frecuencia, duración.',
            'Asigna tareas al paciente: ejercicios, medicación, citas de control.',
            'El paciente ve su plan en el portal; tú haces seguimiento desde el panel.',
          ],
          en: [
            'Open patient record, go to "Clinical Record" > "New entry".',
            'Choose template: anamnesis, examination, progress, discharge, referral.',
            'Attach files: PDF, images, lab results (drag and drop).',
            'For treatment plans: "Treatments" > "New plan", define phases, frequency, duration.',
            'Assign tasks to patient: exercises, medication, follow-up appointments.',
            'Patient views plan in portal; you track progress from dashboard.',
          ],
        },
      },
    ],
    price: 129900,
    currency: 'MXN',
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
