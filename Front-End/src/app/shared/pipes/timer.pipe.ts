import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any): any {
    return Math.floor((value)/3600)+':'+Math.floor((value)/60)+':'+Math.floor((value)%60);
  }

}

