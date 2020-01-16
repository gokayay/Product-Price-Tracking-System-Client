import { Product } from './product.model';
import { Site } from './site.model';

export class ProductAddress{
    id : number;
    productPath : string;
    product: Product;
    site: Site;
}