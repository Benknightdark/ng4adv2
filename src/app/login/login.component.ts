import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";
import { PreventFormComponent } from "app/shared/preventmodel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements PreventFormComponent {
constructor(private LoginService: LoginService, private fb: FormBuilder,private router: Router) { }
  // tslint:disable-next-line:member-ordering
  LoginForm: FormGroup;
  isLoginSucess:boolean;
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('token')) ) {
         this.router.navigate(['/']);
    }
    this.LoginForm = this.fb.group({
      Username: ['', Validators.compose([Validators.required])],
      Password: ['', Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    console.log(this.LoginForm.value)

    this.LoginService.Login(this.LoginForm.value).subscribe(r => {
      console.log(r)
      if (r === true) {
        this.isLoginSucess=r;
         this.router.navigate(['/']);
      }else {
        confirm('帳密錯誤')
      }
    });

  }
  hasUnsavedChanges() {
        if (this.LoginForm.dirty &&!this.isLoginSucess )//!this.form.value.title&&!this.form.value.body
            return true;
    }

}
