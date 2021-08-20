import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({timestamps: true, versionKey: false})
export class Aluno extends Document{

    @Prop({required: true})
    nome: string;

    @Prop({required: true})
    matricula: string;

}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
