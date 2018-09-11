import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgTree } from "ng.tree";

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './registrationcomponent/registerUser.component';
import { InterestListsComponent } from './interestsListComponent/interestLists.component';
import { ModalPopupComponent } from './modalPopupComponent/modalPopup.component';
import { UserRegistrationService } from './registrationcomponent/registerUser.service';
import { InterestListsService } from './interestsListComponent/interestLists.service';
import { UtilService } from './shared/utilService';
//import { AppRoutingModule } from './/app-routing.module';
import { AllMediaComponent } from './all-media/all-media.component';
import { CornBuilderComponent } from './corn-builder/corn-builder.component';
import { ManualTriggerComponent } from './manual-trigger/manual-trigger.component';
import { SqlBuilderComponent } from './sql-builder/sql-builder.component';
import { FilterPipe } from './shared/searchFilter';


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
    NgTree
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule
    //AppRoutingModule
  ],
  providers: [
    UserRegistrationService,
    InterestListsService,
    UtilService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
