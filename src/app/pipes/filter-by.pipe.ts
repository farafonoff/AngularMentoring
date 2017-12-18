import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const filtered = value.filter(course => course.name.indexOf(args) !== -1);
    return filtered;
  }

}
