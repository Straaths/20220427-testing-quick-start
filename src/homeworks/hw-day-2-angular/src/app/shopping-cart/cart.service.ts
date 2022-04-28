import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../product/product'
import { CartItem } from './cart-item'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  getAll(): readonly CartItem[] {
    return this.items;
  }

  getCount(): number {
    return 0
  }

  getValue(): number {
    return 0;
  }

  addToCart(product: Product) {
    
    // to zostaw nienaruszone!
    this.publish.next();
  }

  // this part is NOT exactly the right Angular way !!
  // made here only for "make it work" !!!
  private publish = new Subject<void>();
  broadcast(): Subject<void> {
    return this.publish;
  }
}
