import { Turma } from './../schemas/turma.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TurmaService {
    constructor(@InjectModel(Turma.name) private readonly turmaModel: Model<Turma>){}

    async listarTodas()
    {
        return await this.turmaModel.find().exec();
    }

    async listarPorId(_id:string)
    {
        return this.turmaModel.findById(_id).exec();
    }

    async criarTurma(turma:Turma)
    {
        const turmaCriada = new this.turmaModel(turma);
        return await turmaCriada.save();
    }

    async atualizarTurma(_id:string, turma:Turma)
    {
        await this.turmaModel.updateOne({_id:_id}, turma).exec();
        return this.listarPorId(_id);
    }

    async deletarTurma(_id:string)
    {
        return await this.turmaModel.deleteOne({_id:_id}).exec();
    }
}
