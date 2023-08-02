import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../models/product.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit: number = 12,
    sort: string = "desc",
    category?: string
  ): Observable<Array<IProduct>> {
    return this.httpClient.get<Array<IProduct>>(
      `${environment.STORE_BASE_URL}/products${
        category ? "/category/" + category : ""
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${environment.STORE_BASE_URL}/products/categories`
    );
  }
}
