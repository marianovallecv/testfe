import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipfilter'
})
export class PipfilterPipe implements PipeTransform {
  transform (items: any, term: any): any {
    if (term === undefined) return items;
    let value: string;

    return items.filter(function(item: any) {
      for (let property in item){
        if (item[property]['name']){
          value = item[property]['name'];
        }else{
          value = item[property];
        }
        if (value){
          if (value.toString().toLowerCase().includes(term.toLowerCase())){
            return true;
          }
        }
       }
      return false;
    });
  }
}
