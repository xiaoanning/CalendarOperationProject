import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourColunmComponent } from './hour-colunm.component';

describe('HourColunmComponent', () => {
  let component: HourColunmComponent;
  let fixture: ComponentFixture<HourColunmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourColunmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourColunmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
