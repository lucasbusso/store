import { Component, OnInit } from "@angular/core";
import { ICart } from "./models/cart.model";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  template: `
    <app-header [cart]="cart"></app-header> <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  cart: ICart = { items: [] };
  title = "store";

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
