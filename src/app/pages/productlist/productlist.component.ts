import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';


@Component({
    selector: 'productlist-cmp',
    moduleId: module.id,
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit{
   
    products: Product[];

    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.dataService.getProducts()
      .subscribe(data =>this.products = data);
    }
}
