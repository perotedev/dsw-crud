import { Turma } from '../schemas/turma.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TurmaService {
    constructor(@InjectModel(Turma.name) private readonly turmaModel: Model<Turma>){}

    async listarTodas(expand:string)
    {
        let virtuals = expand.split(",");
        return await this.turmaModel.find().populate(virtuals).exec();
    }

    async listarPorId(_id:string,expand:string)
    {
        let virtuals = expand.split(",");
        return this.turmaModel.findById(_id).populate(virtuals).exec();
    }

    async criarTurma(turma:Turma)
    {
        const turmaCriada = new this.turmaModel(turma);
        return await turmaCriada.save();
    }

    async atualizarTurma(_id:string, turma:Turma, expand:string)
    {
        await this.turmaModel.updateOne({_id:_id}, turma).exec();
        return this.listarPorId(_id, expand);
    }

    async deletarTurma(_id:string)
    {
        return await this.turmaModel.deleteOne({_id:_id}).exec();
    }

    async listarTurmasNaArray(turmasId:string[]){
        return await this.turmaModel.find({_id: {$in:turmasId}}).exec();
    }
}
