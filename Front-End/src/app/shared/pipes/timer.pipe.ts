import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, max:any): any {
    return Math.floor((max-value)/3600)+':'+Math.floor((max-value)/60)+':'+Math.floor((max-value)%60);
  }

}

