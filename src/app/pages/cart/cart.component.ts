import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { ICart, ICartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: ICart = {
    items: [],
  };
  dataSource: Array<ICartItem> = [];

  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: ICart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<ICartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  clearProductRow(product: ICartItem): void {
    this.cartService.removeProductRow(product);
  }

  onAddQuantity(product: ICartItem): void {
    this.cartService.addToCart(product);
  }

  onRemoveQuantity(product: ICartItem): void {
    this.cartService.removeQuantity(product);
  }

  onCheckout(): void {
    this.http
      .post(`${environment.STRIPE_SERVER_URL}/checkout`, {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(environment.STRIPE_API_KEY);
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
