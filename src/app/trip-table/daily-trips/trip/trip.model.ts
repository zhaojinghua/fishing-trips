export class Trip {
  constructor(
    public id: string,
    public boatName: string,
    public capacity: number,
    public availableSpots: number,
    public price: number,
    public departureDate: Date,
    public returnDate: Date,
    public notes?: string
  ) {
  }
}
