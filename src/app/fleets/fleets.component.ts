import {Component} from '@angular/core';
import {Boat} from "./boat.model";

@Component({
  selector: 'app-fleets',
  templateUrl: './fleets.component.html',
  styleUrls: ['./fleets.component.css']
})
export class FleetsComponent {

  boats: Boat[] = [new Boat("https://www.fishemeryville.com/graphics/boats/nhf_large.jpg", "Jay Yokomizo", "New Huck Finn"),
    new Boat("https://www.fishemeryville.com/graphics/boats/SW_new_large.jpg", "Jon Yokomizo", "Sea Wolf"),
    new Boat("https://www.fishemeryville.com/graphics/boats/CGull2_large.jpg", "Don Wong", "C-Gull II"),
    new Boat("https://www.fishemeryville.com/graphics/boats/pp_2022__1__large.jpg", "JJ Holloway", "Pacific Pearl")
  ]
}
