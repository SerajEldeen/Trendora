import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product = signal<any>(null);
  quantity = 1;
  stars = [1, 2, 3, 4, 5];
  hoverRating = 0;
  userRating = 0;
  cartService = inject(CartService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => this.product.set(data));
  }

  addToCart(product: any) {
    const productWithQuantity = { ...product, quantity: this.quantity };
    this.cartService.addToCart(productWithQuantity);
  }

  setRating(rating: number) {
    this.userRating = rating;
  }
}
