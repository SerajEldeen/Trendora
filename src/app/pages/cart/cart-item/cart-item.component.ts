import { Component, inject, input } from '@angular/core';
import { Product } from '../../products-list/products-list.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white shadow-lg border rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 hover:shadow-xl transition"
    >
      <!-- Product Image -->
      <div
        class="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center"
      >
        <img
          [src]="item().image"
          alt="Product"
          class="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>

      <!-- Product Info -->
      <div class="flex flex-col flex-1 gap-1 md:gap-2">
        <span class="text-lg font-bold text-gray-800 line-clamp-2">{{
          item().title
        }}</span>
        <span class="text-md text-gray-600">$ {{ item().price }}</span>
        <span class="text-sm text-gray-500"
          >Qty: {{ item().quantity || 1 }}</span
        >
      </div>

      <!-- Remove Button -->
      <div class="flex-shrink-0">
        <app-button
          label="Remove"
          class="px-4 py-2 "
          (btnClicked)="cartService.removeFromCart(item())"
        />
      </div>
    </div>
  `,
  styles: [],
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
