import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername = "Two way binding" //interpolation
  salary = 1000;
  isdisabled= false; //property binding
  colorname= 'red';
  color=['red', 'blue','yellow', 'green'];

  classname='headclass'; //ngclass directive
  stylevalue={"color":"blue","font-size ": "60px"}; //ngstyle directive

  ngOnInit(): void {
  }
  functionClick(name : string){
    alert(name);
  }

}
