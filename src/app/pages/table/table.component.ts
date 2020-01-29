import { Component, OnInit, Input } from '@angular/core';
import { Price } from 'app/models/price.model';
import { DataService } from 'app/data.service';
import { PagePrice } from 'app/models/page-models/page-price.model';


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
    

    constructor(private dataService: DataService){
      this.size = "100";
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
      console.log(this.searchKey);
      this.dataService.getSearchingPrices(this.searchKey,pageNum, this.pageSize)
      .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        console.log(this.pageprices);
      });
    }
  
    searching(e){
      console.log(e.target.value);
      this.searchKey = e.target.value;
      this.dataService.getSearchingPrices(e.target.value, 0, this.pageSize)
      .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        console.log(this.pageprices);
      });
    }
  
  
    ngOnInit(){
      this.pageSize="5";
      this.searchKey="";
      this.dataService.getSearchingPrices(this.searchKey,this.page,this.pageSize)
      .subscribe(data =>{this.pageprices = data;
                        this.size=this.pageprices.totalElements;
                        });
    }
}
