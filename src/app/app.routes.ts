import { Routes } from "@angular/router";
import { TableMessageComponent } from "./features/table-message/table-message.component";
import { AppComponent } from "./app.component";
import { ChartPieComponent } from "./chart-pie/chart-pie.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/about/about.component";

export const routes: Routes = [
    { path: '', redirectTo: 'tableMessagesList', pathMatch: 'full' },
    { path: 'tableMessagesList', component: TableMessageComponent },
    /* { path: 'tableMessagesByUser', component: AppComponent }, */
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chart-pie', component: ChartPieComponent},
];

