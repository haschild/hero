import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// angular 也是用注入的方式，和 @component 一样
@Injectable()
export class HeroService {
    constructor() { }

    getHeroes(): Hero[] {
        return HEROES;
    }
}