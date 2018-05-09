import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';
// 组件的装饰器
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;


  // 1。当做HeroService的注入点，并且在构造函数实例化的时候，创建一个单例
  //2. 构造函数一般只是拿来初始化操作，参数赋值属性
  constructor(private heroService: HeroService) {
    
   }

  ngOnInit() {
    this.getSelect();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getSelect(): void {
    this.heroService.getHeroes()
    .subscribe(heroes1 => this.heroes = heroes1);
  }

}
