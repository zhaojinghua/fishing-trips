import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CharterRatesComponent} from "./charter-rates.component";

@NgModule({
  declarations: [CharterRatesComponent],
  imports: [
    RouterModule.forChild([{path: '', component: CharterRatesComponent}])
  ],
  exports: [RouterModule]
})
export class CharterRatesModule {
}
