import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "../common/components/header/header.component";
import { TripTableComponent } from './trip-table/trip-table.component';
import { TripFilterComponent } from './trip-table/trip-filter/trip-filter.component';
import { DailyTripsComponent } from './trip-table/daily-trips/daily-trips.component';
import { TripComponent } from './trip-table/daily-trips/trip/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripTableComponent,
    TripFilterComponent,
    DailyTripsComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
