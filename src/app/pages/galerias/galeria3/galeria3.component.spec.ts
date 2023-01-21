import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeria3Component } from './galeria3.component';

describe('Galeria3Component', () => {
  let component: Galeria3Component;
  let fixture: ComponentFixture<Galeria3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Galeria3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
