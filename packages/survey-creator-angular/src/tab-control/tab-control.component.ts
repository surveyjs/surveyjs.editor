import { Component, Input } from "@angular/core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";
import { TabControlModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-control",
  templateUrl: "./tab-control.component.html",
  styles: [":host { display: none; }"]
})
export class TabControlComponent extends BaseAngular<TabControlModel> {
  @Input() model!: TabControlModel;
  protected getModel(): TabControlModel {
    return this.model;
  }

  get sideBarClassName(): string {
    return "svc-sidebar-tabs" + (this.model.sidePanel.visible ? "" : " svc-sidebar-tabs--collapsed");
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-control", TabControlComponent);