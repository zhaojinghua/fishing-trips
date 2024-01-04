import {Component, OnInit} from '@angular/core';
import {CharterRates} from "./charter-rates.model";
import {CharterRate} from "./charter-rate.model";

@Component({
  selector: 'app-charter-rates',
  templateUrl: './charter-rates.component.html',
  styleUrls: ['./charter-rates.component.css']
})
export class CharterRatesComponent implements OnInit {

  allBoatCharterRates: CharterRates[] = [new CharterRates('New Huck Finn',
    [
      new CharterRate('New Huck Finn', 'Private Charter', 'Rockfish/Lingcod', 25, 3000, 3500),
      new CharterRate('New Huck Finn', 'Private Charter', 'Potluck', 25, 3000, 3500)
    ]),
    new CharterRates('Sea Wolf',
      [
        new CharterRate('Sea Wolf', 'Private Charter', 'Rockfish/Lingcod', 20, 2800, 3200),
        new CharterRate('Sea Wolf', 'Private Charter', 'Potluck', 20, 2800, 3200)])];

  ngOnInit() {
  }

}
