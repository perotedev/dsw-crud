import { TurmaSchema } from '../shared/schemas/turma.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TurmaService } from './../shared/services/turma.service';
import { TurmaController } from './../controllers/turma.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Turma',
            schema: TurmaSchema
        }])
    ],
    controllers: [
        TurmaController,],
    providers: [
        TurmaService,],
})
export class TurmaModule { }
