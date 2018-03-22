import * as ko from "knockout";
import { SurveyHelper, ObjType } from "./surveyHelper";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";
import { SurveyPropertyEditorShowWindow } from "./questionEditors/questionEditor";
import { SurveyForDesigner, SurveyEditor } from "./entries";
import Sortable from "sortablejs";

export declare type SurveyVoidCallback = () => void;
export declare type SurveyOptionsCallback = (options?: any) => void;
export declare type SurveyPageParamCallback = (page: Survey.Page) => void;
export declare type SurveyMovePageCallback = (
  indexFrom: number,
  indexTo: number
) => void;
export declare type SurveyQuestionParamCallback = (
  page: Survey.QuestionBase
) => void;

export class SurveyPagesEditor {
  surveyValue: Survey.Survey;
  koPages: any;
  koIsValid: any;
  koActiveObject: any;
  selectPageClick: any;
  selectSurveyClick: any;
  public onShowSurveyEditDialog: SurveyVoidCallback;
  public onAddNewPageCallback: SurveyVoidCallback;
  public onSelectPageCallback: SurveyPageParamCallback;
  public onSelectSurveyCallback: SurveyVoidCallback;
  public onDeletePageCallback: SurveyPageParamCallback;
  public onCopyPageCallback: SurveyPageParamCallback;
  public onMovePageCallback: SurveyMovePageCallback;
  public onModifiedCallback: SurveyOptionsCallback;
  public onShowPageEditDialog: SurveyQuestionParamCallback;
  draggingPage: any = null;
  dragStart: any;
  dragOver: any;
  dragEnd: any;
  dragDrop: any;
  keyDown: any;
  questionEditorWindow: SurveyPropertyEditorShowWindow;

