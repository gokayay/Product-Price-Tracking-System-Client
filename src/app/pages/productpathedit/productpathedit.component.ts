import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductAddress } from 'app/models/productaddress.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'productpathedit-cmp',
    moduleId: module.id,
    templateUrl: 'productpathedit.component.html'
})

export class ProductPathEditComponent implements OnInit{
    constructor(private dataService: DataService, private route :ActivatedRoute){}

    productpaths: ProductAddress[];
    productpath;
    productPathForm: FormGroup;
    uptProductPath : ProductAddress =  new ProductAddress();


    updateProduct(e){

        this.uptProductPath.id = this.productPathForm.get('formProductPathId').value;
        this.uptProductPath.productPath = this.productPathForm.get('formProductPath').value;

        this.dataService.putProductAddress(this.productpath.id, this.uptProductPath)
        .subscribe(data =>this.productpaths = data);

    }
  
    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.productpath = paramMap["params"]
            console.log(this.productpath);

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
              });
    })
}
}
