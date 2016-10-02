"use strict";
var router_1 = require('@angular/router');
var home_view_component_1 = require('./components/views/home/home-view.component');
var exemplo_view_component_1 = require('./components/views/exemplo/exemplo-view.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_view_component_1.HomeViewComponent
    },
    {
        path: 'exemplo',
        component: exemplo_view_component_1.ExemploViewComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
