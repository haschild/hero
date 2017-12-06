import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { HeroService } from './hero-service/hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})




// 这里定义的属性在组件里可以使用
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  selectedHero: Hero;
  // 增加一个点击事件
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  title = 'Tour of Heroes';

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }
  ngOnInit(): void {
    this.getHeroes();
  }

}

