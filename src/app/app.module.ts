import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ADiscoverComponent } from "../app/a-discover/a-discover.component";

const config = {
  apiKey: "AIzaSyA31NrloaJekNk8IwYagPSwqapJL89Q1aM",
  authDomain: "project1972-eeb92.firebaseapp.com",
  databaseURL: "https://project1972-eeb92.firebaseio.com",
  projectId: "project1972-eeb92",
  storageBucket: "project1972-eeb92.appspot.com",
  messagingSenderId: "256631172200",
  appId: "1:256631172200:web:41e70d58820480c54c1fdd"
};

 
@NgModule({
  
  imports: [
    provideFirebaseApp(() => initializeApp(config)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ADiscoverComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
