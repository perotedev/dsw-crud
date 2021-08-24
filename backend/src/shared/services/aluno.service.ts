import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from '../schemas/Aluno.schema';

@Injectable()
export class AlunoService {
    constructor(@InjectModel(Aluno.name) private readonly alunoModel: Model<Aluno>){}

    async listarTodos(){
        return await this.alunoModel.find().exec();
    }

    async listarPorNome(_nome:string){
        return await this.alunoModel.findById(_nome).exec();
    }
    async criarAluno(aluno:Aluno){
        const alunoCriado = new this.alunoModel(aluno);
        return await alunoCriado.save();
    }

    async atualizarAluno(aluno:Aluno, _nome:string){
        await this.alunoModel.updateOne({_nome: _nome}, aluno).exec();
        return this.listarPorNome(_nome);
    }

    async deletarAluno(_nome:string){
        return await this.alunoModel.deleteOne({_nome:_nome}).exec();
    }
    async listarMatricula(){
        return await this.alunoModel.find().exec();
    }

    async listarPorMatricula(_matricula:long){
        return await this.alunoModel.findByMatricula(_matricula).exec();
    }
    async criarMatricula(aluno:Aluno){
        const alunoCriado = new this.alunoModel(aluno);
        return await alunoCriado.save();
    }

    async atualizarMatricula(aluno:Aluno, _matricula:long){
        await this.alunoModel.updateOne({_matricula: _matricula}, aluno).exec();
        return this.listarPorMatricula(_matricula);
    }

    async deletarMatricula(_matricula:long){
        return await this.alunoModel.deleteOne({_matricula:_matricula}).exec();
    }
}