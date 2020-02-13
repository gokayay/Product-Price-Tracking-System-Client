import { Routes } from '@angular/router';

import { TableComponent } from '../../pages/table/table.component';
import { ProductListComponent } from '../../pages/productlist/productlist.component';
import { ProductPathsComponent } from 'app/pages/productpaths/productpaths.component';
import { SiteListComponent } from 'app/pages/sitelist/sitetlist.component';
import { HomepageComponent } from 'app/pages/homepage/homepage.component';
import { ProductEditComponent } from 'app/pages/productedit/productedit.component';
import { SiteEditComponent } from 'app/pages/siteedit/siteedit.component';
import { ProductPathEditComponent } from 'app/pages/productpathedit/productpathedit.component';
import { CreateProductComponent } from 'app/pages/create/createproduct/createproduct.component';
import { CreateSiteComponent } from 'app/pages/create/create-site/create-site.component';
import { CreateProductpathComponent } from 'app/pages/create/create-productpath/create-productpath.component';
import { PricesByProductComponent } from 'app/pages/specific-prices/prices-by-products/prices-by-product/prices-by-product.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'homepage',      component: HomepageComponent },
    { path: 'table',          component: TableComponent },
    { path: 'productlist',    component: ProductListComponent },
    { path: 'sitelist',     component: SiteListComponent },
    { path: 'productpaths',    component: ProductPathsComponent },
    { path: 'productedit',    component: ProductEditComponent },
    { path: 'siteedit',    component: SiteEditComponent },
    { path: 'productpathedit',    component: ProductPathEditComponent },
    { path: 'createproduct',    component: CreateProductComponent },
    { path: 'create-site',    component: CreateSiteComponent },
    { path: 'create-productpath',    component: CreateProductpathComponent },
    { path: 'pricesbyproduct',    component: PricesByProductComponent },
];
