import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NewChampionMaskDynamic} from '../new-champion-mask/form/new-champion-mask-form.component';
import {NewChampionMaskDynamicQuestionComponent} from '../new-champion-mask/question/new-champion-mask-question.component';
import {DashboardComponent} from '../dashboard/dasboard.component';
import {ChampProfileComponent} from '../champion-profile/champion-profile.component';
import {ChampionListComponent} from '../champion-list/champion-list.component';
import {ChampionService} from '../core/services/champion.service';
import {AppRoutingModule} from './app-routing.module';
import {NewChampionMaskDynamicForm} from "../new-champion-mask/wrapper/new-champion-mask-wrapper.component";


@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent, DashboardComponent, NewChampionMaskDynamic, NewChampionMaskDynamicForm, NewChampionMaskDynamicQuestionComponent, ChampProfileComponent, ChampionListComponent
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
