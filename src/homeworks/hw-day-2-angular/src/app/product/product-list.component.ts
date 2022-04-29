import { Component, OnInit } from '@angular/core';
import { CartService } from '../shopping-cart/cart.service'
import { Product } from './product'
import { ProductService } from './product.service'

@Component({
  selector: 'app-product-list',
  template: `
    <section class="columns is-flex-wrap-wrap">
       <div
         class="column is-full-mobile is-half-tablet is-one-third-widescreen"
         *ngFor="let item of products"
       >
         <app-product-list-item [product]="item" (addToCart)="handleAddToCart($event)"></app-product-list-item>
       </div>
    </section>
  `
})
export class ProductListComponent implements OnInit {

  products: readonly Product[] = []

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  handleAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
