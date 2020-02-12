import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/homepage',     title: 'Homepage',         icon:'nc-bank',       class: '' },
    { path: '/productlist',   title: 'Product List',      icon:'nc-tag-content',    class: '' },
    { path: '/sitelist',      title: 'Site List',         icon:'nc-cart-simple',    class: '' },
    { path: '/productpaths',   title: 'Product Path',      icon:'nc-vector',    class: '' },
    { path: '/table',         title: 'Price List',        icon:'nc-money-coins',    class: '' },

   /* { path: '/homepage',   title: '.',      icon:'nc-simple-delete',    class: '' },
    { path: '/productedit',   title: 'Edit Product',      icon:'nc-tag-content',    class: '' },
    { path: '/siteedit',      title: 'Edit Site',         icon:'nc-cart-simple',    class: '' },
    { path: '/productpathedit',   title: 'Edit Product Path',      icon:'nc-vector',    class: '' },
*/
    { path: '/homepage',   title: '.',      icon:'nc-simple-delete',    class: '' },

    { path: '/createproduct',   title: 'Create Product',      icon:'nc-tag-content',    class: '' },
    { path: '/create-site',   title: 'Create Site',      icon:'nc-cart-simple',    class: '' },
    { path: '/create-productpath',   title: 'Create Product Path',       icon:'nc-vector',    class: '' },



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
