import { Pipe, PipeTransform } from '@angular/core';
import { stuentData } from './model/studentdata';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(list: stuentData[], filterBy: string) {
    if (filterBy === "all" || filterBy == '' || filterBy.length == 0) {
      return list
    } else {
      return list.filter((std) => {
        return std.gender.toLocaleLowerCase() == filterBy.toLocaleLowerCase()
      })
    }
  }

}
