import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SetCategoryComponent } from './b2-set-category.component';

describe('B2SetCategoryComponent', () => {
  let component: B2SetCategoryComponent;
  let fixture: ComponentFixture<B2SetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
