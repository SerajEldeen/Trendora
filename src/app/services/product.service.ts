import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/products-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);

  // Fetch products from FakeStoreAPI
  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithStock = data.map((p: any) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.image,
          description: p.description,
          category: p.category,
          rating: p.rating,

          stock: Math.floor(Math.random() * 10),
        }));
        this.products.set(productsWithStock);
      });
  }
}
