import { TurmaCreateInterface } from './../interfaces/turma.interface';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TurmaInterface } from '../interfaces/turma.interface';
import { ApiTurmaRoutes } from '../routes/api-turma-routes';

const API_URL_BASE = environment.urlBase;
const TURMA = ApiTurmaRoutes;

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http:HttpClient
  ) {}

  listarTurmas() {
    return this.http.get(API_URL_BASE+TURMA.turmas+"?expand="+TURMA.expands.curso);
  }

  listarTurmaPorNomeID(termo:string) {
    const arrayPost = { termo: termo };
    return this.http.post(API_URL_BASE+TURMA.listarTurmaPorNomeID+"?expand="+TURMA.expands.curso, arrayPost);
  }

  listarTurmaPorId(_id:string) {
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.get<TurmaInterface>(API_URL_BASE+TURMA.listarTurmaPorId+_id+"?expand="+expands);
  }

  criarTurma(turma:TurmaCreateInterface){
    return this.http.post(API_URL_BASE+TURMA.turmas, turma);
  }

  atualizarTurma(turma:TurmaInterface){
    let expands = TURMA.expands.curso+","+TURMA.expands.professor+","+TURMA.expands.alunos;
    return this.http.put(API_URL_BASE+TURMA.turmas+"?expand="+expands, turma);
  }

  async deletarTurma(_id:string){
    await this.http.delete(API_URL_BASE+TURMA.delete+_id).subscribe(res => {
      console.log(res);
    });
  }
}
