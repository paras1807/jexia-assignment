import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { BerryInfo, NameUrlPair } from 'src/app/dto/dto';

@Component({
  selector: 'app-berries-firmness',
  templateUrl: './berries-firmness.component.html',
  styleUrls: ['./berries-firmness.component.scss']
})
export class BerriesFirmnessComponent implements OnInit, OnDestroy {

  sub: Subscription = {} as Subscription;
  firmness = '';
  berries: BerryInfo[] = [];
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.firmness = params['name'];
      this.loadDataWithFirmness(this.firmness);
    });
    
  }

  loadDataWithFirmness(firmness: string) {
    this.dataService.getBerriesWithFirmness(firmness)
    .subscribe(
      val => {
        if (val && val.berries) {
          this.loadBerriesInfo(val.berries);
        }
      },
      err => console.log(err)
    )
  }

  private loadBerriesInfo(berries: NameUrlPair[]) {
    let observables: Observable<BerryInfo>[] = [];
    berries.reduce((prev, curr) =>{
      prev.push(this.dataService.getBerryInfo(curr.url));
      return prev;
    }, observables);
    forkJoin(observables)
    .subscribe(
      arr => this.berries = arr,
      err => console.log(err),
    )
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
