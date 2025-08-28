import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../../pages/products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  template: `
    <!-- Products list below carousel -->
    <app-products-list></app-products-list>
  `,
})
export class Products {}
