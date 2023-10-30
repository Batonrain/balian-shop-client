import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NotionService } from 'src/services/notion.service';
import { OilCard } from './models/oil-card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'balian-shop-client';
  cards: OilCard[] = [];
  constructor(private notionService: NotionService){}

  ngOnInit(): void {
    this.notionService.getCards().subscribe({
      next: result => {
        console.log("result", result);
        this.cards = result;
      },
      error: err => {
        
        console.log(err);
      }
    })
  }
}
