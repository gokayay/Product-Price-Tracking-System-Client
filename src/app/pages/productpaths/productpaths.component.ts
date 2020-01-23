import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/data.service';
import { ProductAddress } from 'app/models/productaddress.model';


@Component({
    selector: 'productpaths-cmp',
    moduleId: module.id,
    templateUrl: 'productpaths.component.html'
})

export class ProductPathsComponent implements OnInit{
   
    productpaths: ProductAddress[];
    @Input() page : string;

    constructor(private dataService: DataService){}
  

    passPage(paged){
      console.log(paged);
      this.dataService.getProductAddresses(paged)
      .subscribe(data =>this.productpaths = data);
    }

    ngOnInit(){
      this.dataService.getProductAddresses(this.page)
      .subscribe(data =>{
        this.productpaths = data;
      });
    }
}
