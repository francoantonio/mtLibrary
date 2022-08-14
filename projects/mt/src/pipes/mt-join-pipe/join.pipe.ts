import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(value: string[] | number[], separator: string = ','): string {
    if (value.length === 0) {
      return '';
    }

    return value.join(separator);
  }
}
