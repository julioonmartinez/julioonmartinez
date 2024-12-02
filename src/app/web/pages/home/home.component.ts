import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../shared/interfaces/project';
import { PROJECTS } from '../../../shared/enums/projects.enum';
import { Skill } from '../../../shared/interfaces/skill';
import { SKILLS } from '../../../shared/enums/skills.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects:Project[] = PROJECTS.filter(pro=> pro.type == 'project');
  dataviz:Project[] = PROJECTS.filter(pro=> pro.type == 'dataViz');


  skills:Skill[] = SKILLS;
  
  
  scrollToSection(section:string): void {
    const element = document.getElementById(section);
   if(element){
    element.scrollIntoView({ behavior: 'smooth' });
   }else{
   
   }
  }

}
