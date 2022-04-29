import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-product-list-item',
  template: `
    <div class="card-image">
      <figure class="image is-4by3">
        <img [src]="product?.imgUrl" [alt]="product?.name" >
      </figure>
    </div>
    <div class="card-content">
      <p class="title">{{product?.name}}</p>
      <div class="content">{{product?.value}} zł</div>
      <button
        class="button is-info is-small"
        (click)="addToCart.emit(product)"
      >
        Add to cart
      </button>
    </div>
  `
})
export class ProductListItemComponent  {
  @Input() product?: Product;
  @Output() addToCart = new EventEmitter<Product>()
}
