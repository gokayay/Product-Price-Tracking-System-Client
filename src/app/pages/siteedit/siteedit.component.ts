import { Component, OnInit } from '@angular/core';import {ActivatedRoute} from '@angular/router';
import { DataService } from 'app/data.service';
import { Site } from 'app/models/site.model';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'siteedit-cmp',
    moduleId: module.id,
    templateUrl: 'siteedit.component.html'
})

export class SiteEditComponent implements OnInit{
    siteForm: FormGroup;
    constructor(private dataService: DataService ,private route :ActivatedRoute){
    }

    sites : Site[];
    site;


    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.site = paramMap["params"]
            console.log(this.site);
        }
        )
        this.siteForm = new FormGroup({
            formSiteId: new FormControl(),
            formSiteName: new FormControl(''),
            formSiteUrl: new FormControl(''),
            formSiteImg: new FormControl(''),
            formSiteXpath: new FormControl('')
          });
    }
    
    onSubmit(){
          console.log(this.siteForm.value);
          console.log(this.siteForm.value.formSiteId);
      }
    
    updateSite(e,updatedSite){
    this.dataService.putSite(this.site.id, JSON.stringify(updatedSite))
    .subscribe(data =>this.sites = data);
    console.log(JSON.stringify(updatedSite));
    console.log(this.site.id);
    }
}
