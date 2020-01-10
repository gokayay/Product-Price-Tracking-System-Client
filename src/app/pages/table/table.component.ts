import { Component, OnInit } from '@angular/core';
import { Price } from 'app/models/price.model';
import { DataService } from 'app/data.service';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    prices: Price[];

    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.dataService.getPrices()
      .subscribe(data =>this.prices = data);
    }
}
