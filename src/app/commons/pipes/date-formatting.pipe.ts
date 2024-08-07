import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting',
  standalone: true
})
export class DateFormattingPipe implements PipeTransform {

  transform(unixTimestamp: number): unknown {
    let a = new Date(+unixTimestamp * 1000);
    let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    return days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getHours() + ':' + a.getMinutes();
  }

}
