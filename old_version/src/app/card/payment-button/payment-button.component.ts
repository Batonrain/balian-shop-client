import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss']
})
export class PaymentButtonComponent {
  @Input() paymentUrl: string = '';
}
