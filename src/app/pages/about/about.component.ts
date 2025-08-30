import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-16 px-6 text-center"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to Trendora
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Trendora is a simple e-commerce app built with Angular and TailwindCSS,
        where user can add products to their cart and checkout. using API to
        fetch products
      </p>
    </section>

    <!-- Technologies We Use Section -->
    <section class="py-12 px-6 max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Technologies We Use</h2>

      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
           transition transform hover:scale-110 hover:bg-pink-500"
        >
          Angular
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
           transition transform hover:scale-110 hover:bg-pink-500"
        >
          TypeScript
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
            transition transform hover:scale-110 hover:bg-pink-500"
        >
          TailwindCSS
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
            transition transform hover:scale-110 hover:bg-pink-500"
        >
          HTML
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
            transition transform hover:scale-110 hover:bg-pink-500"
        >
          CSS
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
            transition transform hover:scale-110 hover:bg-pink-500"
        >
          JavaScript
        </span>
        <span
          class="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer
            transition transform hover:scale-110 hover:bg-pink-500"
        >
          FakeStoreAPI
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <!-- Angular Features -->
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">
            Angular Features
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Components:</strong> Modular building blocks for UI.
            </li>
            <li>
              <strong>Service:</strong> Encapsulates business logic, API calls,
              and shared state for components.
            </li>
            <li>
              <strong>Signals:</strong> Reactive state management for dynamic UI
              updates.
            </li>
            <li>
              <strong>Computed:</strong> Derives a value from signals for
              auto-updates when dependencies change.
            </li>
            <li>
              <strong>Injectable:</strong> Dependency injection to reuse
              services across components.
            </li>
            <li>
              <strong>ngOnInit:</strong> Lifecycle hook for initialization
              logic.
            </li>
            <li>
              <strong>Router:</strong> Enables navigation and SPA routing.
            </li>
            <li>
              <strong>Input:</strong> Pass data from parent to child components.
            </li>
            <li>
              <strong>CommonModule:</strong> Provides common directives like
              ngIf and ngFor.
            </li>
            <li>
              <strong>*ngFor:</strong> Loop over arrays and render templates
              dynamically.
            </li>
            <li>
              <strong>*ngIf:</strong> Conditionally displays elements based on a
              boolean expression.
            </li>
          </ul>
        </div>

        <!-- Other Technologies -->
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">
            Other Technologies
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>TypeScript:</strong> Strongly typed JS for better code
              quality.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Utility-first CSS framework for fast
              styling.
            </li>
            <li>
              <strong>HTML & CSS:</strong> Structure and style the website.
            </li>
            <li>
              <strong>JavaScript:</strong> Adds interactivity and dynamic
              behavior.
            </li>
            <li>
              <strong>FakeStoreAPI:</strong>
              <a
                href="https://fakestoreapi.com/products"
                target="_blank"
                class="text-pink-600 hover:underline"
                >https://fakestoreapi.com/products</a
              >
              – Public API for fetching sample e-commerce products.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-12 px-6 bg-gray-50">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
        Meet the Team
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Seraj Eldeen Abdullah
          </h3>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Mohab Adel Bassiouny
          </h3>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-800">
            Adham Mohamed Agamy
          </h3>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
