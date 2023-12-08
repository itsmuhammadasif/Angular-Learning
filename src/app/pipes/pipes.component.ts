import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  title: string = 'Let us shine';
  date: string = Date();
  amount: number = 40000;

  user = [
    { name: 'Asif', email: 'Asif@gmail.com' },
    { name: 'Ahmad', email: 'Asif@gmail.com' },
    { name: 'Ali', email: 'Asif@gmail.com' },
    { name: 'Abdullah', email: 'Asif@gmail.com' },
  ];

  ngOnInit(): void {}
}
