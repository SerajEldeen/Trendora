import { Component, signal, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../services/product.service';
export type Product = {
  rating: any;
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
  quantity?: number;
};

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <!--  Search Bar -->
    <div class="p-4 flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        class="w-full sm:w-1/2 p-2 border rounded-lg shadow-sm "
        (input)="search.set($any($event.target).value)"
      />
    </div>

    <!-- Products -->
    <div class="p-4 flex flex-wrap gap-12 justify-center">
      <ng-container *ngFor="let product of paginatedProducts()">
        <div class="w-full sm:w-1/2 md:w-1/4">
          <app-product-card [product]="product" />
        </div>
      </ng-container>
    </div>

    <!-- Load More Button -->
    <div class="text-center m-6" *ngIf="!isAllLoaded()">
      <button
        (click)="loadMore()"
        class="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
      >
        Load More
      </button>
    </div>
  `,
})
export class ProductsListComponent implements OnInit {
  productService = inject(ProductService);
  products = this.productService.products;
  search = signal('');
  currentPage = signal(1);
  itemsPerPage = 6;

  // Filtered products based on search
  filteredProducts = computed(() => {
    const term = this.search().toLowerCase();
    return this.products().filter((p) => p.title.toLowerCase().includes(term));
  });

  // Paginated + filtered products
  paginatedProducts = computed(() => {
    const end = this.currentPage() * this.itemsPerPage;
    return this.filteredProducts().slice(0, end);
  });

  isAllLoaded = computed(() => {
    return this.paginatedProducts().length >= this.filteredProducts().length;
  });

  ngOnInit() {
    this.productService.fetchProducts();
  }

  loadMore() {
    if (!this.isAllLoaded()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }
}
