import {Trip} from "./trip/trip.model";

export class DailyTrips{

  constructor(
    public tripDate: Date,
    public trips: Trip[]
  ) {}

}
