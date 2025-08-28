import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 md:px-12 rounded-lg shadow-lg relative overflow-hidden"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to <span class="text-yellow-300">ShopEasy</span>
      </h1>
      <p class="text-lg md:text-xl mb-6">
        Discover top-quality products at amazing prices. Fast delivery
        guaranteed!
      </p>
      <a
        routerLink="/products"
        class="inline-block bg-yellow-300 text-purple-700 px-6 py-3 font-semibold rounded-lg hover:bg-yellow-400 transition"
      >
        Shop Now
      </a>
    </div>
  `,
})
export class WelcomeSectionComponent {}
