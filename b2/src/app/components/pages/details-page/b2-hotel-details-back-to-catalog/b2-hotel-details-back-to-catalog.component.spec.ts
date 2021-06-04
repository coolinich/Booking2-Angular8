import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HotelDetailsBackToCatalogComponent } from './b2-hotel-details-back-to-catalog.component';

describe('B2HotelDetailsBackToCatalogComponent', () => {
  let component: B2HotelDetailsBackToCatalogComponent;
  let fixture: ComponentFixture<B2HotelDetailsBackToCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HotelDetailsBackToCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HotelDetailsBackToCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
