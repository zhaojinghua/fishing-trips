import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FishCountsComponent} from "./fish-counts.component";

@NgModule({
  declarations: [FishCountsComponent],
  imports: [
    RouterModule.forChild([{path: '', component: FishCountsComponent}])
  ],
  exports: [RouterModule]
})
export class FishCountsModule {
}
