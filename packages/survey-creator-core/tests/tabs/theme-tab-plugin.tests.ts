import { CreatorTester } from "../creator-tester";
export { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
export { QuestionSpinEditorModel } from "../../src/custom-questions/question-spin-editor";
export { QuestionColorModel } from "../../src/custom-questions/question-color";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "../../src/components/tabs/theme-custom-questions/element-settings";
import { fontsettingsToCssVariable, fontsettingsFromCssVariable } from "../../src/components/tabs/theme-custom-questions/font-settings";
import { createColor } from "../../src/components/tabs/theme-custom-questions/color-settings";
import { createBoxShadow, parseBoxShadow } from "../../src/components/tabs/theme-custom-questions/boxshadow-settings";
import { ThemeTabPlugin } from "../../src/components/tabs/theme-plugin";
import { ThemeModel } from "../../src/components/tabs/theme-model";
import { ThemeEditorModel } from "../../src/components/tabs/theme-builder";
import { settings } from "../../src/creator-settings";
import { assign, parseColor } from "../../src/utils/utils";
import { Themes } from "../../src/components/tabs/themes";
import { ITheme, QuestionCompositeModel } from "survey-core";

test("Creator top action bar: only theme tab", (): any => {
  const themeBuilderButtonOrder = ["action-undo-theme", "action-redo-theme", "svc-reset-theme", "svc-theme-settings", "svc-theme-import", "svc-theme-export"].join("|");
  const logicTabButtonOrder = ["svc-logic-filter-question", "svc-logic-filter-actiontype", "svc-logic-fast-entry"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");

  expect(creator.toolbar.visibleActions.length).toEqual(6);
  let receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeBuilderButtonOrder);
  expect(creator.toolbar.visibleActions[3].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.toolbar.visibleActions.length).toEqual(3);
  receivedOrder = creator.toolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(logicTabButtonOrder);
});

test("Creator footer action bar: only theme tab", (): any => {
  const buttonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: false, showThemeTab: true, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("theme");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  const receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(buttonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);
});

test("Creator footer action bar: all tabs", (): any => {
  const designerTabButtonOrder = ["svd-designer", "svd-preview", "action-undo", "action-redo", "svd-settings"].join("|");
  const testTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible"].join("|");
  const themeTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible", "svc-theme-settings"].join("|");
  const creator = new CreatorTester({ showDesignerTab: true, showPreviewTab: true, showThemeTab: true, showLogicTab: true, showJSONEditorTab: true, showTranslationTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("designer");

  creator.isMobileView = true;
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  let receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeTruthy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeFalsy();

  creator.activeTab = "test";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(testTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "theme";
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(themeTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);

  creator.activeTab = "designer";
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
});

test("Theme builder: set backcolor to simulator", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const themeTabViewModel = themePlugin.model as ThemeEditorModel;

  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("rgba(243, 243, 243, 1)");
  expect(themeTabViewModel.simulator.survey.themeVariables["--sjs-general-backcolor-dim"]).toEqual("rgba(243, 243, 243, 1)");

  themeModel["--sjs-general-backcolor-dim"] = "red";
  expect(themeModel["--sjs-general-backcolor-dim"]).toBe("red");
  expect(themeTabViewModel.simulator.survey.themeVariables["--sjs-general-backcolor-dim"]).toEqual("red");
});

test("import theme from file", (done) => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.isAutoSave = true;
  creator.autoSaveDelay = 0;
  let saveThemeCount = 0;
  creator.saveThemeFunc = (saveNo, callback) => {
    saveThemeCount++;
    callback(saveNo, "success");
  };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;
  const themeTabViewModel = themePlugin.model as ThemeEditorModel;

  const data = JSON.stringify({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(150, 150, 255, 1)",
    },
    "backgroundImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAYAAAC6aDOxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATkSURBVHgB5ZxNUhNBFIBf9xBBccFWQulwAvEAUuEEFidQTyCsXIonUE+gN9AbEEOVW3DnjlhGXRo3EBKm2+7AxEmnf2aGzLxX8G0IMxNIPV5/3fNeDwCE+XX78Q4gw4EovUZrQwA8AWRIBuj3UivmDfGRAfQBGZIBklzsS4AYGDsCZMgFqLe8+XYcHIVk0AVkFoAQP+9s7oGEF+n3USK7gAyZDNJSVl9eZY9JSLqADAMCaClPvJOhedJB/3wkMsgWHAW6oDXoAcpKOYuUEn2K16BK2pTyFBx/itegZZBNylm4wJ/iNSgZdCnlj9JzjWT4U7wGJYMcUp6+ZhR9BwLUHiCXlE1GyzdwiHmlPE1/vd8mMYvVlkEhKWdRUzyJGUxTSwblkXIWCmWOlFoCJFRwIId3JhAoc6RUPsS0lNWXjSLvoVDmSKk0QLqmzPxStg4lCmWOlMoCpKUsGXvjvEDAnusUhTJHSiUBSmvK7ivkh+ESf6derNjOrg6+kFgkaioJkLiYsWLrSQnd4a1otzFySpuMoDVzD5BXyjo4km/pRaDg9gBRKXOkzDVAISknjO+uD9pd/XrhXDywXkSkzJEytwDlkfL9k/anzG+ObZepAJPKoLksFMMrZfmhOTh4PX2MbegxZ7n2+mVQHinPHpbWGUwVyq6Xg/JK2XLO+p7BUvQVCHGltoqWss87CfDtKe9cooekyrpjII6U8LZ0BhWWcobzhQI3rngcrZ12dktJupyU/6Nmqhgoc6GGbf2yVAaVkXIWJh1rICLIc76drtcKByhQvug7pTwFK1T+qBOWwM7aqD1ZahQKUHClDPx5Gnnvh2D2m1RstJRXzzrvssdyz2JayqwhDp0XKCk3B53XQJTjldbK4lAcejoqR82TziPzYC5Jh6TMpPy06pEyBRojsef15qWUTXINsZCUzxaj50AY3W7yqSErZZNggOYjZTx+3G21wNNuMqVs4g3QvKSMhVZDJMR713mblE2ckr72UlZqaJ521kM/xyrpGyLlLciBdYjdZCmbzAwxLWWWb4NBrahadXvt9CD4V9dS5kLsOy8oqIapDMrR6EMjT78+j5SLenMSoGD5Apsc/XrvxiylBl2+gIKMJV109wUGoWL+eGOWvLqUTcYBKrz7AgHm2TMU2pg1lvKo3HqNl9l9gUGSRH9tx4Mbs5SUfSvlECQeRUjRi7tbQ/HHds72WILrEYYULeUy3slC6nGohXNnJlszoAopm5AKkHQU0mz9eu9u2StI2YTU82K6Xy9tg97YcVallE1oPXHo6tcD66avq5ayCakMCvXrQ+u1sZTnXGGg5aBAv74OKZvQyiBPv74XVbNSDhEBEcbDh8kdy6l+lKi7RICXrvcqKW89GLa/QQWQGWKBfn1tUjYhEyBPv97ZZCxTvigKoQAV7Ncr74wWeeVlX0KzWIF+vW9j1pyhk0EF+vVcymd1tZvIBEjdb+XLICXle4ODz1ATlBaKwQyqQ8omJALUW26Fs6cmKZvQ+NcUIf/UKGUTEgGKEvHQd75OKc/8bqAA96yia5ayCY0hJllsP16/lE1oZBCT8cwxJCmb0AiQeR+GKGUT9ADpVg8YayBMKZugB2im1YMsZRP0AGXXQBSkbIIeoMkaiIiUTQhImsWUpGyCHiBV5ogpSZkcvaXNp0CYf3BxyTNPele9AAAAAElFTkSuQmCC",
    "backgroundImageFit": "auto",
    "themeName": "My Theme",
    "themePalette": "light",
    "isPanelless": true
  } as any, null, 4);
  const blob = new Blob([data], { type: "application/json" });
  themePlugin.importFromFile(blob as any, () => {
    expect(themeModel.themeName).toEqual("default");
    expect(themeModel.themePalette).toEqual("light");
    expect(themeModel.themeMode).toEqual("lightweight");
    expect(themeModel.backgroundImage).toBeTruthy();
    expect(themeModel.backgroundImageFit).toEqual("auto");
    expect(themeModel["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
    expect(themeTabViewModel.simulator.survey.themeVariables["--sjs-general-backcolor"]).toEqual("rgba(150, 150, 255, 1)");
    expect(saveThemeCount).toBe(1);
    done();
  });
});

test("export theme to file", (done): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  themePlugin.activate();
  const themeModel = themePlugin.themeModel as ThemeModel;

  themeModel["questionTitle"] = { family: settings.theme.fontFamily, color: "rgba(0, 0, 0, 0.91)", weight: "600", size: 19 };

  const expectations = {};
  assign(expectations, Themes["default-light"].cssVariables, { "--sjs-font-questiontitle-size": "19px" });

  themePlugin.saveToFileHandler = async (fileName: string, blob: Blob) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      expect(fileName).toBe(settings.theme.exportFileName);
      const theme: ITheme = JSON.parse(fileReader.result as string);
      expect(theme.themeName).toEqual("default");
      expect(theme.cssVariables).toStrictEqual(expectations);
      done();
    };
    fileReader.readAsText(blob);
  };
  themePlugin.exportToFile(settings.theme.exportFileName);
});

