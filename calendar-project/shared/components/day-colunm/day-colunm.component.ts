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
  taskEntities;

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
      this.loadTask();
    }
  }

  loadTask() {
    const user = this.loginService.getCurrentUser();
    this.taskService
      .getTasksByDay(this.day.dateInfo, user)
      .subscribe((tasks: Task[]) => {
        console.log('---> get tasks for a day: ', tasks, this.timeRange);
        this.tasks = tasks;
        this.taskEntities = this.generateTaskEntities(tasks);
      });
  }

  getMapTask(index: number) {
    return this.taskEntities && this.taskEntities[index]
      ? this.taskEntities[index]
      : null;
  }

  generateTaskEntities(taskArr: Task[]) {
    return taskArr.reduce((keys, task) => {
      const startTime = new Date(task.startTime);
      const key = startTime.getHours();
      keys[key] = task;
      return keys;
    }, {});
  }
}
