import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'APP PAINEL'
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'USERS PAINEL'
    }
  },
  {
    path: 'turmas',
    component: UsersComponent,
    data: {
      title: 'TURMAS PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
