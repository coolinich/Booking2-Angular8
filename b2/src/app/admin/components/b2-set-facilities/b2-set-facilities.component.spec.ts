import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SetFacilitiesComponent } from './b2-set-facilities.component';

describe('B2SetFacilitiesComponent', () => {
  let component: B2SetFacilitiesComponent;
  let fixture: ComponentFixture<B2SetFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SetFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SetFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
