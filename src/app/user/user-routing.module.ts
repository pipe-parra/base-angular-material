import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components creados en el modulo user
import { AccountComponent } from './components/account/account.component';
import { NavComponent } from './components/nav/nav.component'
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'nav',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        component: NotesComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
