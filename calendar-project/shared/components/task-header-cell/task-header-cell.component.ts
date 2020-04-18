import { Component, Input, OnInit } from '@angular/core';
import { DateForDay } from 'shared/models/task.model';

@Component({
  selector: 'app-task-header-cell',
  templateUrl: './task-header-cell.component.html',
  styleUrls: ['./task-header-cell.component.scss'],
})
export class TaskHeaderCellComponent implements OnInit {
  @Input() day: DateForDay;
  constructor() {}

  ngOnInit() {}
}
