import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { PurchaseItem, WalletPayCreateOrderRequest } from 'src/app/models/wallet-pay-create-rder-request.model';
import { CartService } from 'src/services/cart.service';
import { WalletPayService } from 'src/services/wallet-pay.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  paymentUrl: string = '';
  showFormInvoiceButton: boolean = true;

  constructor(
    private cartService: CartService,
    private paymentService: WalletPayService) { }

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.cartItems = items;
      console.log(items)
    });
  }

  public payOrders(): void {
    //let userData = 863966;
    let userData = localStorage.getItem('user') ?? "";
    console.log(userData)
    if (userData === "") {
      return;
    }
    let user = JSON.parse(userData);
    let items: PurchaseItem[] = []
    this.cartItems.forEach(item => {
      let purchaseItem: PurchaseItem = {
        Amount: item.product.price,
        Count: item.quantity,
        Id: item.product.id,
        Name: item.product.name,
        Description: item.product.name,
      };
      items.push(purchaseItem);
    });
    let model: WalletPayCreateOrderRequest = {
      userId: user.id,
      username: user.username,
      purchaseItems: items,
    }
    console.log("payOrders", model);
    this.paymentService.createPayment(model).subscribe({
      next: result => {
        console.log("createPayment", result);
        this.paymentUrl = result.payLink;
        this.showFormInvoiceButton = false;
        localStorage.removeItem('cart');
      },
      error: err => {
        console.log("createPayment err", err);
      }
    })
  }
}
