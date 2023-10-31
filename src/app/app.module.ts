import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { HeaderComponent } from './pages/header/header.component';
import { KaynComponent } from './pages/kayn/kayn.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    KaynComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
