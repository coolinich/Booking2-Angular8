import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HotelBookFormComponent } from './b2-hotel-book-form.component';

describe('B2HotelBookFormComponent', () => {
  let component: B2HotelBookFormComponent;
  let fixture: ComponentFixture<B2HotelBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HotelBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HotelBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
