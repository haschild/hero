import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// 组件的装饰器
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: '张三'
  };
  constructor() { }

  ngOnInit() {
  }

}
