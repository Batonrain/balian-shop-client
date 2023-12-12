import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Baliana Oil';
  profileImageBase64: string = '';

  public user: any | undefined;
  totalQuantity$ = this.cartService.getTotalQuantity();

  constructor(
    private cartService: CartService,
    private userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
    this.parseTelegramInfo(window.location.href);
    this.userService.getAvatar(this.userService.getUserId()).subscribe(base64Image => {
      this.profileImageBase64 = 'data:image/jpeg;base64,' + base64Image.photo;
    });
    this.getUserFromStorage();
  }

  private parseTelegramInfo(url: string): void {
    const hashIndex = url.indexOf('#');
    if (hashIndex === -1) return;

    const hash = url.substring(hashIndex + 1);
    const params = new URLSearchParams(decodeURIComponent(hash));

    let user = params.get('user') ?? '';
    const decodedStr = decodeURIComponent(user);
    this.user = JSON.parse(decodedStr);

    localStorage.setItem("user", JSON.stringify(this.user));
  }

  private getUserFromStorage() {
    let userData = localStorage.getItem('user') ?? "";
    console.log(userData)
    if (userData === "") {
      return;
    }
    this.user = JSON.parse(userData);
  }
}
