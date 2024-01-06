import {Component} from '@angular/core';
import {DailyTrips} from "./daily-trips/dailytrips.model";
import {Trip} from "./daily-trips/trip/trip.model";

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent {

  availableTrips: DailyTrips[] = [new DailyTrips(new Date('2024-01-08'),
    [new Trip('123', 'New Huck Finn', 25, 25, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00')),
      new Trip('124', 'Sea Wolf', 25, 21, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00'), "Chef on board. Bring $25 cash for breakfast and lunch!!"),
      new Trip('125', 'Salty Lady', 23, 18, 200, new Date('2024-01-08T06:00:00'), new Date('2024-01-08T15:00:00'))
    ]), new DailyTrips(new Date('2024-01-09'),
    [new Trip('126', 'New Huck Finn', 25, 24, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00'), "Now Using Traps! Must have 2024 CA Crab Trap Validation."),
      new Trip('127', 'Sea Wolf', 25, 21, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00')),
      new Trip('128', 'Salty Lady', 23, 18, 200, new Date('2024-01-09T06:00:00'), new Date('2024-01-09T15:00:00'))
    ])];
}
