import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/homepage',     title: 'Homepage',         icon:'nc-bank',       class: '' },
    //{ path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    //{ path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    //{ path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    //{ path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Price List',        icon:'nc-money-coins',    class: '' },
    { path: '/sitelist',      title: 'Site List',         icon:'nc-cart-simple',    class: '' },
    { path: '/productlist',   title: 'Product List',      icon:'nc-tag-content',    class: '' },
    { path: '/productpaths',   title: 'Product Path',      icon:'nc-vector',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
