import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { ProductListComponent }     from '../../pages/productlist/productlist.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
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
