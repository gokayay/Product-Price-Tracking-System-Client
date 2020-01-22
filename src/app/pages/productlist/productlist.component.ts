import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';


@Component({
    selector: 'productlist-cmp',
    moduleId: module.id,
    templateUrl: 'productlist.component.html'
})

export class ProductListComponent implements OnInit{
   
    products: Product[];
    @Input() page: string;

    passPage(e,pageFromHtml){
      this.page = pageFromHtml;
      console.log(this.page);

    }
 
    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.page="1";
      this.dataService.getProducts(this.page)
      .subscribe(data =>this.products = data);
    }

    ngOnChanges(changes : SimpleChanges){
      console.log(changes);
      const pageValue = changes['date'];
    }
}
