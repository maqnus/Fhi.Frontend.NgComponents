import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhiDatepickerComponent } from './fhi-datepicker.component';

describe('FhiDatepickerComponent', () => {
  let component: FhiDatepickerComponent;
  let fixture: ComponentFixture<FhiDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhiDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FhiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
