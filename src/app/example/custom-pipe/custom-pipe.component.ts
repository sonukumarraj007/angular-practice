import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  constructor() { }

  nameSearch = ''

  emp_list = [
    { 
      'id': 1,
      'name': 'sonu kumar',
      'age' : 28,
      'department': 'cs',
      'salary': 30000,
      'language': 'python, bootstrap, java script, ajax, jquery, angular'
    },
    { 
      'id': 2,
      'name': 'vikas kumar',
      'age' : 26,
      'department': 'ec',
      'salary': 35000,
      'language': 'java, css, html, java script, ajax, jquery, angular'
    },
    { 
      'id': 3,
      'name': 'rahul kumar',
      'age' : 22,
      'department': 'me',
      'salary': 30000,
      'language': 'java, css, html, python, ajax, jquery, angular'
    },
    { 
      'id': 4,
      'name': 'sandeep kumar',
      'age' : 27,
      'department': 'cs',
      'salary': 40000,
      'language': 'java script, ajax, jquery, angular'
    },
    { 
      'id': 5,
      'name': 'anshu kumar',
      'age' : 28,
      'department': 'na',
      'salary': 20000,
      'language': 'bootstrap, java script, ajax, jquery, angular'
    },
    { 
      'id': 6,
      'name': 'atul jha',
      'age' : 25,
      'department': 'na',
      'salary': 50000,
      'language': 'java, css, html, python, jquery, angular'
    },
    { 
      'id': 7,
      'name': 'ravinesh kumar',
      'age' : 28,
      'department': 'civil',
      'salary': 33000,
      'language': 'python, bootstrap, java script, ajax, jquery, angular'
    },
    { 
      'id': 8,
      'name': 'kumar',
      'age' : 20,
      'department': 'na',
      'salary': 10000,
      'language': 'java, css, html, angular'
    },
  ]

  ngOnInit(): void {
  }

}
