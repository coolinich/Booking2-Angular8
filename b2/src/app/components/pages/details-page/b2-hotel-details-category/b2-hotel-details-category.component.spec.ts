import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HotelDetailsCategoryComponent } from './b2-hotel-details-category.component';

describe('B2HotelDetailsCategoryComponent', () => {
  let component: B2HotelDetailsCategoryComponent;
  let fixture: ComponentFixture<B2HotelDetailsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HotelDetailsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HotelDetailsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
