import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {HeroService} from '../hero-service';
import {Hero} from '../hero';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  // Subject 可以是数据源，本身也是 Observable，可以调用 next(value) 向 Observable 推送值
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // 只有当过滤条件发生变化的时候才发送请求
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // 也许你在300ms内发送了多个的请求，这些请求也许没有返回值，但是他只会返回最近http返回的结果
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
