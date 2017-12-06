import { Component } from '@angular/core';
import { Hero } from './hero-detail/hero';


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// 在@component 上面区域可以自定义数据

// ------------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




// 这里定义的属性在组件里可以使用
export class AppComponent {

  selectedHero: Hero;
  // 增加一个点击事件
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  title = 'Tour of Heroes';


  heroes = HEROES;
}


