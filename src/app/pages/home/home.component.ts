import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  plpColumns: number = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.plpColumns];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNumber: number): void {
    this.plpColumns = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.plpColumns];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: IProduct): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      id: product.id,
      price: product.price,
      quantity: 1,
    });
  }
}
