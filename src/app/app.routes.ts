import { Routes } from "@angular/router";
import { TableMessageComponent } from "./table-message/table-message.component";

export const routes: Routes = [
    { path: '', redirectTo: '/tableMessagesList', pathMatch: 'full' },
    { path: 'tableMessagesList', component: TableMessageComponent },
];

