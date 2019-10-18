import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ns-home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  public items = [1, 2, 3, 4, 5, 6, 7]
}
