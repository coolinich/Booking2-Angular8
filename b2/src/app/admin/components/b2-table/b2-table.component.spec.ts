import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2TableComponent } from './b2-table.component';

describe('B2TableComponent', () => {
  let component: B2TableComponent;
  let fixture: ComponentFixture<B2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
