import { Product } from './product.model';
import { Site } from './site.model';

export class Price{
    id : number;
    price : string;
    date : string;
    product: Product;
    site: Site;
}