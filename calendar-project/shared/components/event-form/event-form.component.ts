import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'libs/authentication/authentication/login/services/login.service';
import { NzModalRef } from 'ng-zorro-antd';
import { DateForDay, Task } from 'shared/models/task.model';
import { TaskServiceService } from '../hour-colunm/services/task-service.service';

const TIME_PERIOD_IN_HOUR = 1;
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() dayInfo: DateForDay;
  @Input() time;
  @Input() task: Task;

  eventForm: FormGroup;
  modal: NzModalRef;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskServiceService,
    private loginService: LoginService,
    public dialogRef: NzModalRef<EventFormComponent>
  ) {}

  ngOnInit() {
    console.log('---> call on init');
    this.eventForm = this.fb.group({
      title: ['', [Validators.required]],
      place: ['', [Validators.required]],
      description: [''],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    });
    if (this.dayInfo) {
      this.dispatchTime(this.dayInfo.dateInfo, this.time);
    }
    this.dispatchForm();
  }

  dispatchTime(date: Date, time: string) {
    const cloneDate = new Date(date.getTime());
    const startHour = Number(time.split(':')[0]);
    const startTime = new Date(cloneDate.setHours(startHour, 0, 0));
    const endTime = new Date(cloneDate.setHours(startHour + 1, 0, 0));
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['startTime'].setValue(startTime);
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['endTime'].setValue(endTime);
  }

  dispatchForm() {
    if (!this.task) {
      return;
    }
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['title'].setValue(this.task.title);
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['place'].setValue(this.task.place);
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['description'].setValue(this.task.description);
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['startTime'].setValue(
      new Date(this.task.startTime)
    );
    // tslint:disable-next-line: no-string-literal
    this.eventForm.controls['endTime'].setValue(new Date(this.task.endTime));
  }

  submit() {
    this.checkValidation();
    if (!this.eventForm.valid) {
      return;
    }
    const body = this.convertPayload();
    this.taskService.createTask(body).subscribe(
      (response) => {
        setTimeout(() => {
          this.dialogRef.close(response.body);
        }, 500);
      },
      (e) => {
        console.log('---> error happen: ', e);
      }
    );
  }

  delete() {
    const body = this.convertPayload();
    this.taskService.delete(body).subscribe(
      (response) => {
        setTimeout(() => {
          this.dialogRef.close(null);
        }, 500);
      },
      (e) => {
        console.log('---> delete error: ', e);
      }
    );
  }

  convertPayload() {
    const user = this.loginService.getCurrentUser();
    let body = {} as Task;
    const { startTime, endTime } = this.eventForm.value;
    const { username, email, password } = user;
    body = { ...this.eventForm.value };
    body.startTime = startTime.getTime();
    body.endTime = endTime.getTime();
    body.creator = username;
    body.creatorEmail = email;
    body.password = password;
    body.id = this.task && this.task.id;
    return body;
  }

  checkValidation() {
    for (const key in this.eventForm.controls) {
      if (this.eventForm.get(key)) {
        this.eventForm.get(key).markAsDirty();
        this.eventForm.get(key).updateValueAndValidity();
      }
    }
  }
}
