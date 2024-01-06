import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "./trip.model";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  // trip: Trip = new Trip('123', 'New Huck Finn', 25, 25, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00'), "Chef on board. Bring $25 cash for breakfast and lunch!!");
  @Input() trip: Trip;
  @Input() isFirstChild: boolean;
  @Input() isLastChild: boolean;

  ngOnInit() {
  }
}
