import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  plpColumns: number = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.plpColumns];
  products: Array<IProduct> | undefined;
  sort = "desc";
  count = 12;
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort)
      .subscribe((_products) => (this.products = _products));
  }

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
