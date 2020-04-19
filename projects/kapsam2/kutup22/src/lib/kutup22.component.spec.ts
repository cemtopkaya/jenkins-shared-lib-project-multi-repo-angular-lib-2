import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kutup22Component } from './kutup22.component';

describe('Kutup22Component', () => {
  let component: Kutup22Component;
  let fixture: ComponentFixture<Kutup22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kutup22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kutup22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
