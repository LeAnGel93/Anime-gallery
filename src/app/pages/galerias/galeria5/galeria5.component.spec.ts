import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeria5Component } from './galeria5.component';

describe('Galeria5Component', () => {
  let component: Galeria5Component;
  let fixture: ComponentFixture<Galeria5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Galeria5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeria5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
