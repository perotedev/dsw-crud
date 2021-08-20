import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const professores = [
  {
    _id:  "60d8ad29967c085268fb5197",
    nome: 'Benevaldo Pereira Gonçalves',
    createdAt: "2021-06-11T00:04:01.665Z",
    updatedAt: "2021-06-11T00:04:01.665Z"
  },
  {
      _id:  "60d8ad29967c085268fb5198",
      nome: 'Paulo Sérgio Ruiz Del Aguila',
      createdAt: "2021-06-11T00:04:01.665Z",
      updatedAt: "2021-06-11T00:04:01.665Z"
  },
  {
      _id:  "60d8ad29967c085268fb5199",
      nome: 'Albert França Josua Costa',
      createdAt: "2021-06-11T00:04:01.665Z",
      updatedAt: "2021-06-11T00:04:01.665Z"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(
    private http: HttpClient
  ) { }

  listarProfessoresPorNome(termo:string){
    let todosProfessores = [];
    for (let i = 0; i < professores.length; i++){
      if(professores[i].nome.toLowerCase().includes(termo)){
        todosProfessores.push(professores[i]);
      } else if (professores[i].nome.includes(termo)){
        todosProfessores.push(professores[i]);
      }
    }
    return todosProfessores;
  }

}
