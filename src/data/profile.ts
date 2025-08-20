export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
  resume: string;
  social: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
  skills: {
    technical: string[];
    tools: string[];
    soft: string[];
  };
  stats: {
    projects: number;
    experience: number;
    skills: number;
    certifications: number;
  };
  experience: Experience[];
}

export const profile: Profile = {
  name: 'Julio Martínez',
  role: 'Administrador de Empresas',
  tagline: 'Optimizando procesos y liderando equipos hacia la excelencia operativa',
  bio: '+5 años de experiencia. Administrador de Empresas especializado en gestión operativa, optimización de procesos y análisis de datos. Apasionado por la eficiencia y la mejora continua.',
  email: 'juliomo89@outlook.com',
  location: 'Zamora, Michoacán, México',
  avatar: '/images/avatar.jpg',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/julio-cesar-martinez-ortega-515690319/',
    github: 'https://github.com/julioonmartinez',
    twitter: 'https://x.com/Julioonmartinez'
  },
  skills: {
    technical: [
      'Gestión Operativa',
      'Control Administrativo',
      'Auditorías Internas',
      'Análisis de Datos',
      'Reportes Estratégicos',
      'Optimización de Procesos',
      'Gestión de Calidad',
      'Planificación Estratégica'
    ],
    tools: [
      'Excel Avanzado',
      'Power BI',
      'Tableau',
      'Python',
      'SAP',
      'Microsoft Office Suite',
      'ERP Systems',
      'Business Intelligence'
    ],
    soft: [
      'Liderazgo de Equipos',
      'Comunicación Efectiva',
      'Resolución de Problemas',
      'Pensamiento Analítico',
      'Orientación a Resultados',
      'Gestión del Cambio',
      'Negociación',
      'Trabajo en Equipo'
    ]
  },
  stats: {
    projects: 4,
    experience: 10,
    skills: 28,
    certifications: 6
  },
  experience: [
    {
      id: 'goldberry',
      company: 'Distribuidora Goldberry',
      position: 'Jefe Administrativo',
      location: 'Zamora, Michoacán',
      startDate: 'Enero 2019',
      endDate: 'Enero 2025',
      description: [
        'Diseñé e implementé controles administrativos para la gestión de productos perecederos, reduciendo pérdidas.',
        'Organicé y optimicé actividades diarias del personal operativo, mejorando la eficiencia general.',
        'Lideré el equipo de recepción y logística, mejorando el flujo de mercancías y reduciendo retrasos.',
        'Desarrollé reportes agrícolas mediante herramientas de visualización para el seguimiento de objetivos estratégicos.'
      ]
    },
    {
      id: 'bat-jefe',
      company: 'British American Tobacco México',
      position: 'Jefe Operativo',
      location: 'Zamora, Michoacán',
      startDate: 'Febrero 2017',
      endDate: 'Enero 2019',
      description: [
        'Supervisé procesos operativos y administrativos, asegurando cumplimiento de políticas internas.',
        'Realicé auditorías preventivas, logrando la menor tasa de abusos de confianza en la región.',
        'Coordiné respuestas a solicitudes del corporativo y gestioné acciones correctivas.'
      ]
    },
    {
      id: 'bat-analista',
      company: 'British American Tobacco México',
      position: 'Analista Operativo',
      location: 'Guadalajara, Jalisco',
      startDate: 'Sep 2016',
      endDate: 'Febrero 2017',
      description: [
        'Ejecuté auditorías a equipos de ventas y distribuidores para validar cumplimiento de lineamientos.',
        'Gestión de operaciones logísticas en centros de distribución (CEDIS).'
      ]
    }
  ]
};
