import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSlidesPage } from './img-slides.page';

describe('ImgSlidesPage', () => {
  let component: ImgSlidesPage;
  let fixture: ComponentFixture<ImgSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
