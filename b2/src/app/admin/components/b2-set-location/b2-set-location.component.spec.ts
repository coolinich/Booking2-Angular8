import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SetLocationComponent } from './b2-set-location.component';

describe('B2SetLocationComponent', () => {
  let component: B2SetLocationComponent;
  let fixture: ComponentFixture<B2SetLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SetLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SetLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
