import { UpdateModule } from './update/update.module';
import { IndexModule } from './index/index.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SiginModule } from './sigin/sigin.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SiginModule,
    IndexModule,
    UpdateModule,
  ],
  exports: [
    UsersComponent,
    SiginModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
