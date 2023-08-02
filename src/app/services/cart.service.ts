import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICart, ICartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<ICart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: ICartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(item);
    }

    this.cart.next({ items: items });
    this._snackBar.open("1 item added successfully", "Ok", { duration: 3000 });
  }

  getTotal(items: Array<ICartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("The cart is empty now", "Ok", { duration: 3000 });
  }

  removeProductRow(
    product: ICartItem,
    update: boolean = true
  ): Array<ICartItem> {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== product.id
    );
    if (update) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open("Product has been removed", "Ok", { duration: 3000 });
    }
    return filteredItems;
  }

  removeQuantity(product: ICartItem): void {
    let itemForRemoval: ICartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === product.id) {
        _item.quantity--;

        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });
    if (itemForRemoval) {
      filteredItems = this.removeProductRow(itemForRemoval, false);
    }
    this.cart.next({ items: filteredItems });
    this._snackBar.open("1 item removed successfully", "Ok", {
      duration: 3000,
    });
  }
}
