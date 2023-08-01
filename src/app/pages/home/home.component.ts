import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  plpColumns: number = 3;
  category: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNumber: number): void {
    this.plpColumns = colsNumber;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
