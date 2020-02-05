import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
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
import { LineChartComponent } from 'app/pages/chart-example/line-chart/line-chart.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'homepage',      component: HomepageComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'productlist',    component: ProductListComponent },
    { path: 'sitelist',     component: SiteListComponent },
    { path: 'productpaths',    component: ProductPathsComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'productedit',    component: ProductEditComponent },
    { path: 'siteedit',    component: SiteEditComponent },
    { path: 'productpathedit',    component: ProductPathEditComponent },
    { path: 'createproduct',    component: CreateProductComponent },
    { path: 'create-site',    component: CreateSiteComponent },
    { path: 'create-productpath',    component: CreateProductpathComponent },
    { path: 'pricesbyproduct',    component: PricesByProductComponent },
    { path: 'line-chart',    component: LineChartComponent },


];
