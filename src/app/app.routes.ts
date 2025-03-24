import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductlistComponent } from './pages/products/productlist.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'cart', component: CartComponent },
  ];
  