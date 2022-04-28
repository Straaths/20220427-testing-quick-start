import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item'
import { CartService } from './cart.service'

@Component({
  selector: 'app-shopping-cart',
  template: `
    <aside class="menu">
      <p class="menu-label">Shopping cart</p>
      <ul class="menu-list" data-list>
        <app-shopping-cart-item *ngFor="let item of cartItems" [id]="item.id" [product]="item.product" [amount]="item.amount" ></app-shopping-cart-item>
      </ul>
    </aside>
  `
})
export class ShoppingCartComponent implements OnInit {

  cartItems: readonly CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.broadcast().subscribe(() => {
      this.cartItems =  this.cartService.getAll()
    })
  }

}
