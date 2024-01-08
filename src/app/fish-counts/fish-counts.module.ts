import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FishCountsComponent} from "./fish-counts.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [FishCountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FishCountsComponent}])
  ],
  exports: [RouterModule]
})
export class FishCountsModule {
}
