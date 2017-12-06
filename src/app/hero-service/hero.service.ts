import { Injectable } from '@angular/core';
import { Hero } from '../hero-detail/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
 }
 // HeroService 可以从任何地方获取hero数据—— Web 服务、本地存储、模拟数据源