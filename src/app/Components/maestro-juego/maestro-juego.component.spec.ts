import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroJuegoComponent } from './maestro-juego.component';

describe('MaestroJuegoComponent', () => {
  let component: MaestroJuegoComponent;
  let fixture: ComponentFixture<MaestroJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
