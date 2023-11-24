import { Component, OnInit } from '@angular/core';
import { NotionService } from 'src/services/notion.service';
import { CartService } from 'src/services/cart.service';
import { WalletPayService } from 'src/services/wallet-pay.service';
import { Router } from '@angular/router';
import { OilCard } from '../models/oil-card.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public cards: OilCard[] = [];
  constructor(
    private notionService: NotionService,
    private cartService: CartService,
    private paymentService: WalletPayService,
    public router: Router) { }

  ngOnInit(): void {
    this.getCards();
  }

  private getCards(): void {
    console.log("getCards");
    this.notionService.getCards().subscribe({
      next: result => {
        this.cards = result;
        console.log(result);
      },
      error: err => {

        console.log(err);
      }
    })
  }
}
