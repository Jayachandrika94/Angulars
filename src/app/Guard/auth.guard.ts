import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ServiceService } from '../Services/service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 constructor(private ser:ServiceService){}
 canActivate(){
    
    if(this.ser.match())
    {
      window.alert("you have login sucessfully") 
      return true;
    }
    else{
      window.alert("you have to match the login and password")
      return false;
    }
  }
  
}
