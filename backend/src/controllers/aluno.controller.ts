import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Aluno } from 'src/shared/schemas/aluno.schema';
import { AlunoService } from 'src/shared/services/aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService){}

    @Get()
    async listarTodos(): Promise<Aluno[]>{
        return this.alunoService.listarTodos();
    }

    @Get(':_nome')
    async listarPorNome(@Param('_nome') _nome:string): Promise<Aluno>{
        return this.alunoService.listarPorNome(_nome);
    }

    @Post()
    async criarAluno(@Body() aluno:Aluno): Promise<Aluno>{
        return this.alunoService.criarAluno(aluno);
    }

    @Put()
    async atualizarAluno(@Body('_nome') _nome:string, @Body() aluno:Aluno): Promise<Aluno>{
        return this.alunoService.atualizarAluno(aluno, _nome);
    }

    @Delete()
    async deletarNome(@Body('_nome') _nome:string) {
        return this.alunoService.deletarAluno(_nome);
    }
    @Get()
    async listarMatricula(): Promise<Matricula[]>{
        return this.alunoService.listarMatricula();
    }

    @Controller('matricula')

    @Get(':_matricula')
    async listarPorMatricula(@Param('_matricula') _matricula:long): Promise<Matricula>{
        return this.alunoService.listarPorMatricula(_matricula);
    }

    @Post()
    async criarMatricula(@Body() matricula:Matricula): Promise<Aluno>{
        return this.alunoService.criarMatricula(matricula);
    }

    @Put()
    async atualizarMatricula(@Body('_matricula') _matricula:long, @Body() matricula:Matricula): Promise<Matricula>{
        return this.alunoService.atualizarAluno(aluno, _matricula);
    }

    @Delete()
    async deletarMatricula(@Body('_matricula') _matricula:long) {
        return this.alunoService.deletarMatricula(_matricula);
    }

    
}
