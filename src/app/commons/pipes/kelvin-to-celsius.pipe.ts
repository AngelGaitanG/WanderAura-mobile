import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: number): number {
    return value - 273.15;
  }

}
