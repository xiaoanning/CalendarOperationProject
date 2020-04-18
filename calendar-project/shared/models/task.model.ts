export interface DateForDay {
  day: DayEnum;
  date: number;
  dateInfo: Date;
}

export enum DayEnum {
  Sun = 'SUN',
  Mon = 'MON',
  Tue = 'TUE',
  Wed = 'WED',
  Thu = 'THU',
  Fri = 'FRI',
  Sat = 'SAT',
}

export interface Task {
  id?: string;
  title: string;
  place: string;
  description?: string;
  creatorEmail: string;
  creator: string;
  password: string;
  startTime: number;
  endTime: number;
  createdDate?: Date;
}
