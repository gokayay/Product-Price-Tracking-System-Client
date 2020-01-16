import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';
import { ProductAddress } from 'app/models/productaddress.model';


@Component({
    selector: 'productpaths-cmp',
    moduleId: module.id,
    templateUrl: 'productpaths.component.html'
})

export class ProductPathsComponent implements OnInit{
   
    productpaths: ProductAddress[];

    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.dataService.getProductAddresses()
      .subscribe(data =>{
        this.productpaths = data;
      });
    }
}
