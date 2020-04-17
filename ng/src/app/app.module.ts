import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseService } from './services/courses.service';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { routes } from './routes';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { UserService } from './services/user.service'
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    CourseFormComponent,
    CourseDetailsComponent,
    UserRegisterComponent,
    UserSigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [CourseService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