test("Theme builder: restore questionTitle switch tabs", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  creator.activeTab = "theme";
  let themeSurveyTab = themePlugin.model as ThemeEditorModel;
  let questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
  const questionTitleValue = {
    "family": "Open Sans",
    "weight": "600",
    "color": "rgba(0, 0, 0, 0.91)",
    "size": 16
  };

  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);

  questionTitleValue.color = "rgba(201, 90, 231, 0.91)";
  questionTitleFontSettings.value = questionTitleValue;
  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);

  creator.activeTab = "designer";
  creator.activeTab = "theme";
  themeSurveyTab = themePlugin.model as ThemeEditorModel;
  questionTitleFontSettings = themePlugin.propertyGrid.survey.findQuestionByName("questionTitle") as QuestionCompositeModel;
  expect(questionTitleFontSettings.value).toEqual(questionTitleValue);
  expect(themePlugin.themeModel["questionTitle"]).toEqual(questionTitleValue);
});

// test("Theme onModified and saveThemeFunc", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.isAutoSave = true;
//   creator.autoSaveDelay = 0;
//   let saveCount = 0;
//   creator.saveSurveyFunc = () => {
//     saveCount++;
//   };
//   let saveThemeCount = 0;
//   creator.saveThemeFunc = (saveNo, callback) => {
//     saveThemeCount++;
//     callback(saveNo, "success");
//   };
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   let modificationsLog = "";
//   themePlugin.onThemeSelected.add((s, o) => {
//     modificationsLog += "->THEME_SELECTED";
//   });
//   themePlugin.onThemePropertyChanged.add((s, o) => {
//     modificationsLog += "->THEME_MODIFIED";
//   });
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeBuilder.themeEditorSurvey;

