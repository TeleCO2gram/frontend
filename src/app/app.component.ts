import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TableMessageComponent } from "./features/table-message/table-message.component";


@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, TableMessageComponent]
})
export class AppComponent {
  title = "Welcome on TeleCO2Gram project";
}
