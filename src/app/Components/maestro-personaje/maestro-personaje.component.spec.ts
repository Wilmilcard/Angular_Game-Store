import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroPersonajeComponent } from './maestro-personaje.component';

describe('MaestroPersonajeComponent', () => {
  let component: MaestroPersonajeComponent;
  let fixture: ComponentFixture<MaestroPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
