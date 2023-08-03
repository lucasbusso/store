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
      this.route.paramMap.subscribe((params) => {
        const productId: string | null = params.get("id");
        this.storeService.getProductById(productId).subscribe((_product) => {
          this.product = _product;
          console.log(this.product);
        });
      });
    });
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
