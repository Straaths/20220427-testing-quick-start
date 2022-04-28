import { Product } from '../product/product'

export interface CartItem {
  id: number;
  product: Product;
  amount: number;
}
