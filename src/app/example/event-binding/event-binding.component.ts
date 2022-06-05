import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  allow = false;
  constructor() { }

  ngOnInit(): void {
  }

  userClick(){
    alert('clicked!')
    this.allow = true;
  }
  add(){
    alert('added!')
  }

}
