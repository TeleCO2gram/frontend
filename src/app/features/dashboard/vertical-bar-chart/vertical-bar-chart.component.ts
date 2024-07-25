
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective
  ],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.css'
})
export class VerticalBarChartComponent implements OnInit{

  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ultima settimana di luglio'
        }
      },
      y: {
        beginAtZero: true,
        max: 200,
        title: {
          display: true,
          text: 'Percentuale di consumo di CO2'
        },
        ticks: {
          stepSize: 50
        },
        grid: {
          drawBorder: false,
          color: function(context: any) {
            if (context.tick.value === 100) {
              return '#ff0000';
            }
            return '#e5e5e5';
          }
        }
      }
    }
  };

  public barChartLabels: string[] = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Gruppo A',
        data: [30, 70, 90, 110, 120, 150, 170],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Gruppo B',
        data: [40, 80, 100, 130, 140, 160, 190],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Gruppo C',
        data: [20, 60, 120, 30, 140, 10, 25],
        backgroundColor: 'rgba(54, 162, 135, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  ngOnInit(): void {
    
  }

}
