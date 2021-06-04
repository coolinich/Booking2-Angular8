import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SetTypeComponent } from './b2-set-type.component';

describe('B2SetTypeComponent', () => {
  let component: B2SetTypeComponent;
  let fixture: ComponentFixture<B2SetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
