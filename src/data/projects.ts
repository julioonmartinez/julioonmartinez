export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  skills: string[];
  image: string;
  kpi: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'processoptimization',
    title: 'Optimización de Procesos Corporativos',
    description: 'Rediseño integral de procesos administrativos que redujo tiempos operativos en 35%',
    summary: 'Lideré la optimización de procesos administrativos en una empresa de 200+ empleados, implementando metodologías Lean Six Sigma. Realicé mapeo de procesos, identificación de cuellos de botella y diseño de nuevos flujos de trabajo. El proyecto incluyó capacitación de equipos y seguimiento de KPIs.',
    skills: ['Lean Six Sigma', 'Mapeo de Procesos', 'Excel Avanzado', 'Power BI', 'Gestión del Cambio', 'Capacitación'],
    image: '/images/project-1.jpg',
    kpi: '35% reducción de tiempos',
    github: 'https://github.com/username/processoptimization',
    demo: 'https://processopt-demo.vercel.app'
  },
  {
    id: 'auditcontrol',
    title: 'Sistema de Control y Auditoría Interna',
    description: 'Implementación de sistema de auditoría interna que mejoró el cumplimiento en 90%',
    summary: 'Desarrollé e implementé un sistema integral de auditoría interna que incluye matrices de riesgo, procedimientos de control y reportes automatizados. Coordiné auditorías trimestrales, establecí indicadores de cumplimiento y creé dashboards ejecutivos para el seguimiento en tiempo real.',
    skills: ['Auditoría Interna', 'Gestión de Riesgos', 'Tableau', 'SQL', 'Compliance', 'Reporting'],
    image: '/images/project-2.jpg',
    kpi: '90% cumplimiento',
    github: 'https://github.com/username/auditcontrol',
    demo: 'https://auditcontrol-demo.vercel.app'
  },
  {
    id: 'teamleadership',
    title: 'Programa de Liderazgo y Desarrollo',
    description: 'Programa de desarrollo de liderazgo que aumentó la productividad del equipo en 28%',
    summary: 'Diseñé e implementé un programa integral de desarrollo de liderazgo para mandos medios. Incluye evaluaciones 360°, planes de desarrollo individual, mentoring y seguimiento de KPIs de desempeño. El programa mejoró significativamente el clima laboral y la retención de talento.',
    skills: ['Liderazgo', 'Gestión de Talento', 'Coaching', 'Evaluación 360°', 'KPIs', 'Desarrollo Organizacional'],
    image: '/images/project-3.jpg',
    kpi: '28% mejora productividad',
    github: 'https://github.com/username/teamleadership',
    demo: 'https://teamleadership-demo.vercel.app'
  },
  {
    id: 'bidashboard',
    title: 'Dashboard Ejecutivo de Business Intelligence',
    description: 'Plataforma de BI que centraliza KPIs críticos para la toma de decisiones estratégicas',
    summary: 'Creé una plataforma integral de Business Intelligence que integra datos de múltiples fuentes (ERP, CRM, RRHH) en dashboards ejecutivos interactivos. La solución incluye análisis predictivo, alertas automáticas y reportes personalizados que apoyan la toma de decisiones estratégicas.',
    skills: ['Power BI', 'Tableau', 'SQL', 'Python', 'ETL', 'Data Analysis', 'Strategic Planning'],
    image: '/images/project-4.jpg',
    kpi: '50% mejora en decisiones',
    github: 'https://github.com/username/bidashboard',
    demo: 'https://bidashboard-demo.vercel.app'
  }
];
