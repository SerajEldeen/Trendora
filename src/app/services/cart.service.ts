import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/products-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    // this.cart.set([...this.cart(), product]);
    const existing = this.cart().find((p) => p.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + (product.quantity || 1);
      this.cart.set([...this.cart()]);
    } else {
      this.cart.set([...this.cart(), product]);
    }
  }

  removeFromCart(product: Product) {
    this.cart.set(this.cart().filter((p) => p.id !== product.id));
  }
}
