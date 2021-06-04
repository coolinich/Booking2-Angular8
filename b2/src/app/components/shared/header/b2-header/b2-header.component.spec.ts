import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2HeaderComponent } from './b2-header.component';

describe('B2HeaderComponent', () => {
  let component: B2HeaderComponent;
  let fixture: ComponentFixture<B2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
