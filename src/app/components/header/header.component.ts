import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common'; // <- import NgIf

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgIf], // <- add NgIf here
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center relative"
    >
      <!-- Logo -->
      <button
        routerLink="/"
        class="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent"
      >
        Trendora
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-6">
        <button
          routerLink="/"
          class="font-semibold hover:text-pink-500 transition"
        >
          Home
        </button>
        <button
          routerLink="/products"
          class="font-semibold hover:text-pink-500 transition"
        >
          Products
        </button>
        <button
          routerLink="/about"
          class="font-semibold hover:text-pink-500 transition"
        >
          About
        </button>
      </div>

      <!-- Cart + Hamburger -->
      <div class="flex items-center gap-4">
        <!-- Cart -->
        <div class="relative">
          <button routerLink="/cart" class="text-2xl p-2 relative" title="Cart">
            🛒
            <span
              *ngIf="cartCount() > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md"
            >
              {{ cartCount() }}
            </span>
          </button>
        </div>

        <!-- Hamburger (Mobile) -->
        <button class="md:hidden text-2xl" (click)="toggleMenu()">☰</button>
      </div>

      <!-- Mobile Menu -->
      <div
        *ngIf="menuOpen()"
        class="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50"
      >
        <button
          routerLink="/"
          class="font-semibold hover:text-pink-500 transition"
          (click)="closeMenu()"
        >
          Home
        </button>
        <button
          routerLink="/products"
          class="font-semibold hover:text-pink-500 transition"
          (click)="closeMenu()"
        >
          Products
        </button>
        <button
          routerLink="/about"
          class="font-semibold hover:text-pink-500 transition"
          (click)="closeMenu()"
        >
          About
        </button>
      </div>
    </div>
  `,
})
export class HeaderComponent {
  cartService = inject(CartService);
  cartCount = computed(() => this.cartService.cart().length);

  // mobile menu state
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
