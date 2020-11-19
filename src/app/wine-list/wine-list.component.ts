import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Wine } from './Wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [
    {
      name : "Altos Las Hormigas",
      type : "Malbec",
      year : 2014,
      price : 240,
      stock : 0,
      image : "assets/img/altos.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Ciclos Viognier",
      type : "Blanco Dulce",
      year : 2009,
      price : 2500,
      stock : 4,
      image : "assets/img/ciclos.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Ruca Malen",
      type : "Chardonnay",
      year : 2010,
      price : 2700,
      stock : 10,
      image : "assets/img/ruca.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Zuccardi Aluvional",
      type : "Malbec",
      year :  2016,
      price : 1200,
      stock : 15,
      image : "assets/img/zucar.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Bramare Marchiori",
      type : "Malbec",
      year :  2016,
      price : 1990,
      stock : 8,
      image : "assets/img/bramare.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Mendel Cabernet",
      type : "Sauvignon",
      year :  2018,
      price : 1120,
      stock : 10,
      image : "assets/img/mendel.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Finca La Anita",
      type : "Sauvignon",
      year :  2019,
      price : 250,
      stock : 10,
      image : "assets/img/anita.jpg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Vuelá",
      type : "Sauvignon Blanc",
      year : 2010,
      price : 4200,
      stock : 25,
      image : "assets/img/alta.jpeg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Septima",
      type : "Sauvignon Blanc",
      year :  2009,
      price : 5200,
      stock : 10,
      image : "assets/img/septima.jpeg",
      clearance : false,
      quantity: 0,
    },
    {
      name : "Cadus Single",
      type : "Malbec",
      year :  2017,
      price : 2000,
      stock : 20,
      image : "assets/img/cadus.jpg",
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
