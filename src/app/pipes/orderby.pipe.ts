import { Pipe, PipeTransform } from '@angular/core';
import { BerryInfo } from 'src/app/dto/dto';


@Pipe({
  name: 'orderBerryBy'
})
export class OrderBerryByPipe implements PipeTransform {

  transform(value: BerryInfo[], asc: boolean): BerryInfo[] {
    if (value && value.length > 1) {
      let multiplier = asc == true ? 1 : -1;
      value.sort((a, b) => {
        if (a.name < b.name) {
          return -1 * multiplier;
        } else if (a.name > b.name) {
          return 1 * multiplier;
        } else {
          return 0;
        }

      });
    }
    return value;
  }

}
