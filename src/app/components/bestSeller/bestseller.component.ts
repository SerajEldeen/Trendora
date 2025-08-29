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
    <section class="max-w-7xl mx-auto px-4 py-12">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800">
          🌟 Best Sellers
        </h2>
        <p class="text-gray-500 mt-2">
          Our most loved products, chosen by our community
        </p>
      </div>

      <div class="relative">
        <!-- Scrollable container -->
        <div
          #scrollContainer
          class="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
        >
          <div
            *ngFor="let product of products()"
            class="flex-none sm:w-72 w-56 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 snap-start cursor-pointer"
            (click)="goToProduct(product.id)"
          >
            <div class="p-4 flex flex-col h-full">
              <img
                [src]="product.image"
                [alt]="product.title"
                class="h-44 object-contain mx-auto mb-4"
              />

              <h3
                class="font-semibold text-sm md:text-base text-gray-800 line-clamp-2 mb-2"
              >
                {{ product.title }}
              </h3>

              <div class="flex items-center justify-between mb-2">
                <span class="text-lg font-bold text-pink-600">
                  $ {{ product.price }}
                </span>
                <span class="text-yellow-500 text-sm">
                  ★ {{ product.rating.rate }}
                  <span class="text-gray-500 text-xs">
                    ({{ product.rating.count }})
                  </span>
                </span>
              </div>

              <app-primary-button
                (click)="onAddToCart($event, product)"
                class="mt-auto"
                label="Add to Cart"
              />
            </div>
          </div>
        </div>

        <!-- Left button -->
        <div
          class="hidden md:flex items-center justify-center absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent"
        >
          <button
            (click)="scroll('left')"
            class="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <svg
              class="w-5 h-5"
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
        </div>

        <!-- Right button -->
        <div
          class="hidden md:flex items-center justify-center absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent"
        >
          <button
            (click)="scroll('right')"
            class="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <svg
              class="w-5 h-5"
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
    </section>
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
