import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

import { FormsModule } from '@angular/forms';
import { FoxyAboutComponent } from './foxy-about/foxy-about.component';
import { FoxyBeersComponent } from './foxy-beers/foxy-beers.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { FoxyHomeinfoComponent } from './foxy-homeinfo/foxy-homeinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    FoxyAboutComponent,
    FoxyBeersComponent,
    CartComponent,
    InputIntegerComponent,
    WineListComponent,
    FoxyHomeinfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
