import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2ShowTypeComponent } from './b2-show-type.component';

describe('B2ShowTypeComponent', () => {
  let component: B2ShowTypeComponent;
  let fixture: ComponentFixture<B2ShowTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2ShowTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2ShowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
