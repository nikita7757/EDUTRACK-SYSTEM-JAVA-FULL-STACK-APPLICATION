import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendeceComponent } from './view-attendece.component';

describe('ViewAttendeceComponent', () => {
  let component: ViewAttendeceComponent;
  let fixture: ComponentFixture<ViewAttendeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAttendeceComponent]
    });
    fixture = TestBed.createComponent(ViewAttendeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
