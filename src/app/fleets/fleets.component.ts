import {Component} from '@angular/core';
import {Boat} from "./boat.model";

@Component({
  selector: 'app-fleets',
  templateUrl: './fleets.component.html',
  styleUrls: ['./fleets.component.css']
})
export class FleetsComponent {

  boats: Boat[] = [new Boat("/assets/newhuckfinn.jpg", "Jay Yokomizo", "New Huck Finn"),
    new Boat("/assets/seawolf.jpg", "Jon Yokomizo", "Sea Wolf"),
    new Boat("/assets/cgullii.jpg", "Don Wong", "C-Gull II"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl"),
    new Boat("/assets/pacificpearl.jpg", "JJ Holloway", "Pacific Pearl")
  ]
}
