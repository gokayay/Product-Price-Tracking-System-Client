import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { TableComponent }           from '../../pages/table/table.component';
import { ProductListComponent }     from '../../pages/productlist/productlist.component';
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



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    TableComponent,
    ProductListComponent,
    ProductPathsComponent,
    SiteListComponent,
    HomepageComponent,
    ProductEditComponent,
    SiteEditComponent,
    ProductPathEditComponent,
    CreateProductComponent,
    CreateSiteComponent,
    CreateProductpathComponent,
    PricesByProductComponent,

  ]
})

export class AdminLayoutModule {}