//   expect(modificationsLog).toBe("");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(0);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeFalsy();

//   themeEditor.getQuestionByName("--sjs-border-default").value = "#ff0000";

//   expect(modificationsLog).toBe("->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(1);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeBuilder.resetTheme();

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(2);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeFalsy();

//   themeEditor.getQuestionByName("backgroundImage").value = [{ name: "pic1.png", type: "", content: "http://site.org/images/pic1.png" }];

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(3);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeEditor.getQuestionByName("--sjs-general-backcolor-dim").value = "#ff0000";

//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(4);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();

//   themeEditor.getQuestionByName("headerViewContainer").value = [{ headerView: "advanced" }];
//   expect(modificationsLog).toBe("->THEME_MODIFIED->THEME_SELECTED->THEME_MODIFIED->THEME_MODIFIED->THEME_MODIFIED");
//   expect(saveCount).toBe(1);
//   expect(saveThemeCount).toBe(5);
//   expect(creator.hasPendingThemeChanges).toBeFalsy();
//   expect(themePlugin.isModified).toBeTruthy();
// });

// test("Theme undo redo changes", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const question = themeEditor.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("rgba(243, 243, 243, 1)");

//   question.value = "#ff0000";
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#ff0000");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#f3f3f3");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(question.value).toBe("#ff0000");
// });

