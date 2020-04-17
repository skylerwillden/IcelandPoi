import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses';
  description = 'An application that shows and organizes a list of courses.';
  constructor(private router: Router, private userService: UserService){}

  get signedIn(){
    return UserService.isAuthenticated()
  }

  get notSignedIn() {
    return !this.signedIn
  }

  signout(){
    this.userService.signout()
    this.router.navigate(["/courses"])
  }
}