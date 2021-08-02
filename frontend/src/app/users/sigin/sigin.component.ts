import { UserInterface } from './../../interfaces/user.inteface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(
    // private userService: UsersService
    ) { }

  ngOnInit() {
  }

  cadastrar (user: UserInterface){
    // this.userService.createUser(user);
  }

}
