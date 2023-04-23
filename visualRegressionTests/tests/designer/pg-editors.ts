import { url, setJSON, takeElementScreenshot, getToolboxItemByText, getPropertyGridCategory, generalGroupName, wrapVisualTest, addQuestionByAddQuestionButton } from "../../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid Editors";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Properties on the same line", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "number"
        }
      ]
    };
    await t.resizeWindow(2560, 1440);
    await ClientFunction(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    })();
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Input"))
      .expect(Selector("span").withExactText("Min").visible).ok()
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-on-one-line-narrow.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    const westResizer = Selector(".svc-resizer-west");
    await t
      .drag(westResizer, -50, 0);
    await takeElementScreenshot("properties-on-one-line.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    await t.click(Selector(".spg-panel__content .spg-question__title").withText("Max"));
    await takeElementScreenshot("properties-on-one-line-focus.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Properties on the same line (date)", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "inputType": "date"
        }
      ]
    };
    await t.resizeWindow(2560, 1440);
    await ClientFunction(() => {
      const qDef = window["SurveyCreatorCore"].SurveyQuestionEditorDefinition.definition.text;
      const props = qDef.properties;
      props.splice(0, 1, { name: "inputType", tab: "Input" });
      props.splice(1, 1, { name: "min", tab: "Input" });
      props.splice(2, 1, { name: "max", tab: "Input" });
      qDef.tabs = [{ name: "Input", index: 1 }];
    })();
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Input"))
      .expect(Selector("span").withExactText("Min").visible).ok()
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-on-one-line-narrow-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    const westResizer = Selector(".svc-resizer-west");
    await t
      .drag(westResizer, -60, 0);
    await takeElementScreenshot("properties-on-one-line-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);

    await t.click(Selector(".spg-panel__content .spg-question__title").withText("Max"));
    await takeElementScreenshot("properties-on-one-line-focus-date.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Values editors, keep them close", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    };
    await t.resizeWindow(1560, 1440);
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"))
      .expect(Selector(".spg-panel__content").filterVisible().visible).ok();

    await takeElementScreenshot("properties-data-tab.png", Selector(".spg-panel__content").filterVisible(), t, comparer);
  });
});

test("Check default value editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    const json = {
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "defaultValue": "default"
        }
      ]
    };
    await t.resizeWindow(1560, 1440);
    await setJSON(json);

    const question1 = Selector("[data-name=\"question1\"]");

    await t
      .click(question1)
      .pressKey("enter")
      .click(getPropertyGridCategory(generalGroupName))
      .click(getPropertyGridCategory("Data"));
    const questionSelector = Selector("div[data-name='defaultValue']");

    await takeElementScreenshot("default-value-clear-button.png", questionSelector, t, comparer);
    await ClientFunction(() => { (<HTMLElement>document.querySelector("div[data-name='defaultValue'] .svc-question-link__clear-button"))?.focus(); })();
    await takeElementScreenshot("default-value-clear-button-focus.png", questionSelector, t, comparer);
  });
});

