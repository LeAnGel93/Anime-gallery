import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeria4Component } from './galeria4.component';

describe('Galeria4Component', () => {
  let component: Galeria4Component;
  let fixture: ComponentFixture<Galeria4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Galeria4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeria4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
