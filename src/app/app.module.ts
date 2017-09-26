import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';

import { NavComponent }  from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about/about.service';
import { CourseListComponent } from './courses/course_list.component';
import { ProjectListComponent } from './projects/project_list.component'; 
import { ResumeComponent } from './resume/resume.component';
import { routing } from './app.routes';


@NgModule({
  imports:      [ BrowserModule,
  					routing,
  					HttpModule ],
  declarations: [ NavComponent,
  					HomeComponent,
  					AboutComponent,
  					CourseListComponent,
  					ProjectListComponent,
  					ResumeComponent ],
  providers: 	[ AboutService ],
  bootstrap:    [ NavComponent ]
})
export class AppModule { }
