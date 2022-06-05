import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  inputPass:number = 10
  inputPass2: number = 5;
  inputPass3: number = -1;

  language_list = [
    'C', 'C++', 'Java', 'Python', 'CSS'
  ]

  ngOnInit(): void {
  }

  getColor(number: number){
  if(number > 0){
    return 'green'
  }if(number <0){
    return 'red'
  }else{
    return '#fff'
  }
  }

}
