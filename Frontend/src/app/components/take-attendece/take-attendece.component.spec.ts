import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAttendeceComponent } from './take-attendece.component';

describe('TakeAttendeceComponent', () => {
  let component: TakeAttendeceComponent;
  let fixture: ComponentFixture<TakeAttendeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAttendeceComponent]
    });
    fixture = TestBed.createComponent(TakeAttendeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
