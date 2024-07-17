import { Routes } from "@angular/router";
import { TableMessageComponent } from "./table-message/table-message.component";
import { DasboardComponent } from "./dasboard/dasboard.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'tableMessagesList', component: TableMessageComponent },
    { path: 'tableMessagesByUser', component: AppComponent },
    { path: 'dashboard', component: DasboardComponent },
];

