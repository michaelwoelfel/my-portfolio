import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsWorkComponent } from './lets-work.component';

describe('LetsWorkComponent', () => {
  let component: LetsWorkComponent;
  let fixture: ComponentFixture<LetsWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetsWorkComponent]
    });
    fixture = TestBed.createComponent(LetsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
