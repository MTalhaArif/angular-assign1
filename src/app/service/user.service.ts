import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private router: Router) {

   }
   onloginSubmit(data: {username: String, password: String}): void {
    if(data.username === 'abc@test.test' && data.password === 'CureMD123') {
      this.router.navigate(['/home']);
    }
}
}
