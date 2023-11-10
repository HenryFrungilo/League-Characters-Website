import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { HeaderComponent } from './pages/header/header.component';
import { KaynComponent } from './pages/kayn/kayn.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ZedComponent } from './pages/zed/zed.component';
import { CamilleComponent } from './pages/camille/camille.component';
import { LeonaComponent } from './pages/leona/leona.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { StatisticsModule } from './pages/statistics/statistics.module';

import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import {ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    KaynComponent,
    IntroductionComponent,
    ZedComponent,
    CamilleComponent,
    LeonaComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatisticsModule,
    TableModule,
    CascadeSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
