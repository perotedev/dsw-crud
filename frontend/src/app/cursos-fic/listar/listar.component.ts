import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface CursosElement {
  name: string;
  numero_turmas: number;
}

const ELEMENT_DATA: CursosElement[] = [
  {numero_turmas: 2, name: 'Java'},
  {numero_turmas: 2, name: 'Python'},
  {numero_turmas: 1, name: 'TypeScript'},
  {numero_turmas: 1, name: 'C'},
];

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'numero_turmas'];
  dataSource = ELEMENT_DATA;

  hiddenList = false;
  hiddenCreate = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCreate(){
    this.router.navigate(['cadastrar-cursos']);
  }
}
