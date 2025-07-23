import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneOsChartApexComponent } from './smartphone-os-chart-apex.component';

describe('SmartphoneOsChartApexComponent', () => {
  let component: SmartphoneOsChartApexComponent;
  let fixture: ComponentFixture<SmartphoneOsChartApexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphoneOsChartApexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphoneOsChartApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
