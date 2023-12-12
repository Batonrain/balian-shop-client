import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletPayCreateOrderRequest } from 'src/app/models/wallet-pay-create-rder-request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletPayService {
  private readonly BASE_URL = environment.SERVICE_API + 'WalletPayPayments';

  constructor(private httpClient: HttpClient) { }

  createPayment(model: WalletPayCreateOrderRequest): Observable<any> {
    return this.httpClient.post<any>(`${this.BASE_URL}/create-payment`, model);
  }
}
