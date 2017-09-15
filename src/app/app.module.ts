import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent }  from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseListComponent } from './courses/course_list.component';
import { ProjectListComponent } from './projects/project_list.component'; 
import { ResumeComponent } from './resume/resume.component';
import { routing } from './app.routes';


@NgModule({
  imports:      [ BrowserModule,
  					routing ],
  declarations: [ NavComponent,
  					HomeComponent,
  					AboutComponent,
  					CourseListComponent,
  					ProjectListComponent,
  					ResumeComponent ],
  bootstrap:    [ NavComponent ]
})
export class AppModule { }
