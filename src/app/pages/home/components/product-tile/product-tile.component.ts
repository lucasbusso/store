import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "src/app/models/product.model";

@Component({
  selector: "app-product-tile",
  templateUrl: "product-tile.component.html",
})
export class ProductTileComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  @Output() addToCartEvent = new EventEmitter();

  @Input() product: IProduct | undefined;

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product);
  }
}
