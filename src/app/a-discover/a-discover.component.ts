import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection} from '@angular/fire/firestore';
import {  getAuth, signOut } from "firebase/auth";

interface users {
  name: string
};

@Component({
  selector: 'app-a-discover',
  templateUrl: './a-discover.component.html',
  styleUrls: ['./a-discover.component.scss']
})
export class ADiscoverComponent implements OnInit {
  
  item$: any;
  auth = getAuth();

  constructor(private firestore: Firestore, private route:Router) { }

  ngOnInit(): void {
  }
  dd(){
    const collections: any = collection(this.firestore, 'users');
    this.item$ = collectionData(collections);
  }
  signOut(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.route.navigate(['']);
      console.log("DECONNEXION")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
}