// test("Theme undo redo general settings", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const backgroundImageQuestion = themeEditor.getQuestionByName("backgroundImage");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe(undefined);

//   backgroundImageQuestion.value = "some_url";

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe("some_url");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe(undefined);

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(backgroundImageQuestion.value).toBe("some_url");
// });

// test("Theme undo redo calculated questions", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const accentColorQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor");
//   const accentColorDarkQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-dark");
//   const accentColorLightQuestion = themeEditor.getQuestionByName("--sjs-primary-backcolor-light");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

//   accentColorQuestion.value = "#2772cb";

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(25, 179, 148, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(20, 164, 139, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(25, 179, 148, 0.1)");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(accentColorQuestion.value).toBe("rgba(39, 114, 203, 1)");
//   expect(accentColorDarkQuestion.value).toBe("rgba(36, 106, 188, 1)");
//   expect(accentColorLightQuestion.value).toBe("rgba(39, 114, 203, 0.1)");
// });

// test("Theme undo redo expression questions", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   const commonFontSizeQuestion = themeEditor.getQuestionByName("commonFontSize");

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe(undefined);

//   commonFontSizeQuestion.value = 150;

//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(150);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");

//   themePlugin.undo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(false);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(true);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(100);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("16px");

//   themePlugin.redo();
//   expect(themeSurveyTab.undoRedoManager.canUndo()).toBe(true);
//   expect(themeSurveyTab.undoRedoManager.canRedo()).toBe(false);
//   expect(themeSurveyTab["blockThemeChangedNotifications"]).toBe(0);
//   expect(commonFontSizeQuestion.value).toBe(150);
//   expect(themeSurveyTab.currentThemeCssVariables["--sjs-font-size"]).toBe("24px");
// });

// test("Theme builder: trigger responsiveness", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   let log = "";
//   themeSurveyTab.survey.triggerResponsiveness = (hard: boolean) => {
//     log += `->called:${hard}`;
//   };
//   themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "#ffffff";
//   expect(log).toBe("");
//   themeEditor.getQuestionByName("commonScale").value = 90;
//   expect(log).toBe("->called:true");
//   themeEditor.getQuestionByName("commonScale").value = 80;
//   expect(log).toBe("->called:true->called:true");
// });

// test("onThemeSelected + onThemePropertyChanged events", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");
//   const generalPrimaryColor = themeEditorSurvey.getQuestionByName("generalPrimaryColor");

//   let pluginThemeSelectedCount = 0;
//   let pluginThemeModifiedCount = 0;
//   themePlugin.onThemeSelected.add(() => pluginThemeSelectedCount++);
//   themePlugin.onThemePropertyChanged.add(() => pluginThemeModifiedCount++);
//   let builderThemeSelectedCount = 0;
//   let builderThemeModifiedCount = 0;
//   themeBuilder.onThemeSelected.add(() => builderThemeSelectedCount++);
//   themeBuilder.onThemePropertyChanged.add(() => builderThemeModifiedCount++);

//   themeChooser.value = "flat";
//   expect(pluginThemeModifiedCount).toBe(0);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(0);
//   expect(builderThemeSelectedCount).toBe(1);

//   primaryBackColor.value = "#ffffff";
//   expect(pluginThemeModifiedCount).toBe(1);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(1);
//   expect(builderThemeSelectedCount).toBe(1);

//   backgroundDimColor.value = "#7a46bb";
//   expect(pluginThemeModifiedCount).toBe(2);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(2);
//   expect(builderThemeSelectedCount).toBe(1);

//   generalPrimaryColor.value = "#7a46bb";
//   expect(pluginThemeModifiedCount).toBe(3);
//   expect(pluginThemeSelectedCount).toBe(1);
//   expect(builderThemeModifiedCount).toBe(3);
//   expect(builderThemeSelectedCount).toBe(1);
// });

// test("onAllowModifyTheme events + use creator.readOnly", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.readOnly = true;
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.onAllowModifyTheme.add((s, o) => {
//     o.allow = o.theme.themeName === "flat";
//   });

//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   const backgroundDimColor = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim");

//   expect(themeChooser.isReadOnly).toBeFalsy();
//   expect(themePalette.isReadOnly).toBeFalsy();
//   expect(primaryBackColor.isReadOnly).toBeTruthy();
//   expect(backgroundDimColor.isReadOnly).toBeTruthy();

//   themeChooser.value = "flat";
//   expect(themeChooser.isReadOnly).toBeFalsy();
//   expect(themePalette.isReadOnly).toBeFalsy();
//   expect(primaryBackColor.isReadOnly).toBeFalsy();
//   expect(backgroundDimColor.isReadOnly).toBeFalsy();
// });

// test("Desktop mode: add advanced mode switcher", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   expect(propertyGridGroups[0].visible).toBeTruthy();
//   expect(propertyGridGroups[1].visible).toBeTruthy();
//   expect(propertyGridGroups[2].visible).toBeTruthy();
//   expect(propertyGridGroups[3].visible).toBeTruthy();

//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeTruthy();
// });

// test("Mobile mode: hide advanced settings in property grid", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.isMobileView = true;

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   expect(propertyGridGroups[0].visible).toBeTruthy();
//   expect(propertyGridGroups[1].visible).toBeFalsy();
//   expect(propertyGridGroups[2].visible).toBeTruthy();
//   expect(propertyGridGroups[3].visible).toBeTruthy();

//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();
//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeFalsy();
// });

// test("Change advancedModeSwitcher visibility", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { logo: "Logo", pages: [{ questions: [{ type: "text", name: "q1" }] }] };

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const propertyGridGroups = themeEditorSurvey.pages[0].elements;
//   expect(propertyGridGroups.length).toBe(4);
//   const actions = (propertyGridGroups[3] as any as SurveyElement).getTitleActions();

//   expect(actions.length).toBe(1);
//   expect(actions[0].visible).toBeTruthy();

//   creator.isMobileView = true;
//   expect(actions[0].visible).toBeFalsy();
// });

// test("saveTheme action", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   let saveCount = 0;
//   creator.saveSurveyFunc = () => {
//     saveCount++;
//   };
//   let saveThemeCount = 0;
//   creator.saveThemeFunc = (saveNo, callback) => {
//     saveThemeCount++;
//     callback(saveNo, "success");
//   };
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(0);
//   expect(themePlugin["saveThemeAction"].visible).toBeFalsy();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   creator.activeTab = "theme";
//   expect(themePlugin["saveThemeAction"].visible).toBeTruthy();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   const themeSurveyTab = themePlugin.model as ThemeEditorModel;
//   const themeEditor = themeSurveyTab.themeEditorSurvey;
//   themeEditor.getQuestionByName("--sjs-primary-backcolor").value = "some val";
//   expect(themePlugin["saveThemeAction"].enabled).toBeTruthy();
//   themePlugin["saveThemeAction"].action();
//   expect(themePlugin["saveThemeAction"].enabled).toBeFalsy();
//   expect(saveCount).toBe(0);
//   expect(saveThemeCount).toBe(1);
// });

// test("Simulator survey should respect survey current locale", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = {
//     "locale": "fr",
//     "logo": {
//       "fr": "FR logo",
//     },
//     "pages": [
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "radiogroup",
//             "name": "question1",
//             "choices": [
//               "Item 1",
//               "Item 2",
//               "Item 3"
//             ]
//           }
//         ]
//       }
//     ]
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   expect(themeBuilder.simulator.survey.locale).toBe(creator.survey.locale);
//   expect(themeBuilder.simulator.survey.locLogo.renderedHtml).toBe("FR logo");
// });

// test("Reset theme action availability", (): any => {
//   const originalCallback = surveySettings.confirmActionAsync;
//   surveySettings.confirmActionAsync = (text, callback) => {
//     callback(true);
//     return true;
//   };
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   const resetThemeAction = themePlugin["resetTheme"];
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const themeMode = themeEditorSurvey.getQuestionByName("themeMode") as QuestionButtonGroupModel;
//   const themePalette = themeEditorSurvey.getQuestionByName("themePalette") as QuestionButtonGroupModel;
//   const backgroundImage = themeEditorSurvey.getQuestionByName("backgroundImage");
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");

//   expect(themeChooser.value).toBe("default");
//   expect(resetThemeAction.enabled).toBeFalsy();

//   themeChooser.value = "flat";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themeChooser.value).toBe("default");

//   themeMode.value = "lightweight";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themeMode.value).toBe("panels");

//   themePalette.value = "dark";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(themePalette.value).toBe("light");

//   backgroundImage.value = "image.png";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(backgroundImage.value).toBe(undefined);

//   primaryBackColor.value = "red";
//   expect(resetThemeAction.enabled).toBeTruthy();
//   resetThemeAction.action();
//   expect(resetThemeAction.enabled).toBeFalsy();
//   expect(primaryBackColor.value).toBe("rgba(25, 179, 148, 1)");

//   surveySettings.confirmActionAsync = originalCallback;
// });

// test("Custom theme assigned to creator", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   creator.JSON = { questions: [{ type: "text", name: "q1" }] };
//   creator.theme = {
//     themeName: "default_exported",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   };
//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const themeChooser = themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
//   const primaryBackColor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
//   expect(themeChooser.value).toBe("default");
//   expect(primaryBackColor.value).toBe("rgba(255, 0, 0, 1)");
// });

// test("getThemeChanges", (): any => {
//   let themeChanges = getThemeChanges({
//     themeName: "default",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     themeName: "default_exported",
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("light");
//   expect(themeChanges.isPanelless).toBe(false);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");

//   themeChanges = getThemeChanges({
//     themeName: "default_exported",
//     colorPalette: "dark",
//     isPanelless: true,
//     cssVariables: {
//       "--sjs-primary-backcolor": "rgba(255, 0, 0, 1)"
//     }
//   });
//   expect(themeChanges.themeName).toBe("default");
//   expect(themeChanges.colorPalette).toBe("dark");
//   expect(themeChanges.isPanelless).toBe(true);
//   expect(Object.keys(themeChanges.cssVariables!)).toStrictEqual(["--sjs-primary-backcolor"]);
//   expect(themeChanges.cssVariables!["--sjs-primary-backcolor"]).toBe("rgba(255, 0, 0, 1)");
// });

// test("Check onOpenFileChooser is called and context is passed", (): any => {
//   const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
//   let log = "";
//   let lastContext;
//   let lastUploadContext;
//   let lastUploadOptions;
//   creator.onOpenFileChooser.add((s, o) => {
//     log += "->onOpenFileChooser";
//     lastContext = (o as any).context;
//     o.callback([{} as File]);
//   });
//   creator.onUploadFile.add((s, o) => {
//     log += "->uploadFile";
//     lastUploadOptions = o;
//     lastUploadContext = (o as any).context;
//     o.callback("success", "url");
//   });

//   const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
//   themePlugin.activate();
//   const themeBuilder = themePlugin.model as ThemeEditorModel;
//   const themeEditorSurvey = themeBuilder.themeEditorSurvey;
//   const origGetElementById = document.getElementById;
//   document.getElementById = () => ({} as any);
//   try {
//     const backgroundImageEditor = themeEditorSurvey.getQuestionByName("backgroundImage") as QuestionFileModel;
//     backgroundImageEditor.chooseFile(new MouseEvent("click"));
//     expect(log).toBe("->onOpenFileChooser->uploadFile");
//     expect(lastContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "theme", propertyName: "backgroundImage" });
//     expect(lastUploadContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "theme", propertyName: "backgroundImage" });
//     expect(lastUploadOptions.elementType).toBe("theme");
//     expect(lastUploadOptions.propertyName).toBe("backgroundImage");

//     const headerBackgroundImageEditor = themeEditorSurvey.getQuestionByName("headerViewContainer").panels[0].getQuestionByName("backgroundImage") as QuestionFileModel;
//     headerBackgroundImageEditor.chooseFile(new MouseEvent("click"));
//     expect(log).toBe("->onOpenFileChooser->uploadFile->onOpenFileChooser->uploadFile");
//     expect(lastContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "header", propertyName: "backgroundImage" });
//     expect(lastUploadContext).toStrictEqual({ element: themeBuilder.currentTheme, elementType: "header", propertyName: "backgroundImage" });
//     expect(lastUploadOptions.elementType).toBe("header");
//     expect(lastUploadOptions.propertyName).toBe("backgroundImage");
//   } finally {
//     document.getElementById = origGetElementById;
//   }
// });