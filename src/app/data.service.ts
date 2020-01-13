import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { environment } from 'environments/environment';
import { Site } from './models/site.model';
import { ProductAddress } from './models/productaddress.model';
import { Price } from './models/price.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getProducts() :Observable<Product[]>{
    return this._http.get<Product[]>(environment.productUrl);
  }

  getSites() : Observable<Site[]>{
    return this._http.get<Site[]>(environment.siteUrl);
  }

  getProductAddresses() : Observable<ProductAddress[]>{
    return this._http.get<ProductAddress[]>(environment.productAddressUrl);
  }

  getPrices() :Observable<Price[]>{
    return this._http.get<Price[]>(environment.priceUrl);
  }

  getOneProduct() :Observable<Product[]>{
    return this._http.get<Product[]>(environment.productUrl+"{{Product.id}}");
  }

  putProduct(id) :Observable<Product[]>{
    return this._http.put<Product[]>(`${environment.productUrl}/${id}`, Product);
  }
}
