import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetTicketComponent } from './set-ticket/set-ticket.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    SetTicketComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
