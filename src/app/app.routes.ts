import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Products } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];
