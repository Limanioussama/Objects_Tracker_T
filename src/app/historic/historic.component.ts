import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../data.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {

  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;


       const ctx = document.getElementById('myChart') as HTMLCanvasElement;
     
       const myChart = new Chart(ctx, {
        type: 'line',
        data: {
         
          datasets: [{
            label: 'Levels',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    
    });

  } 
}
