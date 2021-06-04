import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2PaginationComponent } from './b2-pagination.component';

describe('B2PaginationComponent', () => {
  let component: B2PaginationComponent;
  let fixture: ComponentFixture<B2PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
