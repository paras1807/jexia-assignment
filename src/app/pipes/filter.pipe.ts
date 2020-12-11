import { Pipe, PipeTransform } from '@angular/core';
import { BerryInfo } from 'src/app/dto/dto';

@Pipe({
  name: 'filterBerryBy'
})
export class FilterBerryPipe implements PipeTransform {

  transform(value: BerryInfo[], val: string,): BerryInfo[] {
    return value.filter(tmp => tmp.name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) != -1);
  }

}
