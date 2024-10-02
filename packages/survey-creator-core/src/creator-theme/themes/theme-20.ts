import { CreatorThemes } from "../creator-themes";

const Theme = {
  themeName: "20",
  colorPalette: "base",
  "cssVariables": {
    "--ctr-toolbox-border-width-right": "0px",
    "--ctr-list-item-corner-radius": "0px",
    "--ctr-button-group-item-corner-radius": "0px",
    "--ctr-button-group-gap": "-1px",
    "--ctr-editor-corner-radius": "0px",
    "--ctr-editor-button-corner-radius": "0px",
    "--ctr-checkbox-corner-radius": "0px",
    "--ctr-list-padding-left": "0px",
    "--ctr-list-padding-right": "0px",
    "--ctr-popup-menu-padding-left": "0px",
    "--ctr-popup-menu-padding-right": "0px",
    "--ctr-popup-menu-padding-top": "0px",
    "--ctr-popup-menu-padding-bottom": "0px",
    "--ctr-popup-menu-footer-padding-left": "0px",
    "--ctr-button-group-corner-radius": "0px",
    "--ctr-button-group-padding": "0px",
    "--ctr-button-group-border-width": "0px",
    "--ctr-shadow-medium-blur": "6px",
    "--ctr-shadow-medium-offset-y": "2px",
    "--ctr-shadow-large-blur": "16px",
    "--ctr-shadow-large-offset-y": "8px",
    "--ctr-shadow-large-offset-x": "0px",
    "--ctr-shadow-large-spread": "0px",
    "--ctr-shadow-medium-offset-x": "0px",
    "--ctr-shadow-medium-spread": "0px",
    "--ctr-list-search-icon-opacity": "100px",
    "--ctr-label-opacity-disabled": "25px",
    "--ctr-caption-with-actions-text-opacity-disabled": "25px",
    "--ctr-radio-button-text-opacity-disabled": "25px",
    "--ctr-checkbox-text-opacity-disabled": "25px",
    "--ctr-shadow-small-offset-x": "0px",
    "--ctr-shadow-small-offset-y": "1px",
    "--ctr-shadow-small-blur": "2px",
    "--ctr-shadow-small-spread": "0px",
    "--ctr-shadow-x-large-offset-x": "0px",
    "--ctr-shadow-x-large-offset-y": "0px",
    "--ctr-shadow-x-large-blur": "0px",
    "--ctr-shadow-x-large-spread": "0px",
    "--ctr-property-grid-placeholder-text-max-width": "320px",
    "--ctr-surface-placeholder-padding-top": "0px",
    "--ctr-property-grid-placeholder-padding-bottom": "0px",
    "--ctr-popup-menu-footer-padding-right": "0px",
    "--ctr-editor-content-text-opacity-disabled": "25px",
    "--ctr-editor-label-opacity-disabled": "25px",
    "--ctr-editor-button-icon-opacity-disabled": "25px",
    "--ctr-editor-button-icon-opacity-pressed": "50px",
    "--ctr-checkbox-description-text-opacity-disabled": "25px",
    "--ctr-actionbar-button-opacity-pressed": "50px",
    "--ctr-actionbar-button-opacity-disabled": "25px",
    "--ctr-actionbar-button-opacity-muted": "50px",
    "--ctr-list-item-opacity-disabled": "25px",
    "--ctr-list-item-contextual-buttons-opacity-pressed": "50px",
    "--ctr-list-item-contextual-buttons-opacity-default": "50px",
    "--ctr-editor-color-swatch-opacity-hovered": "50px",
    "--ctr-editor-color-swatch-opacity-disabled": "25px",
    "--ctr-menu-item-opacity-disabled": "25px",
    "--ctr-menu-toolbar-button-opacity-disabled": "25px",
    "--ctr-menu-toolbar-button-opacity-pressed": "50px",
    "--ctr-toolbox-item-text-opacity-pressed": "50px",
    "--ctr-toolbox-item-icon-opacity-pressed": "35px",
    "--ctr-toolbox-item-opacity-submenu": "85px",
    "--ctr-toolbox-item-text-opacity-disabled": "25px",
    "--ctr-toolbox-button-opacity-pressed": "50px",
    "--ctr-page-navigator-button-opacity-pressed": "50px",
    "--ctr-button-text-opacity-disabled": "25px",
    "--ctr-property-grid-switcher-toggle-button-border-width-checked": "0px",
    "--ctr-property-grid-chapter-caption-text-opacity-disabled": "25px",
    "--ctr-notification-opacity": "75px",
    "--ctr-notification-opacity-error": "100px",
    "--ctr-string-table-row-border-width-top": "0px",
    "--ctr-string-table-row-border-width-left": "0px",
    "--ctr-string-table-row-border-width-right": "0px",
    "--ctr-toolbox-group-header-border-width-top": "0px",
    "--ctr-toolbox-group-header-border-width-left": "0px",
    "--ctr-toolbox-group-header-border-width-right": "0px",
    "--ctr-text-decor-padding-top": "0px",
    "--ctr-text-decor-padding-bottom": "0px",
    "--ctr-caption-with-actions-description-text-opacity-disabled": "25px",
    "--ctr-data-table-cell-drop-down-arrow-opacity": "50px",
    "--ctr-data-table-cell-padding-top-header": "0px",
    "--ctr-data-table-cell-padding-bottom-header": "0px",
    "--ctr-data-table-cell-opacity-disabled": "25px",
    "--ctr-data-table-row-padding-left": "0px",
    "--ctr-data-table-row-drag-area-icon-opacity": "50px",
    "--ctr-data-table-row-border-width-last-row": "0px",
    "--ctr-toolbox-padding-left": "0px",
    "--ctr-toolbox-padding-right": "0px",
    "--ctr-toolbox-group-padding-top": "0px",
    "--ctr-toolbox-group-padding-bottom": "0px",
    "--ctr-button-contextual-button-opacity-disabled": "25px",
    "--ctr-button-contextual-button-opacity-pressed": "50px",
    "--lbr-contextual-button-icon-opacity-disabled": "25px",
    "--ctr-survey-question-panel-toolbar-item-opacity-pressed": "50px",
    "--ctr-survey-question-panel-toolbar-item-opacity-disabled": "25px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-left-large": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-right-large": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-top-large": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-bottom-large": "0px",
    "--ctr-survey-question-panel-toolbar-item-opacity-muted": "50px",
    "--ctr-survey-question-panel-toolbar-item-padding-left-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-padding-right-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-padding-top-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-padding-bottom-small": "0px",
    "--ctr-survey-question-panel-drag-area-drag-indicator-opacity": "50px",
    "--ctr-survey-question-panel-drag-area-padding-left-mobile": "0px",
    "--ctr-survey-question-panel-drag-area-padding-right-mobile": "0px",
    "--ctr-survey-question-panel-drag-area-padding-top-with-buttons-mobile": "0px",
    "--ctr-survey-question-panel-drag-area-padding-bottom-with-buttons-mobile": "0px",
    "--ctr-preview-pager-padding-right": "0px",
    "--ctr-preview-pager-padding-left": "0px",
    "--ctr-code-viewer-code-error-row-fix-button-padding-top": "0px",
    "--ctr-code-viewer-code-error-row-fix-button-padding-bottom": "0px",
    "--ctr-code-viewer-padding-left-fullscreen": "0px",
    "--ctr-code-viewer-padding-right-fullscreen": "0px",
    "--ctr-code-viewer-padding-top-fullscreen": "0px",
    "--ctr-code-viewer-padding-bottom-fullscreen": "0px",
    "--ctr-code-viewer-corner-radius-fullscreen": "0px",
    "--ctr-label-padding-left": "0px",
    "--ctr-label-padding-right": "0px",
    "--ctr-editor-limit-label-padding-right-with-button": "0px",
    "--ctr-property-grid-search-corner-radius": "0px",
    "--ctr-search-button-opacity-disabled": "25px",
    "--ctr-survey-action-button-opacity-disabled": "25px",
    "--ctr-survey-contextual-button-icon-opacity-disabled": "25px",
    "--lbr-action-button-opacity-disabled": "25px",
    "--lbr-tag-box-item-remove-button-opacity-pressed": "50px",
    "--lbr-popup-menu-search-corner-radius": "0px",
    "--lbr-popup-menu-search-clear-button-opacity-disabled": "25px",
    "--lbr-notification-opacity": "75px",
    "--lbr-notification-opacity-error": "100px",
    "--ctr-survey-placeholder-loading-circle-opacity": "10px",
    "--ctr-survey-image-picker-item-loading-circle-opacity": "10px",
    "--ctr-data-table-row-corner-radius-floating": "0px",
    "--ctr-survey-item-actionbar-drag-indicator-opacity": "50px",
    "--ctr-survey-item-actionbar-drag-indicator-padding-left-mobile": "0px",
    "--ctr-survey-item-actionbar-drag-indicator-padding-right-mobile": "0px",
    "--ctr-page-navigator-item-opacity-step-1": "75px",
    "--ctr-page-navigator-item-opacity-step-2": "50px",
    "--ctr-page-navigator-item-opacity-step-3": "25px",
    "--ctr-toolbox-search-corner-radius": "0px",
    "--ctr-toolbox-padding-top-with-search": "0px",
    "--ctr-toolbox-group-header-margin-top": "0px",
    "--ctr-toolbox-group-header-margin-bottom": "0px",
    "--lbr-shadow-x-large-offset-x": "0px",
    "--lbr-shadow-x-large-offset-y": "0px",
    "--lbr-shadow-x-large-blur": "0px",
    "--lbr-shadow-x-large-spread": "0px",
    "--lbr-shadow-large-offset-x": "0px",
    "--lbr-shadow-large-offset-y": "8px",
    "--lbr-shadow-large-blur": "16px",
    "--lbr-shadow-large-spread": "0px",
    "--lbr-shadow-medium-offset-x": "0px",
    "--lbr-shadow-medium-offset-y": "2px",
    "--lbr-shadow-medium-blur": "6px",
    "--lbr-shadow-medium-spread": "0px",
    "--lbr-shadow-small-offset-x": "0px",
    "--lbr-shadow-small-offset-y": "1px",
    "--lbr-shadow-small-blur": "2px",
    "--lbr-shadow-small-spread": "0px",
    "--lbr-checkboxes-item-text-opacity-disabled": "25px",
    "--ctr-survey-checkboxes-item-button-opacity-inactive": "35px",
    "--lbr-checkboxes-item-button-check-mark-opacity-disabled": "25px",
    "--ctr-survey-radio-button-group-item-button-opacity-inactive": "35px",
    "--lbr-radio-buttons-item-button-dot-opacity-disabled": "25px",
    "--lbr-radio-buttons-item-text-opacity-disabled": "25px",
    "--lbr-editor-text-opacity-disabled": "25px",
    "--lbr-editor-padding-left-preview": "0px",
    "--lbr-editor-padding-right-preview": "0px",
    "--lbr-editor-corner-radius-preview": "0px",
    "--lbr-labeled-editor-label-opacity-disabled": "25px",
    "--lbr-editor-button-icon-opacity-pressed": "50px",
    "--lbr-editor-button-icon-opacity-disabled": "25px",
    "--lbr-rating-item-text-opacity-disabled": "25px",
    "--lbr-rating-label-opacity-disabled": "25px",
    "--lbr-rating-smiley-opacity-disabled-selected": "15px",
    "--lbr-rating-smiley-red-opacity": "25px",
    "--lbr-rating-smiley-red-opacity-hovered": "50px",
    "--lbr-rating-smiley-yellow-opacity": "25px",
    "--lbr-rating-smiley-yellow-opacity-hovered": "50px",
    "--lbr-rating-smiley-green-opacity": "25px",
    "--lbr-rating-smiley-green-opacity-hovered": "50px",
    "--lbr-ranking-item-number-text-opacity-disabled": "25px",
    "--lbr-ranking-item-number-icon-opacity-disabled": "25px",
    "--lbr-ranking-item-text-opacity-disabled": "25px",
    "--ctr-survey-ranking-item-padding-left-floating-mobile": "0px",
    "--lbr-ranking-indicators-padding-left": "0px",
    "--lbr-ranking-indicators-padding-right": "0px",
    "--lbr-ranking-indicators-drag-indicator-icon-opacity-mobile": "25px",
    "--lbr-ranking-indicators-sort-indicator-padding-left-mobile": "0px",
    "--lbr-ranking-indicators-sort-indicator-padding-right-mobile": "0px",
    "--ctr-survey-item-actionbar-padding-left": "0px",
    "--lbr-boolean-thumb-text-opacity-disabled": "25px",
    "--lbr-image-picker-item-opacity-disabled": "25px",
    "--lbr-image-picker-item-opacity-preview": "25px",
    "--lbr-image-picker-item-opacity-hovered": "50px",
    "--lbr-image-picker-item-opacity-error": "75px",
    "--lbr-file-upload-item-loading-circle-opacity": "10px",
    "--lbr-signature-loading-circle-opacity": "10px",
    "--lbr-placeholder-loading-circle-opacity": "10px",
    "--lbr-file-upload-image-opacity-disabled": "25px",
    "--lbr-list-item-text-opacity-disabled": "25px",
    "--lbr-page-layout-gap-none": "0px",
    "--lbr-button-text-opacity-disabled": "25px",
    "--lbr-window-header-button-opacity-pressed": "50px",
    "--lbr-matrix-title-cell-text-opacity-disabled": "25px",
    "--ctr-survey-header-logo-loading-circle-opacity": "10px",
    "--lbr-cover-padding-bottom-no-background": "0px",
    "--lbr-tag-box-item-opacity-disabled": "25px",
    "--lbr-popup-menu-footer-padding-left": "0px",
    "--lbr-popup-menu-footer-padding-right": "0px",
    "--lbr-matrix-details-padding-right": "0px",
    "--lbr-dynamic-panel-tabs-item-padding-left": "0px",
    "--lbr-dynamic-panel-tabs-item-padding-right": "0px",
    "--lbr-dynamic-panel-tabs-item-opacity-disabled": "25px",
    "--lbr-dynamic-panel-tabs-button-icon-opacity-pressed": "50px",
    "--lbr-step-progress-bar-connector-opacity": "50px",
    "--lbr-step-progress-bar-step-dot-background-opacity": "50px",
    "--lbr-step-progress-bar-step-dot-margin-top": "0px",
    "--lbr-step-progress-bar-step-dot-margin-bottom": "0px",
    "--lbr-step-progress-bar-margin-top-position-bottom": "0px",
    "--lbr-page-padding-left": "0px",
    "--lbr-page-padding-right": "0px",
    "--ctr-survey-question-panel-opacity-hidden": "25px",
    "--lbr-question-panel-corner-radius-nested": "0px",
    "--lbr-progress-bar-section-title-opacity-pressed": "50px",
    "--lbr-dynamic-panel-item-header-title-opacity-disabled": "25px",
    "--lbr-placeholder-text-opacity-disabled": "25px",
    "--lbr-placeholder-padding-bottom-with-button": "0px",
    "--lbr-signature-signature-opacity-disabled": "25px",
    "--ctr-editor-color-swatch-icon-color": "#FFFFFFFF",
    "--ctr-editor-color-swatch-icon-color-stroke": "#00000040",
    "--lbr-pager-text-opacity-disabled": "25px",
    "--misc-component-container-padding": "64px",
    "--misc-component-container-gap": "64px",
    "--misc-component-title-padding-left": "12px",
    "--misc-component-title-padding-right": "12px",
    "--misc-component-title-padding-top": "7px",
    "--misc-component-title-padding-bottom": "8px",
    "--misc-component-title-corner-radius": "4px",
    "--misc-component-container-corner-radius": "16px",
    "--misc-component-title-margin-top": "64px",
    "--misc-component-title-margin-bottom": "16px",
    "--misc-component-container-padding-top-with-title": "0px",
    "--lbr-dynamic-panel-details-area-padding-bottom": "0px",
    "--lbr-question-panel-header-title-opacity-disabled": "25px",
    "--lbr-question-panel-header-description-opacity-disabled": "25px",
    "--lbr-question-panel-header-gap-mobile": "0px",
    "--lbr-panel-header-padding-left-expandable": "0px",
    "--lbr-dynamic-panel-tabs-padding-left-nested": "0px",
    "--lbr-dynamic-panel-tabs-padding-right-nested": "0px",
    "--lbr-page-padding-bottom-no-buttons": "0px",
    "--ctr-survey-page-margin-bottom": "0px",
    "--ctr-survey-page-margin-left-mobile": "0px",
    "--ctr-survey-page-margin-right-mobile": "0px",
    "--ctr-survey-page-margin-top-mobile": "0px",
    "--lbr-dynamic-panel-content-margin-top-placeholder": "0px",
    "--lbr-question-panel-padding-top-error": "0px",
    "--lbr-question-panel-padding-bottom-error": "0px",
    "--ctr-survey-question-panel-padding-top-selected": "0px",
    "--ctr-survey-page-header-padding-new-page": "0px",
    "--lbr-panel-layout-item-min-width": "0px",
    "--ctr-button-group-item-text-opacity-disabled": "25px",
    "--ctr-button-group-item-icon-opacity-disabled": "25px",
    "--lbr-matrix-margin-left-expandable": "0px",
    "--lbr-matrix-margin-left-no-row-title": "0px",
    "--lbr-matrix-gap-single-select": "0px",
    "--lbr-drop-down-buttons-margin": "0px",
    "--lbr-drop-down-padding-left-preview": "0px",
    "--lbr-drop-down-padding-right-preview": "0px",
    "--lbr-tag-box-item-padding-left-preview": "0px",
    "--ctr-survey-header-logo-placeholder-icon-opacity": "50px",
    "--ctr-survey-image-no-image-icon-opacity": "50px",
    "--ctr-list-search-corner-radius": "0px",
    "--ctr-property-grid-search-icon-opacity": "100px",
    "--ctr-toolbox-search-icon-opacity": "100px",
    "--ctr-preview-device-width": "400px",
    "--ctr-toolbox-submenu-group-margin-left": "0px",
    "--lbr-shadow-inner-offset-x": "0px",
    "--lbr-shadow-inner-offset-y": "1px",
    "--lbr-shadow-inner-blur": "2px",
    "--lbr-shadow-inner-spread": "0px",
    "--lbr-progress-bar-pager-label-opacity-floating": "75px",
    "--ctr-survey-question-panel-floating-toolbar-opacity-no-focus": "25px",
    "--lbr-page-loading-background-opacity": "75px",
    "--lbr-page-loading-loading-icon-circle-opacity": "10px",
    "--lbr-ghost-button-opacity": "25px",
    "--ctr-toolbox-item-icon-opacity-disabled": "15px",
    "--ctr-list-item-icon-opacity-label": "50px",
    "--ctr-toolbox-item-margin-horizontal-no-text": "0px",
    "--ctr-toolbox-submenu-group-margin-right": "0px",
    "--ctr-toolbox-submenu-group-margin-top": "0px",
    "--ctr-toolbox-submenu-group-margin-bottom-last": "0px",
    "--ctr-toolbox-submenu-group-border-width-bottom": "0px",
    "--ctr-toolbox-submenu-background-color": "#00000000",
    "--ctr-toolbox-submenu-corner-radius": "0px",
    "--ctr-toolbox-submenu-shadow-1-color": "#00000000",
    "--ctr-toolbox-submenu-shadow-2-color": "#00000000",
    "--ctr-toolbox-submenu-margin-top": "0px",
    "--ctr-data-table-corner-radius": "0px",
    "--ctr-data-table-placeholder-corner-radius": "0px",
    "--ctr-list-item-label-icon-opacity-label": "50px",
    "--ctr-survey-page-drag-indicator-opacity": "50px",
    "--lbr-footer-padding-left-transparent": "0px",
    "--lbr-footer-padding-right-transparent": "0px",
    "--lbr-app-header-menu-item-opacity-disabled": "25px",
    "--ctr-toggle-button-thumb-border-width": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-left-x-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-right-x-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-top-x-small": "0px",
    "--ctr-survey-question-panel-toolbar-item-icon-padding-bottom-x-small": "0px",
    "--lbr-tooltip-shadow-2-offset-x": "0px",
    "--lbr-tooltip-shadow-2-offset-y": "1px",
    "--lbr-tooltip-shadow-2-blur": "2px",
    "--lbr-tooltip-shadow-2-spread": "0px",
    "--lbr-slider-label-opacity-disabled": "25px",
    "--lbr-slider-thumb-dot-opacity-disabled": "100px",
  }
};

export default Theme;
export const Theme20 = Theme;

CreatorThemes[Theme.themeName] = Theme;