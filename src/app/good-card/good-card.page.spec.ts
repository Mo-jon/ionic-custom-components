import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCardPage } from './good-card.page';

describe('GoodCardPage', () => {
  let component: GoodCardPage;
  let fixture: ComponentFixture<GoodCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
