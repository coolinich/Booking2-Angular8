import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HotelFormComponent } from './b2-hotel-form.component';

describe('B2HotelFormComponent', () => {
  let component: B2HotelFormComponent;
  let fixture: ComponentFixture<B2HotelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HotelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
