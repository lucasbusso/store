import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICartItem } from "src/app/models/cart.model";
import { IProduct } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-product",
  templateUrl: "product.component.html",
  styles: [],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct | ICartItem | any;
  @Output() addToCartEvent = new EventEmitter();

  productId: any;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get("id");
    });
    this.product = this.storeService
      .getProductById(this.productId)
      .subscribe((_product) => (this.product = _product));
  }

  onAddToCart(): void {
    this.cartService.addToCart(this.product);
  }
}
