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
  id: 'ai-job-market-analysis',
  title: "AI's Impact on the Job Market (2024–2030)",
  description: 'A #MakeoverMonday project focused on visualization and ethical storytelling using a synthetic dataset of future jobs.',
  summary: "I analyzed a synthetic dataset of 30,000 jobs to explore how AI will transform the labor market between 2024 and 2030. This project focused on ethical storytelling: the data may be synthetic, but the insights are real. I visualized the extremes (+8945% for AI Trainers, -99% for Psychologists), the '1% balance' (50.5% vs 49.5%), and debunked the myth that high salaries protect against automation risk (showing a 0.01 correlation). Tools: Python, Pandas, Seaborn, Jupyter, GitHub.",
  skills: ['Python', 'Pandas', 'Data Visualization', 'Seaborn', 'Jupyter Notebook', 'Data Storytelling', '#MakeoverMonday'],
  image: '/images/ai_job.webp',
  kpi: '3 Key Visualizations + Ethical README',
  github: 'https://github.com/julioonmartinez/AI-Job-Market-MakeoverMonday',
  // demo: 'https://github.com/julioonmartinez/AI-Job-Market-MakeoverMonday'
},
  {
  id: 'DataPost',
  title: 'DataPost: Rapid, Interactive Dashboards',
  description: 'A web app for building and sharing BI dashboards quickly and easily on any device.',
  summary: 'A data web app built to easily create, share, and view dashboards and analysis on any device. The workflow is simple: just upload a dataset, generate visualizations, and add them to your interactive dashboard.',
  skills: ['Astro', 'DAX', 'Advanced Excel', 'Power BI', 'Change Management', 'User Training'],
  image: '/images/project-data-post.webp',
  kpi: 'Dashboards in 2 Minutes',
  demo: 'https://datapost70.vercel.app/'
}
 

];
