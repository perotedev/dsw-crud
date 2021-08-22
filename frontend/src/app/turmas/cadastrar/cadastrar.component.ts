import { TurmaCreateInterface, TurmaInterface } from './../../shared/interfaces/turma.interface';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { CursosFicService } from 'src/app/shared/services/cursofic.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  turma: any;
  professorControl = new FormControl();
  cursoControl = new FormControl();
  professores: any;
  cursos: any;
  professorId: string = "";
  cursoId: string = "";

  constructor(
    private turmaService: TurmaService,
    private cursoService: CursosFicService,
    private professorService: ProfessorService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  setProfessor(_id:string){
    this.professorId = _id;
  }

  setCurso(_id:string){
    this.cursoId = _id;
  }

  cadastrarTurma(nome:string, dataInicio:string, dataFim:string){
    const dadosTurma: TurmaCreateInterface  = {
      nome: nome,
      professorId: this.professorId,
      cursoId: this.cursoId,
      dataInicio: dataInicio,
      dataFim: dataFim
    };
    let validacao = this.validarTurma(dadosTurma);

    if (validacao){
      dadosTurma.dataInicio = new Date(dataInicio).toISOString();
      dadosTurma.dataFim = new Date(dataFim).toISOString();
      this.turmaService.criarTurma(dadosTurma).subscribe((res => {
        this.turma = res;
        console.log(this.turma);
      }));
    }
  }

  buscarProfessorPorNome(value:string){
    let professores = this.professorService.listarProfessoresPorNome(value);
    this.professores = this.cursoControl.valueChanges
        .pipe(
          startWith(''),
          map(value => professores),
        );
    console.log(professores);
  }


  buscarCursoPorNome(value:string){
    this.cursoService.listarCursosPorNomeID(value).subscribe((res =>{
      console.log(res);
      this.cursos = this.cursoControl.valueChanges
          .pipe(
            startWith(''),
            map(value => res),
          );
    }));
  }

  validarTurma(turma:TurmaCreateInterface){
    const isEmpty = Object.values(turma).some(x => (x === null || x === ''));
    if (isEmpty){
      this.snackBar.open("Preencha todos os dados!", "Fechar", {
        verticalPosition: 'top'
      });
      return false
    }
    return true;
  }
}
