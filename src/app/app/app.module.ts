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
import {NewChampionMaskWrapper} from '../new-champion-mask/wrapper/new-champion-mask-wrapper.component';
import {FormMetaData} from '../new-champion-mask/form/form-input/form-metadata.component';
import {QuestionService} from '../core/services/question.service';
import {CreateNewChampionWrapper} from '../champion/create-champion-wrapper/create-champion-wrapper.component';


@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ChampProfileComponent,
    ChampionListComponent,
    NewChampionMaskWrapper,
    NewChampionMaskDynamicQuestionComponent,
    NewChampionMaskDynamic,
    FormMetaData,
    CreateNewChampionWrapper
  ],
  providers: [ChampionService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
