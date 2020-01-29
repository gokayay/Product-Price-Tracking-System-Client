import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';
import { Site } from 'app/models/site.model';
import { PageSite } from 'app/models/page-models/page-site.model';


@Component({
    selector: 'sitelist-cmp',
    moduleId: module.id,
    templateUrl: 'sitelist.component.html'
})

export class SiteListComponent implements OnInit{
   
  constructor(private dataService: DataService){}

  sites: Site[];
  pagesites: PageSite;
  @Input() page: string;  // page number 
  @Input() size: string;  // size of all items
  @Input() pageSize: string;  // size of items per page
  @Input() searchKey : string; // search key 
  
  pageSizeInput(e){
    console.log(e.target.value);
    this.pageSize=e.target.value;
    this.dataService.getSites(0, e.target.value)
    .subscribe(data =>{this.pagesites = data;
    });
  }

  passPage(pageNum){
    console.log(pageNum);
    console.log(this.searchKey);
    this.dataService.getSearchingSites(this.searchKey,pageNum, this.pageSize)
    .subscribe(data =>{this.pagesites = data;
      this.size=this.pagesites.totalElements;
      console.log(this.pagesites);
    });
  }

  searching(e){
    console.log(e.target.value);
    this.searchKey = e.target.value;
    this.dataService.getSearchingSites(e.target.value, 0, this.pageSize)
    .subscribe(data =>{this.pagesites = data;
      this.size=this.pagesites.totalElements;
      console.log(this.pagesites);
    });
  }


  ngOnInit(){
    this.pageSize="3";
    this.searchKey="";
    this.dataService.getSearchingSites(this.searchKey,this.page,this.pageSize)
    .subscribe(data =>{this.pagesites = data;
                      this.size=this.pagesites.totalElements;
                      });
  }
}
