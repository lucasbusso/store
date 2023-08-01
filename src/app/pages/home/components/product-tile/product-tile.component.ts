import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-tile",
  templateUrl: "product-tile.component.html",
})
export class ProductTileComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
