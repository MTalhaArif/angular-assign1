import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h2>
      404 , Page not found
</h2>
  `,
  styles:[
    "h2{color : red ; font-size: 50px} "
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
