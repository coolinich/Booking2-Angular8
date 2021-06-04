import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2SigninFormComponent } from './b2-signin-form.component';

describe('B2SigninFormComponent', () => {
  let component: B2SigninFormComponent;
  let fixture: ComponentFixture<B2SigninFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2SigninFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
