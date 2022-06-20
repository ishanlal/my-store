import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 1,
      description: ''
    }
  }

  ngOnInit(): void {
  }

  upvote(product: Product): Product
  {
    if((Number(product.quantity)+1) > 10){
      product.quantity = 10;
    }
    else{
      product.quantity = Number(product.quantity)+1;
    }
    this.addToCart.emit(product);
    return product;
  }

  downvote(product: Product): Product{
    if((Number(product.quantity)-1) < 0){
      product.quantity = 0;
    }
    else{
      product.quantity = Number(product.quantity)-1;
    }
      this.addToCart.emit(product);
      return product;
    }
}
