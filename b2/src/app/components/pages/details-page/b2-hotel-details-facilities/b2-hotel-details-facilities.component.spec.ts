import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HotelDetailsFacilitiesComponent } from './b2-hotel-details-facilities.component';

describe('B2HotelDetailsFacilitiesComponent', () => {
  let component: B2HotelDetailsFacilitiesComponent;
  let fixture: ComponentFixture<B2HotelDetailsFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HotelDetailsFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HotelDetailsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
