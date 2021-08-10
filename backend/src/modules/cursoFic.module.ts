import { CursoFicController } from './../controllers/cursofic.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { CursoFicSchema } from "src/shared/schemas/cursoFic.schema";
import { CursoFicService } from "src/shared/services/cursofic.service";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'CursoFic',
            schema: CursoFicSchema
        }])
    ],
    controllers: [
        CursoFicController,
        CursoFicController,],
    providers: [
        CursoFicService,],
})
export class CursoFicModule { }