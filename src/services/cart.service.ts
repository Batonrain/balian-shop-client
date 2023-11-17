// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { OilCard } from 'src/app/models/oil-card.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: OilCard): void {
    const currentItems = this.itemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.product.id === product.id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }
    this.itemsSubject.next(currentItems);
  }

  getTotalQuantity(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }

  removeFromCart(productId: string): void {
    const currentItems = this.itemsSubject.value.filter(item => item.product.id !== productId);
    this.itemsSubject.next(currentItems);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }

  constructor() { }
}
