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
  role: 'Data Analyst & BI Specialist', 
  tagline: 'Using Data to Optimize Processes and Drive Operational Excellence',
  bio: '+5 years of experience. Business Administrator specializing in operational management, process optimization, and data analysis. Passionate about efficiency, continuous improvement, and transforming data into business insights.',
  email: 'juliomo89@outlook.com',
  location: 'CDMX, Mexico',
  avatar: '/images/avatar.jpg',
  resume: '/Julio Martinez_Resume_EN.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/julio-cesar-martinez-ortega-515690319/',
    github: 'https://github.com/julioonmartinez',
    twitter: 'https://x.com/Julioonmartinez'
  },
  skills: {
    technical: [
      'Data Analysis',
      'Strategic Reporting',
      'Process Optimization',
      'Operational Management',
      'Internal Audits',
      'Administrative Control',
      'Quality Management',
      'Strategic Planning'
    ],
    tools: [
      'Power BI',
      'Tableau',
      'Python',
      'Advanced Excel',
      'DAX', 
      'SAP',
      'ERP Systems',
      'Microsoft Office Suite',
      'Business Intelligence'
    ],
    soft: [
      'Analytical Thinking',
      'Problem Solving',
      'Effective Communication',
      'Team Leadership',
      'Results-Oriented',
      'Change Management',
      'Negotiation',
      'Teamwork'
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
      position: 'Administrative Coordinator', 
      location: 'Zamora, Michoacán',
      startDate: 'Jan 2019',
      endDate: 'Jan 2025',
      description: [
        'Implemented new controls to reduce losses in perishable goods.',
        'Managed purchase orders and goods reception, ensuring continuous warehouse operations.',
        'Streamlined supplier management and cost tracking processes to improve profitability.',
      ]
    },
    {
      id: 'bat-jefe',
      company: 'British American Tobacco Mexico',
      position: 'Operations Lead',
      location: 'Zamora, Michoacán',
      startDate: 'Feb 2017',
      endDate: 'Jan 2019',
      description: [
        'Supervised operational and administrative processes, using data analysis to ensure compliance with internal policies.',
        'Conducted preventive audits by analyzing sales and operational data, identifying risk patterns to achieve the lowest rate of trust abuses in the region.',
        'Managed corporate requests by providing detailed operational analysis and implementing data-backed corrective actions.'
      ]
    },
    {
      id: 'bat-analyst',
      company: 'British American Tobacco Mexico',
      position: 'Operations Analyst',
      location: 'Guadalajara, Jalisco',
      startDate: 'Sep 2016',
      endDate: 'Feb 2017',
      description: [
        'Executed audits on sales teams and distributors, analyzing performance data and route compliance to validate guidelines.',
        'Analyzed logistical operations within distribution centers (CEDIS) to identify and report on process inefficiencies.'
      ]
    },
    {
      id: 'deloitte-analyst',
      company: 'British American Tobacco Mexico',
      position: 'Operations Analyst',
      location: 'Guadalajara, Jalisco',
      startDate: 'Sep 2016',
      endDate: 'Feb 2017',
      description: [
        'Led internal audits across multiple industries (retail, finance, healthcare), ensuring full compliance with corporate policies and regulations.',
        'Strengthened internal controls and standardized procedures by identifying operational risks and implementing corrective actions across various business environments.'
      ]
    }

  ]
};
