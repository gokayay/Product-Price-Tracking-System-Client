import {ProductAddress} from '../productaddress.model' ;  

export class PageProductAddress {
    content : ProductAddress[];
    totalPages : string;
    totalElements : string;
    last : boolean;
    size : number ;
    first : boolean ;
    sort : string ;
    numberOfElements : number ;

}