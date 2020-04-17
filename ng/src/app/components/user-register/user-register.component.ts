import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegister : FormGroup

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      _id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/.+@.+\..+/)]],
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

    submitForm(f :  NgForm){
      if(f.valid){
        const user : User = Object.assign({}, this.userRegister.value)
          this.userService.register(user).subscribe(
            res  => {
              this.toastr.success("Successfully registered")
              this.router.navigate(["/courses"])
            },
            err =>  {
              this.toastr.error("Unable to register")
            }
          )
      }
    }
  
    get firstName() { return this.userRegister.get('firstName')}
    get lastName()  { return this.userRegister.get('lastName')}
    get email()     { return this.userRegister.get('email')}
    get username()  { return this.userRegister.get('username')}
    get password()  { return this.userRegister.get('password')}

}
