import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {
  public name;
  constructor() { }
  // changeName() {
  //     if (!this.name) {
  //        this.name = 'BLUE';
  //        return;
  //     }
  //     this.name = "";

  // }
  clickMe(){

    this.name ="BlUE = > I Miss You !!!";
  }

  ngOnInit() {
  }

}
