import { Component, OnInit } from '@angular/core';
import { NotionService } from 'src/services/notion.service';
import { OilCard } from './models/oil-card.model';
import { UserInfo } from './models/user.model'
import { CartService } from 'src/services/cart.service';
import { WalletPayService } from 'src/services/wallet-pay.service';
import { WalletPayCreateOrderRequest } from './models/wallet-pay-create-rder-request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Baliana Oil';
  public cards: OilCard[] = [];
  public user: any | undefined;
  totalQuantity$ = this.cartService.getTotalQuantity();

  constructor(
    private notionService: NotionService,
    private cartService: CartService,
    private paymentService: WalletPayService) { }

  ngOnInit(): void {
    this.parseTelegramInfo(window.location.href);
    this.getCards();
  }
  
  private parseTelegramInfo(url: string): void {
    const hashIndex = url.indexOf('#');
    if (hashIndex === -1) return;

    const hash = url.substring(hashIndex + 1);
    const params = new URLSearchParams(decodeURIComponent(hash));

    let user = params.get('user') ?? '';
    const decodedStr = decodeURIComponent(user);
    this.user = JSON.parse(decodedStr);

    localStorage.setItem("user", JSON.stringify(this.user));
  }

  private getCards(): void {
    this.notionService.getCards().subscribe({
      next: result => {
        this.cards = result;
      },
      error: err => {

        console.log(err);
      }
    })
  }
}
