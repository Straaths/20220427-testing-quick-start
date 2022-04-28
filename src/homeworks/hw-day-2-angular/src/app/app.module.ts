import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContainerComponent } from './container.component';
import { LikeOrDislikeComponent } from './like/like-or-dislike.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductListItemComponent } from './product/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ProductListComponent,
    ProductListItemComponent,
    LikeOrDislikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
