import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { P1Component } from './p1/p1.component';
import { PlanningComponent } from './planning/planning.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Accueil' }  },          
            { path: 'p1', component: P1Component, data: { breadcrumb: 'p1 page' } },
            { path: 'planning', component: PlanningComponent, data: { breadcrumb: 'planning page' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Page vide' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Recherche' } }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);