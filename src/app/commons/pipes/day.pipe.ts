import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
  standalone: true
})
export class DayPipe implements PipeTransform {

  transform(value: number): unknown {
    let a = new Date(+value * 1000);
    let days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    return days[a.getDay()];
  }

}
