import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FiltersAllDialogComponent } from './b2-filters-all-dialog.component';

describe('B2FiltersAllDialogComponent', () => {
  let component: B2FiltersAllDialogComponent;
  let fixture: ComponentFixture<B2FiltersAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FiltersAllDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FiltersAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
