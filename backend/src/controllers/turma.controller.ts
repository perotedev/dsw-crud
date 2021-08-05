import { TurmaService } from './../shared/services/turma.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Turma } from 'src/shared/schemas/turma.schema';

@Controller('turma')
export class TurmaController {
    constructor(private turmaService: TurmaService){}

    @Get()
    async listarTodas(): Promise<Turma[]>
    {
        return this.turmaService.listarTodas();
    }

    @Get(':_id')
    async listarPorId(@Param('_id') _id:string): Promise<Turma>
    {
        return this.turmaService.listarPorId(_id);
    }

    @Post()
    async criarTurma(@Body() turma:Turma): Promise<Turma>
    {
        return this.turmaService.criarTurma(turma);
    }

    @Put()
    async atualizarTurma(@Body('_id') _id:string, @Body() turma:Turma): Promise<Turma>
    {
        return this.turmaService.atualizarTurma(_id, turma);
    }

    @Delete()
    async deletarTurma(@Body('_id') _id:string)
    {
        return this.turmaService.deletarTurma(_id);
    }
}
