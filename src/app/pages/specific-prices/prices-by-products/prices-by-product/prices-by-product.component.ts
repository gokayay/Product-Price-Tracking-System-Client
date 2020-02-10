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
  chart2: Chart;
  dates: any = [];
  allprices: any = [];


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

        console.log(this.prices);
        console.log(this.prices.map(data=> data.date.toLocaleString()));
        //date'leri tutmak için
        for (let price of this.prices.values()) {
          let nDate = new Date(price.date);
          this.dates.push(nDate.toLocaleDateString());
        }


        // E-Ticaret Siteleri için DataSet Ayarlama
        for (let price of this.prices.values()) {
          if(price.site.id==2){
            //Hepsiburada
            this.priceHb.price=price.price;
          }
        }

        console.log(this.priceHb);

        //FOR TOMORROW
        // bunun yerine date'ler önceki 7 günü alıp labellenecek!


        let labels = this.prices.map(data => data.date);
        this.allprices = this.prices.map(data => data.price);

        console.log(labels);
        console.log(this.allprices);

        this.chart = new Chart('canvas', { // for chart
          type: 'line',
          data: {
           labels: labels, 
            datasets: [ {data: this.allprices, label: 'AllPrices', fill: false},
                        /*
              { data: [85, 72, 78, 75, 77, 75], label: 'Hepsiburada' , fill: false},*/
            ]/* 
            datasets: [{
              // This dataset appears on the first axis
              yAxisID: 'first-y-axis'
          }, {
              // This dataset appears on the second axis
              yAxisID: 'second-y-axis'
          }]*/
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
/*
        this.chart2 =new Chart('chart', {
          type: 'line',
          data: {
            labels: [new Date("2015-3-15 13:3").toLocaleString(), new Date("2015-3-25 13:2").toLocaleString(), new Date("2015-4-25 14:12").toLocaleString()],
            datasets: [{
              label: 'Demo',
              data: [{
                  t: new Date("2015-3-15 13:3"),
                  y: 12
                },
                {
                  t: new Date("2015-3-25 13:2"),
                  y: 21
                },
                {
                  t: new Date("2015-4-25 14:12"),
                  y: 32
                }
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
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
        });*/

      });
    });
  }
}
