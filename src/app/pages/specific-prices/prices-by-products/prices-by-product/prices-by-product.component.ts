import { Component, OnInit, Input } from '@angular/core';
import { Price } from 'app/models/price.model';
import { PagePrice } from 'app/models/page-models/page-price.model';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';
import * as CanvasJS from 'assets/canvasjs/canvasjs.min';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-prices-by-product',
  templateUrl: './prices-by-product.component.html',
  styleUrls: ['./prices-by-product.component.scss']
})
export class PricesByProductComponent implements OnInit {
  constructor(private dataService: DataService, private route :ActivatedRoute, public datepipe: DatePipe){
  }

  prices: Price[];

  priceHb: Price[] = [];
  priceTr: Price[] = [];
  priceAm: Price[] = [];
  priceN11: Price[] = [];
  priceGg: Price[] = [];
  priceUnknown: Price[] = [];

  pageprices: PagePrice = new PagePrice();

  @Input() page: string;  // page number 
  @Input() size: string;  // size of all items
  @Input() pageSize: string;  // size of items per page
  @Input() searchKey : string; // search key 
  product : Product = new Product; // for specific product's price

  chart: Chart;
  ctx: Chart;
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

  dateFormatChanger(incomingDate){
    incomingDate = this.datepipe.transform(incomingDate , 'MM/dd/yyyy');
    return incomingDate;
  }

  mapMarketData(data){
    let result = [];
    data.map(resp=>{
      console.log(resp)
    result.push( {x:  new Date(resp.date) , y: resp.price});
  }) 

  return result;
  }


  ngOnInit(){
    this.route.paramMap.subscribe( paramMap =>{ // for incoming product parameter
      this.product = paramMap["params"];
      this.pageSize="500";

      console.log(this.product);

      this.dataService.getSearchingPrices(this.product.id, 1, this.pageSize)
     /* .pipe(
        map(resp=>{ resp["date"]  = 1 ;
          return resp }) // for specific product's prices (pageable)
      )*/
    .subscribe(data =>{this.pageprices = data;
        this.size=this.pageprices.totalElements;
        this.prices=this.pageprices.content;
        
      
        // E-Ticaret Siteleri için DataSet Ayarlama
        for (let price of this.prices.values()) {
          if(price.site.id==1){
            price.date = this.datepipe.transform(price.date , 'MM/dd/yyyy'); // no need this in Canvas.Js
            this.priceHb.push(price);
          }
          if(price.site.id==2){
            price.date = this.datepipe.transform(price.date , 'MM/dd/yyyy'); 
            this.priceTr.push(price);
          }
          if(price.site.id==3){
            price.date = this.datepipe.transform(price.date , 'MM/dd/yyyy'); 
            this.priceAm.push(price);
          }
          if(price.site.id==4){
            price.date = this.datepipe.transform(price.date , 'MM/dd/yyyy'); 
            this.priceN11.push(price);
          }
          if(price.site.id==5){
            price.date = this.datepipe.transform(price.date , 'MM/dd/yyyy'); 
            this.priceGg.push(price);
          }
          else
            this.priceUnknown.push(price);
        }


        let chartCanvas = new CanvasJS.Chart("chartContainer", {
          
          animationEnabled: true,
          axisX: {
            valueFormatString: "MMM-DD-YYYY"
          },
          axisY2: {
            title: "Prices",
            suffix: " TL"
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: false,
            itemclick : toggleDataSeries
          },
          data: [{
            type:"spline",
            visible: true,
            axisYType: "secondary",
            name: "Hepsiburada",
            showInLegend: true,
            markerSize: 5,
            yValueFormatString: "#####TL",
            dataPoints:   
              this.mapMarketData(this.priceHb)
            
          },
          {
            type: "spline",
            visible: true,
            axisYType: "secondary",
            name: "Trendyol",
            showInLegend: true,
            markerSize: 5,
            yValueFormatString: "#####TL",
            dataPoints: 
              this.mapMarketData(this.priceTr)		
          },
          {
            type: "spline",
            visible: true,
            axisYType: "secondary",
            name: "Amazon",
            showInLegend: true,
            markerSize: 5,
            yValueFormatString: "#####TL",
            dataPoints:  this.mapMarketData(this.priceAm)	
          },
          {
            type: "spline",
            visible: true,
            axisYType: "secondary",
            name: "N11",
            showInLegend: true,
            markerSize: 5,
            yValueFormatString: "#####TL",
            dataPoints:  this.mapMarketData(this.priceN11)	
          },
          {
            type: "spline",
            visible: true,
            axisYType: "secondary",
            name: "GittiGidiyor",
            showInLegend: true,
            markerSize: 5,
            yValueFormatString: "#####TL",
            dataPoints:  this.mapMarketData(this.priceGg)	
          }]
        });
        chartCanvas.render();

        function toggleDataSeries(e){
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else{
            e.dataSeries.visible = true;
          }
          chartCanvas.render();
        }

      });
    });
  }
}
