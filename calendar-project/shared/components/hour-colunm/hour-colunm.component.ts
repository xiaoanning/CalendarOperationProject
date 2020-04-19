import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { DateForDay, Task } from 'shared/models/task.model';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-hour-colunm',
  templateUrl: './hour-colunm.component.html',
  styleUrls: ['./hour-colunm.component.scss'],
})
export class HourColunmComponent implements OnInit {
  @Input() time;
  @Input() selectedDate: Date;
  @Input() dayInfo: DateForDay;
  @Input() existTask: Task;

  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  openDialog() {
    console.log('---> day info: ', this.dayInfo, this.time, this.selectedDate);
    const modal = this.modalService.create({
      nzContent: EventFormComponent,
      nzWidth: '600px',
      nzComponentParams: {
        dayInfo: this.dayInfo,
        time: this.time,
        task: this.existTask,
      },
      nzFooter: this.existTask
        ? [
            {
              label: 'Delete',
              type: 'danger',
              onClick: (componentInstance) => {
                // console.log('---> click save: ', componentInstance);
                componentInstance.delete();
              },
            },
            {
              label: 'Save',
              type: 'primary',
              onClick: (componentInstance) => {
                // console.log('---> click save: ', componentInstance);
                componentInstance.submit();
              },
            },
          ]
        : [
            {
              label: 'Save',
              type: 'primary',
              onClick: (componentInstance) => {
                // console.log('---> click save: ', componentInstance);
                componentInstance.submit();
              },
            },
          ],
    });

    modal.afterClose.subscribe((createdTask) => {
      console.log('---> after close: ', createdTask);
      if (createdTask !== undefined) {
        this.existTask = createdTask;
      }
    });
  }
}
