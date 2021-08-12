import { EnvironmentVariables } from '../environment-variables';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurmaInterface } from '../interfaces/turma.interface';
import { ApiTurmaRoutes } from '../routes/api-turma-routes';

const API_URL_BASE = EnvironmentVariables.urlBase;
const TURMA = ApiTurmaRoutes;

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
    private http:HttpClient
  ) { }

  listarTurmas(){
    return this.http.get(API_URL_BASE+TURMA.turmas+"?expand="+TURMA.expands.curso);
  }

  listarTurmaPorNomeID(termo:string) {
    const arrayPost = { termo: termo };
    return this.http.post(API_URL_BASE+TURMA.listarTurmaPorNomeID+"?expand="+TURMA.expands.curso, arrayPost);
  }

  listarTurmaPorId(_id:string) {
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.get(API_URL_BASE+TURMA.listarTurmaPorId+_id+"?expand="+expands);
  }

  criarTurma(turma:TurmaInterface){
    return this.http.post(API_URL_BASE+TURMA.turmas, turma);
  }

  atualizarTurma(turma:TurmaInterface){
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.put(API_URL_BASE+TURMA.turmas+"?expand="+expands, turma);
  }

  deletarTurma(_id:string){
    this.http.delete(API_URL_BASE+TURMA.delete+_id);
  }
}
