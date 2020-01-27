import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';
import { HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'productlist-cmp',
    moduleId: module.id,
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit{
   
    products: Product[];
    @Input() page: string;
    @Input() size: string;
    @Input() pageSize: string;


    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'size' : this.size , 'pageSize' : this.pageSize })};
    //const httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json', 'size' : this.size , 'pageSize' : this.pageSize });

    passPage(paged){
      console.log(paged);
      this.dataService.getProducts(paged)
      .subscribe(data =>{this.products = data;
      });
    }
 
    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.size="17";
      this.pageSize="3";

      this.dataService.getProducts(this.page)
      .subscribe(data =>this.products = data);
    }
}
