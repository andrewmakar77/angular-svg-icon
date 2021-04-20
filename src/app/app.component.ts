import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  key = "first";
  name = "Angular";

  public toggle() {
    this.key = this.key === "first" ? "second" : "first";
  }
}
