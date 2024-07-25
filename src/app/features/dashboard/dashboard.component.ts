import { Component } from '@angular/core';
import { NavBarComponent } from "../../core/components/nav-bar/nav-bar.component";
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { DynamicTreeComponent } from './dynamic-tree/dynamic-tree.component';
import { FormsModule } from '@angular/forms';
import { VerticalBarChartComponent } from "./vertical-bar-chart/vertical-bar-chart.component";  // Importa FormsModule


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    ChartPieComponent,
    DynamicTreeComponent,
    FormsModule,
    VerticalBarChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

/** Questa variabile fa riferimento alla emissione di CO2 */
  dynamicValue: number = 2; // valore iniziale

  /** Questo metodo assegna un nuovo valore a dynamicValue facendo colorare l'albero */
  update(newValue:number):void{
    this.dynamicValue = newValue;
  }
}
