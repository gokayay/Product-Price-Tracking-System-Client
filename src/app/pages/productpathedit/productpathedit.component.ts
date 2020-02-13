import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductAddress } from 'app/models/productaddress.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
    selector: 'productpathedit-cmp',
    moduleId: module.id,
    templateUrl: 'productpathedit.component.html'
})

export class ProductPathEditComponent implements OnInit {
    constructor(private dataService: DataService, private route: ActivatedRoute,private notificationService: NotificationsService) { }

    productpaths: ProductAddress[];
    productpath: ProductAddress = new ProductAddress();
    productPathForm: FormGroup;
    uptProductPath: ProductAddress = new ProductAddress();


    updateProductPath(e) {

        this.uptProductPath.id = this.productPathForm.get('formProductPathId').value;
        this.uptProductPath.productPath = this.productPathForm.get('formProductPath').value;

        this.dataService.putProductAddress(this.productpath.id, this.uptProductPath)
            .subscribe(data => this.productpaths = data);

    }
    deleteProductPath(e){

        this.uptProductPath.id = this.productPathForm.get('formProductPathId').value;
  
        this.dataService.deleteProductAddress(this.uptProductPath.id)
          .subscribe(data =>this.productpaths= data);
    }
    
    showNotification(from, align) {
      let message : String= "Product path updated successfully!";
      this.notificationService.showSuccessNotification(from,align,message);
    }
    showNotificationDelete(from, align) {
      let message : String= "Product path deleted successfully!";
      this.notificationService.showInfoNotification(from,align,message);
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.productpath = paramMap["params"]
            console.log(this.productpath.id);

            this.dataService.getOneProductAddress(this.productpath.id)
                .subscribe(data => {
                    this.productpath = data;
                    this.createForm();
                }
                );
        })
    }

    createForm() {
    this.productPathForm = new FormGroup({
        formProductPathId: new FormControl(
            { value: this.productpath.id, disabled: false },
            [Validators.required]
        ),
        formProductPath: new FormControl(
            { value: this.productpath.productPath, disabled: false },
            [Validators.required]
        ),
        formProductProductId: new FormControl(
            { value: this.productpath.product.id, disabled: false },
            [Validators.required]
        ),
        formProductName: new FormControl(
            { value: this.productpath.product.productName, disabled: false },
            [Validators.required]
        ),
        formProductSiteId: new FormControl(
            { value: this.productpath.site.id, disabled: false },
            [Validators.required]
        ),
        formSiteName: new FormControl(
            { value: this.productpath.site.siteName, disabled: false },
            [Validators.required]
        ),
    });
    }
}
