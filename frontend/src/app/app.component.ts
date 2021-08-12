import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router:Router
   ) { }
  progressBar = true;
  counter = 604800;
  hour: any;

  ngOnInit() {
    this.interval();
  }

  private interval(){
    this.hour = this.convertHour(new Date().toString());
    const interval = setInterval(() => {
      this.hour = this.convertHour(new Date().toString());

    }, 1000);
  }

  private convertHour(hour:string){
    let time = hour.split(' ')[4];
    return time;
  }

  goTo($event:any){
    // pessoal, aqui a as referências são assim:
    // 0 -> alunos
    // 1 -> Professores
    // 2 -> Cursos FIC
    // 3 -> Turmas

    if ($event.index==0){
      console.log($event); // por a rota de listar Alunos aqui
    } else if ($event.index==1){
      console.log($event); // por a rota de listar Professores aqui
    } else if ($event.index==2){
      this.router.navigate([{outlets: this.navigateOutlets($event.index)}]);
    } else if ($event.index==3){
      this.router.navigate([{outlets: this.navigateOutlets($event.index)}]);
    }
  }

  navigateOutlets(index:number){
    switch(index){
      case 0: {
        return {aluno: '', turma: null, curso: null, professor: null};
      }
      case 1: {
        return {professor: '', turma: null, curso: null, aluno: null};
      }
      case 2: {
        return {curso: 'listar-cursos', turma: null, aluno: null, professor: null};
      }
      case 3: {
        return {turma: 'listar-turmas', aluno: null, curso: null, professor: null};
      }
      default:{
        return {}
      }
    }
  }
}
