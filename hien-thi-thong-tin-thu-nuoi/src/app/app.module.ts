import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoCompomentComponent } from './demo-compoment/demo-compoment.component';
import { CaculateComponent } from './caculate/caculate.component';
import { ColorComponent } from './color/color.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoCompomentComponent,
    CaculateComponent,
    ColorComponent,
    ProgressBarComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
