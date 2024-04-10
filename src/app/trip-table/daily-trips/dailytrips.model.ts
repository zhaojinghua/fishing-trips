import {Trip} from "./trip/trip.model";

export class DailyTrips {

  /**
   * @description initializes an object with a `tripDate` and `trips` property, providing
   * a framework for manipulating and managing trips within the object's scope.
   * 
   * @param { Date } tripDate - date of the trip, which is used to identify the specific
   * trip being processed in the constructor.
   * 
   * @param { Trip[] } trips - array of Trip objects that are associated with the date
   * specified in the `tripDate` parameter.
   */
  constructor(
    public tripDate: Date,
    public trips: Trip[]
  ) {
  }

}
