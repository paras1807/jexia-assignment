import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { Page, BerryInfo, NameUrlPair } from 'src/app/dto/dto';
import { forkJoin, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-berries-catalog',
  templateUrl: './berries-catalog.component.html',
  styleUrls: ['./berries-catalog.component.scss']
})
export class BerriesCatalogComponent implements OnInit {
  
  offset = 0;
  sizeLimit = 10;
  berriesCatalog: Page<NameUrlPair> = {} as Page<NameUrlPair>;
  berries: BerryInfo[] = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData(this.offset, this.sizeLimit);
  }

  loadData(offset: number, limit: number) {
    this.offset = offset;
    this.sizeLimit = limit;
    this.dataService.getAllBerries(offset, limit)
    .subscribe(
      val => this.loadBerryInfo(val),
      err => console.log(err)
    );
  }

  loadBerryInfo(berryInfo: Page<NameUrlPair>) {
    this.berriesCatalog = berryInfo;
    let observables: Observable<BerryInfo>[] = [];
    berryInfo.results.reduce((prev, curr) =>{
      prev.push(this.dataService.getBerryInfo(curr.url));
      return prev;
    }, observables);
    forkJoin(observables)
    .subscribe(
      arr => this.berries = arr,
      err => console.log(err),
    )
  }

  navigateWithState(info: BerryInfo) {
    this.router.navigateByUrl('/catalog/info', {state: {berry: info}});
  }

  prevClick() {
    this.loadData(this.offset - this.sizeLimit, this.sizeLimit);
  }

  nextClick() {
    this.loadData(this.offset + this.sizeLimit, this.sizeLimit);
  }

  getPaginationInfo() {
    return "" + ((this.offset/this.sizeLimit) + 1) + "/" + Math.ceil((this.berriesCatalog.count / this.sizeLimit));
  }

}
