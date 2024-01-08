import {Component, OnInit} from '@angular/core';
import {FishCount} from "./fish-count.model";

@Component({
  selector: 'app-fish-counts',
  templateUrl: './fish-counts.component.html',
  styleUrls: ['./fish-counts.component.css']
})
export class FishCountsComponent implements OnInit {


  latestFishCount: FishCount[] = [new FishCount('New Huck Finn', 'Crab Combo', 25,
    {'crab': 200, 'rockfish': 200, 'lingcod': 2}),
    new FishCount('Sea Wolf', 'Rockfish', 20,
      {'rockfish': 200, 'lingcod': 2}),
    new FishCount('Salty Lady', 'Rockfish', 20,
      {'rockfish': 200, 'lingcod': 2}),
    new FishCount('C-Gull II', 'Rockfish', 20,
      {'rockfish': 200, 'lingcod': 2}),
    new FishCount('Pacific Pearl', 'Rockfish', 20,
      {'rockfish': 200, 'lingcod': 2})


  ];

  ngOnInit() {
  }
}
