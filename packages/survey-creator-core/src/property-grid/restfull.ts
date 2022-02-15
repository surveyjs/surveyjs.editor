import {
  Base,
  JsonObjectProperty,
  ComponentCollection,
  QuestionDropdownModel,
  Question
} from "survey-core";
import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditorQuestion,
} from "./index";
import { ISurveyCreatorOptions } from "../settings";

var json = {
  name: "propertygrid_restfull",
  showInToolbox: false
};

if(!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json);
}

export class PropertyGridEditorQuestionRestfull extends PropertyGridEditorQuestion {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "restfull";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "propertygrid_restfull",
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    new PropertyJSONGenerator(obj[prop.name], options, obj, prop).setupObjPanel(question["contentPanel"], true);
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRestfull());
