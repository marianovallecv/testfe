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
    if (value){
      return '✓';
    }else{
      return '';
    }
  }

  returnDate(value: any, format: string): string{
    let returnValue: any = value;
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

}
