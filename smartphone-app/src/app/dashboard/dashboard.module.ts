import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import { SmartphoneBrandChartComponent } from './charts/smartphone-brand-chart.component';
import { SmartphoneOsChartComponent } from './charts/smartphone-os-chart.component';
//import { SmartphoneScreenSizeChartComponent } from './charts/smartphone-screensize-chart/smartphone-screensize-chart.component';
//import { SmartphonePriceRangeChartComponent } from './charts/smartphone-pricerange-chart/smartphone-pricerange-chart.component';
//import { SmartphoneReleaseDateChartComponent } from './charts/smartphone-releasedate-chart/smartphone-releasedate-chart.component';
//import { SmartphoneBrandChartNgxComponent } from './charts/smartphone-brand-chart-ngx/smartphone-brand-chart-ngx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { SmartphoneBrandChartApexComponent } from './charts/smartphone-brand-chart-apex/smartphone-brand-chart-apex.component';
import { SmartphoneOsChartApexComponent } from './charts/smartphone-os-chart-apex/smartphone-os-chart-apex.component';
import { SmartphonePriceRangeChartApexComponent } from './charts/smartphone-pricerange-chart-apex/smartphone-pricerange-chart-apex.component';
import { SmartphoneReleaseDateChartApexComponent } from './charts/smartphone-releasedate-chart-apex/smartphone-releasedate-chart-apex.component';
import { SmartphoneScreenSizeChartApexComponent } from './charts/smartphone-screensize-chart-apex/smartphone-screensize-chart-apex.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SmartphoneBrandChartComponent,
    SmartphoneOsChartComponent,
    //SmartphoneScreenSizeChartComponent,
    //SmartphonePriceRangeChartComponent,
    //SmartphoneReleaseDateChartComponent,
    SmartphoneBrandChartApexComponent,
    SmartphoneOsChartApexComponent,
    SmartphonePriceRangeChartApexComponent,
    SmartphoneReleaseDateChartApexComponent,
    SmartphoneScreenSizeChartApexComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    NgChartsModule,
    NgxApexchartsModule
  ],
  exports: [
    DashboardComponent,
    SmartphoneBrandChartComponent,
    SmartphoneOsChartComponent,
    //SmartphoneScreenSizeChartComponent,
    //SmartphonePriceRangeChartComponent,
    //SmartphoneReleaseDateChartComponent,
    //SmartphoneBrandChartNgxComponent,
    NgChartsModule,
    SmartphoneBrandChartApexComponent,
    SmartphoneOsChartApexComponent,
    SmartphonePriceRangeChartApexComponent,
    SmartphoneReleaseDateChartApexComponent,
    SmartphoneScreenSizeChartApexComponent
     ]

})
export class DashboardModule {}
