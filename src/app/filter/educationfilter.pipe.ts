import { Pipe, PipeTransform } from '@angular/core';
import { stuentData } from './model/studentdata';

@Pipe({
  name: 'educationfilter',
  standalone: true
})
export class EducationfilterPipe implements PipeTransform {

  transform(list:stuentData[],filter:string) {
    if(filter==='education' || filter==='' || filter.length==0){
      return list
    }
    else{
      return list.filter((std)=>{
        return std.education.toLocaleLowerCase()==filter.toLocaleLowerCase()
      })
    }
  }

}
