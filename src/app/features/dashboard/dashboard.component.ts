import { Component } from '@angular/core';
import { NavBarComponent } from "../../core/components/nav-bar/nav-bar.component";
import { ChartPieComponent } from './chart-pie/chart-pie.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    ChartPieComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
