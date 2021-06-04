import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { B2Component } from './b2.component';

describe('B2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        B2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(B2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
