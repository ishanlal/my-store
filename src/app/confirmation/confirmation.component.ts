import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  username: string;
  total: number;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.username = '';
    this.total = 0;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.username = params['name'];
    this.total = params['tot'];
    });
  }
  backClicked(): void{
    this.cartService.clearCartItems();
  }
}
