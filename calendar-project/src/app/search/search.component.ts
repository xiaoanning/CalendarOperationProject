import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from 'shared/components/hour-colunm/services/task-service.service';
import { Task } from 'shared/models/task.model';
import { LoginService } from './../../../libs/authentication/authentication/login/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  keyword: string;
  tasks: Task[];

  private onSearchTimeout;
  private currentUser;
  constructor(
    private router: Router,
    private taskService: TaskServiceService,
    private loginService: LoginService
  ) {
    this.currentUser = this.loginService.getCurrentUser();
  }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['../home']);
  }

  searchTask($event) {
    console.log('---> search: ', $event);
    clearTimeout(this.onSearchTimeout);
    this.onSearchTimeout = setTimeout(() => {
      this.taskService
        .getAllTask($event, this.currentUser)
        .subscribe((tasks: Task[]) => {
          console.log('---> get all tasks: ', tasks);
          this.tasks = tasks;
        });
    }, 350);
  }
}
