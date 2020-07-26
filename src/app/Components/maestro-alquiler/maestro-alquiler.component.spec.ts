import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroAlquilerComponent } from './maestro-alquiler.component';

describe('MaestroAlquilerComponent', () => {
  let component: MaestroAlquilerComponent;
  let fixture: ComponentFixture<MaestroAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
