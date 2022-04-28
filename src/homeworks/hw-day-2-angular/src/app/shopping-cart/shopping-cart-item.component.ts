import { Component, Input } from '@angular/core';
import { Product } from '../product/product'

@Component({
  selector: 'app-shopping-cart-item',
  template: `<li class="p-2"> {{amount}} x {{product?.name}} </li>`,
})
export class ShoppingCartItemComponent {
  @Input() id?: number;
  @Input() product?: Product;
  @Input() amount?: number;
}
