import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DayColunmComponent } from './components/day-colunm/day-colunm.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { HourColunmComponent } from './components/hour-colunm/hour-colunm.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskHeaderCellComponent } from './components/task-header-cell/task-header-cell.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { TaskComponent } from './components/task/task.component';

const COMPONENTS = [
  NavBarComponent,
  TaskComponent,
  DayColunmComponent,
  HourColunmComponent,
  EventFormComponent,
  TaskHeaderComponent,
  TaskHeaderCellComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule],
  exports: [COMPONENTS, NgZorroAntdModule, FormsModule, ReactiveFormsModule],
  entryComponents: [EventFormComponent],
})
export class SharedModule {}
