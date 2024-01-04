import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TripTableComponent} from "./trip-table.component";
import {DailyTripsComponent} from "./daily-trips/daily-trips.component";
import {TripComponent} from "./daily-trips/trip/trip.component";
import {TripFilterComponent} from "./trip-filter/trip-filter.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TripTableComponent,
    DailyTripsComponent,
    TripFilterComponent,
    TripComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: TripTableComponent}])
  ],
  exports: [RouterModule]
})
export class TripTableModule {
}
