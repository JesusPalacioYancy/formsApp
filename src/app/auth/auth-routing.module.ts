import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgisterPageComponent } from './pages/resgisterPage/resgister-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sign-up', component: ResgisterPageComponent},
      {path: '**', redirectTo: 'sign-up'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
