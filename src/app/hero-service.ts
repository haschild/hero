import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message-service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// 这里和官网的不一致，查看，rxjs README.md 的说明， 这样就可以导入 rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


// http error catch
import { catchError, map, tap } from 'rxjs/operators';

// angular 也是用注入的方式，和 @component 一样
@Injectable()
export class HeroService {
    private heroUrl = 'api/heroes';
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return Observable.of(result as T);
        };
    }
    constructor(
        private messageService: MessageService,
        private httpClient: HttpClient
    ) { }

    getHero(id: number): Observable<Hero> {
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Observable.of(HEROES.find(hero => hero.id === id));
    }
    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(this.heroUrl)
            .pipe(
                // tap 记录各种操作
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
    }


    // 打印log日志
    private log(message: string): void {
        this.messageService.add('heroService' + message);

    }
}
