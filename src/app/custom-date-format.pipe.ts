import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
// pipe fo convert number to hours+minutes format.
// Example: 350 (response from API in minutes)  5h 50m

export class CustomDateFormatPipe implements PipeTransform {

  transform(time): string {
    time = this.convertNumberToTime(time);
    return time;
  }

  convertNumberToTime(num: number): string {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + 'h ' + minutes + 'm';
  }
}
