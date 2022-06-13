import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m)=> m.AuthModule), //cada vez que vamos al path estaremos llendo a AuthModule 
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m)=> m.UserModule), //cada vez que vamos al path estaremos llendo a UserModule 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
