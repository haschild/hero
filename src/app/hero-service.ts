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

// set HttpHeaders
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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

    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(this.heroUrl)
            .pipe( // 管道里可以捕获异常
                // tap 记录各种操作
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
    }
    // client js value.
    getHero(id: number): Observable<Hero> {
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Observable.of(HEROES.find(hero => hero.id === id));
    }

    // get hero by id. will 404 if id not found.
    getHeroeById(id: number): Observable<Hero> {
        const url = `${this.heroUrl}/${id}`;
        return this.httpClient.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHeroeById id=${id}`))
        );
    }
    // PUT: update the hero on the service

    // put 提供三个选项 url地址，修改项，选项（包含数据的请求类型）
    updateHero(hero: Hero): Observable<any> {
        return this.httpClient.put(this.heroUrl, hero, httpOptions)
            .pipe(
                tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }
    /** POST: add a new hero to the server */
    addHero(hero: Hero): Observable<Hero> {
        return this.httpClient.post<Hero>(this.heroUrl, hero, httpOptions).pipe(
            tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteHero(hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroUrl}/${id}`;

        return this.httpClient.delete<Hero>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Observable.of([]);
        }
        return this.httpClient.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
            tap(_ => this.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }

    // 打印log日志
    private log(message: string): void {
        this.messageService.add('heroService' + message);

    }
}
