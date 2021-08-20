import { Observable } from 'rxjs';
import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  turma: any;
  optionAluno: any;
  myControl = new FormControl();
  alunos: any;

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
  ) {}

  ngOnInit() {

  }



  cadastrarTurma(nome:string, professorId:string, cursoId:string, dataInicio:Date, dataFim:Date){
    const dadosTurma  = {
      nome: nome,
      professorId: professorId,
      cursoId: cursoId,
      dataInicio: dataInicio,
      dataFim: dataFim
    };
    this.turma = dadosTurma;

    this.turmaService.criarTurma(this.turma).subscribe((res => {
      this.turma = res;
      console.log(this.turma);
    }));
  }

  buscarAlunoPorNome(value:string){
    let alunos = this.alunoService.listarAlunosPorNome(value);
    this.alunos = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => alunos),
      );
  }

  buscarCursoPorNome(value:string){
    let alunos = this.alunoService.listarAlunosPorNome(value);
    this.alunos = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => alunos),
      );
  }
}
