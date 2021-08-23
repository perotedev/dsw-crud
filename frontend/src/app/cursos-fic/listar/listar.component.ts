import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CursoFicInterface } from 'src/app/shared/interfaces/cursofic.interface';
import { CursoFicService } from 'src/app/shared/services/cursofic.service';

=======
import { Observable } from 'rxjs';
import { CursosFicService } from 'src/app/shared/services/cursofic.service';
>>>>>>> 333524657a95b4fa4c707b4dc4cd1c02fa5f51f0

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, OnDestroy {
  listCursos: any;
<<<<<<< HEAD
  curso: any;
  dataSource: string[] = ['id', 'name', 'numero_turmas'];

  constructor(
    private router: Router,
    private cursoFicService: CursoFicService,
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) { 
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }
=======
  displayedColumns: string[] = ['id', 'name', 'numero_turmas'];
  dataSource: string[] = ['id', 'name', 'numero_turmas'];
  hiddenList = false;
  hiddenCreate = true;

  constructor(
    private router: Router,
    private cursoFicService: CursosFicService
  ) { }
>>>>>>> 333524657a95b4fa4c707b4dc4cd1c02fa5f51f0

  ngOnInit() {
    this.listCursos();
  }

  ngOnDestroy(){

  }

  async listarCursos(){
    this.cursoFicService.listarCursos().subscribe((res => {
      this.listCursos = res;
      console.log(this.listCursos);
    }))
  }

  goToCreate(){
    this.router.navigate([{outlets: {curso: 'cadastrar-cursos'}}]);
  }

  buscarCurso(value:string) {
    console.log(value);
    if(value.length < 1) {
      this.listarCursos();
    } else {
      this.cursoFicService.listarCursosPorNomeID(value).subscribe((res => {
        this.listCursos = res;
        console.log(this.listCursos);
      }))
    }
  }

  verCurso(value:string) {
    localStorage.setItem('curso_id', value)
    console.log(value)
  }

  editarCurso(value:string) {
    console.log(value)
  }

  deletarCurso() {
    console.log(this.curso);
    this.cursoFicService.deletarCurso(this.curso._id);
    this.listarCursos();
  }

  openVerticallyCentered(content:any, element:CursoFicInterface) {
    this.curso = element;
    this.modalService.open(content, { centered: true});
  }
}
