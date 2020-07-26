import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroProductorComponent } from './maestro-productor.component';

describe('MaestroProductorComponent', () => {
  let component: MaestroProductorComponent;
  let fixture: ComponentFixture<MaestroProductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroProductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
