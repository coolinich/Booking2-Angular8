import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2PageNotFoundComponent } from './b2-page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: B2PageNotFoundComponent;
  let fixture: ComponentFixture<B2PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
