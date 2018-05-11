import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message-service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


// 这里和官网的不一致，查看，rxjs README.md 的说明， 这样就可以导入 rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


// angular 也是用注入的方式，和 @component 一样
@Injectable()
export class HeroService {
    private heroUrl = 'api/heroes';
    constructor(
        private messageService: MessageService,
        private httpClient: HttpClient
    ) { }

    getHero(id: number): Observable<Hero> {
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Observable.of(HEROES.find(hero => hero.id === id));
    }
    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(this.heroUrl);
    }


    // 打印log日志
    private log(message: string): void {
        this.messageService.add('heroService' + message);

    }
}
