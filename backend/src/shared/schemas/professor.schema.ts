import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true, versionKey: false, id: false })
export class Professor extends Document{
    _id: string;

    @Prop({required: true})
    nome: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);