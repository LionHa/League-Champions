import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dasboard.component';
import {ChampionListComponent} from '../champion-list/champion-list.component';
import {ChampProfileComponent} from '../champion-profile/champion-profile.component';
import {CreateChampionWrapperComponent} from '../champion-form/create-champion-wrapper/create-champion-wrapper.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'champion/:id', component: ChampProfileComponent},
  {path: 'champion-list', component: ChampionListComponent},
  {path: 'create-champion-wrapper', component: CreateChampionWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
