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
  
    constructor(private dataService: DataService){}

    products: Product[];
    pageproducts: PageProduct;
    @Input() page: string;  // page number 
    @Input() size: string;  // size of all items
    @Input() pageSize: string;  // size of items per page
    @Input() searchKey : string; // search key 
    

    pageSizeInput(e){
      console.log(e.target.value);
      this.pageSize=e.target.value;
      this.dataService.getProducts(0, e.target.value)
      .subscribe(data =>{this.pageproducts = data;
      });
    }

    passPage(pageNum){
      console.log(pageNum);
      console.log(this.searchKey);
      this.dataService.getSearchingProducts(this.searchKey,pageNum, this.pageSize)
      .subscribe(data =>{this.pageproducts = data;
        this.size=this.pageproducts.totalElements;
        console.log(this.pageproducts);
      });
    }
 
    searching(e){
      console.log(e.target.value);
      this.searchKey = e.target.value;
      this.dataService.getSearchingProducts(e.target.value, 0, this.pageSize)
      .subscribe(data =>{this.pageproducts = data;
        this.size=this.pageproducts.totalElements;
        console.log(this.pageproducts);
      });
    }
 
    ngOnInit(){
      this.pageSize="3";
      this.searchKey="";
      this.dataService.getSearchingProducts(this.searchKey,this.page,this.pageSize)
      .subscribe(data =>{this.pageproducts = data;
                        this.size=this.pageproducts.totalElements;
                        });
    }
}