  constructor() {
    this.koPages = ko.observableArray();
    this.koIsValid = ko.observable(false);
    this.koActiveObject = ko.observable(null);
    var self = this;
    this.selectPageClick = function(pageItem) {
      if (self.onSelectPageCallback) {
        self.onSelectPageCallback(pageItem.page);
      }
    };
    this.selectSurveyClick = function() {
      if (self.onSelectSurveyCallback) {
        self.onSelectSurveyCallback();
      }
    };
    this.keyDown = function(el: any, e: KeyboardEvent) {
      self.onKeyDown(el, e);
    };
    this.dragStart = function(el: any) {
      self.draggingPage = el;
    };
    this.dragOver = function(el: any) {};
    this.dragEnd = function() {
      self.draggingPage = null;
    };
    this.dragDrop = function(el: any) {
      self.moveDraggingPageTo(el);
    };
    this.questionEditorWindow = new SurveyPropertyEditorShowWindow();
  }
  public get survey(): Survey.Survey {
    return this.surveyValue;
  }
  public set survey(value: Survey.Survey) {
    this.surveyValue = value;
    this.koIsValid(this.surveyValue != null);
    this.updatePages();
  }
  public setSelectedPage(page: Survey.Page) {
    var pages = this.koPages();
    for (var i = 0; i < pages.length; i++) {
      pages[i].koSelected(pages[i].page == page);
    }
  }
  public setSelectedObject(obj: any) {
    this.koActiveObject(obj);
  }
  public isSurveyActive() {
    return (
      this.koActiveObject() && this.koActiveObject().getType() === "survey"
    );
  }
  public isPageActive() {
    return this.koActiveObject() && this.koActiveObject().getType() === "page";
  }
  public addNewPageClick = () => {
    if (this.onAddNewPageCallback) {
      this.onAddNewPageCallback();
    }
  };
  public editSurveyClick() {
    if (this.onShowSurveyEditDialog) {
      this.onShowSurveyEditDialog();
    }
  }
  public showQuestionEditor(data: any) {
    var page = data.page;

    this.onShowPageEditDialog(page);
  }
  public deletePageClick(pageItem) {
    if (this.onDeletePageCallback) {
      this.onDeletePageCallback(pageItem.page);
    }
  }
  public copyPageClick(pageItem) {
    if (this.onDeletePageCallback) {
      this.onCopyPageCallback(pageItem.page);
    }
  }
  public removePage(page: Survey.Page) {
    var index = this.getIndexByPage(page);
    if (index > -1) {
      this.koPages.splice(index, 1);
    }
  }
  public getSelectedClass() {
    return this.isSurveyActive() ? "icon-gear-active" : "icon-gear";
  }
  public changeName(page: Survey.Page) {
    var index = this.getIndexByPage(page);
    if (index > -1) {
      this.koPages()[index].title(SurveyHelper.getObjectName(page));
    }
  }
  public isLastPage() {
    return this.koPages().length === 1;
  }
  protected getIndexByPage(page: Survey.Page): number {
    var pages = this.koPages();
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].page == page) return i;
    }
    return -1;
  }
  protected onKeyDown(el: any, e: KeyboardEvent) {
    if (this.koPages().length <= 1) return;
    var pages = this.koPages();
    var pageIndex = -1;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].page && pages[i].koSelected()) {
        pageIndex = i;
      }
    }
    if (pageIndex < 0) return;
    if (e.keyCode == 46 && this.onDeletePageCallback)
      this.onDeletePageCallback(el.page);
    if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
      pageIndex += e.keyCode == 37 ? -1 : 1;
      if (pageIndex < 0) pageIndex = pages.length - 1;
      if (pageIndex >= pages.length) pageIndex = 0;
      var page = pages[pageIndex].page;
      this.onSelectPageCallback(page);
      this.setSelectedPage(page);
    }
  }
  public updatePages() {
    var self = this;
    if (this.surveyValue == null) {
      this.koPages([]);
      return;
    }
    var prevSelectedPageObject = this.koPages().filter(p => p.koSelected())[0];
    var pages = [];
    for (var i = 0; i < this.surveyValue.pages.length; i++) {
      var page = this.surveyValue.pages[i];
      pages.push({
        title: ko.observable(SurveyHelper.getObjectName(page)),
        page: page,
        koSelected: ko.observable(
          !!prevSelectedPageObject && page === prevSelectedPageObject.page
        ),
        getSelectedClass: function() {
          return this.koSelected() && self.isPageActive()
            ? "icon-gear-active"
            : "icon-gear";
        }
      });
    }
    this.koPages(pages);
  }
  private moveDraggingPageTo(toPage: any) {
    if (toPage == null || toPage == this.draggingPage) {
      this.draggingPage = null;
      return;
    }
    if (this.draggingPage == null) return;
    var index = this.koPages().indexOf(this.draggingPage);
    var indexTo = this.koPages().indexOf(toPage);
    if (this.onMovePageCallback) {
      this.onMovePageCallback(index, indexTo);
    }
  }
}

class PagesEditor {
  public pages = ko.observableArray();
  public selectedPage = ko.observable();
  public isActive = ko.observable();
  public selectedPageSelect = ko.computed({
    read: () => this.selectedPage(),
    write: newVal => {
      this.selectedPage(newVal);
      this.moveToSelectedPage();
    }
  });

  constructor(
    private editor: SurveyEditor,
    private survey: SurveyForDesigner,
    private element: any
  ) {
    this.pages([].concat(survey.pages));
    this.selectedPage(this.pages()[0]);
    editor.koSelectedObject.subscribe(newVal => {
      if (
        !!newVal &&
        SurveyHelper.getObjectType(newVal.value) == ObjType.Page
      ) {
        this.isActive(true);
        if (newVal.value !== this.selectedPage()) {
          this.selectedPage(newVal.value);
        }
      } else {
        this.isActive(false);
      }
    });
    editor.onPropertyValueChanging.add((sender, options) => {
      var obj = options.obj;
      if (
        options.propertyName == "name" &&
        SurveyHelper.getObjectType(obj) == ObjType.Page
      ) {
        var index = this.pages.indexOf(this.selectedPage());
        this.dirtyPageNameUpdate(index, options.value);
        this.selectedPage(this.pages()[index]);
      }
    });
    this.selectedPage.subscribe(newSel => {
      editor.surveyObjects.selectObject(<any>newSel);
    });

    Sortable.create(element.querySelector(".svd-pages"), {
      handle: ".svd-page-name",
      animation: 150,
      onEnd: evt => {
        var pages = this.pages();
        var element = pages[evt.oldIndex];
        pages.splice(evt.oldIndex, 1);
        pages.splice(evt.newIndex, 0, element);
        debugger;
        this.editor.movePage(evt.oldIndex, evt.newIndex);
        // this.dirtyPagesUpdate();
      }
    });
  }

