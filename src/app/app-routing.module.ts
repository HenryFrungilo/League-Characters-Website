import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { KaynComponent } from './pages/kayn/kayn.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'Aphelios', component: MainpageComponent},
  {path: 'Kayn', component: KaynComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
