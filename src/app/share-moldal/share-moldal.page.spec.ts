import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMoldalPage } from './share-moldal.page';

describe('ShareMoldalPage', () => {
  let component: ShareMoldalPage;
  let fixture: ComponentFixture<ShareMoldalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMoldalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMoldalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
