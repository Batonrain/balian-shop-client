import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Local components
import { OilCardComponent } from './card/oil-card/oil-card.component';
import { ShoppingCartComponent } from './card/shopping-cart/shopping-cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentButtonComponent } from './card/payment-button/payment-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OilCardComponent,
    ShoppingCartComponent,
    MainPageComponent,
    PaymentButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
