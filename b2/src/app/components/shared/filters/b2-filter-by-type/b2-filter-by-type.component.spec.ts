import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FilterByTypeComponent } from './b2-filter-by-type.component';

describe('B2FilterByTypeComponent', () => {
  let component: B2FilterByTypeComponent;
  let fixture: ComponentFixture<B2FilterByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FilterByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FilterByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
