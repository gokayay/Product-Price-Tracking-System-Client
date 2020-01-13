import { Component, OnInit } from '@angular/core';import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'siteedit-cmp',
    moduleId: module.id,
    templateUrl: 'siteedit.component.html'
})

export class SiteEditComponent implements OnInit{
    constructor(private route :ActivatedRoute){
    }

    product;

    ngOnInit(){
        this.route.paramMap.subscribe( paramMap =>{
            this.product = paramMap["params"]
            console.log(this.product);
        }
        )
    }
}
