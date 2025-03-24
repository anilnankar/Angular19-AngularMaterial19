import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
  cartItems: CartItem[] = [
    { name: 'Product A', price: 29.99, quantity: 2 },
    { name: 'Product B', price: 19.99, quantity: 1 },
    { name: 'Product C', price: 39.99, quantity: 3 },
  ];

  displayedColumns: string[] = ['name', 'quantity', 'price'];

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

