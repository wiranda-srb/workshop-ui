import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jotTitleConvert'
})
export class JotTitlePipe implements PipeTransform {

  transform(value:string): string {
    if(value === 'M'){
      return 'Manage';
    }else if (value==='O'){
      return 'Operate';
    }
    return value;
  }

}
