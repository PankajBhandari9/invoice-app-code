import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TosterDialogComponent } from './toster-dialog.component';

describe('TosterDialogComponent', () => {
  let component: TosterDialogComponent;
  let fixture: ComponentFixture<TosterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TosterDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TosterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
