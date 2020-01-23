import { Component, OnInit, Input } from '@angular/core';
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
    @Input() page: string;

    constructor(private dataService: DataService){}
    
    passPage(paged){
      console.log(paged);
      this.dataService.getSites(paged)
      .subscribe(data =>this.sites = data);
    }

    ngOnInit(){
      this.dataService.getSites(this.page)
      .subscribe(data =>this.sites = data);
    }
}
