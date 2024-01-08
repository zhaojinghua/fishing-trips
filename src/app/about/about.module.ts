import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { QuestionFormComponent } from './question-form/question-form.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AboutComponent, QuestionFormComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: AboutComponent}])
  ],
  exports: [RouterModule]
})
export class AboutModule {
}
