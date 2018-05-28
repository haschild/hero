import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero-service';
import { Hero } from '../hero';
// 这个是必须要导入的。
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('heroStatus', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  // @Input()
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}

// export class Hero {
//   constructor(public name: string, public status = 'inactive') { }

//   toggleState() {
//     this.status = this.status === 'active' ? 'inactive' : 'active';
//   }
// }