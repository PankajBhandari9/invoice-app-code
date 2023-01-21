import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstAddressComponent } from './gst-address.component';

describe('GstAddressComponent', () => {
  let component: GstAddressComponent;
  let fixture: ComponentFixture<GstAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
