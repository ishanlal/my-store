import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  quant!: number;
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) {
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

  submitForm(): void {
    this.product.quantity = this.quant;
    this.addToCart.emit(this.product);
  }
}
