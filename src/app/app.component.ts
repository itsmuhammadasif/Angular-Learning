import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  udata: any = {};
  getData(data: NgForm) {
    console.warn(data);
    this.udata = data;
  }

  data = 10000;

  upChild() {
    this.data = Math.floor(Math.random() * 10);
  }
  display = true;
  togle() {
    this.display = !this.display;
  }

  userDetails = [
    { name: 'Muhammad Asif', email: 'asif@gmail.com' },
    { name: 'Muhammad Adrees', email: 'adrees@gmail.com' },
    { name: 'Muhammad Umair', email: 'umair@gmail.com' },
    { name: 'Muhammad Ali', email: 'asif@gmail.com' },
  ];

  crot = '';

  updateData(item: string) {
    console.warn(item);
    this.crot = item;
  }

  getVal(item: any) {
    console.warn(item);
  }
}
