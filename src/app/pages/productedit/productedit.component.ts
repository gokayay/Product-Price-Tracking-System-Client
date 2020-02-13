import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
    selector: 'productedit-cmp',
    moduleId: module.id,
    templateUrl: 'productedit.component.html'
})

export class ProductEditComponent implements OnInit{

    constructor(private dataService: DataService, private route :ActivatedRoute, private notificationService: NotificationsService){}

    products: Product[];
    product;
    productForm: FormGroup;
    uptProduct : Product =  new Product();


    updateProduct(e){

        this.uptProduct.id = this.productForm.get('formProductId').value;
        this.uptProduct.productName = this.productForm.get('formProductName').value;
        this.uptProduct.productComment = this.productForm.get('formProductComment').value;
        this.uptProduct.productImg = this.productForm.get('formProductImg').value;


        this.dataService.putProduct(this.product.id, this.uptProduct)
        .subscribe(data =>this.products = data);

    }


    deleteProduct(e){

      this.uptProduct.id = this.productForm.get('formProductId').value;

      this.dataService.deleteProduct(this.uptProduct.id)
        .subscribe(data =>this.products = data);
    }

    showNotification(from, align) {
      let message : String= "Product updated successfully!";
      this.notificationService.showSuccessNotification(from,align,message);
    }
    showNotificationDelete(from, align) {
      let message : String= "Product deleted successfully!";
      this.notificationService.showInfoNotification(from,align,message);
    }
  
    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.product = paramMap["params"]
            console.log(this.product);

            this.productForm = new FormGroup({
                formProductId: new FormControl(
                    { value: this.product.id, disabled: false },
                    [Validators.required]
                  ),
                  formProductName: new FormControl(
                    { value: this.product.productName, disabled: false },
                    [Validators.required]
                  ),
                  formProductComment: new FormControl(
                    { value: this.product.productComment, disabled: false },
                    [Validators.required]
                  ),
                  formProductImg: new FormControl(
                    { value: this.product.productImg, disabled: false },
                    [Validators.required]
                  ),
              });
    })
}

}
