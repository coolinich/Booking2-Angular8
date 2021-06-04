import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2AddHotelPageComponent } from './add-hotel-page.component';

describe('B2AddHotelPageComponent', () => {
  let component: B2AddHotelPageComponent;
  let fixture: ComponentFixture<B2AddHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2AddHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2AddHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
