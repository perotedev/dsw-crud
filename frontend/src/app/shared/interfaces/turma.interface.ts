export interface TurmaInterface {
  _id:string,
  ID:number,
  nome:string,
  professorId:string,
  cursoId:string,
  dataInicio:Date,
  dataFim:Date,
  professor:[],
  curso:[],
  alunos:[],
}
