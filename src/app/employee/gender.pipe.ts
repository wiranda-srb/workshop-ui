import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderConvert'
})
export class GenderPipe implements PipeTransform {

  transform(value:string): string {
    if(value === 'M'){
      return 'Male';
    }else if(value ==='F'){
      return 'Female';
    }
    return null;
  }

}
