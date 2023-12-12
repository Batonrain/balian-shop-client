import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = environment.SERVICE_API + 'user';

  constructor(private httpClient: HttpClient) { }

  public getUserId(): number {
    let userData = localStorage.getItem('user') ?? "";
    if (userData === "") {
      return 0;
    }
    let user = JSON.parse(userData);
    return user.id;
  }

  // Метод для получения списка баз данных
  public getAvatar(id: number): Observable<any> {
    return this.httpClient.get<string>(`${this.BASE_URL}/get-photo?userId=${id}`);
  }
}
