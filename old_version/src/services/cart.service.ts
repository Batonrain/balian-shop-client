import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item.model';
import { OilCard } from 'src/app/models/oil-card.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.loadCartItems());
  items$ = this.itemsSubject.asObservable();

  constructor() {}

  private loadCartItems(): CartItem[] {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        return JSON.parse(storedCart) as CartItem[];
      } catch {
        localStorage.removeItem('cart');
      }
    }
    return [];
  }

  private saveCartItems(items: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  addToCart(product: OilCard): void {
    const currentItems = this.itemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.product.id === product.id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }
    this.itemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  removeFromCart(productId: string): void {
    const currentItems = this.itemsSubject.value.filter(item => item.product.id !== productId);
    this.itemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
    this.saveCartItems([]);
  }

  getTotalQuantity(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }
}
