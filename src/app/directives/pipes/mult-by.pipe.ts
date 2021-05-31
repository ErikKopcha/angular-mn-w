import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform {
  transform(num: number = 2, pow: number = 2): number {
    return num * pow;
  }
}
