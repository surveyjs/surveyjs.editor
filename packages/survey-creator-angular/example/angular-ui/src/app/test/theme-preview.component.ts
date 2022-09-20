import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestComponent } from "./test.component";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ThemePreviewComponent extends TestComponent {
  constructor() {
    super();
  }
  protected override createCreator(): void {
    this.creator = new CreatorBase({ themeForPreview: "modern" });
  }
}