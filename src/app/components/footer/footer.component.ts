import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-slate-700 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Trendora</h2>
          <p class="text-gray-400">
            Your one-stop shop for the best products at unbeatable prices. Fast
            delivery and secure checkout guaranteed.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a routerLink="/" class="hover:text-pink-400 transition">Home</a>
            </li>
            <li>
              <a routerLink="/products" class="hover:text-pink-400 transition"
                >Shop</a
              >
            </li>
            <li>
              <a routerLink="/about" class="hover:text-pink-400 transition"
                >About Us</a
              >
            </li>
            <li>
              <a routerLink="/contact" class="hover:text-pink-400 transition"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Support</h3>
          <ul class="space-y-2 text-gray-400">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <!-- Social & Newsletter -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Stay Connected</h3>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="hover:text-pink-400 transition">Facebook</a>
            <a href="#" class="hover:text-pink-400 transition">Twitter</a>
            <a href="#" class="hover:text-pink-400 transition">Instagram</a>
          </div>
          <p class="text-gray-400 mb-2">Subscribe to our newsletter</p>
          <form class="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              class="flex-1 px-3 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              class="bg-pink-400 text-gray-900 px-4 rounded-lg hover:bg-pink-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm"
      >
        &copy; 2025 Trendora. All rights reserved.
      </div>
    </footer>
  `,
})
export class FooterComponent {}
