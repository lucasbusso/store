import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/models/product.model";

@Component({
  selector: "app-product-tile",
  templateUrl: "product-tile.component.html",
})
export class ProductTileComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  @Output() addToCartEvent = new EventEmitter();
  @Output() getProductEvent = new EventEmitter();

  @Input() product: IProduct | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

  getProductId(productId: any): void {
    this.getProductEvent.emit(productId);
    this.router.navigateByUrl(`/products/${productId}`);
  }
}
