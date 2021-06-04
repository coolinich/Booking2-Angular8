import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2AllHotelsToEditPageComponent } from './b2-all-hotels-to-edit-page.component';

describe('B2AllHotelsToEditPageComponent', () => {
  let component: B2AllHotelsToEditPageComponent;
  let fixture: ComponentFixture<B2AllHotelsToEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2AllHotelsToEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2AllHotelsToEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
