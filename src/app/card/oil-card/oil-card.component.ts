import { Component, Input } from '@angular/core';
import { OilCard } from 'src/app/models/oil-card.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-oil-card',
  templateUrl: './oil-card.component.html',
  styleUrls: ['./oil-card.component.scss']
})
export class OilCardComponent {
  @Input() item: OilCard = <OilCard>{};

  public defaultPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor(private cartService: CartService){}

  public addItemToCart(item: OilCard): void {
    this.cartService.addToCart(item);
  }

  public getPictureUrl(pictureUrl: string): string {
    if (pictureUrl != '') {
      return pictureUrl;
    }
    return this.defaultPicture;
  }
}
