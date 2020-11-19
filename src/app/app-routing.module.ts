import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from  '@angular/router';
import { FoxyBeersComponent } from './foxy-beers/foxy-beers.component';
import { FoxyAboutComponent } from './foxy-about/foxy-about.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: FoxyBeersComponent
  },
  {
    path: 'about',
    component: FoxyAboutComponent
  },
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
