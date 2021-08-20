import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma.service';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { CursosFicService } from 'src/app/shared/services/cursofic.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  turma: any;
  optionAluno: any;
  professorControl = new FormControl();
  cursoControl = new FormControl();
  professores: any;
  cursos: any;

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private cursoService: CursosFicService,
    private professorService: ProfessorService
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

  // buscarAlunoPorNome(value:string){
  //   let alunos = this.alunoService.listarAlunosPorNome(value);
  //   this.alunos = this.myControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(value => alunos),
  //     );
  // }

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
}
