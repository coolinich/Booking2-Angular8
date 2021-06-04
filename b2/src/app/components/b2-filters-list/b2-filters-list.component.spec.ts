import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FiltersListComponent } from './b2-filters-list.component';

describe('B2FiltersListComponent', () => {
  let component: B2FiltersListComponent;
  let fixture: ComponentFixture<B2FiltersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FiltersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FiltersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