test("Default value popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    const generalTab = Selector("h4").withExactText("General");
    const dataTab = Selector("h4").withExactText("Data");

    await t
      .hover(getToolboxItemByText("Single-Line Input"))
      .click(getToolboxItemByText("Single-Line Input"))
      .click(generalTab)
      .click(dataTab)
      .click(Selector(".svc-action-button.svc-question-link__set-button").withText("Set Default Answer"));
    await takeElementScreenshot("pg-default-value-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Custom button into fast entry popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);
    await ClientFunction(() => {
      (<any>window).creator.onPropertyGridShowModal.add((sender, options) => {
        const editor = options.popupEditor;
        options.popupModel.footerToolbar.addAction({
          id: "fast-entry-custom",
          innerCss: "sv-popup__body-footer-item sv-popup__button",
          title: "Set Items",
          visibleIndex: 1,
          action: () => {
            editor.comment.value = "1|Item 1\n2|Item 2\n3|Item 3";
          }
        });
      });
    })();

    const generalTab = Selector("h4").withExactText("General");
    const choicesTab = Selector("h4").withExactText("Choices");

    await t
      .hover(getToolboxItemByText("Dropdown"))
      .click(getToolboxItemByText("Dropdown"))
      .click(generalTab)
      .click(choicesTab)
      .click(Selector(".spg-action-button[title='Edit']"));
    await takeElementScreenshot("pg-choices-fast-entry-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Logic popup", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    const generalTab = Selector("h4").withExactText("General");
    const logicTab = Selector("h4").withExactText("Logic");

    await t
      .hover(getToolboxItemByText("Single-Line Input"))
      .click(getToolboxItemByText("Single-Line Input"))
      .click(generalTab)
      .click(logicTab)
      .click(Selector(".spg-panel__content div[data-name='visibleIf'] button[title='Edit']"));
    await takeElementScreenshot("pg-logic-popup.png", Selector(".sv-popup.sv-property-editor.sv-popup--modal .sv-popup__container"), t, comparer);
  });
});

test("Property grid checkbox - all states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await setJSON({});

    const setCheckboxProperty = ClientFunction((prop, value) => {
      window["creator"].designerPropertyGrid.survey.getQuestionByName("showTitle")[prop] = value;
    });

    const checkbox = Selector("[data-name=\"showTitle\"] .spg-checkbox");

    await t.click(getPropertyGridCategory(generalGroupName));

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await takeElementScreenshot("pg-checkbox-unchecked.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await takeElementScreenshot("pg-checkbox-checked.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", true);
    await takeElementScreenshot("pg-checkbox-unchecked-readonly.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", true);
    await takeElementScreenshot("pg-checkbox-checked-readonly.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await t.hover(checkbox.find(".spg-checkbox__caption"));
    await takeElementScreenshot("pg-checkbox-unchecked-hover.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await t.hover(checkbox.find(".spg-checkbox__caption"));
    await takeElementScreenshot("pg-checkbox-checked-hover.png", checkbox, t, comparer);

    await setCheckboxProperty("value", true);
    await setCheckboxProperty("readOnly", false);
    await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Description"));
    await takeElementScreenshot("pg-checkbox-unchecked-focused.png", checkbox, t, comparer);

    await setCheckboxProperty("value", false);
    await setCheckboxProperty("readOnly", false);
    await t.click(checkbox).hover(Selector(".sv-string-viewer").withText("Description"));
    await takeElementScreenshot("pg-checkbox-checked-focused.png", checkbox, t, comparer);

    await ClientFunction(() => { document.body.focus(); })();
    await setCheckboxProperty("title", "Very very very very very very very very very very long checkbox caption");
    await takeElementScreenshot("pg-checkbox-long-caption.png", checkbox, t, comparer);
  });
});

test("Property grid input all states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(2560, 1440);
    await setJSON({});
    const setInputProperty = ClientFunction((prop, value) => {
      window["creator"].designerPropertyGrid.survey.getQuestionByName("title")[prop] = value;
    });

    const input = Selector("[data-name=\"title\"] .spg-input");
    await t.click(getPropertyGridCategory(generalGroupName));

    await takeElementScreenshot("pg-input-default.png", input, t, comparer);

    await setInputProperty("value", "Cool title");
    await takeElementScreenshot("pg-input-with-value.png", input, t, comparer);

    await t.click(input);
    await takeElementScreenshot("pg-input-focused.png", input, t, comparer);

    await setInputProperty("readOnly", true);
    await takeElementScreenshot("pg-input-disabled.png", input, t, comparer);
  });
});

test("Dropdown popup in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);

    await t
      .click(Selector(".svc-page__add-new-question"))
      .click(Selector(".spg-dropdown[aria-label='Input type']"));

    await takeElementScreenshot("pg-dropdown-editor.png", Selector(".svc-side-bar"), t, comparer);
  });
});