  // TODO dirty method, why does .valueHasMutated(); method or native observable not work?
  dirtyPageNameUpdate(index, newName) {
    this.pages()[index]["name"] = newName;
    this.dirtyPagesUpdate();
  }
  dirtyPagesUpdate() {
    var data = this.pages().slice(0);
    this.pages([]);
    this.pages(data);
  }

  getPageClass = page => {
    return page === this.selectedPage() ? "svd_selected_page" : "";
  };
  getPageMenuClass = page => {
    return page !== this.selectedPage() || !this.isActive()
      ? "menu-disabled"
      : null;
  };
  getPageMenuIconClass = page => {
    return page === this.selectedPage() && this.isActive()
      ? "icon-gear-active"
      : "icon-gear";
  };
  selectPage = page => {
    this.selectedPage(page);
  };
  addPage() {
    var name = SurveyHelper.getNewPageName(this.survey.pages);
    var newPage = <Survey.Page>this.survey.addNewPage(name);
    this.pages.push(newPage);
    this.selectedPage(newPage);

    this.editor.addPageToUI(newPage);
    this.editor.setModified({ type: "PAGE_ADDED", newValue: newPage });
  }
  copyPage(page) {
    var editor = this.editor;
    var newPage = <Survey.Page>(<any>editor.copyElement(page));
    var index = editor.survey.pages.indexOf(page);
    if (index > -1) {
      editor.survey.pages.splice(index + 1, 0, newPage);
    } else {
      editor.survey.pages.push(newPage);
    }
    this.pages.push(newPage);
    this.selectedPage(newPage);

    editor.addPageToUI(newPage);
    editor.setModified({ type: "PAGE_ADDED", newValue: newPage });
  }
  deletePage() {
    var pages = this.pages;
    var index = -1;

    this.editor.deleteCurrentObject();

    index = pages.indexOf(this.selectedPage());
    if (index !== -1) pages.splice(index, 1);

    if (index === 0) {
      this.selectedPage(pages()[index]);
    } else {
      this.selectedPage(pages()[index - 1]);
    }
  }
  isLastPage() {
    return this.pages().length === 1;
  }
  moveLeft(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft -= 50;
  }
  moveRight(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft += 50;
  }
  moveToSelectedPage() {
    var pagesElement: any = this.element.querySelector(".svd-pages");
    var index = this.pages().indexOf(this.selectedPage());
    var pageElement = pagesElement.children[index];
    if (!pageElement) return;
    pagesElement.scrollTo(
      pageElement.offsetLeft - pagesElement.offsetWidth / 2,
      0
    );
  }
  onWheel(model, event) {
    var pagesElement = model.element.querySelector(".svd-pages");
    event = event || window.event;
    var delta = event.deltaY || event.detail || event.wheelDelta;
    pagesElement.scrollLeft -= delta;
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  }
  getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  showPageSettings(page) {
    this.editor.showQuestionEditor(page);
  }
}

ko.components.register("pages-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new PagesEditor(
        ko.unwrap(params.editor),
        ko.unwrap(params.survey),
        componentInfo.element
      );
    }
  },
  template: { element: "svd-page-selector-template" }
});
