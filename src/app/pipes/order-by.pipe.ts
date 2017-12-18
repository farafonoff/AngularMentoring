import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], field: string): any {
    return value.slice().sort((a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (b[field] > a[field]) {
        return -1;
      }
      return 0;
    });
  }

}
