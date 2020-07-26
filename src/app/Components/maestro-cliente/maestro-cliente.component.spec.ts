import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroClienteComponent } from './maestro-cliente.component';

describe('MaestroClienteComponent', () => {
  let component: MaestroClienteComponent;
  let fixture: ComponentFixture<MaestroClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
