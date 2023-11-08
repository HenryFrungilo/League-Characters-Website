import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { KaynComponent } from './pages/kayn/kayn.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ZedComponent } from './pages/zed/zed.component';
import { CamilleComponent } from './pages/camille/camille.component';
import { LeonaComponent } from './pages/leona/leona.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'Aphelios', component: MainpageComponent},
  {path: 'Kayn', component: KaynComponent},
  {path: 'Zed', component: ZedComponent},
  {path: 'Camille', component: CamilleComponent},
  {path: 'Leona', component: LeonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
