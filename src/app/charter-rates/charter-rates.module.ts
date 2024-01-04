import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CharterRatesComponent} from "./charter-rates.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CharterRatesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CharterRatesComponent}])
  ],
  exports: [RouterModule]
})
export class CharterRatesModule {
}
