import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayColunmComponent } from './day-colunm.component';

describe('DayColunmComponent', () => {
  let component: DayColunmComponent;
  let fixture: ComponentFixture<DayColunmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayColunmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayColunmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
