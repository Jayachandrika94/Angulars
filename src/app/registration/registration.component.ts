import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm =new FormGroup({
    user:new FormControl("",[Validators.required,Validators.email]),
    pass:new FormControl("",[Validators.required],)

  })
  get user(){
    return this.loginForm.get('user')
  }

  get pass(){
   return this.loginForm.get('pass')
  }

  login(){
    console.log(this.loginForm.value);
    let a=this.loginForm.value.user;
    let b=this.loginForm.value.pass;
    localStorage.setItem("user",a);
    localStorage.setItem("pass",b);
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
