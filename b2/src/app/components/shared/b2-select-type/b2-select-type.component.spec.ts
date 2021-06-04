import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SelectTypeComponent } from './b2-select-type.component';

describe('B2SelectTypeComponent', () => {
  let component: B2SelectTypeComponent;
  let fixture: ComponentFixture<B2SelectTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SelectTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SelectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
