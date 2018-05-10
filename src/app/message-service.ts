
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    constructor() { }

     message: string[] = [];

    add(msg: string): void {
        this.message.push(msg);
    }

    clear(): void {
        this.message = [];
    }
}