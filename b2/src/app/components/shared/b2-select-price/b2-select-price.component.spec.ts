import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SelectPriceComponent } from './b2-select-price.component';

describe('B2SelectPriceComponent', () => {
  let component: B2SelectPriceComponent;
  let fixture: ComponentFixture<B2SelectPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SelectPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SelectPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
