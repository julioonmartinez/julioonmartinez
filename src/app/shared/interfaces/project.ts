export interface Project {
    id?:string,
    type: 'project' | 'dataViz',
    title: string;
    description:string,
    technologies:string[], 
    content: string; 
    createdAt: Date;
    user:string, 
    updatedAt?: Date;
    urlImage:string,
    linksGit?:string,
    linkWeb?:string,
    
}
