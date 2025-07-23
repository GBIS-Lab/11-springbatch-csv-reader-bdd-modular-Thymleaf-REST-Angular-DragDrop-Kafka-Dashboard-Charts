import { Component, ViewContainerRef, OnInit, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SmartphoneUploadComponent } from './smartphone-upload/smartphone-upload.component';
import { SmartphonesPageComponent } from './smartphones-page/smartphones-page.component';
import { DashboardModule } from './dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterModule,DashboardModule /*SmartphoneUploadComponent,SmartphonePageComponent*/],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    title = 'smartphone-app';

    constructor() {}

    ngOnInit(): void {
    }
}
