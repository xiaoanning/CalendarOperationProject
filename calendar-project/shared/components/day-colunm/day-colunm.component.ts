import { Component, Input, OnInit } from '@angular/core';
import { DateForDay } from 'shared/models/task.model';

@Component({
  selector: 'app-day-colunm',
  templateUrl: './day-colunm.component.html',
  styleUrls: ['./day-colunm.component.scss'],
})
export class DayColunmComponent implements OnInit {
  @Input() timeRange;
  @Input() selectedDay;
  @Input() day: DateForDay;

  constructor() {}

  ngOnInit() {}
}
