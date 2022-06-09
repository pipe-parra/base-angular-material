import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importamos cvomponentes creados en carpeta de modulos auth
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetComponent } from './components/reset/reset.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path:'signin',
    component: SigninComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'reset',
    component: ResetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
