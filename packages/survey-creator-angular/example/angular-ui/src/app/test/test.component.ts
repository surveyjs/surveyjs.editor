import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import "survey-core/survey.i18n";
import "survey-creator-core/survey-creator-core.i18n";
import { CreatorBase } from "survey-creator-core";

@Component({
  selector: "test",
  template: "<router-outlet></router-outlet>",
})
export class TestComponent implements OnInit {
  public creator!: CreatorBase;
  ngOnInit(): void {
    this.createCreator();
    (<any>window).creator = this.creator;
  }
  protected createCreator(): void {
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true });
  }
}
