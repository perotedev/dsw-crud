import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  hiddenList = false;
  hiddenCreate = true;

  constructor() { }

  ngOnInit() {
  }

  goToList(){
    this.hiddenList = false;
    this.hiddenCreate = true;
  }

  goToCreate(){
    this.hiddenList = true;
    this.hiddenCreate = false;
  }

}
