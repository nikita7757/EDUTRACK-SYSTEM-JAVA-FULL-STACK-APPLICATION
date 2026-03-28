import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAttendenceComponent } from './view-all-attendence.component';

describe('ViewAllAttendenceComponent', () => {
  let component: ViewAllAttendenceComponent;
  let fixture: ComponentFixture<ViewAllAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllAttendenceComponent]
    });
    fixture = TestBed.createComponent(ViewAllAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
