import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/reservations', pathMatch: 'full'},
  {path: 'reservations', loadChildren: () => import('./trip-table/trip-table.module').then(x => x.TripTableModule)},
  {
    path: 'charter-rates',
    loadChildren: () => import('./charter-rates/charter-rates.module').then(x => x.CharterRatesModule)
  },
  {
    path: 'fish-reports',
    loadChildren: () => import('./fish-reports/fish-reports.module').then(x => x.FishReportsModule)
  },
  {path: 'fish-counts', loadChildren: () => import('./fish-counts/fish-counts.module').then(x => x.FishCountsModule)},
  {path: 'fleets', loadChildren: () => import('./fleets/fleets.module').then(x => x.FleetsModule)},
  {path: 'about', loadChildren: () => import('./about/about.module').then(x => x.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
