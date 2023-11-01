import { map } from 'rxjs';
import { DataService } from './data.service';

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  pageTitle:string = 'Angular HTTP Client';
  data: any = [];
  http: any;
  apiUrl: any;
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
      console.log(this.data);
    })
  }
  login(userName: string, userEmail: string) {
    return this.http.post(`${this.apiUrl}/login`, { userName, userEmail })
      .pipe(
        map((response: any) => {
          if (response.success) {
            // Successful login logic
            return true;
          } else {
            // Unsuccessful login logic
            return false;
          }
        })
      );
  }
}
