import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
 
  @Input()
  photoCouver:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
