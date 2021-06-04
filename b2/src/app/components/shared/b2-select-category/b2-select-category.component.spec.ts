import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SelectCategoryComponent } from './b2-select-category.component';

describe('B2SelectCategoryComponent', () => {
  let component: B2SelectCategoryComponent;
  let fixture: ComponentFixture<B2SelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SelectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
