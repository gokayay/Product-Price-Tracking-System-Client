import {Product} from '../product.model' ;  

export class PageProduct {
    content : Product[];
    totalPages : string;
    totalElements : string;
    last : boolean;
    size : number ;
    first : boolean ;
    sort : string ;
    numberOfElements : number ;

}