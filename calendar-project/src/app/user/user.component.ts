import { Component, OnInit } from '@angular/core';
import { User } from 'libs/authentication/authentication/login/models/login.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  selectedDate: Date;
  currentUser: User;
  constructor() {}

  ngOnInit() {
    this.selectedDate = new Date();
  }

  onSelectDate(date) {
    this.selectedDate = date;
  }
}
