import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2CardComponent } from './b2-card.component';

describe('B2CardComponent', () => {
  let component: B2CardComponent;
  let fixture: ComponentFixture<B2CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
