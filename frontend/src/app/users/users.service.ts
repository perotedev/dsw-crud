import { UserInterface } from './../interfaces/user.inteface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'localhost:4200/'

@Injectable()
export class UsersService {

constructor(
  private http: HttpClient
  ) { }

  createUser (user: UserInterface){
    const arrayPost = {
      'username': user.username,
      'email': user.email,
      'senha': user.senha
    };
    console.log(arrayPost);
    return this.http.post<UserInterface>(API_URL + '/create-user', arrayPost);
  }
}
