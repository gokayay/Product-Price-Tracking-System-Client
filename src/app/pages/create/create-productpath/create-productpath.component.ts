import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductAddress } from 'app/models/productaddress.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-productpath',
  templateUrl: './create-productpath.component.html',
  styleUrls: ['./create-productpath.component.scss']
})
export class CreateProductpathComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  productpaths: ProductAddress[];
  productpath: ProductAddress = new ProductAddress();
  productPathForm: FormGroup;
    createdProductPath : ProductAddress =  new ProductAddress();


    createProductPath(e){
        console.log(this.productPathForm)
        // aşağıdan get ile alamıyor burayı incele
        this.createdProductPath.productPath = this.productPathForm.get('formProductPath').value;
        this.createdProductPath.product.id = this.productPathForm.get('formProductProductId').value;
        this.createdProductPath.site.id = this.productPathForm.get('formProductSiteId').value;
        this.createdProductPath.product.id = this.productPathForm.get('formProductSiteId').value;


        console.log(this.createdProductPath);
        this.dataService.postProductAddress( this.createdProductPath)
        .subscribe(data =>this.productpath = data);

    }


    ngOnInit() {
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
