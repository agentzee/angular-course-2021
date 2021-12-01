import { Component, OnInit, Input } from '@angular/core';

export interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  @Input() priceTable: IPriceItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
