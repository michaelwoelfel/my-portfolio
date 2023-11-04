import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespMenuComponent } from './resp-menu.component';

describe('RespMenuComponent', () => {
  let component: RespMenuComponent;
  let fixture: ComponentFixture<RespMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespMenuComponent]
    });
    fixture = TestBed.createComponent(RespMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
