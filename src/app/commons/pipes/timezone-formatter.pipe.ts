import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezoneFormatter',
  standalone: true
})
export class TimezoneFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) {
      return '';
    }
    const parts = value.split('/');
    if(parts.length < 3) {
      return value;
    }
    const region = parts[1].replace('_', ' ');
    const city = parts[2].replace('_', ' ');

    return `${region}, ${city}`
  }

}
