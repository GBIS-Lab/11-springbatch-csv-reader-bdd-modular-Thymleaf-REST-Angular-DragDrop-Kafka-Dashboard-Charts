import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexResponsive,
  //ApexSeries,
  ApexTitleSubtitle
} from 'ngx-apexcharts';
import { DashboardDataService } from '../../../services/dashboard-data.service';

export type ChartOptions = {
  //series: ApexSeries;
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
  selector: 'app-smartphone-pricerange-chart-apex',
  standalone: false,
  templateUrl: './smartphone-pricerange-chart-apex.component.html',
  styleUrls: ['./smartphone-pricerange-chart-apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmartphonePriceRangeChartApexComponent implements OnInit {

  public chartOptions!: ChartOptions;

  constructor(
    private dataService: DashboardDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataService.getPriceRangeStats().subscribe(data => {
      const categories = Object.keys(data);
      const values = Object.values(data).map(v => Number(v));

      this.chartOptions = {
        series: [
          {
            name: 'Smartphones',
            data: values
          }
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: categories
        },
        yaxis: {
          title: {
            text: 'Tranches de prix (€)'
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
                height: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ],
        title: {
          text: 'Répartition par tranche de prix'
        }
      };

      this.cdRef.detectChanges();
    });
  }
}
