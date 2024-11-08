import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ResgisterPageComponent } from './pages/resgisterPage/resgister-page.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ResgisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
})
export class AuthModule { }
