import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';
import { SmartphonesPageComponent } from './smartphones-page/smartphones-page.component';
import { SmartphoneBrandChartComponent } from './dashboard/charts/smartphone-brand-chart.component';
import { SmartphoneOsChartComponent } from './dashboard/charts/smartphone-os-chart.component';

import { SmartphoneBrandChartApexComponent } from './dashboard/charts/smartphone-brand-chart-apex/smartphone-brand-chart-apex.component';
import { SmartphoneOsChartApexComponent } from './dashboard/charts/smartphone-os-chart-apex/smartphone-os-chart-apex.component';
import { SmartphoneScreenSizeChartApexComponent } from './dashboard/charts/smartphone-screensize-chart-apex/smartphone-screensize-chart-apex.component';
import { SmartphonePriceRangeChartApexComponent } from './dashboard/charts/smartphone-pricerange-chart-apex/smartphone-pricerange-chart-apex.component';
import { SmartphoneReleaseDateChartApexComponent } from './dashboard/charts/smartphone-releasedate-chart-apex/smartphone-releasedate-chart-apex.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  //{ path: '', component: SmartphoneListComponent },   // Par défaut, afficher la liste des smartphones
  { path: '', redirectTo: 'smartphones', pathMatch: 'full' },
  { path: 'smartphones', component: SmartphonesPageComponent },  // Route dédiée pour la liste des smartphones
  //{ path: 'dashboard/brands', component: SmartphoneBrandChartComponent }
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/brands', component: SmartphoneBrandChartApexComponent },
  //{ path: 'dashboard/os',    component: SmartphoneOsChartComponent },
  { path: 'dashboard/os',    component: SmartphoneOsChartApexComponent },
  { path: 'dashboard/screen-sizes',    component: SmartphoneScreenSizeChartApexComponent },
  { path: 'dashboard/price-ranges',    component: SmartphonePriceRangeChartApexComponent },
  { path: 'dashboard/release-date',    component: SmartphoneReleaseDateChartApexComponent },
  // Ajoute ici d'autres routes si nécessaire (comme /smartphone/:id pour un détail de smartphone)
];
