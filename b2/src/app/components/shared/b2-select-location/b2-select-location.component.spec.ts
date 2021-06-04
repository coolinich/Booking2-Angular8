import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SelectLocationComponent } from './b2-select-location.component';

describe('B2SelectLocationComponent', () => {
  let component: B2SelectLocationComponent;
  let fixture: ComponentFixture<B2SelectLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SelectLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SelectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
