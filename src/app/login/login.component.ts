import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl: any;
  http: any;
  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
  

}
