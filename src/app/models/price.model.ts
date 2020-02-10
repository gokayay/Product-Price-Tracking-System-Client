import { Product } from './product.model';
import { Site } from './site.model';

export class Price{
    id : number;
    price : number;
    date : string;
    product: Product;
    site: Site;
}