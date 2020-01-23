import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';


@Component({
    selector: 'productlist-cmp',
    moduleId: module.id,
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit{
   
    products: Product[];
    @Input() page: string;

    passPage(paged){
      console.log(paged);
      this.dataService.getProducts(paged)
      .subscribe(data =>this.products = data);
    }
 
    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.dataService.getProducts(this.page)
      .subscribe(data =>this.products = data);
    }
}
