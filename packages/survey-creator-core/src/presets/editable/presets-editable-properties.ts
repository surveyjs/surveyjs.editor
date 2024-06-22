import { JsonObjectProperty, ItemValue, MatrixDropdownRowModelBase, QuestionDropdownModel,
  QuestionMatrixDynamicModel, Base, Serializer, SurveyModel, ElementContentVisibilityChangedEvent,
  matrixDropdownColumnTypes,
  PanelModel, PanelModelBase } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel } from "../../creator-base";
import { defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition } from "../../question-editor/definition";
import { SurveyQuestionProperties } from "../../question-editor/properties";
import { editorLocalization } from "../../editorLocalization";
import { PropertyGridModel } from "../../../src/property-grid";
import { QuestionEmbeddedCreatorModel } from "../../components/embedded-creator";
import { ICreatorOptions } from "../../creator-options";
import { settings } from "../../creator-settings";
import { IQuestionToolboxItem } from "../../toolbox";
require("./presets-editable-properties.scss");

export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(obj, className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(obj, null, className, null, null, null, propertyGridDefinition);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}

const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase", "matrixdropdowncolumn@default", "matrixdropdowncolumn@selectbase"];

export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash = {};
  public classes = new Array<string>();
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private allPropertiesNames: Array<string>;
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls = {};
    const obj = this.createObj();
    this.properties = new SurveyQuestionPresetProperties(obj, className, currentJson);
    this.allPropertiesNames = this.properties.getAllVisiblePropertiesNames(true);
    const objProps = {};
    Serializer.getPropertiesByObj(obj).forEach(prop => objProps[prop.name] = prop);
    this.allPropertiesNames.forEach(name => {
      const prop = objProps[name];
      if(prop) {
        const propClassName = this.getPropClassName(prop);
        this.propertiesHash[name] = propClassName;
        cls[propClassName] = true;
      }
    });
    for(let i = 0; i < presetPropertiesBaseClasses.length; i ++) {
      const cl = presetPropertiesBaseClasses[i];
      if(cls[cl]) {
        this.classes.push(cl);
      }
    }
    if(this.classes.indexOf(className) < 0) {
      this.classes.push(className);
    }
    this.propertyGridValue = new PropertyGridModel(obj, undefined, this.currentJson);
  }
  private createObj(): Base {
    if(this.className === "survey") return new SurveyModel();
    const ind = this.className.indexOf("@");
    if(ind < 0) return Serializer.createClass(this.className);
    const clName = this.className.substring(0, ind);
    const postFix = this.className.substring(ind + 1);
    const res = Serializer.createClass(clName);
    if(res.cellType) {
      res.cellType = postFix;
    }
    return res;
  }
  public dispose(): void {
    //TODO
  }
  public getAllPropertiesNames(): Array<string> { return this.allPropertiesNames; }
  public get propertyGrid(): PropertyGridModel { return this.propertyGridValue; }
  public getPropertyClassName(propName: string): string {
    return this.propertiesHash[propName];
  }
  public updateCurrentJson(val: Array<any>): void {
    this.updateCurrentJsonCore(this.currentJson.classes, val);
  }
  private updateCurrentJsonCore(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>): void {
    if(!Array.isArray(val) || val.length === 0) return;
    const tabNames = [];
    this.classes.forEach(cl => {
      this.updateCurrentJsonClass(curJsonClasses, val, cl, tabNames);
    });
  }
  private updateCurrentJsonClass(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>, clName: string, tabNames: Array<string>): void {
    const properties = [];
    const tabs = [];
    const tabStep = 100;

    val.forEach(tab => {
      const clVal = tab.items;
      if(Array.isArray(clVal)) {
        const classesIndeces = [];
        this.classes.forEach(cl => classesIndeces.push(0));
        const propertiesIndeces = {};
        for(let i = 0; i < clVal.length; i ++) {
          const clName = this.propertiesHash[clVal[i]];
          let clIndex = this.classes.indexOf(clName);
          if(clIndex < 0) continue;
          const nextStep = 10000 / Math.pow(10, clIndex);
          let max = 0;
          for(let j = 0; j <= clIndex; j ++) {
            if(classesIndeces[j] > max) max = classesIndeces[j];
          }
          const visIndex = max + nextStep;
          propertiesIndeces[clVal[i]] = visIndex;
          classesIndeces[clIndex] = visIndex;
        }
        clVal.forEach(propName => {
          if(this.propertiesHash[propName] === clName) {
            const tabName = tab.name !== "general" ? tab.name : undefined;
            if(!!tabName && tabNames.indexOf(tab.name) < 0) {
              tabNames.push(tab.name);
              tabs.push({ name: tab.name, index: tabNames.length * tabStep });
            }
            const item: any = { name: propName, index: propertiesIndeces[propName] };
            if(!!tabName) {
              item.tab = tabName;
            }
            properties.push(item);
          }
        });
      }
    });
    curJsonClasses[clName] = { properties: properties, tabs: tabs };
  }
  private getPropClassName(prop: JsonObjectProperty): string {
    const clName = prop.classInfo.name;
    for(let i = 1; i < presetPropertiesBaseClasses.length; i ++) {
      const cl = presetPropertiesBaseClasses[i];
      if(clName === cl || Serializer.isDescendantOf(clName, cl)) return this.getClassName(cl);
    }
    if(clName === this.className) return this.className;
    return this.getClassName("question");
  }
  private getClassName(className: string): string {
    const ind = this.className.indexOf("@");
    if(ind < 0) return className;
    const clName = this.className.substring(0, ind);
    if(clName === className || className === "question") {
      className = "default";
    }
    return clName + "@" + className;
  }
}

