import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document, SchemaTypes, Types} from "mongoose";

@Schema({ timestamps: false, versionKey: false, toJSON: { virtuals: true}, id: false})
export class CursoFic extends Document{
    _id: string;

    @Prop({required: true})
    nome: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Turma', required: true})
    turmaId: Types.ObjectId; 
}

export const CursoFicSchema = SchemaFactory.createForClass(CursoFic);

CursoFicSchema.virtual('turma', {
    ref:'Turma',
    localField: 'turmaId',
    foreingField: '_id'
})