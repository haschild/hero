import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ReplaceStrPipe' })

export class ReplaceStrPipe implements PipeTransform {
    transform(value: string, exponent: string): string {
        return value + " " + exponent;
    }
}
