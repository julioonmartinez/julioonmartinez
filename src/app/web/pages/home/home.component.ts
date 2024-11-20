import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    { 
      title: 'Machine Learning Customer Segmentation', 
      description: 'Implementé clustering avanzado usando Python y scikit-learn',
      technologies: ['Python', 'scikit-learn', 'Pandas']
    },
    { 
      title: 'Dashboard de Analytics en Power BI', 
      description: 'Visualización interactiva de métricas de negocio',
      technologies: ['Power BI', 'DAX', 'Excel']
    }
  ];

  articles = [
    { 
      title: 'Introducción a Machine Learning', 
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem', 
      technologies: ['Tableu', 'Scrip', 'Excel', 'Pandas'],
    },
    { 
      title: 'Visualización de Datos con Tableau',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem', 
      technologies: ['Tableu', 'Scrip', 'Excel', 'Pandas'], 
    }
  ];

  skills = [
    { name: 'TypeScript', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Python', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Angular 18', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Flutter', level: 'Intermedio', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Pandas', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Tableau', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] },
    { name: 'Power BI', level: 'Avanzado', linksProjects:[{name: 'app', link:''}, {name: 'app', link:''}, {name: 'menu-app', link:''}, {name: 'code', link:''},] }
  ];

  scrollToSection(section:string): void {
    const element = document.getElementById(section);
   if(element){
    element.scrollIntoView({ behavior: 'smooth' });
   }else{
    console.log('noExist')
   }
  }

}
