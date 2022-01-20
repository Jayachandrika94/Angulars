import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.email]),
    upass:new FormControl("",[Validators.required])

  })
  value: boolean;

  get uemail(){
    return this.loginForm.get('uemail')
  }

  get upass(){
    return this.loginForm.get('upass')
  }

  login(){
    console.log(this.loginForm.value)
    let a =this.loginForm.value.uemail;
    let b=this.loginForm.value.upass;
    localStorage.setItem("uemail",a)
    localStorage.setItem("upass",b)
    // localStorage.setItem("uemail",JSON.stringify(this.uemail))
    // JSON.parse(localStorage.getItem('uemail'))
    // localStorage.setItem("upass",JSON.stringify(this.upass))
    // JSON.parse(localStorage.getItem('upass'))

    if(this.Ser.match())
    {
      this.rout.navigate(["UserDashboard"])
      return true;
    }
    else{
      alert("invalid user name")
      return false;
    }
  }


  constructor(private Ser:ServiceService,private rout:Router) { }
  //constructor(){}
  ngOnInit(): void {
    this.value==this.Ser.match()
  }

}
