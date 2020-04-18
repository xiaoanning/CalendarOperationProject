import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHeaderCellComponent } from './task-header-cell.component';

describe('TaskHeaderCellComponent', () => {
  let component: TaskHeaderCellComponent;
  let fixture: ComponentFixture<TaskHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
