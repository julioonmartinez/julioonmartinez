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
  }
};
