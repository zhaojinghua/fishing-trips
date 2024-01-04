import {Component, Input} from '@angular/core';
import {DailyTrips} from "./dailytrips.model";

@Component({
  selector: 'app-daily-trips',
  templateUrl: './daily-trips.component.html',
  styleUrls: ['./daily-trips.component.css']
})
export class DailyTripsComponent {

  @Input() dailyTrips: DailyTrips;

}
