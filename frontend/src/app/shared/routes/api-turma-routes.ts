export class ApiTurmaRoutes {
  static turmas = "turma";
  static delete = "turma/";
  static listarTurmaPorId = 'turma/'
  static listarTurmaPorNomeID = "turma/listar-nome-id"
  static expands = {
    alunos: "alunos",
    professor: "professor",
    curso: "curso"
  }
}
