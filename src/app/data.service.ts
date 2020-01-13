import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  //  Product

  getProducts() :Observable<Product[]>{
    return this._http.get<Product[]>(environment.productUrl);
  }

  getOneProduct(id) :Observable<Product[]>{
    return this._http.get<Product[]>(`${environment.productUrl}/${id}`);
  }

  putProduct(id) :Observable<Product[]>{
    return this._http.put<Product[]>(`${environment.productUrl}/${id}`, Product);
  }

  deleteProduct(id) :Observable<Product[]>{
    return this._http.delete<Product[]>(`${environment.productUrl}/${id}`);
  }


  //  Site
   
  getSites() : Observable<Site[]>{
    return this._http.get<Site[]>(environment.siteUrl);
  }

  getOneSite(id) :Observable<Site[]>{
    return this._http.get<Site[]>(`${environment.siteUrl}/${id}`);
  }

  putSite(id,Site) :Observable<Site[]>{
    return this._http.put<Site[]>(`${environment.siteUrl}/${id}`, Site ,this.options);
  }

  deleteSite(id) :Observable<Site[]>{
    return this._http.delete<Site[]>(`${environment.siteUrl}/${id}`);
  }


  //  ProductAddresses

  getProductAddresses() : Observable<ProductAddress[]>{
    return this._http.get<ProductAddress[]>(environment.productAddressUrl);
  }

  getOneProductAddress(id) :Observable<ProductAddress[]>{
    return this._http.get<ProductAddress[]>(`${environment.productAddressUrl}/${id}`);
  }

  putProductAddress(id) :Observable<ProductAddress[]>{
    return this._http.put<ProductAddress[]>(`${environment.productAddressUrl}/${id}`, ProductAddress);
  }

  deleteProductAddress(id) :Observable<ProductAddress[]>{
    return this._http.delete<ProductAddress[]>(`${environment.productAddressUrl}/${id}`);
  }


  //  Price

  getPrices() :Observable<Price[]>{
    return this._http.get<Price[]>(environment.priceUrl);
  }

  getOnePrice(id) :Observable<Price[]>{
    return this._http.get<Price[]>(`${environment.priceUrl}/${id}`);
  }

  putPrice(id) :Observable<Price[]>{
    return this._http.put<Price[]>(`${environment.priceUrl}/${id}`, Price);
  }

  deletePrice(id) :Observable<Price[]>{
    return this._http.delete<Price[]>(`${environment.priceUrl}/${id}`);
  }

}
