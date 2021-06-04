import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2CardsListComponent } from './b2-cards-list.component';

describe('B2CardsListComponent', () => {
  let component: B2CardsListComponent;
  let fixture: ComponentFixture<B2CardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2CardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
