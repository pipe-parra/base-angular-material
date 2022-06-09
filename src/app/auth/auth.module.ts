import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
//importamos el mismo modulo que hicimos nosotros el Material module
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule //importamos el modulo que hicimos nosotros en material.module
  ]
})
export class AuthModule { }
