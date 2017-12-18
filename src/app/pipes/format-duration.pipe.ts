import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const h = Math.floor(value / 60);
    const m = value % 60;
    const out = ((h > 0) ? `${h}h ` : '') + `${m}min`;
    return out;
  }

}
