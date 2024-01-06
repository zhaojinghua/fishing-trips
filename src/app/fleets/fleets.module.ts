import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FleetsComponent} from "./fleets.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [FleetsComponent],
    imports: [
        RouterModule.forChild([{path: '', component: FleetsComponent}]),
        CommonModule
    ],
  exports: [RouterModule]
})
export class FleetsModule {
}
