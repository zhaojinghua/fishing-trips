import {Component} from '@angular/core';
import {Trip} from "./trip/trip.model";
import {DailyTrips} from "./dailytrips.model";

@Component({
  selector: 'app-daily-trips',
  templateUrl: './daily-trips.component.html',
  styleUrls: ['./daily-trips.component.css']
})
export class DailyTripsComponent {

  dailyTrips: DailyTrips[] = [new DailyTrips(new Date('2024-01-08'),
    [new Trip('123', 'New Huck Finn', 25, 25, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00')),
            new Trip('124', 'Sea Wolf', 25, 21, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00'), "Chef on board. Bring $25 cash for breakfast and lunch!!"),
            new Trip('125', 'Salty Lady', 23, 18, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00'))
  ]), new DailyTrips(new Date('2024-01-09'),
    [new Trip('126', 'New Huck Finn', 25, 24, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00'), "Now Using Traps! Must have 2024 CA Crab Trap Validation."),
      new Trip('127', 'Sea Wolf', 25, 21, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00')),
      new Trip('128', 'Salty Lady', 23, 18, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00'))
    ])];
}
