import { Observable } from 'rxjs';
import { TurmaInterface } from './../../shared/interfaces/turma.interface';
import { TurmaService } from './../../shared/services/turma.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, OnDestroy {
  listTurmas: any;
  displayedColumns: string[] = ['id', 'name', 'course', 'startDate', 'endDate', 'actions'];

  constructor(
    private router: Router,
    private turmaService: TurmaService,
  ) {}

  ngOnInit() {
    this.listarTurmas();
  }

  ngOnDestroy(){

  }

  async listarTurmas(){
    this.listTurmas = this.turmaService.listarTurmas();
    console.log(this.listTurmas);
  }

  goToCreate(){
    this.router.navigate([{outlets: {turma: 'cadastrar-turmas'}}]);
  }

}
