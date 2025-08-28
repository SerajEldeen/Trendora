import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';

export type Product = {
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
    <div class="p-8 flex flex-wrap gap-4 justify-center">
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
  products = signal<Product[]>([]);
  currentPage = signal(1);
  itemsPerPage = 6;

  // Compute products to display
  paginatedProducts = computed(() => {
    const start = 0;
    const end = this.currentPage() * this.itemsPerPage;
    return this.products().slice(start, end);
  });

  isAllLoaded = computed(() => {
    return this.paginatedProducts().length >= this.products().length;
  });

  ngOnInit() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithStock = data.map((p: any) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.image,
          stock: Math.floor(Math.random() * 10),
        }));
        this.products.set(productsWithStock);
      });
  }

  loadMore() {
    if (!this.isAllLoaded()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }
}
