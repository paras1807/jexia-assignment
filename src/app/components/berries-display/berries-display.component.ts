import { Component, OnInit, Input } from '@angular/core';
import { BerryInfo } from 'src/app/dto/dto';

@Component({
  selector: 'app-berries-display',
  templateUrl: './berries-display.component.html',
  styleUrls: ['./berries-display.component.scss']
})
export class BerriesDisplayComponent implements OnInit {

  filter = '';
  sortAsc = true;

  @Input()
  berries: BerryInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
