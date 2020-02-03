import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Price } from 'app/models/price.model';
import { DataService } from 'app/data.service';
import { PagePrice } from 'app/models/page-models/page-price.model';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product.model';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    prices: Price[];
    pageprices: PagePrice = new PagePrice();
    @Input() page: string;  // page number 
    @Input() size: string;  // size of all items
    @Input() pageSize: string;  // size of items per page
    @Input() searchKey : string; // search key 
    product : Product = new Product; // for specific product's price

    constructor(private dataService: DataService, private route :ActivatedRoute){
    }

    
    pageSizeInput(e){
      console.log(e.target.value);
      this.pageSize=e.target.value;
      this.dataService.getPrices(0, e.target.value)
      .subscribe(data =>{this.pageprices = data;
      });
    }
  
    passPage(pageNum){
      console.log(pageNum);
      this.dataService.getPrices(pageNum, this.pageSize)
      .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        console.log(this.pageprices);
      });
    }
  
    searching(product_id){
      this.dataService.getSearchingPrices(product_id, 0, this.pageSize)
      .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        console.log(this.pageprices);
      });
    }
  
  
    ngOnInit(){
      this.route.paramMap.subscribe( paramMap =>{
        this.product = paramMap["params"];

       console.log(this.product);
       this.searching(this.product.id);
      });

      this.pageSize="100";
      this.searchKey="";
      this.dataService.getPrices(this.page,this.pageSize)
      .subscribe(data =>{this.pageprices = data;
                        this.size=this.pageprices.totalElements;
                        });
    }

}
