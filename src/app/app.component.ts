import { Component } from '@angular/core';
import { Firestore, collectionData, collection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


interface users {
  name: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})

export class AppComponent {
  title = 'WeWeSoft';
  item$: any;
  auth = getAuth();

  constructor(private firestore: Firestore ) {
     
     
  };

  dd(){
    const collections: any = collection(this.firestore, 'users');
    this.item$ = collectionData(collections);
  }
  signInUser(){
   signInWithEmailAndPassword(this.auth,"steflucrene@yahoo.fr","cerise").then(
         ((userCredential) =>{
          const user = userCredential.user.email;
          console.log(user);
         } )  
      
    ).catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    });

  }
 
  signOut(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
      console.log("DECONNEXION")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
 
}
