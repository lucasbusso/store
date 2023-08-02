import { Component, OnInit } from "@angular/core";
import { ICart, ICartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: ICart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Nike Air Force",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Nike shoes",
        price: 70,
        quantity: 4,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Adidas Express",
        price: 125,
        quantity: 4,
        id: 3,
      },
    ],
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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<ICartItem>): number {
    return this.cartService.getTotal(items);
  }
}
