import { Component } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../../../shared/enums/projects.enum';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  project:Project | undefined = undefined;

  constructor(
    private activatedRoute : ActivatedRoute
  ){

   this.activatedRoute.paramMap.subscribe(params=>{
    const id = params.get('id');

    if(id){
      const projectRef = PROJECTS.find(pro=> pro.id == id)

      if(projectRef){
        this.project = projectRef
      }    
    }
   })
  }


}
