import { Routes } from '@angular/router'
import { CourseListComponent } from './components/course-list/course-list.component'
import { CourseFormComponent } from './components/course-form/course-form.component'
import { CourseDetailsComponent } from './components/course-details/course-details.component'
import { UserSigninComponent } from './components/user-signin/user-signin.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'
import { AuthGuard } from './services/auth.guard'

export const routes : Routes = [
{path: 'courses', component: CourseListComponent},
{path: 'courses/new', component: CourseFormComponent, canActivate : [AuthGuard]},
{path: 'courses/:id/edit', component: CourseFormComponent, canActivate : [AuthGuard]},
{path: 'courses/:id', component: CourseDetailsComponent},
{path: 'register', component: UserRegisterComponent},
{path: 'signin', component: UserSigninComponent},
{path: "", redirectTo: "courses", pathMatch: "full"}
]