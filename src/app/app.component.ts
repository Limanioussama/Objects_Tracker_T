import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ObjectsTracker } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Objects_Tracker';
  public history?: ObjectsTracker[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: ObjectsTracker) => {
      this.history = [data];
    });
  }
}