export class CreatorPresetEditablePropertyGridDefinition extends CreatorPresetEditableBase {
  private currentJson: ISurveyPropertyGridDefinition;
  private localeStrings: any;
  private currentProperties: SurveyQuestionPresetPropertiesDetail;
  private currentClassName: string;
  private propCreatorValue: SurveyCreatorModel;
  public get propCreator(): SurveyCreatorModel { return this.propCreatorValue; }
  public createMainPageCore(): any {
    return {
      title: "Property Grid categories",
      elements: [
        {
          type: "boolean",
          name: this.nameShow,
          title: "Do you want to configure Property Grid categories and properties?"
        },
        {
          type: "dropdown",
          name: this.nameSelector,
          visibleIf: this.getBoolVisibleIf(this.nameShow),
          clearIfInvisible: "onHidden",
          title: "Select element to setup a property grid for it",
          startWithNewLine: false
        },
        {
          type: "panel",
          name: "propPanel",
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          elements: [
            {
              type: "embeddedcreator",
              name: this.namePropertyCreator,
            }
          ]
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    if(model.getValue(this.nameShow) !== true) return undefined;
    this.updateCurrentJson(model);
    return this.currentJson;
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.getSelector(model).choices = this.getSelectorChoices(creatorSetup.creator);
    const options: ICreatorOptions = {
      showJSONEditorTab: false,
      showLogicTab: false,
      showPreviewTab: false,
      pageEditMode: "single",
      allowModifyPages: false,
      showSurveyTitle: false,
      maxNestedPanels: 0
    };
    const oldSearchValue = settings.propertyGrid.enableSearch;
    settings.propertyGrid.enableSearch = false;
    this.propCreatorValue = creatorSetup.createCreator(options);
    this.setupPropertyCreator();
    this.getPropertyCreatorQuestion(model).embeddedCreator = this.propCreator;
    settings.propertyGrid.enableSearch = oldSearchValue;
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    const pe = this.localeStrings.pe;
    if(Object.keys(pe).length > 0) {
      locStrs.pe = pe;
    }
  }
  protected updateJsonLocalizationStringsCore(locStrs: any): void {
    this.localeStrings = { pe: locStrs.pe || {} };
  }
  private isPropCreatorChanged: boolean;
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    if(name !== this.nameSelector) return;
    this.updateCurrentJson(model);
    if(this.currentProperties) {
      this.currentProperties.dispose();
      this.currentProperties = null;
    }
    const selQuestion = this.getSelector(model);
    this.currentClassName = selQuestion.value;
    if(!this.currentClassName) return;
    this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
    this.propCreator.JSON = this.updateCreatorJSON(this.currentProperties.propertyGrid.survey.toJSON());
    this.setupCreatorToolbox(this.propCreator);
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    model.setValue(this.nameShow, !!json);
    if(!json) {
      json = this.copyJson(defaultPropertyGridDefinition);
    }
    this.currentJson = json;
    this.currentJson.autoGenerateProperties = false;
  }
  private get nameShow() { return this.fullPath + "_show"; }
  private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }
  private getPropertyCreatorQuestion(model: SurveyModel): QuestionEmbeddedCreatorModel { return <QuestionEmbeddedCreatorModel>model.getQuestionByName(this.namePropertyCreator); }
  private get nameSelector() { return this.fullPath + "_selector"; }
  private get namePropertyCreator() { return this.fullPath + "_propcreator"; }
  private getSelectorChoices(creator: SurveyCreatorModel): Array<ItemValue> {
    const classes = ["survey", "page", "panel"];
    const toolboxItems = {};
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      toolboxItems[item.id] = true;
    });

