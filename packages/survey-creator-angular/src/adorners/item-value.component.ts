
import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ItemValue, PageModel, PanelModel, Question, QuestionSelectBase, SurveyModel } from "survey-core";
import { CreatorBase, ItemValueWrapperViewModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";

@Component({
  selector: "svc-item-value",
  templateUrl: "./item-value.component.html",
  styles: [":host { display: none; }"]
})
export class ItemValueDesignerComponent extends CreatorModelComponent<ItemValueWrapperViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  public adorner!: ItemValueWrapperViewModel;
  private get creator(): CreatorBase {
    return this.componentData.data.creator;
  }
  public get question(): QuestionSelectBase {
    return this.componentData.question;
  }
  public get item(): ItemValue {
    return this.componentData.model;
  }
  protected createModel(): void {
    if (this.componentData) {
      this.adorner = new ItemValueWrapperViewModel(this.creator, this.question, this.item);
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "question", "item"];
  }
  protected getModel(): ItemValueWrapperViewModel {
    return this.adorner;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-item-value", ItemValueDesignerComponent);
