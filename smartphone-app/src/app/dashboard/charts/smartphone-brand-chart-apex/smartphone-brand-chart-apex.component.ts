import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexLegend, ApexResponsive, ApexDataLabels } from 'ngx-apexcharts';
import { DashboardDataService } from '../../../services/dashboard-data.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-smartphone-brand-chart-apex',
  standalone: false,
  templateUrl: './smartphone-brand-chart-apex.component.html',
  styleUrls: ['./smartphone-brand-chart-apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SmartphoneBrandChartApexComponent implements OnInit {
  //public chartSeries: ApexNonAxisChartSeries = [];
  //public chartLabels: string[] = [];

  /*
  public chartOptions: ChartOptions = {
      series: [5, 3, 2],
      chart: {
        type: 'pie',
        width: 380
      },
      labels: ['Apple', 'Samsung', 'Xiaomi'],
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
      ],
      legend: {
        position: 'right'
      },
      dataLabels: {
        enabled: true
      }
    };
  public dataLabels: ApexDataLabels = {
    enabled: true
  };
  public legend: ApexLegend = {
    position: 'bottom'
  };
  public responsive: ApexResponsive[] = [
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
  ];
*/
  public chartOptions!: ChartOptions;

  constructor(
    private dataService: DashboardDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  /*ngOnInit(): void {
    this.dataService.getBrandStats().subscribe(data => {
      this.chartLabels = Object.keys(data);
      this.chartSeries = Object.values(data).map(val => Number(val));
    });
  }*/

  ngOnInit(): void {
      this.dataService.getBrandStats().subscribe(data => {
        const labels = Object.keys(data);
        const series = Object.values(data).map(val => Number(val));

        this.chartOptions = {
          series: series,
          chart: {
            type: 'pie',
            width: 380
          },
          labels: labels,
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
          ],
          legend: {
            position: 'right'
          },
          dataLabels: {
            enabled: true
          }
        };

        this.cdRef.detectChanges(); // pour forcer le refresh si nécessaire
      });
    }
}


/*
import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DashboardDataService } from '../../../services/dashboard-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-smartphone-brand-chart-ngx',
  standalone: false,
  templateUrl: './smartphone-brand-chart-ngx.component.html',
  styleUrl: './smartphone-brand-chart-ngx.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SmartphoneBrandChartNgxComponent  implements OnInit {
  //Ici, 'vivid' est une palette standard de ngx-charts. Tu peux aussi tester 'cool', 'fire', 'natural', 'solar', 'air', etc.
  chartData: any[] = [];
  colorScheme = 'vivid';
  view: number[] = [800,400]; // <-- Force une taille visible


  constructor(private dataService: DashboardDataService,  private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // BOUCHON

    //  this.chartData = [
    //    { name: 'Apple', value: 7 },
    //    { name: 'Samsung', value: 1 },
    //    { name: 'Xiaomi', value: 1 },
    //    { name: 'Huawei', value: 1 },
    //    { name: 'Google', value: 1 }
    //  ];

    this.dataService.getBrandStats().subscribe(data => {
      console.log("Brand data received for chart:", data);
      console.log("RAW data", data);
      //this.chartData = Object.entries(data).map(([name, value]) => ({ name, value }));
      this.chartData = Object.entries(data).map(([name, value]) => ({
        name,
        value: Number(value)
      }));
      console.log("Mapped chartData", this.chartData);
      this.cdRef.detectChanges();
    });

  }
}
*/


  /*<ngx-charts-pie-chart
    [results]="chartData"
    [scheme]="'vivid'"
    [animations]="true"
    [legend]="true"
    [labels]="true"
    [doughnut]="false">
  </ngx-charts-pie-chart>

*/

  /*chartData: any[] = [];
  colorScheme = {
    domain: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
  };
*/


