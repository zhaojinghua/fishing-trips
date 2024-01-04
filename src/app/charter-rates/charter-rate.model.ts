export class CharterRate {

  constructor(
    public boatName: string,
    public tripType: string,
    public fishingType: string,
    public capacity: number,
    public weekdayPrice: number,
    public weekendPrice: number
  ) {
  }

}

