import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  public name ;
  constructor() { }
  clickMe() {
  
  	  this.name = 'RED = > I Love You !!!';

  }


  ngOnInit() {
  }

}
