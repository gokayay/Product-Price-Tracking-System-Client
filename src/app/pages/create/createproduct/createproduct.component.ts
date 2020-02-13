import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { DataService } from 'app/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
    selector: 'createproduct-cmp',
    moduleId: module.id,
    templateUrl: 'createproduct.component.html'
})

export class CreateProductComponent implements OnInit{

    constructor(private dataService: DataService, private notificationService: NotificationsService){}

    products: Product[];
    productForm: FormGroup;
    createdProduct : Product =  new Product();


    createProduct(e){

        this.createdProduct.productName = this.productForm.get('formProductName').value;
        this.createdProduct.productComment = this.productForm.get('formProductComment').value;
        this.createdProduct.productImg = this.productForm.get('formProductImg').value;

        console.log(this.createdProduct);

        this.dataService.postProduct(this.createdProduct)
        .subscribe(data =>this.products = data);
    }

    showNotification(from, align) {
      let message : String= "Product created successfully!";
      this.notificationService.showSuccessNotification(from,align,message);
    }
  
    ngOnInit(){
            this.productForm = new FormGroup({
                  formProductName: new FormControl(
                    { value: this.createdProduct.productName, disabled: false },
                    [Validators.required]
                  ),
                  formProductComment: new FormControl(
                    { value: this.createdProduct.productComment, disabled: false },
                    [Validators.required]
                  ),
                  formProductImg: new FormControl(
                    { value: this.createdProduct.productImg, disabled: false },
                    [Validators.required]
                  ),
              });
    }
}


