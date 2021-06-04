import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2EditHotelPageComponent } from './edit-hotel-page.component';

describe('EditHotelPageComponent', () => {
  let component: B2EditHotelPageComponent;
  let fixture: ComponentFixture<B2EditHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2EditHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2EditHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
