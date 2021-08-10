import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CursoFic } from '../schemas/cursoFic.schema';

@Injectable()
export class CursoFicService {
    constructor(@InjectModel(CursoFic.name) private readonly cursoFicModel: Model<CursoFic>){}
    
    async listarTurmas()
    {
        return await this.cursoFicModel.find().populate(['turmas']).exec();
    }

    async listarTurmaPorId(_id:string)
    {
        return await this.cursoFicModel.findById(_id).exec();
    }

    async criarCurso(curso: CursoFic)
    {
        const cursoCriado = new this.cursoFicModel(curso);
        return await cursoCriado.save();
    }

    async atualizarCurso(_id:string, curso:CursoFic)
    {
        await this.cursoFicModel.updateOne({_id:_id}, curso).exec();
        return this.listarTurmaPorId(_id);
    }

    async deletarCurso(_id:string)
    {
        return await this.cursoFicModel.deleteOne({_id:_id}).exec();
    }
}
