import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productedit-cmp',
    moduleId: module.id,
    templateUrl: 'productedit.component.html'
})

export class ProductEditComponent implements OnInit{
    products: Product[];
    product;

    constructor(private dataService: DataService, private route :ActivatedRoute){}
  
    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.product = paramMap["params"]
            console.log(this.product);
    })
}
    updateProduct(e){
        this.dataService.putProduct(e)
        .subscribe(data =>this.products = data);

    }
}
