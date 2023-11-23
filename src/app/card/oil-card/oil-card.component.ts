import { Component, Input } from '@angular/core';
import { OilCard } from 'src/app/models/oil-card.model';
import { WalletPayCreateOrderRequest } from 'src/app/models/wallet-pay-create-rder-request.model';
import { CartService } from 'src/services/cart.service';
import { WalletPayService } from 'src/services/wallet-pay.service';

@Component({
  selector: 'app-oil-card',
  templateUrl: './oil-card.component.html',
  styleUrls: ['./oil-card.component.scss']
})
export class OilCardComponent {
  @Input() item: OilCard = <OilCard>{};
  @Input() user: any = {};

  public defaultPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor(
    private cartService: CartService,
    private paymentService: WalletPayService){}

  public addItemToCart(item: OilCard): void {
    this.cartService.addToCart(item);
  }

  public buyItem(itemId: string): void{
    let model: WalletPayCreateOrderRequest = {
      ItemId: itemId,
      userId: 863966,
    }
    console.log("buyItem", model);
    this.paymentService.createPayment(model).subscribe({
      next: result => {
        console.log("createPayment", result)
      },
      error: err => {
        console.log(err);
      }
    })
  }

  public getPictureUrl(pictureUrl: string): string {
    if (pictureUrl != '') {
      return pictureUrl;
    }
    return this.defaultPicture;
  }
}
