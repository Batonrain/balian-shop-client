import { Component, Input  } from '@angular/core';
import { OilCard } from 'src/app/models/oil-card.model';

@Component({
  selector: 'app-oil-card',
  templateUrl: './oil-card.component.html',
  styleUrls: ['./oil-card.component.scss']
})
export class OilCardComponent {
  @Input() item: OilCard = <OilCard>{};
}
