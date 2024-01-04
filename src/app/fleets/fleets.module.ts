import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FleetsComponent} from "./fleets.component";

@NgModule({
  declarations: [FleetsComponent],
  imports: [
    RouterModule.forChild([{path: '', component: FleetsComponent}])
  ],
  exports: [RouterModule]
})
export class FleetsModule {
}
