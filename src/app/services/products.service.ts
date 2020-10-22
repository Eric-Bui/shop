import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product.class";
import { Observable, from } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "x-www-form-urlencoded"),
};

const httpHeaders = new HttpHeaders({
  "Content-Type": "application/json",
  Authorization: "djidjaidjaid",
});

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  API: string = "/api/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API, { headers: httpHeaders });
  }

  getProductById(id: String): Observable<Product[]> {
    const url = `${this.API}/${id}`;
    return this.http.get<Product[]>(url, httpOptions);
  }
}
