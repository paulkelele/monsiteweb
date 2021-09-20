import { Component } from '@angular/core';
 
import { FormControl, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app"; 

const config = {
  apiKey: "AIzaSyA31NrloaJekNk8IwYagPSwqapJL89Q1aM",
  authDomain: "project1972-eeb92.firebaseapp.com",
  databaseURL: "https://project1972-eeb92.firebaseio.com",
  projectId: "project1972-eeb92",
  storageBucket: "project1972-eeb92.appspot.com",
  messagingSenderId: "256631172200",
  appId: "1:256631172200:web:41e70d58820480c54c1fdd"
};
initializeApp(config);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})

export class AppComponent {
  title = 'WeWeSoft';
 // initialize firebase app

  auth = getAuth();

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private route:Router ) {
  };

  isHomeRoute() {
    return this.route.url === '/';
  }
 
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
