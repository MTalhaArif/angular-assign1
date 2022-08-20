import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import {  EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output('onloginSubmit') onloginSubmit: EventEmitter<{username: String, password: String}> = new EventEmitter<{username: String, password: String}>();
  

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }



  btnloginClick(uname: String, password: String) {
    const data: {username: String, password: String} = {
      username: uname,
      password: password
    };
    this.onloginSubmit.emit(data);

  }

  }
  // respdata :any;
  // ProceedLogin(logindata : any){
  //   if(logindata.valid){
  //     this.service.ProceedLogin(logindata.value).subscribe(item =>
  //       {
  //         this.respdata=item;
  //         console.log(this.respdata);
  //       })

  //   }

  // }


