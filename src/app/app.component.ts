import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})

export class AppComponent {
  title = 'WeWeSoft';
 
  auth = getAuth();

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private route:Router ) {
     
     
  };

  
 
  signInUser(){
   signInWithEmailAndPassword(this.auth,this.loginForm.get("email")?.value,this.loginForm.get("password")?.value).then(
         ((userCredential) =>{
          const user = userCredential.user.email;
          console.log(user);
          this.route.navigate(['/adiscover']);
         } )  
      
    ).catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    });

  }

 
}
