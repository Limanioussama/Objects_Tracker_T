import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ObjectsTracker } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'Objects_Tracker';


  
}