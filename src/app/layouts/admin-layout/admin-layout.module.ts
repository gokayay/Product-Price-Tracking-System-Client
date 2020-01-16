import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
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
    CreateSiteComponent
  ]
})

export class AdminLayoutModule {}