    Serializer.getChildrenClasses("question", true).forEach(cl => {
      if(toolboxItems[cl.name]) {
        classes.push(cl.name);
      }
    });
    const res = [];
    classes.forEach(str => res.push(new ItemValue(str, this.getSelectorItemTitle(str))));
    const columnPrefix = "matrixdropdowncolumn@";
    res.push(new ItemValue(columnPrefix + "default", this.getColumnItemTitle("")));
    for(let key in matrixDropdownColumnTypes) {
      res.push(new ItemValue(columnPrefix + key, this.getColumnItemTitle(key)));
    }
    return res;
  }
  private getSelectorItemTitle(name: string): string {
    if(name === "survey") return editorLocalization.getString("ed.surveyTypeName");
    if(name === "page") return editorLocalization.getString("ed.pageTypeName");
    return editorLocalization.getString("qt." + name);
  }
  private getColumnItemTitle(name: string): string {
    const columnTitle = editorLocalization.getString("ed.columnTypeName");
    const postFix = !name ? "default" : this.getSelectorItemTitle(name);
    return columnTitle + ": " + postFix;
  }
  private updateCurrentJson(model: SurveyModel): void {
    if(!this.isPropCreatorChanged) return;
    this.isPropCreatorChanged = false;
    if(this.currentProperties) {
      this.currentProperties.updateCurrentJson(this.getPropertiesArray());
    }
  }
  private getPropertiesArray(): Array<any> {
    const survey = this.propCreator.survey;
    const res = [];
    survey.getAllPanels().forEach(panel => {
      const item = { name: panel.name, items: [] };
      (<PanelModelBase>panel).questions.forEach(question => {
        item.items.push(question.name);
      });
      res.push(item);
    });
    return res;
  }
  private setupPropertyCreator(): void {
    const creator = this.propCreator;
    creator.showSaveButton = false;
    creator.onModified.add((sender, options) => {
      this.isPropCreatorChanged = true;
      if(options.name === "title" && (<any>options.target)?.isQuestion) {
        const pe = this.localeStrings.pe;
        const propName = (<any>options.target).name;
        const className = this.currentProperties.getPropertyClassName(propName);
        if(!!className) {
          if(!pe[className]) {
            pe[className] = {};
          }
          pe[className][propName] = options.newValue;
        }
      }
    });
    creator.isAutoSave = false;
    creator.showTabsDefault = false;
    creator.showToolbarDefault = false;
    creator.allowCollapseSidebar = false;
    creator.sidebar.toolbar.setItems([]);
    creator.showAddQuestionButton = false;
    creator.setPropertyGridDefinition({
      autoGenerateProperties: false,
      classes: {
        panel: {
          properties: [
            "name",
            "title"
          ]
        },
        question: {
          properties: [
            "name",
            "title"
          ]
        }
      }
    });
    creator.onSurveyInstanceCreated.add((sender, options) => {
      if(options.area === "property-grid") {
        const survey = options.survey;
        if(survey.state === "empty") return;
        const page = options.survey.pages[0];
        survey.getAllPanels().forEach(panel => {
          (<PanelModel>panel).questions.forEach(q => {
            page.addElement(q);
          });
        });
        const nameQuestion = survey.getQuestionByName("name");
        nameQuestion.readOnly = true;
        nameQuestion.description = "";
        nameQuestion.title = "Property name";
        const titleQuestion = survey.getQuestionByName("title");
        titleQuestion.description = "";
        titleQuestion.title = "Property description";
      }
      if(options.reason === "designer") {
        const model = options.survey;
        model.onElementWrapperComponentName.add((sender, options) => {
          if(options.componentName === "svc-dropdown-question") {
            options.componentName = "svc-question";
          }
        });
      }
    });
    creator.onSelectedElementChanging.add((sender, options) => {
      const el = <any>options.newSelectedElement;
      if(!!el && (el.isPage || el === creator.survey)) {
        options.newSelectedElement = creator.selectedElement;
      }
    });
    creator.onElementAllowOperations.add((sender, options) => {
      options.allowChangeInputType = false;
      options.allowChangeRequired = false;
      options.allowChangeType = false;
      options.allowCopy = false;
      options.allowShowSettings = false;
      options.allowDelete = true;
      options.allowEdit = true;
    });
    creator.onCollectionItemAllowOperations.add((sender, options) => {
      options.allowEdit = false;
      options.allowAdd = false;
      options.allowDelete = false;
    });
    creator.onQuestionAdded.add((sender, options) => {
      this.setupCreatorToolbox(sender);
    });
    creator.onModified.add((sender, options) => {
      if(options.type === "OBJECT_DELETED" && (<any>options.target)?.isQuestion) {
        this.setupCreatorToolbox(sender);
      }
    });
    creator.getElementAddornerCssCallback = (obj: Base, className: string): string =>
    { return className + " preset_pg_question"; };
  }
  private updateCreatorJSON(json: any): any {
    if(!json || !json.pages || !json.pages[0] || !json.pages[0].elements) return;
    this.updateCreatorJSONElements(json.pages[0].elements);
    return json;
  }
  private updateCreatorJSONElements(elements: Array<any>): void {
    for(let i = elements.length - 1; i >= 0; i --) {
      const el = elements[i];
      if(Array.isArray(el.elements)) {
        this.updateCreatorJSONElements(el.elements);
      }
      if(!!el.name && el.name.indexOf("overridingProperty")> -1) {
        elements.splice(i, 1);
      } else {
        const type = el.type;
        if(type === "textwithreset") {
          el.type = "text";
        }
        if(type === "commentwithreset") {
          el.type = "comment";
        }
      }
    }
  }
  private setupCreatorToolbox(creator: SurveyCreatorModel): void {
    const elements: IQuestionToolboxItem[] = [{ name: "panel", title: "Category", className: "panel", json: { type: "panel" }, iconName: "panel" }];
    const propGrid = this.currentProperties.propertyGrid.survey;
    const survey = this.propCreator.survey;
    const allProps = this.currentProperties.getAllPropertiesNames();
    allProps.forEach(propName => {
      if(!survey.getQuestionByName(propName) && propGrid.getQuestionByName(propName)) {
        const q = propGrid.getQuestionByName(propName);
        const json = q.toJSON();
        json.type = q.getType();
        elements.push({
          name: propName,
          title: q.title,
          className: q.getType(),
          iconName: "text",
          json: json
        });
      }
    });

    creator.toolbox.addItems(elements, true);
  }
}
export class CreatorEditablePresetPropertyGrid extends CreatorPresetEditableBase {
}
