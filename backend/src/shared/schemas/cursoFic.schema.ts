import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document, SchemaTypes, Types} from "mongoose";

@Schema({ timestamps: false, versionKey: false, toJSON: { virtuals: true}, id: false})
export class CursoFic extends Document{
    _id: string;

    @Prop({required: true})
<<<<<<< HEAD
    nome: string; 
=======
    nome: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Turma', required: true})
    turmaId: Types.ObjectId;
>>>>>>> 4f2e1167fd5cd557ae5d1a1aa6856074525cae9a
}

export const CursoFicSchema = SchemaFactory.createForClass(CursoFic);

CursoFicSchema.virtual('turmas', {
    ref:'Turma',
<<<<<<< HEAD
    localField: '_id',
    foreingField: 'cursoId'
=======
    localField: 'turmaId',
    foreignField: '_id'
>>>>>>> 4f2e1167fd5cd557ae5d1a1aa6856074525cae9a
})