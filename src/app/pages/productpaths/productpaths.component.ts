import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/data.service';
import { ProductAddress } from 'app/models/productaddress.model';
import {PageProductAddress} from 'app/models/page-models/page-productaddress.model';

@Component({
    selector: 'productpaths-cmp',
    moduleId: module.id,
    templateUrl: 'productpaths.component.html'
})

export class ProductPathsComponent implements OnInit{
   
   
  constructor(private dataService: DataService){}

  productaddresses: ProductAddress[];
  pageproductaddresses: PageProductAddress;
  @Input() page: string;  // page number 
  @Input() size: string;  // size of all items
  @Input() pageSize: string;  // size of items per page
  @Input() searchKey : string; // search key 
  
  pageSizeInput(e){
    console.log(e.target.value);
    this.pageSize=e.target.value;
    this.dataService.getProductAddresses(0, e.target.value)
    .subscribe(data =>{this.pageproductaddresses = data;
    });
  }

  passPage(pageNum){
    console.log(pageNum);
    console.log(this.searchKey);
    this.dataService.getSearchingProductAddress(this.searchKey,pageNum, this.pageSize)
    .subscribe(data =>{this.pageproductaddresses = data;
      this.size=this.pageproductaddresses.totalElements;
      console.log(this.pageproductaddresses);
    });
  }

  searching(e){
    console.log(e.target.value);
    this.searchKey = e.target.value;
    this.dataService.getSearchingProductAddress(e.target.value, 0, this.pageSize)
    .subscribe(data =>{this.pageproductaddresses = data;
      this.size=this.pageproductaddresses.totalElements;
      console.log(this.pageproductaddresses);
    });
  }


  ngOnInit(){
    this.pageSize="5";
    this.searchKey="";
    this.dataService.getSearchingProductAddress(this.searchKey,this.page,this.pageSize)
    .subscribe(data =>{this.pageproductaddresses = data;
                      this.size=this.pageproductaddresses.totalElements;
                      });
  }
}
