import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { Product } from 'app/models/product.model';
import { Site } from 'app/models/site.model';


@Component({
    selector: 'sitelist-cmp',
    moduleId: module.id,
    templateUrl: 'sitelist.component.html'
})

export class SiteListComponent implements OnInit{
   
    sites: Site[];

    constructor(private dataService: DataService){}
  
    ngOnInit(){
      this.dataService.getSites()
      .subscribe(data =>this.sites = data);
    }
}
