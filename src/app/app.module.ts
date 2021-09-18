import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
