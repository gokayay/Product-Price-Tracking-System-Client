import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductAddress } from 'app/models/productaddress.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'app/models/product.model';
import { Site } from 'app/models/site.model';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-create-productpath',
  templateUrl: './create-productpath.component.html',
  styleUrls: ['./create-productpath.component.scss']
})
export class CreateProductpathComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute, private notificationService: NotificationsService) { 
      this.createdProductPath.product = this.createdProduct;
      this.createdProductPath.site = this.createdSite;
  }

  productpaths: ProductAddress[];
  productpath: ProductAddress = new ProductAddress();
  productPathForm: FormGroup;
  createdProductPath : ProductAddress =  new ProductAddress();
  createdProduct : Product =  new Product();
  createdSite : Site =  new Site();
  

    createProductPath(e){
        this.createdProductPath.productPath = this.productPathForm.get('formProductPath').value;
        this.createdProductPath.product.id = this.productPathForm.get('formProductProductId').value;
        this.createdProductPath.site.id = this.productPathForm.get('formProductSiteId').value;

        console.log(this.createdProductPath.productPath);
        this.dataService.postProductAddress( this.createdProductPath)
        .subscribe(data =>this.productpath = data);
    }
    
    showNotification(from, align) {
        let message : String= "Product path created successfully!";
        this.notificationService.showSuccessNotification(from,align,message);
      }


    ngOnInit() {
      this.productPathForm = new FormGroup({
        formProductPathId: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
        formProductPath: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
        formProductProductId: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
        formProductName: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
        formProductSiteId: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
        formSiteName: new FormControl(
            { value:"", disabled: false },
            [Validators.required]
        ),
    });
    }

   
}
