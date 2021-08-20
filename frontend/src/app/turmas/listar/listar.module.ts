import { PipesModule } from './../../shared/pipes/pipes.module';
import { MaterialAngular } from './../../shared/style/material-angular.module';
import { ListarRoutingModule } from './listar.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar.component';

@NgModule({
  imports: [
    CommonModule,
    ListarRoutingModule,
    MaterialAngular,
    PipesModule
  ],
  declarations: [ListarComponent],
  exports:[
    ListarComponent
  ]
})
export class ListarModule { }
