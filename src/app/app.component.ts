import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold">Frontend</h1>
    <p class="text-content2">{{ title }}</p>
  `,
})
export class AppComponent {
  title = "Welcome on TeleCO2Gram project";
}
