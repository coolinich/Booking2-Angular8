import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SelectDatesRangeComponent } from './b2-select-dates-range.component';

describe('B2SelectDatesRangeComponent', () => {
  let component: B2SelectDatesRangeComponent;
  let fixture: ComponentFixture<B2SelectDatesRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SelectDatesRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SelectDatesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
