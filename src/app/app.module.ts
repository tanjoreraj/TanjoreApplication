import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './registrationcomponent/registerUser.component';
import { InterestListsComponent } from './interestsListComponent/interestLists.component';


import { UserRegistrationService } from './registrationcomponent/registerUser.service';
import { InterestListsService } from './interestsListComponent/interestLists.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    InterestListsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    UserRegistrationService,
    InterestListsService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
