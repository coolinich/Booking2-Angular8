import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToArrayOfSize'
})
export class ConvertToArrayOfSizePipe implements PipeTransform {

  transform(value: any[], size?: number): any {
    value = [...[].constructor(size)];
    return value;
  }

}
