import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "src/app/models/product.model";

@Component({
  selector: "app-product-tile",
  templateUrl: "product-tile.component.html",
})
export class ProductTileComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  @Output() addToCartEvent = new EventEmitter();

  product: IProduct | undefined = {
    title: "Product 1",
    price: 130,
    category: "Category 1",
    description: "Product description",
    id: 1,
    image: "https://via.placeholder.com/150",
  };

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product);
  }
}
