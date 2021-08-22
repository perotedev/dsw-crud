import { AlunoService } from 'src/app/shared/services/aluno.service';
import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ver-turma',
  templateUrl: './ver-turma.component.html',
  styleUrls: ['./ver-turma.component.css']
})
export class VerTurmaComponent implements OnInit {
  turmaId: number;
  professor: string;
  curso: string;
  nomeTurma: string;
  listaDeAlunos: any;
  displayedColumns: string[] = ['matricula', 'nome', 'actions'];

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
   }

  ngOnInit() {
    let _id:any = localStorage.getItem('turma_id');
    this.listarTurmaPorId(_id);
  }

  listarTurmaPorId(_id:string){
    this.turmaService.listarTurmaPorId(_id).subscribe((res: TurmaInterface) => {
      this.turmaId = res.ID;
      this.nomeTurma = res.nome;
      this.professor = res.professor[0]['nome'];
      this.curso = res.curso[0]['nome'];
      this.listaDeAlunos = res.alunos;
      console.log(res);
    },  catchError((err: any) => {
      return throwError(err.status);
    }));
  }

  atualizarTurma(){

  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true});
  }
}
