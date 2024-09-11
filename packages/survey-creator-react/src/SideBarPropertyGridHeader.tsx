import * as React from "react";
import { Base, getActionDropdownButtonTarget } from "survey-core";
import { SurveyElementBase, ReactElementFactory, Popup } from "survey-react-ui";
import { MenuButton } from "survey-creator-core";

interface ISideBarPropertyGridHeaderProps {
  model: MenuButton;
}

class SideBarPropertyGridHeader extends SurveyElementBase<ISideBarPropertyGridHeaderProps, any> {
  get objectSelectionAction(): MenuButton {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.objectSelectionAction;
  }

  renderElement(): JSX.Element {
    return (
      <div className="svc-sidebar__header svc-sidebar__header--tabbed">
        <div className="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle">
          <div className="svc-sidebar__header-content" onClick={() => this.objectSelectionAction.action()}>
            <div className={this.objectSelectionAction.buttonClassName}>
              <div className="svc-sidebar__header-caption">
                <span className="svc-sidebar__header-title">{this.objectSelectionAction.title}</span>
                <span className="svc-sidebar__header-subtitle">{this.objectSelectionAction.tooltip}</span>
              </div>
            </div>
            <Popup model={this.objectSelectionAction.popupModel} getTarget={getActionDropdownButtonTarget}></Popup>
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-header", (props) => {
  return React.createElement(SideBarPropertyGridHeader, props);
});