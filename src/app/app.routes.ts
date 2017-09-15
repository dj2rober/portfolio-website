import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseListComponent } from './courses/course_list.component';
import { ProjectListComponent } from './projects/project_list.component'; 
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'course-list', component: CourseListComponent},
	{path: 'project-list', component: ProjectListComponent},
	{path: 'resume', component: ResumeComponent}
];

export const routing = RouterModule.forRoot(routes);