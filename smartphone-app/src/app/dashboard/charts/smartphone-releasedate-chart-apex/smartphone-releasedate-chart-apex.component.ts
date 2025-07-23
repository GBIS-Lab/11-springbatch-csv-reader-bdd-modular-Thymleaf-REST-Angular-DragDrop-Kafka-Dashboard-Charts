// smartphone-releasedate-chart-apex.component.ts

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexResponsive,
  ApexTitleSubtitle
} from 'ngx-apexcharts';
import { DashboardDataService } from '../../../services/dashboard-data.service';

export type ChartOptions = {
  series: { name: string; data: number[] }[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-smartphone-releasedate-chart-apex',
  standalone: false,
  templateUrl: './smartphone-releasedate-chart-apex.component.html',
  styleUrls: ['./smartphone-releasedate-chart-apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmartphoneReleaseDateChartApexComponent implements OnInit {

  public chartOptions!: ChartOptions;

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getReleaseDateStats().subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data).map(v => Number(v));

      this.chartOptions = {
        series: [{
          name: 'Nombre de smartphones',
          data: values
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Smartphones par année de sortie'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: labels
        },
        yaxis: {
          title: {
            text: 'Quantité'
          }
        },
        legend: {
          position: 'top'
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      };
    });
  }
}
