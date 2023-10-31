import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { KaynComponent } from './pages/kayn/kayn.component';

const routes: Routes = [
  {path: 'Aphelios', component: MainpageComponent},
  {path: 'Kayn', component: KaynComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
