import {CharterRate} from "./charter-rate.model";

export class CharterRates {

  /**
   * @description initializes a new instance of a class by providing the boat name and
   * charter rates.
   * 
   * @param { string } boatName - name of the boat being created and is used to construct
   * the `CharterRate` objects.
   * 
   * @param { CharterRate[] } charterRates - array of CharterRate objects that define
   * the prices for various boat charter services offered by the `BoatClassificationService`.
   */
  constructor(
    public boatName: string,
    public charterRates: CharterRate[]
  ) {
  }

}
