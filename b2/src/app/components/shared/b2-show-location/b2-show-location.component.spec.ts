import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2ShowLocationComponent } from './b2-show-location.component';

describe('B2ShowLocationComponent', () => {
  let component: B2ShowLocationComponent;
  let fixture: ComponentFixture<B2ShowLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2ShowLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2ShowLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
