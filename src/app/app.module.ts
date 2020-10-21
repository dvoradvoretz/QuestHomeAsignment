import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightInformationComponent } from './flight-information/flight-information.component';
import { FlightsOfWorkerComponent } from './flights-of-worker/flights-of-worker.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { CustomDateFormatPipe } from './custom-date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightInformationComponent,
    FlightsOfWorkerComponent,
    WorkersListComponent,
    CustomDateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
