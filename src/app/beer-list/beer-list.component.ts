import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
  {
    name : "Bitter Call Saul",
    type : "IPA",
    price : 180,
    stock : 5,
    image : "assets/img/ipa.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Red red Wine",
    type : "Barley Wine",
    price : 200,
    stock : 4,
    image : "assets/img/barleyWine.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Yellow Submarine",
    type : "Golden Ale",
    price : 200,
    stock : 0,
    image : "assets/img/goldenale.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Yellow Branch",
    type : "Golden Ale",
    price : 200,
    stock : 0,
    image : "assets/img/goldenale2.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Mrs Jackson",
    type : "Lager",
    price : 190,
    stock : 8,
    image : "assets/img/lager.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Macarena",
    type : "Dark Ales",
    price : 220,
    stock : 10,
    image : "assets/img/darkales.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Donald Secret",
    type : "Stout",
    price : 250,
    stock : 0,
    image : "assets/img/stout.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Queen",
    type : "Golden Ale",
    price : 200,
    stock : 25,
    image : "assets/img/goldenale3.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "50 Shades",
    type : "Dark Ales",
    price : 200,
    stock : 0,
    image : "assets/img/darkales2.jpg",
    clearance : false,
    quantity: 0,
  },
  {
    name : "Mr Postman",
    type : "Barley Wine",
    price : 200,
    stock : 20,
    image : "assets/img/barleyWine2.jpg",
    clearance : false,
    quantity: 0,
  },
  
];
  
  constructor(private cart: BeerCartService) { 
  }

  ngOnInit(): void {
  }
  
  addToCart (beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
    
  }

}
