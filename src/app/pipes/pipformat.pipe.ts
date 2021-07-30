import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'pipformat'
})
export class PipformatPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe
    ) {}

  transform (value: any, target: any, type: any, format: any): any{
    let returnValue: any = '';

    let valueTarget: string = target[0];
    let valueType: string = type[0];
    let valueFormat: string = format[0];

    switch (valueType) {
      case 'number':
        returnValue = this.returnNumber(value)
        break;
      case 'boolean':
        returnValue = this.returnBoolean(value)
        break;
      case 'date':
        returnValue = this.returnDate(value, valueFormat)
        break;
      case 'time':
        returnValue = this.returnTime(value, valueFormat)
        break;
      case 'field':
        returnValue = this.returnField(value, valueTarget)
        break;
      case 'string':
        returnValue = this.returnString(value, valueFormat)
        break;

      default:
        returnValue = value;
        break;
    }

    return returnValue;
  }

  returnNumber(value: any): number{
    let returnValue: number;
    returnValue = value;
    return returnValue;
  }

  returnBoolean(value: any): string{
  // returnBoolean(value: any): HTMLElement{
    //let returnValue: string;
    //var parser = new DOMParser();

    if (value){
      return '✓'; //generar constantes globales para usar

      //var doc = parser.parseFromString('<i class="bi bi-check-circle"></i>', 'text/html');
      //console.log(doc.body)
      //return doc.body;

    }else{
      //var doc = parser.parseFromString('', 'text/html');
      //return doc.body;
      return '';
    }



  }

  returnDate(value: any, format: string): string{
    let returnValue: any;
    returnValue = value;

    if (format[0] !== ''){
      returnValue = this.datePipe.transform(value, format[0], 'UTC');
    }else{
      returnValue = this.datePipe.transform(value, 'fullDate', 'UTC');
    }
    return returnValue;
  }

  returnTime(value: any, format: string): number{
    let returnValue: any;
    returnValue = value;

    const times = value.split(':');
    const dateTime = new Date();

    dateTime.setHours(parseInt(times[0]));
    dateTime.setMinutes(parseInt(times[1]));
    dateTime.setSeconds(parseInt(times[2]));

    if (format[0] !== ''){
      returnValue = this.datePipe.transform(dateTime, format, 'UTC');
    }else{
      returnValue = this.datePipe.transform(dateTime, 'fullTime', 'UTC');
    }
    return returnValue;
  }

  returnField(value: string, target: any): number{
    let returnValue: any;
    returnValue = value[target];
    return returnValue;
  }

  returnString(value: any, format: string): string{
    let returnValue: string;
    switch (format) {
      case 'uppercase':
        returnValue = value.toUpperCase();
      break;
      case 'lowercase':
        returnValue = value.toLowerCase();
      break;
      case 'capitalize':
        value = value.toLowerCase();
        const values = value.split(' ');
        for( let i in values ){
          values[i] = values[i][0].toUpperCase() + values[i].substr(1);
        }
        returnValue = values.join(' ');
        break;
      default:
        returnValue = value;
        break;
    }
    return returnValue;
  }







/*
  transform (value: string, target: any, type: any, format: any): string{
    let returnValue: any = '';

    let valueTarget: string = target[0];
    let valueType: string = type[0];
    let valueFormat: string = format[0];

    if (valueType === 'number'){
      returnValue = value;
    }

    if (valueType === 'date'){
      if (valueFormat[0] !== ''){
        returnValue = this.datePipe.transform(value, valueFormat[0], 'UTC');
      }else{
        returnValue = this.datePipe.transform(value, 'fullDate', 'UTC');
      }
    }

    if (valueType === 'time'){
      const times = value.split(':');
      const dateTime = new Date();

      dateTime.setHours(parseInt(times[0]));
      dateTime.setMinutes(parseInt(times[1]));
      dateTime.setSeconds(parseInt(times[2]));

      if (valueFormat[0] !== ''){
        returnValue = this.datePipe.transform(dateTime, valueFormat, 'UTC');
      }else{
        returnValue = this.datePipe.transform(dateTime, 'fullTime', 'UTC');
      }
    }

    if (valueType === 'field'){
      value = value[valueTarget];
    }

    if (valueType === 'string' || valueType === 'field' ){
      if (valueFormat === 'uppercase'){
        returnValue = value.toUpperCase();
      }
      if (valueFormat === 'lowercase'){
        returnValue = value.toLowerCase();
      }
      if (valueFormat === 'capitalize'){
        value = value.toLowerCase();
        const values = value.split(' ');
        for( let i in values ){
          values[i] = values[i][0].toUpperCase() + values[i].substr(1);
        }
        returnValue = values.join(' ');
      }
      if (valueFormat === ''){
        returnValue = value;
      }
    }

    if (valueType === ''){
      returnValue = value;
    }
    return returnValue;
  }
*/
}
