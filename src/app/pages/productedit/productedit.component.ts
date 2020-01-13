import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';

@Component({
    selector: 'productedit-cmp',
    moduleId: module.id,
    templateUrl: 'productedit.component.html'
})

export class ProductEditComponent implements OnInit{
    products: Product[];

    constructor(private dataService: DataService){}
  
    ngOnInit(){
    }

    updateProduct(e){
        this.dataService.putProduct(e)
        .subscribe(data =>this.products = data);

    }
}
