import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DateForDay, DayEnum } from 'shared/models/task.model';

const HOURS_IN_DAY = 24;
const ONE_DIGITAL = 10;
const DAYS_IN_WEEK: DayEnum[] = [
  DayEnum.Sun,
  DayEnum.Mon,
  DayEnum.Tue,
  DayEnum.Wed,
  DayEnum.Thu,
  DayEnum.Fri,
  DayEnum.Sat,
];
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() selectedDate: Date;
  timeRange = [];
  dayInWeek;
  dateForWeek: DateForDay[] = [];

  @HostBinding('class.day-mode') dayMode = true;

  constructor() {}

  ngOnInit() {
    this.generateTimeRange();
    this.setActivatedDay();
    this.generateDateForWeek();
  }

  setDisplayMode(value: boolean) {
    this.setActivatedDay();
    this.dayMode = value;
    console.log('---> date for week: ', this.dateForWeek);
  }

  private generateTimeRange() {
    for (let index = 0; index < HOURS_IN_DAY; index++) {
      let timeString;
      index < ONE_DIGITAL
        ? (timeString = `0${index}:00`)
        : (timeString = `${index}:00`);
      this.timeRange.push(timeString);
    }
  }

  setActivatedDay() {
    const dayIndex = this.selectedDate.getDay();
    this.dayInWeek = DAYS_IN_WEEK[dayIndex];
  }

  generateDateForWeek() {
    this.dateForWeek = [];
    const currentIndex = this.selectedDate.getDay();
    DAYS_IN_WEEK.map((day, index) => {
      const resultDay = this.generateDay(
        this.selectedDate,
        index - currentIndex
      );
      this.dateForWeek.push(resultDay);
    });
    console.log('----> init dateForWeek: ', this.dateForWeek);
  }

  generateDay(value: Date, dateDif: number = 0): DateForDay {
    const day = DAYS_IN_WEEK[value.getDay() + dateDif];
    const cloneDate = new Date(value.getTime());
    const alterDate = new Date(
      cloneDate.setDate(cloneDate.getDate() + dateDif)
    );
    const dateNum = alterDate.getDate();
    const result = {} as DateForDay;
    result.day = day;
    result.date = dateNum;
    result.dateInfo = alterDate;
    return result;
  }
}
