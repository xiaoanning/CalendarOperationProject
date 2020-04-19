import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DateForDay, Task } from 'shared/models/task.model';
import { TaskServiceService } from '../hour-colunm/services/task-service.service';
import { LoginService } from './../../../libs/authentication/authentication/login/services/login.service';

@Component({
  selector: 'app-day-colunm',
  templateUrl: './day-colunm.component.html',
  styleUrls: ['./day-colunm.component.scss'],
})
export class DayColunmComponent implements OnInit, OnChanges {
  @Input() timeRange;
  @Input() selectedDay;
  @Input() day: DateForDay;

  tasks: Task[] = [];

  constructor(
    private taskService: TaskServiceService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    if (this.day.dateInfo.getTime() === this.selectedDay.getTime()) {
      this.loadTask();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.selectedDay) {
      this.selectedDay = changes.selectedDay.currentValue;
    }
  }

  loadTask() {
    const user = this.loginService.getCurrentUser();
    this.taskService
      .getTasksByDay(this.selectedDay, user)
      .subscribe((tasks) => {
        console.log('---> get tasks for a day: ', tasks);
      });
  }
}
