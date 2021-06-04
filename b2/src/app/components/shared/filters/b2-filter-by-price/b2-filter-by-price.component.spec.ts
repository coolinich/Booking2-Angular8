import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FilterByPriceComponent } from './b2-filter-by-price.component';

describe('B2FilterByPriceComponent', () => {
  let component: B2FilterByPriceComponent;
  let fixture: ComponentFixture<B2FilterByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FilterByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FilterByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
