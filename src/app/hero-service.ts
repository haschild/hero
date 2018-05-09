import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


// 这里和官网的不一致，查看，rxjs README.md 的说明， 这样就可以导入 rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


// angular 也是用注入的方式，和 @component 一样
@Injectable()
export class HeroService {
    constructor() { }

    getHeroes(): Observable<Hero[]> {
        return Observable.of(HEROES);
    }
}

function fun(a) {
    return function (b) {
        return a + b;
    }
}

