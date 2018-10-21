import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
import { TreeDropdownModule } from 'ng-tree-dropdown';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './registrationcomponent/registerUser.component';
import { InterestListsComponent } from './interestsListComponent/interestLists.component';
import { ModalPopupComponent } from './modalPopupComponent/modalPopup.component';
import { UserRegistrationService } from './registrationcomponent/registerUser.service';
import { InterestListsService } from './interestsListComponent/interestLists.service';
import { UtilService } from './shared/utilService';
import { AppRoutingModule } from './/app-routing.module';
import { AllMediaComponent } from './all-media/all-media.component';
import { CornBuilderComponent } from './corn-builder/corn-builder.component';
import { ManualTriggerComponent } from './manual-trigger/manual-trigger.component';
import { SqlBuilderComponent } from './sql-builder/sql-builder.component';
import { FilterPipe } from './shared/searchFilter';
import { TriggeraddComponent } from './triggeradd/triggeradd.component';
import { DynamicFormsPageComponent } from './dynamic-forms-page/dynamic-forms-page.component';
import { FiletransferComponent } from './filetransfer/filetransfer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UnsavedChangesGuard } from './shared/unsaved-changes-guard.service';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { FileDependencyComponent } from './file-dependency/file-dependency.component';
import { PipelineComponent } from './pipeline/pipeline.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    InterestListsComponent,
    ModalPopupComponent,
    AllMediaComponent,
    CornBuilderComponent,
    ManualTriggerComponent,
    SqlBuilderComponent,
    FilterPipe,
    TriggeraddComponent,
    DynamicFormsPageComponent,
    FiletransferComponent,
    MainPageComponent,
    AlertPopupComponent,
    FileDependencyComponent,
    PipelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    NgSelectModule,
    AppRoutingModule
  ],
  providers: [
    UserRegistrationService,
    InterestListsService,
    UtilService,
    UnsavedChangesGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
