import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneBrandChartNgxComponent } from './smartphone-brand-chart-ngx.component';

describe('SmartphoneBrandChartNgxComponent', () => {
  let component: SmartphoneBrandChartNgxComponent;
  let fixture: ComponentFixture<SmartphoneBrandChartNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphoneBrandChartNgxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphoneBrandChartNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
