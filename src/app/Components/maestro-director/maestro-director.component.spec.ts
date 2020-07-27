import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroDirectorComponent } from './maestro-director.component';

describe('MaestroDirectorComponent', () => {
  let component: MaestroDirectorComponent;
  let fixture: ComponentFixture<MaestroDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
