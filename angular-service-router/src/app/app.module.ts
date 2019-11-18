import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TinhthoigiansongComponent } from './tinhthoigiansong/tinhthoigiansong.component';

@NgModule({
  declarations: [
    AppComponent,
    TinhthoigiansongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
