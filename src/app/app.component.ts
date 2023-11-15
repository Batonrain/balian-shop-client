import { Component, OnInit } from '@angular/core';
import { NotionService } from 'src/services/notion.service';
import { OilCard } from './models/oil-card.model';
import { UserInfo } from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Baliana Oil';
  public cards: OilCard[] = [];
  public user: any | undefined;
  constructor(private notionService: NotionService) { }

  ngOnInit(): void {
    localStorage.setItem("user", JSON.stringify(this.parseTelegramInfo(window.location.href)));
    this.getCards();
    this.getUser();
  }

  public getUser(): void {
    console.log(JSON.parse(localStorage.getItem('user') ?? ''))
    this.user = JSON.parse(localStorage.getItem('user') ?? '');
    console.log(this.user);
  }

  private parseTelegramInfo(url: string) {
    const hashIndex = url.indexOf('#');
    if (hashIndex === -1) return;

    const hash = url.substring(hashIndex + 1);
    const params = new URLSearchParams(hash);

    let user = params.get('user') ?? '';
    const decodedStr = decodeURIComponent(user);
    const jsonObj = JSON.parse(decodedStr);
    return jsonObj;
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
