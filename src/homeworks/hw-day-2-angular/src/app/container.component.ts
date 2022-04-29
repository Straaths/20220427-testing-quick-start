import { Component, OnInit } from '@angular/core';
import { CartService } from './shopping-cart/cart.service'

@Component({
  selector: 'app-container',
  template: `
    <main class="container p-4">
      <div class="columns">
        <div class="column" data-page>
          <h3 class="title is-3">Products and occasions</h3>
          <hr>
          <div class="box has-text-right p-3">
            You got a <code>{{itemsCount}}</code> items in cart. Worth {{itemsValue}} zł
          </div>
          <app-product-list></app-product-list>
        </div>
        <div class="column is-one-fifth-tablet is-full-mobile mt-6" data-cart>
          <app-shopping-cart></app-shopping-cart>
        </div>
      </div>
    </main>
  `
})
export class ContainerComponent implements OnInit {

  itemsCount = 0;
  itemsValue = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.broadcast().subscribe(() => {
      this.itemsCount = this.cartService.getCount();
      this.itemsValue = this.cartService.getValue();
    })
  }

}
