import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADiscoverComponent } from "../app/a-discover/a-discover.component";
import { AppComponent } from "../app/app.component";

const routes: Routes = [
  {
    path:'',  redirectTo: '/', pathMatch: 'full' 
  },
  {
    path:'adiscover', component:ADiscoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
