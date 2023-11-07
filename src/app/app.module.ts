import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { HeaderComponent } from './pages/header/header.component';
import { KaynComponent } from './pages/kayn/kayn.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    KaynComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
