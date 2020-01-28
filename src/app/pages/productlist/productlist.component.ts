import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';
import { HttpHeaders } from '@angular/common/http';
import { PageProduct } from 'app/models/page-models/page-product.model';


@Component({
    selector: 'productlist-cmp',
    moduleId: module.id,
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit{
   
    products: Product[];
    pageproducts: PageProduct;
    @Input() page: string;
    @Input() size: string;
    @Input() pageSize: string;
    
    pageSizeInput(e){
      console.log(e.target.value);
      this.pageSize=e.target.value;
      this.dataService.getProducts(0, e.target.value)
      .subscribe(data =>{this.pageproducts = data;
      });
    }

    passPage(paged){
      console.log(paged);
      this.dataService.getProducts(paged, this.pageSize)
      .subscribe(data =>{this.pageproducts = data;
      });
    }
 
    constructor(private dataService: DataService){}
  
    ngOnInit(){
      //this.size="17";
      this.pageSize="3";

      this.dataService.getProducts(this.page,this.pageSize)
      .subscribe(data =>{this.pageproducts = data;
                        this.size=this.pageproducts.totalElements;
                        });
    }
}
