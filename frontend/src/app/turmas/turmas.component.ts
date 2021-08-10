import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas = document.getElementById('turmas');
  hiddenList = false;
  hiddenCreate = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  goToList(){
    this.router.navigate(['listar-turmas']);
  }

  goToCreate(){
    this.router.navigate(['cadastrar-turmas']);
  }

}
