import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quant!: number;
  id!: number;
  products: Product[] = [];

  @Input() product: Product;

  constructor(private cartService: CartService, private route: ActivatedRoute, private productService: ProductService) {
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
    // get product id from params
    this.route.queryParams.subscribe(params => {
    this.id = params['id'];
  });
  console.log('ID: ', this.id);
  // get all products
  this.productService.getProducts().subscribe(res => {
    for(let index = 0; index<res.length ;index++){
      const product = res[index];
      product["quantity"] = 1;
    }
    this.products = res;
    this.products = this.products.filter(prod => {return prod.id == this.id});
    this.product = this.products[0];
  });
  }

  submitForm(): void {
    this.product.quantity = this.quant;
    this.cartService.addToCartItems(this.product);
  }
}
