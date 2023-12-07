import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  name = 'Samntha';
  getName(roll: number, name: string) {
    alert(roll);
    alert(name);
  }
  displayVal: string = '';

  getDate(val: string) {
    console.warn(val);
    this.displayVal = val;
  }

  count = 0;
  getCount(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  disable = false;
  noty = 'Don';

  show = 'y';
  color = 'green';

  users = ['Abd', 'Imam', 'Shan', 'King', 'Riz', 'Faheem', 'Jamal', 'Shaheen'];
  userDetails = [
    {
      name: 'Rocky',
      email: 'rocky@gmail.com',
      age: 34,
      gender: 'male',
      socialAccount: ['facebook', 'youtube', 'insta'],
    },
    {
      name: 'Ronchi',
      email: 'ronchi@gmail.com',
      age: 34,
      gender: 'male',
      socialAccount: ['linkedin', 'whatsapp', 'gmail'],
    },
    {
      name: 'Randy',
      email: 'randy@gmail.com',
      age: 34,
      gender: 'male',
      socialAccount: ['facebook', 'youtube', 'insta'],
    },
    {
      name: 'Roman',
      email: 'roman@gmail.com',
      age: 34,
      gender: 'male',
      socialAccount: ['insta', 'yahoo', 'insta'],
    },
  ];

  focus = 'PAKISTAN XI';

  bgColor = 'green';
  updateColor() {
    this.color = 'blue';
    this.bgColor = 'grey';
  }

  ngOnInit(): void {}
}
