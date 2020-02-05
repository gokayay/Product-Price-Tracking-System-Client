import { Component, OnInit, Input } from '@angular/core';
import { Price } from 'app/models/price.model';
import { PagePrice } from 'app/models/page-models/page-price.model';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-prices-by-product',
  templateUrl: './prices-by-product.component.html',
  styleUrls: ['./prices-by-product.component.scss']
})
export class PricesByProductComponent implements OnInit {
  constructor(private dataService: DataService, private route :ActivatedRoute){
  }

  prices: Price[];
  priceHb: Price = new Price();
  pageprices: PagePrice = new PagePrice();
  @Input() page: string;  // page number 
  @Input() size: string;  // size of all items
  @Input() pageSize: string;  // size of items per page
  @Input() searchKey : string; // search key 
  product : Product = new Product; // for specific product's price
  chart: Chart;
  dates: any = [];

  pageSizeInput(e){
    this.pageSize=e.target.value;
    this.dataService.getSearchingPrices(this.product.id, 0, e.target.value)
    .subscribe(data =>{this.pageprices = data;
    });
  }

  passPage(pageNum){
    this.dataService.getSearchingPrices(this.product.id,pageNum, this.pageSize)
    .subscribe(data =>{this.pageprices = data;
      this.size=this.pageprices.totalElements;
    });
  }


  ngOnInit(){
    this.route.paramMap.subscribe( paramMap =>{ // for incoming product parameter
      this.product = paramMap["params"];
      this.pageSize="150";

      console.log(this.product);

      this.dataService.getSearchingPrices(this.product.id, 1, this.pageSize) // for specific product's prices (pageable)
    .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        this.prices=this.pageprices.content;
        //
        // BUG
        // buradan sonra elimizde 50'lik bir array oluşuyor. (Pageable olduğundan ötürü) 
        // Bundan kaçınmak için pageable kaldırılmalı
        // BUG
        //

        console.log(this.prices.map(data=> data.date.toLocaleString()));
        //date'leri tutmak için
        for (let price of this.prices.values()) {
          this.dates.push(price.date);
        }


        // E-Ticaret Siteleri için DataSet Ayarlama
        for (let price of this.prices.values()) {
          if(price.site.id==1){
            //Hepsiburada
          }
        }

        //FOR TOMORROW
        // bunun yerine date'ler önceki 7 günü alıp labellenecek!

        this.chart = new Chart('canvas', { // for chart
          type: 'line',
          data: {
            labels: this.dates, 
            datasets: [
              { data: [85, 72, 78, 75, 77, 75], label: 'Hepsiburada' , fill: false},
              { data: [60, 50, 90, 100, 55, 78], label: 'Trendyol' , fill: false},
              { data: [55, 80, 70, 90, 65, 85], label: 'Amazon' , fill: false},
              { data: [49, 90, 79, 85, 75, 70], label: 'Gittigidiyor' , fill: false},
              { data: [90, 85, 75, 95, 72, 69], label: 'N11' , fill: false},
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
    });
  }
}
