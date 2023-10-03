import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input()
  cardTitle:string="";

  @Input()
  cardSection:string="";

  @Input()
  cardImg:string="";
}
