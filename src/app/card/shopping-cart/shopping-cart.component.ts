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
    let defaultUser = 863966;
    let items: PurchaseItem[] = []
    this.cartItems.forEach(item => {
      let purchaseItem: PurchaseItem = {
        Amount: item.product.price,
        Count: item.quantity,
        ItemId: item.product.id,
        Description: item.product.name,
      };
      items.push(purchaseItem);
    });
    let model: WalletPayCreateOrderRequest = {
      userId: defaultUser,
      purchaseItems: items,
    }
    console.log("payOrders", model);
    this.paymentService.createPayment(model).subscribe({
      next: result => {
        console.log("createPayment", result);
        this.paymentUrl = result.data.payLink;
        this.showFormInvoiceButton = false;
      },
      error: err => {
        console.log("createPayment err", err);
      }
    })
  }
}
