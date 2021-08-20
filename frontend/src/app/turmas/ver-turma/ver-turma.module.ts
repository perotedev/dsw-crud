import { MaterialAngular } from './../../shared/style/material-angular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerTurmaComponent } from './ver-turma.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialAngular
  ],
  declarations: [VerTurmaComponent],
  exports: [
    VerTurmaComponent
  ]
})
export class VerTurmaModule { }
