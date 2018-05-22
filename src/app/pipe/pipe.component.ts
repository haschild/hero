import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  birthday: Date = new Date();
  toggle = true;
  str: String =  "your name";
  constructor() { }

  // 可以通过get、set？
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat(): void {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
  }

}
