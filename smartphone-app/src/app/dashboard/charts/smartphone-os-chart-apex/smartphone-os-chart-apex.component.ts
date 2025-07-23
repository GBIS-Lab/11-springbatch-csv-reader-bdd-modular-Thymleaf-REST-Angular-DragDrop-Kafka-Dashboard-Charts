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
  selector: 'app-smartphone-os-chart-apex',
  standalone: false,
  templateUrl: './smartphone-os-chart-apex.component.html',
  styleUrls: ['./smartphone-os-chart-apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmartphoneOsChartApexComponent implements OnInit {

  public chartOptions!: ChartOptions;

  constructor(
    private dataService: DashboardDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataService.getOSStats().subscribe(data => {
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

      this.cdRef.detectChanges();
    });
  }
}
