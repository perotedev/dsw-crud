import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( ) { }

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
}
