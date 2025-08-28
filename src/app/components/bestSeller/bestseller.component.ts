import {
  Component,
  OnInit,
  signal,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CommonModule, RouterModule, PrimaryButtonComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 class="text-2xl font-bold mb-6">Best Sellers</h2>

      <div class="relative">
        <!-- Scrollable container -->
        <div
          #scrollContainer
          class="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
        >
          <div
            *ngFor="let product of products()"
            class="flex-none w-96 border rounded-lg p-4 hover:shadow-lg transition snap-start cursor-pointer"
            (click)="goToProduct(product.id)"
          >
            <img
              [src]="product.image"
              [alt]="product.title"
              class="h-48 w-full object-contain mb-4"
            />
            <h3 class="font-semibold mb-2 text-sm md:text-base">
              {{ product.title }}
            </h3>
            <p class="text-lg font-bold mb-2">$ {{ product.price }}</p>
            <p class="text-slate-500 mb-2">
              ★ {{ product.rating.rate }} ({{ product.rating.count }})
            </p>
            <app-primary-button
              (click)="onAddToCart($event, product)"
              class="mt-3"
              label="Add to Cart"
            />
          </div>
        </div>

        <!-- Left button (hidden on small screens) -->
        <button
          (click)="scroll('left')"
          class="hidden md:flex items-center justify-center absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 hover:bg-gray-100 transition"
        >
          <svg
            class="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Right button (hidden on small screens) -->
        <button
          (click)="scroll('right')"
          class="hidden md:flex items-center justify-center absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 hover:bg-gray-100 transition"
        >
          <svg
            class="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
})
export class BestSellerComponent implements OnInit {
  products = signal<Product[]>([]);
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  cartService = inject(CartService);
  router = inject(Router);

  ngOnInit() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const bestSellers = data.filter((p) => p.rating?.rate > 4.5);
        this.products.set(bestSellers);
      });
  }

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }

  onAddToCart(event: Event, product: Product) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
