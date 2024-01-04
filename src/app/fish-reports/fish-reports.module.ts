import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FishReportsComponent} from "./fish-reports.component";

@NgModule({
  declarations: [FishReportsComponent],
  imports: [
    RouterModule.forChild([{path: '', component: FishReportsComponent}])
  ],
  exports: [RouterModule]
})
export class FishReportsModule {
}
