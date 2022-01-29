//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
