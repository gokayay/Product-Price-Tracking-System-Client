import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'app/data.service';
import { Site } from 'app/models/site.model';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  moduleId: module.id,
  styleUrls: ['./create-site.component.scss']
})
export class CreateSiteComponent implements OnInit {

  constructor(private dataService: DataService){}

  siteForm: FormGroup;
  sites : Site[];
  createdSite : Site =  new Site();



  createSite(e){
      const formValues = this.siteForm.value;
      console.log(formValues);
      
      this.createdSite.siteName = this.siteForm.get('formSiteName').value;
      this.createdSite.siteUrl = this.siteForm.get('formSiteUrl').value;
      this.createdSite.siteImg = this.siteForm.get('formSiteImg').value;
      this.createdSite.siteXpath = this.siteForm.get('formSiteXpath').value;

      this.dataService.postSite(this.createdSite)
      .subscribe(data =>{this.sites = data});
      }

  ngOnInit(){
        this.siteForm = new FormGroup({
              formSiteName: new FormControl(
                { value: this.createdSite.siteName, disabled: false },
                [Validators.required]
              ),
              formSiteUrl: new FormControl(
                { value: this.createdSite.siteUrl, disabled: false },
                [Validators.required]
              ),
              formSiteImg: new FormControl(
                { value: this.createdSite.siteImg, disabled: false },
                [Validators.required]
              ),
              formSiteXpath: new FormControl(
                { value: this.createdSite.siteXpath, disabled: false },
                [Validators.required]
              ),
          });
    }
    
}
