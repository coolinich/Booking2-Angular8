import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2DetailsPageComponent } from './b2-details-page.component';

describe('B2DetailsPageComponent', () => {
  let component: B2DetailsPageComponent;
  let fixture: ComponentFixture<B2DetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2DetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
