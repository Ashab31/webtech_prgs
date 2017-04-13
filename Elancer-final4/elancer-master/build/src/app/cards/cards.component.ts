import { Component, OnInit } from '@angular/core';
import {CardService} from './card.service';
import {ICard} from './cards-interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers:[CardService]
})

export class CardsComponent implements OnInit {

errorMessage: string;
card:ICard[];

  constructor(private _cardService:CardService) { }

  ngOnInit() {
    this._cardService.getTask().subscribe(card => {
      this.card = card;
      console.log(this.card);
    },error=>this.errorMessage = <any>error);
  }

}
