import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateQuotationComponent } from './estimate-quotation.component';

describe('EstimateQuotationComponent', () => {
  let component: EstimateQuotationComponent;
  let fixture: ComponentFixture<EstimateQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateQuotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
