import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;
  full_name: string = '';
  st_addr: string = '';
  cc_num: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  clearCartItems(): void {
    console.log('clear cart called!');
    this.cartService.clearCartItems();
    this.total = this.cartService.getTotal();
    this.cartItems = [];
  }

  addToCart(item: Product): void{
    this.cartService.addToCartItems(item);
    this.total = this.cartService.getTotal();
  }
}
