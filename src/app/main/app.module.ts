import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from '../dashboard/dasboard.component';
import {ChampProfileComponent} from '../champion-profile/champion-profile.component';
import {ChampionListComponent} from '../champion-list/champion-list.component';
import {ChampionService} from '../core/service/champion.service';
import {AppRoutingModule} from './app-routing.module';
import {CreateChampionWrapperComponent} from '../champion-form/create-champion-wrapper/create-champion-wrapper.component';
import {CreateChampionFormComponent} from '../champion-form/create-champion-form/create-champion-component';


@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ChampProfileComponent,
    ChampionListComponent,
    CreateChampionWrapperComponent,
    CreateChampionFormComponent
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
