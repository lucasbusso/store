import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  plpColumns: number = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.plpColumns];
  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNumber: number): void {
    this.plpColumns = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.plpColumns];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
