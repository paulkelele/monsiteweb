import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  item$: Observable<users[]>;

  constructor(firestore: Firestore) {
    const collections: any = collection(firestore, 'users');
    this.item$ = collectionData(collections);
  }
}
