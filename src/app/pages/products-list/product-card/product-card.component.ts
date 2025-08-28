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
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative cursor-pointer"
      (click)="goToDetail(product().id)"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm"> {{ '$' + product().price }}</span>
      </div>
      <app-primary-button
        (click)="onAddToCart($event, product())"
        class="mt-3"
        label="Add to Cart"
      />
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  constructor(private router: Router) {}

  onAddToCart(event: Event, product: Product) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }
  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
  cartService = inject(CartService);

  product = input.required<Product>();
}
