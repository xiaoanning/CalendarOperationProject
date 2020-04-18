import { Component, Input, OnInit } from '@angular/core';
import { DateForDay } from 'shared/models/task.model';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent implements OnInit {
  @Input() dateForWeek: DateForDay[];
  @Input() selectedDate: Date;
  constructor() {}

  ngOnInit() {}
}
