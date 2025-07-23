import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smartphone-brand-chart',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './smartphone-brand-chart.component.html'
})
export class SmartphoneBrandChartComponent implements OnInit {

    brandStats: { [brand: string]: number } = {};
    brandNames: string[] = [];

  constructor(private dataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dataService.getBrandStats().subscribe({
      next: data => {
        console.log("📊 Données de marques reçues :", data);
        this.brandStats = data;
        this.brandNames = Object.keys(data);
      },
      error: err => {
        console.error("❌ Erreur lors de la récupération des stats de marques :", err);
      }
    });
  }
}
