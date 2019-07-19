import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';

import { MaterialModule } from './material.module';
import { QuestionComponent } from './questionnaires/question/question.component';
import { PropositionComponent } from './questionnaires/proposition/proposition.component';
import { PropositionListComponent } from './questionnaires/proposition-list/proposition-list.component';
import { QuestionListComponent } from './questionnaires/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    PropositionComponent,
    PropositionListComponent,
    QuestionListComponent,
    QuestionnaireComponent,
    QuestionnaireFormComponent,
    QuestionnaireListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [QuestionComponent, PropositionComponent, PropositionListComponent, QuestionListComponent]
})
export class AppModule { }
