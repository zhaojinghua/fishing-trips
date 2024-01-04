import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{path: '', component: AboutComponent}])
  ],
  exports: [RouterModule]
})
export class AboutModule {
}
