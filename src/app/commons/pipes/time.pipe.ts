import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'timeFormat',
    standalone: true
})
export class TimeFormatPipe implements PipeTransform {

    transform(value: string): string {
        return value.split('T')[0];
    }
}