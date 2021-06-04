import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2ViewAllHotelsComponent } from './b2-view-all-hotels.component';

describe('B2ViewAllHotelsComponent', () => {
  let component: B2ViewAllHotelsComponent;
  let fixture: ComponentFixture<B2ViewAllHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2ViewAllHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2ViewAllHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
