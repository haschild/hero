import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    // 做赋值
    this.heroService.getHeroes()
    .subscribe( (heroes) => this.heroes = heroes);
  }
  // catch click and add
  add(name: string): void {
    name = name.trim();
    const id: number = Math.floor(Math.random() * 10);
    if (!name) { return; }

    // 会自动将id 的值增加
    // this.heroService.addHero({ name: name, id: id} as Hero)
    // as 在 typeScript 可以强制转换类型
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero) => {
        this.heroes.unshift(hero);
        this.goBack(); // 后退
      });
  }

  goBack(): void {
    this.location.back();
  }
}
