import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uspkr',
})
export class UspkrPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value * x;
  }
}
