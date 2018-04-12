import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-component',
	templateUrl: './table-component.component.html',
	styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {


	constructor() { }

	MyFlight = [

	{Name:'AIRINDIA', Number:'AI 0946',Departure_Time:'01:35 PM',Arrival_Time:'05:50 PM'},

	{Name:'JETAIRWAYS', Number:'9W780',Departure_Time:'06:50 AM',Arrival_Time:'08:00 PM'},

	{Name:'INDIGO', Number:'6E 514',Departure_Time:'12:15 PM',Arrival_Time:'02:40 PM'},

	{Name:'SPICEJET', Number:'SG 277',Departure_Time:'10:10 AM',Arrival_Time:'01:55 PM'},

	{Name:'GOAIR', Number:'G8 802',Departure_Time:'09:10 AM',Arrival_Time:'11:30 AM'}
	

	];
	

	ngOnInit() {
	}

}
