import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  templateUrl: './card-prices.component.html',
  styleUrls: ['./card-prices.component.css']
})
export class CardPricesComponent implements OnInit {

  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "R$299,90"
  constructor() { }

  ngOnInit(): void {
  }

}
