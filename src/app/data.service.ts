import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { environment } from 'environments/environment';
import { Site } from './models/site.model';
import { ProductAddress } from './models/productaddress.model';
import { Price } from './models/price.model';
import { map } from 'rxjs/operators';
import { PageProduct } from './models/page-models/page-product.model';
import { PageSite } from './models/page-models/page-site.model';
import { PageProductAddress } from './models/page-models/page-productaddress.model';
import { PagePrice } from './models/page-models/page-price.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }


  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };


  //  Product

  getProducts(page,size) :Observable<PageProduct>{
    return this._http.get<PageProduct>(`${environment.productUrl}/?page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getSearchingProducts(productname,page,size):Observable<PageProduct>{
    return this._http.get<PageProduct>(`${environment.productSearchUrl}?product_name=${productname}&page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getOneProduct(id) :Observable<Product[]>{
    return this._http.get<Product[]>(`${environment.productUrl}/${id}`);
  }

  postProduct(product : Product) :Observable<Product[]>{
    console.log(product);
    return this._http.post<Product[]>(environment.productUrl, product, this.httpOptions);
  }

  putProduct(id, Product) :Observable<Product[]>{
    return this._http.put<Product[]>(`${environment.productUrl}/${id}`, Product, this.httpOptions);
  }

  deleteProduct(id) :Observable<Product[]>{
    return this._http.delete<Product[]>(`${environment.productUrl}/${id}`);
  }


  //  Site
   
  getSites(page,size) :Observable<PageSite>{
    return this._http.get<PageSite>(`${environment.siteUrl}/?page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getSearchingSites(sitename,page,size):Observable<PageSite>{
    return this._http.get<PageSite>(`${environment.siteSearchUrl}?site_name=${sitename}&page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getOneSite(id) :Observable<Site[]>{
    return this._http.get<Site[]>(`${environment.siteUrl}/${id}`);
  }

  postSite(site : Site) :Observable<Site[]>{
    console.log(site);
    return this._http.post<Site[]>(environment.siteUrl, site, this.httpOptions);
  }

  putSite(id,Site) :Observable<Site[]>{
    return this._http.put<Site[]>(`${environment.siteUrl}/${id}`, Site ,this.httpOptions);
  }

  deleteSite(id) :Observable<Site[]>{
    return this._http.delete<Site[]>(`${environment.siteUrl}/${id}`);
  }


  //  ProductAddresses

  getProductAddresses(page,size) :Observable<PageProductAddress>{
    return this._http.get<PageProductAddress>(`${environment.productAddressUrl}/?page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getSearchingProductAddress(productpath,page,size):Observable<PageProductAddress>{
    return this._http.get<PageProductAddress>(`${environment.productAddressSearchUrl}?product_path=${productpath}&page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getOneProductAddress(id) :Observable<ProductAddress>{
    return this._http.get<ProductAddress>(`${environment.productAddressUrl}/${id}`);
  }

  postProductAddress(productaddress : ProductAddress) :Observable<ProductAddress>{
    console.log(productaddress);
    return this._http.post<ProductAddress>(environment.productAddressUrl, productaddress, this.httpOptions);
  }

  putProductAddress(id, ProductAddress) :Observable<ProductAddress[]>{
    return this._http.put<ProductAddress[]>(`${environment.productAddressUrl}/${id}`, ProductAddress, this.httpOptions);
  }

  deleteProductAddress(id) :Observable<ProductAddress[]>{
    return this._http.delete<ProductAddress[]>(`${environment.productAddressUrl}/${id}`);
  }


  //  Price

  getPrices(page,size) :Observable<PagePrice>{
    return this._http.get<PagePrice>(`${environment.priceUrl}/?page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
  }

  getSearchingPrices(pricename,page,size):Observable<PagePrice>{
    return this._http.get<PagePrice>(`${environment.priceSearchUrl}?price=${pricename ? pricename : 100000}&page=${page}&size=${size}&sort=id,ASC`).pipe(
      map(response => {
        const data = response;
        console.log(data);
        return data ;
      }));
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
