export class FishCount {

  constructor(public boat: string, public tripType: string, public anglers: number,
              public count: { [key: string]: number }) {
  }
}
