import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kutup21Component } from './kutup21.component';

describe('Kutup21Component', () => {
  let component: Kutup21Component;
  let fixture: ComponentFixture<Kutup21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kutup21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kutup21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
