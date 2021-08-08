import { TurmasComponent } from './turmas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [
  {
    path: '',
    component: TurmasComponent,
    data: {
      title: 'TURMAS PAINEL'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
