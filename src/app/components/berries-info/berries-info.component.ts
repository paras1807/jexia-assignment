import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BerryInfo } from 'src/app/dto/dto';

@Component({
  selector: 'app-berries-info',
  templateUrl: './berries-info.component.html',
  styleUrls: ['./berries-info.component.scss']
})
export class BerriesInfoComponent implements OnInit {

  berryInfo: BerryInfo = {} as BerryInfo;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (history.state.info === undefined) {
      // someone directly opened url
      this.router.navigate(["/catalog"]);
    } else {
      this.berryInfo = history.state.info
    }
  }

}
