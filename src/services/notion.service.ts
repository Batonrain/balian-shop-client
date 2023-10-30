import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { OilCard } from 'src/app/models/oil-card.model';

@Injectable({
  providedIn: 'root'
})
export class NotionService {

  private readonly BASE_URL = environment.SERVICE_API + 'notion';

  constructor(private httpClient: HttpClient) { }

  // Метод для получения списка баз данных
  getCards(): Observable<OilCard[]> {
    return this.httpClient.get<OilCard[]>(`${this.BASE_URL}/getCards`);
  }
}
