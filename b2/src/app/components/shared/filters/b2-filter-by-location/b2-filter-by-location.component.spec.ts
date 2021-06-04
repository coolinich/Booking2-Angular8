import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2FilterByLocationComponent } from './b2-filter-by-location.component';

describe('B2FilterByLocationComponent', () => {
  let component: B2FilterByLocationComponent;
  let fixture: ComponentFixture<B2FilterByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2FilterByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2FilterByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
