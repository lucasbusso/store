import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../models/product.model";
import { environment } from "src/environments/environment";

// const STORE_BASE_URL = 'https://fakestoreapi.com'
@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit: number = 12,
    sort: string = "desc"
  ): Observable<Array<IProduct>> {
    return this.httpClient.get<Array<IProduct>>(
      `${environment.STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
    );
  }
}
