import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReturnCrNoteComponent } from './sale-return-cr-note.component';

describe('SaleReturnCrNoteComponent', () => {
  let component: SaleReturnCrNoteComponent;
  let fixture: ComponentFixture<SaleReturnCrNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleReturnCrNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleReturnCrNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
