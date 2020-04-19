import { Injectable, Injector } from '@angular/core';
import { User } from 'libs/authentication/authentication/login/models/login.model';
import { Task } from 'shared/models/task.model';
import { BaseTaskService } from './base-task-service';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService extends BaseTaskService {
  constructor(injector: Injector) {
    super(injector);
  }

  createTask(payload: Task) {
    const url = payload.id
      ? `${this.apiUrl}${payload.id}?email=${payload.creatorEmail}`
      : `${this.apiUrl}`;
    return payload.id
      ? this.httpClient.put(url, payload, { observe: 'response' })
      : this.httpClient.post(url, payload, { observe: 'response' });
  }

  delete(payload: Task) {
    const url = `${this.apiUrl}${payload.id}?email=${payload.creatorEmail}`;
    return this.httpClient.delete(url);
  }

  getTasksByDay(date: Date, user: User) {
    const dayParam = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const url = `${this.apiUrl}oneday?day=${dayParam}&email=${user.email}`;
    return this.httpClient.get(url);
  }

  getAllTask(keyword: string, user: User) {
    const url = `${this.apiUrl}?keyword=${keyword}&email=${user.email}`;
    return this.httpClient.get(url);
  }
}
