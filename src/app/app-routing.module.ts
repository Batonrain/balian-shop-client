import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './card/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'basket', component: ShoppingCartComponent },
  { path: '', component: MainPageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
