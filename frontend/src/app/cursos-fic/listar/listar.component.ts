import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CursosFicService } from 'src/app/shared/services/cursofic.service';

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, OnDestroy {
  listCursos: any;
  displayedColumns: string[] = ['id', 'name', 'numero_turmas'];
  dataSource: string[] = ['id', 'name', 'numero_turmas'];
  hiddenList = false;
  hiddenCreate = true;

  constructor(
    private router: Router,
    private cursoFicService: CursosFicService
  ) { }

  ngOnInit() {
    this.listCursos();
  }

  ngOnDestroy(){

  }

  async listarCursos(){
    this.listCursos = this.cursoFicService.listarCursos();
    console.log(this.listCursos);
  }

  goToCreate(){
    this.router.navigate([{outlets: {curso: 'cadastrar-cursos'}}]);
  }
}
