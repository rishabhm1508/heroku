import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http:HttpClient){
    this.http.get('https://api.spaceXdata.com/v3/launches?limit=100').subscribe(data=> {
      console.log(data);
      
    })
  }
  title = 'angularr';
}
