import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './registrationcomponent/registerUser.component';


import { UserRegistrationService } from './registrationcomponent/registerUser.service';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
