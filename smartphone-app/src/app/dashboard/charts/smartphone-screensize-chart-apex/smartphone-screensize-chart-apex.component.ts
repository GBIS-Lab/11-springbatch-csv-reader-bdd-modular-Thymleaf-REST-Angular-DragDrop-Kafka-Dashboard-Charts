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
  selector: 'app-smartphone-screensize-chart-apex',
  standalone: false,
  templateUrl: './smartphone-screensize-chart-apex.component.html',
  styleUrls: ['./smartphone-screensize-chart-apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SmartphoneScreenSizeChartApexComponent implements OnInit {

  public chartOptions!: ChartOptions;

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getScreenSizeStats().subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data).map(v => Number(v));

      this.chartOptions = {
        series: [{
          name: 'Quantité',
          data: values
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Répartition par taille d\'écran'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%'
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
            text: 'Nombre'
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
