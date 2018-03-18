import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ExpandableListModule} from "angular2-expandable-list";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      ExpandableListModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
