import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CursoFic } from 'src/shared/schemas/cursoFic.schema';
import { CursoFicService } from 'src/shared/services/cursofic.service';

@Controller('cursoFic')
export class CursoFicController {
    constructor(private cursoFicService: CursoFicService){}

    @Get()
    async listarCursos(): Promise<CursoFic[]>
    {
        return this.cursoFicService.listarCursos();
    }

    @Get(':_id')
    async listarCursoPorId(@Param('_id' ) _id:string): Promise<CursoFic>
    {
        return this.cursoFicService.listarCursoPorId(_id);
    }

    @Post()
    async criarCurso(@Body() curso:CursoFic): Promise<CursoFic>
    {
        return this.cursoFicService.criarCurso(curso);
    }

    @Put()
    async atualizarCurso(@Body('_id') _id:string, @Body() curso:CursoFic): Promise<CursoFic>
    {
        return this.cursoFicService.atualizarCurso(_id, curso);
    }

    @Delete()
    async deletarCurso(@Body('_id') _id:string)
    {
        return this.cursoFicService.deletarCurso(_id);
    }
}
