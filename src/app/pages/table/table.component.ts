import { Component, OnInit, Input } from '@angular/core';
import { Price } from 'app/models/price.model';
import { DataService } from 'app/data.service';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    prices: Price[];

    @Input() page : string;
    @Input() size : string;

    

    constructor(private dataService: DataService){
      this.size = "100";
    }
  

    passPage(paged){
      console.log(paged);
      this.dataService.getPrices(paged,this.size)
      .subscribe(data =>this.prices = data);
    }
  
    ngOnInit(){
      this.dataService.getPrices(this.page, this.size)
      .subscribe(data =>this.prices = data);
    }
}
