import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ChartData, ChartOptions, ChartType, Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [
    BaseChartDirective, 
  ],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent implements OnInit{

  public chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public chartLabels:string[] = [];
  public chartData: ChartData<'pie'> = {
    labels: this.chartLabels,
    datasets: [
      {
        data: [],
        label: 'Dataset',
      }
    ]
  };
  public chartType: ChartType = 'pie' as ChartType;  // Cast esplicito per ChartType
  public chartLegend = true;
  public chartPlugins = [];


  constructor(private http: HttpClient){
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    /** Get data from file named db.json  */
    this.http.get<any[]>('./assets/db.json').subscribe({ 
      next: response => {
        const labels = response.map(item => item.type);
        const data = response.map(item => item.weight);
        this.chartLabels = labels;
        this.chartData = {
          labels: this.chartLabels,
          datasets: [
            {
              data: data,
              label: 'Weights'
            }
          ]
        };
      },
      error: error => {
      console.error('Error loading data:', error); // Log in caso di errore
      alert('An error occurred while fetching data details');
    }
   });
  }

}
