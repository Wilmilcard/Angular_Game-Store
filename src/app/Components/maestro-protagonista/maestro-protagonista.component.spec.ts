import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroProtagonistaComponent } from './maestro-protagonista.component';

describe('MaestroProtagonistaComponent', () => {
  let component: MaestroProtagonistaComponent;
  let fixture: ComponentFixture<MaestroProtagonistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroProtagonistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroProtagonistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
