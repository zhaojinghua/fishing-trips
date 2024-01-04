import {CharterRate} from "./charter-rate.model";

export class CharterRates {

  constructor(
    public boatName: string,
    public charterRates: CharterRate[]
  ) {
  }

}
