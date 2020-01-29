import { Price } from '../price.model';

export class PagePrice {
    content : Price[];
    totalPages : string;
    totalElements : string;
    last : boolean;
    size : number ;
    first : boolean ;
    sort : string ;
    numberOfElements : number ;

}