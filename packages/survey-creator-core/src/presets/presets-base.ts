import { Question } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";

export interface ICreatorPreset {
  setJson(json: any): void;
  apply(creator: SurveyCreatorModel): void;
  getPath(): string;
  getEditableQuestionJson(): any;
  setupEditableQuestion(question: Question, creator: SurveyCreatorModel): void;
  setupEditableQuestionValue(question: Question, creator: SurveyCreatorModel): void;
}

export abstract class CreatorPresetBase implements ICreatorPreset {
  protected children: Array<ICreatorPreset> = [];
  protected json: any;
  public constructor() {
    this.setupPresets();
  }
  public setJson(json: any): void {
    this.json = json;
    this.children.forEach(item => item.setJson(this.json && item.getPath() ? this.json[item.getPath()] : this.json));
  }
  public apply(creator: SurveyCreatorModel): void {
    if (!this.json) return;
    this.applyCore(creator);
    this.children.forEach(item => item.apply(creator));
  }
  public abstract getPath(): string;
  getEditableQuestionJson(): any {
    return undefined;
  }
  setupEditableQuestion(question: Question, creator: SurveyCreatorModel): void { }
  setupEditableQuestionValue(question: Question, creator: SurveyCreatorModel): void { }
  protected applyCore(creator: SurveyCreatorModel): void { }
  protected createPresets(): Array<ICreatorPreset> {
    return [];
  }
  private setupPresets(): void {
    this.addPresets(this.createPresets());
  }
  private addPreset(preset: ICreatorPreset) {
    this.children.push(preset);
  }
  private addPresets(presets: ICreatorPreset[]): void {
    presets.forEach(preset => this.addPreset(preset));
  }
}