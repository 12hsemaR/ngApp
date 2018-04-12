import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {

public name ;
  constructor() { }
  clickMe() {
  
  	  this.name = 'YELLOW -> You Are Unique !!!';

  }

  ngOnInit() {
  }

}
