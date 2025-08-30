import { Component, inject, input } from '@angular/core';
import { Product } from '../products-list.component';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-4 sm:p-6 flex flex-col items-center justify-between cursor-pointer
             w-full max-w-[350px] hover:scale-105 transition duration-300 ease-in-out"
      (click)="goToDetail(product().id)"
    >
      <!-- Image -->
      <div
        class="flex items-center justify-center w-full h-36 sm:h-44 md:h-48 lg:h-52"
      >
        <img
          [src]="product().image"
          alt="Product Image"
          class="max-h-full max-w-full object-contain"
        />
      </div>

      <!-- Title & Price -->
      <div class="flex flex-col text-center w-full px-2 mt-2">
        <span class="text-sm sm:text-base font-bold line-clamp-2">
          {{ product().title }}
        </span>
        <span class="text-xs sm:text-sm text-gray-600 mt-1">
          {{ '$' + product().price }}
        </span>
      </div>

      <!-- Button -->
      <app-primary-button
        (click)="onAddToCart($event, product())"
        class="mt-3 w-full"
        label="Add to Cart"
      />
    </div>
  `,
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();

  constructor(private router: Router) {}

  onAddToCart(event: Event, product: Product) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }

  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
