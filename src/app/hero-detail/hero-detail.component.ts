import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   hero: Hero;
  heroes: Hero[];
  constructor(
    private router: ActivatedRoute, // 保存着实例路由的信息，可以在路由中提取参数感兴趣。
    private location: Location, // angular 和 浏览器有关系，可以实现后退功能
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getHero(): void {
    // js 中 +string = number 这个我还真没注意到
    const id = +this.router.snapshot.paramMap.get('id');
    this.heroService.getHeroeById(id)
      .subscribe(hero => this.hero = hero);
  }

  // modify and save
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  // 设置浏览器后退按钮
  goBack() {
    this.location.back();
  }

}