test("rateValues in property grid", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1240, 870);
    await setJSON({
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "rateDisplayMode": "smileys",
          "autoGenerate": false,
          "rateValues": [
            1,
            2,
            3,
            4,
            5
          ]
        }
      ]
    });
    await t
      .click(Selector(".svc-question__adorner"))
      .click(Selector(".spg-panel__title").withText("Rate Values"));

    await takeElementScreenshot("pg-rate-values.png", Selector("div[data-name=rateValues"), t, comparer);
  });
});

test("Check bindings question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await addQuestionByAddQuestionButton(t, "Dynamic Matrix");
    await t
      .click(Selector("h4[aria-label=General]"))
      .click(Selector("h4[aria-label=Logic]"));

    await takeElementScreenshot("bindings-editor.png", Selector(".spg-question[data-name='bindings']"), t, comparer);
  });
});

test("Check triggers question", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await t
      .click(Selector("h4[aria-label=General]"))
      .click(Selector("h4[aria-label=Logic]"))
      .click(Selector("div[data-name='triggers'] .spg-action-button__icon[aria-label='Add New']"));
    await takeElementScreenshot("triggers-editor.png", Selector("div[data-name='triggers']"), t, comparer);
    await ClientFunction(() => (<any>document).querySelector("[aria-label='triggerType'] input").focus())();
    await takeElementScreenshot("triggers-editor-focused.png", Selector("div[data-name='triggers']"), t, comparer);
  });
});

test("Check question with error", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await setJSON({
      type: "text",
      name: "q1",
    });
    await addQuestionByAddQuestionButton(t, "Single Input");
    const questionSelector = Selector("div[data-name='name']");
    await t
      .selectText(questionSelector.find("input"))
      .pressKey("delete")
      .pressKey("tab");
    await takeElementScreenshot("pg-editor-errors.png", questionSelector, t, comparer);
  });
});

test("Check color editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontColor",
        default: "#19B394",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontColor";
        },
        getJSON: function (obj, prop, options) {
          return { type: "color" };
        }
      });
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontColor']");
    await takeElementScreenshot("color-editor.png", questionSelector, t, comparer);
    await t.hover(questionSelector.find(".spg-input__edit-button"));
    await takeElementScreenshot("color-editor-button-hover.png", questionSelector, t, comparer);
    await t.click(questionSelector.find(".spg-color-editor__input"));
    await takeElementScreenshot("color-editor-focus.png", questionSelector, t, comparer);
  });
});

test("Check spinedit editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "fontSize",
        default: 16,
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "fontSize";
        },
        getJSON: function (obj, prop, options) {
          return { type: "spinedit", unit: "px" };
        }
      });
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='fontSize']");
    await takeElementScreenshot("spin-editor.png", questionSelector, t, comparer);
    await t.hover(questionSelector.find(".spg-input__edit-button"));
    await takeElementScreenshot("spin-editor-button-hover.png", questionSelector, t, comparer);
    await t.click(questionSelector.find(".spg-spin-editor__input"));
    await takeElementScreenshot("spin-editor-focus.png", questionSelector, t, comparer);
  });
});
test("Check file editor", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1920);
    await ClientFunction(() => {
      (<any>window).Survey.Serializer.addProperty("survey", {
        name: "image",
        category: "general",
        visibleIndex: 0
      });
      (<any>window).SurveyCreatorCore.PropertyGridEditorCollection.register({
        fit: function (prop) {
          return prop.name === "image";
        },
        getJSON: function (obj, prop, options) {
          return { type: "fileedit" };
        }
      });
    })();
    await setJSON({});
    await t
      .click(Selector("h4[aria-label=General]"));
    const questionSelector = Selector("div[data-name='image']");
    await takeElementScreenshot("file-editor.png", questionSelector, t, comparer);
  });
});
