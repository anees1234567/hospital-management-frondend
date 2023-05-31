import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedappointmentsComponent } from './confirmedappointments.component';

describe('ConfirmedappointmentsComponent', () => {
  let component: ConfirmedappointmentsComponent;
  let fixture: ComponentFixture<ConfirmedappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
