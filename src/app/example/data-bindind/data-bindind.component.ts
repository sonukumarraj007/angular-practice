import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindind',
  templateUrl: './data-bindind.component.html',
  styleUrls: ['./data-bindind.component.scss']
})
export class DataBindindComponent implements OnInit {

  age: number = 28;  
  name: string = 'Sonu Kumar';  
  userEntered : string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
