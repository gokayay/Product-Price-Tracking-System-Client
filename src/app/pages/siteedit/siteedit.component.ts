import { Component, OnInit } from '@angular/core';import {ActivatedRoute} from '@angular/router';
import { DataService } from 'app/data.service';
import { Site } from 'app/models/site.model';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';


@Component({
    selector: 'siteedit-cmp',
    moduleId: module.id,
    templateUrl: 'siteedit.component.html'
})

export class SiteEditComponent implements OnInit{

    constructor(private dataService: DataService ,private route :ActivatedRoute, private notificationService: NotificationsService){}

    siteForm: FormGroup;
    sites : Site[];
    site;
    uptSite : Site =  new Site();



    updateSite(e){
        const formValues = this.siteForm.value;
        console.log(formValues);
        
        this.uptSite.id = this.siteForm.get('formSiteId').value;
        this.uptSite.siteName = this.siteForm.get('formSiteName').value;
        this.uptSite.siteUrl = this.siteForm.get('formSiteUrl').value;
        this.uptSite.siteImg = this.siteForm.get('formSiteImg').value;
        this.uptSite.siteXpath = this.siteForm.get('formSiteXpath').value;

        this.dataService.putSite(this.site.id, this.uptSite)
        .subscribe(data =>{
            console.log("data: ",data)
            this.sites = data
        });
        }


    deleteSite(e){

      this.uptSite.id = this.siteForm.get('formSiteId').value;

      this.dataService.deleteSite(this.uptSite.id)
        .subscribe(data =>this.sites = data);
    }

    showNotification(from, align) {
      let message : String= "E-commerce site updated successfully!";
      this.notificationService.showSuccessNotification(from,align,message);
    }
    showNotificationDelete(from, align) {
      let message : String= "E-commerce site deleted successfully!";
      this.notificationService.showInfoNotification(from,align,message);
    }


    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.site = paramMap["params"]
            console.log(this.site);
            this.siteForm = new FormGroup({
                formSiteId: new FormControl(
                    { value: this.site.id, disabled: false },
                    [Validators.required]
                  ),
                  formSiteName: new FormControl(
                    { value: this.site.siteName, disabled: false },
                    [Validators.required]
                  ),
                  formSiteUrl: new FormControl(
                    { value: this.site.siteUrl, disabled: false },
                    [Validators.required]
                  ),
                  formSiteImg: new FormControl(
                    { value: this.site.siteImg, disabled: false },
                    [Validators.required]
                  ),
                  formSiteXpath: new FormControl(
                    { value: this.site.siteXpath, disabled: false },
                    [Validators.required]
                  ),
              });
        }
        )

    }

}
