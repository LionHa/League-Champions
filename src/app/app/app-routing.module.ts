import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dasboard.component';
import {ChampionListComponent} from '../champion-list/champion-list.component';
import {ChampProfileComponent} from '../champion-profile/champion-profile.component';
import {NewChampionMaskDynamicForm} from '../new-champion-mask/wrapper/new-champion-mask-wrapper.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'champion/:id', component: ChampProfileComponent},
  {path: 'champion-list', component: ChampionListComponent},
  {path: 'new-champion-mask-dynamic-form', component: NewChampionMaskDynamicForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
