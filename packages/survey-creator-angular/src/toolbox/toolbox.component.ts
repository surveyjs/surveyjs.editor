import { Component, Input } from "@angular/core";
import { CreatorBase, QuestionToolbox } from "survey-creator-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-toolbox",
  templateUrl: "./toolbox.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxComponent extends BaseAngular<QuestionToolbox> {
  @Input() model!: CreatorBase;
  public get toolbox() {
    return this.model.toolbox;
  }
  protected getModel(): QuestionToolbox {
    return this.toolbox;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-toolbox", ToolboxComponent);
