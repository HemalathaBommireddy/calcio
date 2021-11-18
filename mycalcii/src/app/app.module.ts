import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { HeadComponent } from './component/head/head.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeadComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
