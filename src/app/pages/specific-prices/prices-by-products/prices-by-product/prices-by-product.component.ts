import { Component, OnInit, Input } from '@angular/core';
import { Price } from 'app/models/price.model';
import { PagePrice } from 'app/models/page-models/page-price.model';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prices-by-product',
  templateUrl: './prices-by-product.component.html',
  styleUrls: ['./prices-by-product.component.scss']
})
export class PricesByProductComponent implements OnInit {


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
    this.dataService.getSearchingPrices(this.product.id, 0, e.target.value)
    .subscribe(data =>{this.pageprices = data;
    });
  }

  passPage(pageNum){
    console.log(pageNum);
    this.dataService.getSearchingPrices(this.product.id,pageNum, this.pageSize)
    .subscribe(data =>{this.pageprices = data;
      this.size=this.pageprices.totalElements;
      console.log(this.pageprices);
    });
  }

  searching(product_id){
    this.dataService.getSearchingPrices(product_id, 1, this.pageSize)
    .subscribe(data =>{this.pageprices = data;
      this.size=this.pageprices.totalElements;
      console.log(this.pageprices);
    });
  }


  ngOnInit(){
    this.route.paramMap.subscribe( paramMap =>{
      this.product = paramMap["params"];
      this.pageSize="50";
      console.log(this.product);
      
      this.searching(this.product.id);
    });
  }
}
