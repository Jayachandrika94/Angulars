import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

// isLogin(){
//   return true;
// }
match()
 {
  
  let a=localStorage.getItem('uemail')
  let b=localStorage.getItem('upass')
  let c=localStorage.getItem('user')
  let d =localStorage.getItem('pass')
  if(a===c && b===d)
 {
   return true;
 }
 else{
   return false;
 }
 
 }
 


}
