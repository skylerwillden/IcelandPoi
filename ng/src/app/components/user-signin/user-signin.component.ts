import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {
  user : User = new User()

  constructor(private userService :  UserService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitForm(f :  NgForm){
    if(f.valid){
        this.userService.signin(this.user).subscribe(
          res  => {
            this.toastr.success("Successfully signed in")
            this.router.navigate(["/courses"])
          },
          err =>  {
            this.toastr.error("Unable to sign in")
          }
        )
    }
  }

}
