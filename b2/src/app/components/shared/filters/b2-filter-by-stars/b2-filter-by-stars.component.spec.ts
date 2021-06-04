import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FilterByStarsComponent } from './b2-filter-by-stars.component';

describe('B2FilterByStarsComponent', () => {
  let component: B2FilterByStarsComponent;
  let fixture: ComponentFixture<B2FilterByStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FilterByStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FilterByStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
