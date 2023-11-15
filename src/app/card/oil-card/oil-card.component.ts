import { Component, Input } from '@angular/core';
import { OilCard } from 'src/app/models/oil-card.model';

@Component({
  selector: 'app-oil-card',
  templateUrl: './oil-card.component.html',
  styleUrls: ['./oil-card.component.scss']
})
export class OilCardComponent {
  @Input() item: OilCard = <OilCard>{};

  public defaultPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  public getPictureUrl(pictureUrl: string): string {
    if (pictureUrl != '') {
      console.log(pictureUrl)
      return pictureUrl;
    }
    return this.defaultPicture;
  }
}
