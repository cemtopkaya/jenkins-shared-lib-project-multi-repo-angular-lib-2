import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kutup23Component } from './kutup23.component';

describe('Kutup23Component', () => {
  let component: Kutup23Component;
  let fixture: ComponentFixture<Kutup23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kutup23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kutup23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
