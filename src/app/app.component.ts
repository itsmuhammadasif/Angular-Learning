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

  display = true;
  togle() {
    this.display = !this.display;
  }
}
