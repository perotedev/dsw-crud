import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { TurmaService } from './../../shared/services/turma.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listTurmas: any;
  turma: any;
  displayedColumns: string[] = ['id', 'name', 'course', 'startDate', 'endDate', 'actions'];

  constructor(
    private router: Router,
    private turmaService: TurmaService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit() {
    this.listarTurmas();

  }

  async listarTurmas(){
    this.turmaService.listarTurmas().subscribe((res => {
      this.listTurmas = res;
      console.log(this.listTurmas);
    }));
  }

  goToCreate(){
    this.router.navigate([{outlets: {turma: 'cadastrar-turmas'}}]);
  }

  buscaTurma(value:string){
    console.log(value);
    if (value.length < 1){
      this.listarTurmas();
    } else {
      this.turmaService.listarTurmaPorNomeID(value).subscribe((res => {
        this.listTurmas = res;
        console.log(this.listTurmas);
      }));
    }
  }

  verTurma(value:string){
    localStorage.setItem('turma_id', value)
    console.log(value);
  }

  editarTurma(value:string){
    console.log(value);
  }

  deletarTurma(){
    console.log(this.turma);
    this.turmaService.deletarTurma(this.turma._id);
    this.listarTurmas();
  }

  openVerticallyCentered(content:any, element:TurmaInterface) {
    this.turma = element;
    this.modalService.open(content, { centered: true});
  }
}
