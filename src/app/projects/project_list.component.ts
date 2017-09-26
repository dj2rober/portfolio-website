import {Component} from '@angular/core';
import {ProjectsService} from './projects.service';
import {Project} from './project.model';

@Component({
	selector: 'project-list',
	templateUrl: 'app/projects/project_list.component.html',
	styleUrls: ['app/projects/project_list.component.css']
})

export class ProjectListComponent{
	projects:Project[] = new Array<Project>();
 
   constructor(private _ProjectsService : ProjectsService)
    {
    	this._ProjectsService.getCards()
            .subscribe(
            (res) => {
                this.projects = (Object.keys(res).map((key) => {return res[key]}))[0];
            },
            (error) => console.log("error : " + error)
        );
    
    }
}
