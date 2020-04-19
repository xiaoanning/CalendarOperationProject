import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'shared/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() {}

  ngOnInit() {}
}
