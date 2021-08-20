import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { AlunoService } from 'src/app/shared/services/aluno.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  turma: any;
  alunos: any;
  optionAluno: any;

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
  ) { }

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

  listarAlunoPorNome(value:string){
    this.alunos = this.alunoService.listarAlunosPorNome(value);
    console.log(this.alunos);
  }
}
