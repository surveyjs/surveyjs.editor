export var surveyDesignerCss = {
  root: "sd-root-modern",
  container: "sd-container-modern",
  header: "sd-title sd-container-modern__title",
  body: "sd-body",
  bodyEmpty: "sd-body sd-body--empty",
  footer: "sd-footer sd-body__navigation sd-clearfix",
  title: "sd-title",
  description: "sd-description",
  logo: "sd-logo",
  logoImage: "sd-logo__image",
  headerText: "sd-header__text",
  navigationButton: "",
  completedPage: "sd-completedpage",
  navigation: {
    complete: "sd-btn sd-btn--action sd-navigation__complete-btn",
    prev: "sd-btn sd-navigation__prev-btn",
    next: "sd-btn sd-navigation__next-btn",
    start: "sd-btn sd-navigation__start-btn",
    preview: "sd-btn sd-navigation__preview-btn",
    edit: "sd-btn sd-navigation__edit-btn"
  },
  panel: {
    title: "sd-title sd-panel__title",
    titleExpandable: "sd-panel__title--expandable",
    titleOnExpand: "sd-panel__title--expanded",
    titleOnError: "sd-panel__title--error",
    description: "sd-description sd-panel__description",
    container: "sd-element-with-frame sd-panel sd-row__panel",
    content: "sd-panel__content",
    icon: "sd-panel__icon",
    iconExpanded: "sd-panel__icon--expanded",
    footer: "sd-panel__footer",
    requiredText: "sd-panel__required-text"
  },
  paneldynamic: {
    root: "sd-paneldynamic",
    navigation: "sd-paneldynamic__navigation",
    title: "sd-title sd-question__title",
    button: "sd-btn",
    buttonRemove: "sd-paneldynamic__remove-btn",
    buttonAdd: "sd-paneldynamic__add-btn",
    progressTop: "sv-paneldynamic__progress sv-paneldynamic__progress--top",
    progressBottom:
      "sv-paneldynamic__progress sv-paneldynamic__progress--bottom",
    buttonPrev: "sv-paneldynamic__prev-btn",
    buttonNext: "sv-paneldynamic__next-btn",
    progressContainer: "sv-paneldynamic__progress-container",
    progress: "sv-progress",
    progressBar: "sv-progress__bar",
    progressText: "sv-paneldynamic__progress-text",
    separator: "sd-paneldynamic__separator",
    panelWrapper: "sd-paneldynamic__panel-wrapper",
    panelWrapperInRow: "sd-paneldynamic__panel-wrapper--in-row"
  },
  progress: "sd-progress sd-body__progress",
  progressBar: "sd-progress__bar",
  progressText: "sd-progress__text",
  progressTextInBar: "sd-hidden",
  page: {
    root: "sd-page sd-body__page",
    title: "sd-title sd-page__title",
    description: "sd-description sd-page__description"
  },
  pageTitle: "sd-title sd-page__title",
  pageDescription: "sd-description sd-page__description",
  row: "sd-row sd-clearfix",
  rowMultiple: "sd-row--multiple",
  question: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question",
    flowRoot: "sd-element-with-frame sd-question sd-row__question sd-row__question--flow",
    asCell: "sd-table__cell",
    answered: "sd-question--answered",
    header: "sd-question__header",
    headerLeft: "sd-question__header--location--left",
    headerTop: "sd-question__header--location--top",
    headerBottom: "sd-question__header--location--bottom",
    content: "sd-question__content",
    contentLeft: "sd-question__content--left",
    titleLeftRoot: "",
    titleOnAnswer: "sd-question__title--answer",
    titleOnError: "sd-question__title--error",
    title: "sd-title sd-question__title",
    requiredText: "sd-question__required-text",
    number: "sd-question__num",
    description: "sd-description sd-question__description",
    descriptionUnderInput: "sd-description sd-question__description",
    comment: "sd-input sd-comment",
    other: "sd-input sd-comment",
    required: "sd-question--required",
    titleRequired: "sd-question__title--required",
    indent: 20,
    footer: "sd-question__footer",
    formGroup: "sd-question__form-group",
    hasError: "",
    disabled: "sd-question--disabled"
  },
  image: { root: "sd-image", image: "sv_image_image" },
  error: {
    root: "sd-question__erbox",
    icon: "",
    item: "",
    locationTop: "sd-question__erbox--location--top",
    locationBottom: "sd-question__erbox--location--bottom"
  },
  checkbox: {
    root: "sd-selectbase",
    item: "sd-item sd-checkbox sd-selectbase__item",
    itemSelectAll: "sd-checkbox--selectall",
    itemNone: "sd-checkbox--none",
    itemDisabled: "sd-item--disabled sd-checkbox--disabled",
    itemChecked: "sd-item--checked sd-checkbox--checked",
    itemHover: "sd-item--allowhover sd-checkbox--allowhover",
    itemInline: "sd-selectbase__item--inline",
    label: "sd-selectbase__label",
    labelChecked: "",
    itemControl: "sd-visuallyhidden sd-item__control sd-checkbox__control",
    itemDecorator: "sd-item__svg sd-checkbox__svg",
    controlLabel: "sd-item__control-label",
    materialDecorator: "sd-item__decorator sd-checkbox__decorator",
    other: "sd-input sd-comment sd-selectbase__other",
    column: "sd-selectbase__column"
  },
  radiogroup: {
    root: "sd-selectbase",
    item: "sd-item sd-radio sd-selectbase__item",
    itemInline: "sd-selectbase__item--inline",
    label: "sd-selectbase__label",
    labelChecked: "",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemChecked: "sd-item--checked sd-radio--checked",
    itemHover: "sd-item--allowhover sd-radio--allowhover",
    itemControl: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemDecorator: "sd-item__svg sd-radio__svg",
    controlLabel: "sd-item__control-label",
    materialDecorator: "sd-item__decorator sd-radio__decorator",
    other: "sd-input sd-comment sd-selectbase__other",
    clearButton: "sd-btn sd-selectbase__clear-btn",
    column: "sd-selectbase__column"
  },
  boolean: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question sd-question--boolean",
    root: "",
    item: "sd-boolean",
    control: "sd-boolean__control sd-visuallyhidden",
    itemChecked: "sd-boolean--checked",
    itemIndeterminate: "sd-boolean--indeterminate",
    itemDisabled: "sd-boolean--disabled",
    label: "sd-boolean__label",
    switch: "sd-boolean__switch",
    disabledLabel: "sd-checkbox__label--disabled",
    itemDecorator: "sd-checkbox__hidden",
    materialDecorator: "sd-checkbox__rectangle",
    sliderText: "",
    slider: "sd-boolean__thumb"
  },
  text: {
    root: "sd-input sd-text",
    small: "sd-row__question--small",
    controlDisabled: "sd-input--disabled",
    onError: "sd-input--error"
  },
  multipletext: {
    root: "sd-multipletext",
    item: "sd-multipletext__item",
    itemTitle: "sd-multipletext__item-title",
    row: "sd-multipletext__row",
    cell: "sd-multipletext__cell"
  },
  dropdown: {
    root: "sd-selectbase",
    small: "sd-row__question--small",
    control: "sd-input sd-dropdown",
    selectWrapper: "",
    other: "sd-input sd-comment",
    onError: "sd-input--error",
    label: "sd-selectbase__label",
    item: "sd-item sd-radio sd-selectbase__item",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemChecked: "sd-item--checked sd-radio--checked",
    itemHover: "sd-item--allowhover sd-radio--allowhover",
    itemControl: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemDecorator: "sd-item__svg sd-radio__svg",
    controlDisabled: "sd-input--disabled",
    controlLabel: "sd-item__control-label",
    materialDecorator: "sd-item__decorator sd-radio__decorator"
  },
  imagepicker: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question sd-scrollable",
    root: "sd-imagepicker",
    item: "sd-imagepicker__item",
    itemInline: "sd-imagepicker__item--inline",
    itemChecked: "sd-imagepicker__item--checked",
    itemDisabled: "sd-imagepicker__item--disabled",
    itemHover: "sd-imagepicker__item--allowhover",
    label: "sd-imagepicker__label",
    itemControl: "sd-imagepicker__control",
    image: "sd-imagepicker__image",
    itemText: "sd-imagepicker__text",
    clearButton: "sd-btn",
    other: "sd-input sd-comment"
  },
  matrix: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question sd-scrollable",
    tableWrapper: "sd-matrix",
    root: "sd-table",
    rowError: "sd-matrix__row--error",
    cell: "sd-table__cell sd-matrix__cell",
    headerCell: "sd-table__cell sd-table__cell--header",
    label: "sd-item sd-radio sd-matrix__label",
    itemValue: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemChecked: "sd-radio--checked",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemHover: "sd-radio--allowhover",
    materialDecorator: "sd-item__decorator sd-radio__decorator",
    itemDecorator: "sd-item__svg sd-radio__svg",
    cellText: "sd-matrix__text",
    cellTextSelected: "sd-matrix__text--checked",
    cellTextDisabled: "sd-matrix__text--disabled"
  },
  matrixdropdown: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question sd-scrollable",
    root: "sd-table",
    cell: "sd-table__cell",
    headerCell: "sd-table__cell sd-table__cell--header"
  },
  matrixdynamic: {
    mainRoot: "sd-element-with-frame sd-question sd-row__question sd-scrollable",
    root: "sd-table sd-matrixdynamic",
    cell: "sd-table__cell",
    headerCell: "sd-table__cell sd-table__cell--header",
    button: "sd-btn",
    detailRow: "sd-table__row sd-table__row--detail",
    detailButton: "sd-table__cell--detail-button",
    detailButtonExpanded: "sd-table__cell--detail-button--expanded",
    detailIcon: "sd-detail-panel__icon",
    detailIconExpanded: "sd-detail-panel__icon--expanded",
    detailPanelCell: "sd-table__cell--detail-panel",
    actionsCell: "sd-table__cell sd-table__cell--actions",
    buttonAdd: "sd-matrixdynamic__add-btn",
    buttonRemove: "sd-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: ""
  },
  rating: {
    root: "sd-rating",
    item: "sd-rating__item",
    itemHover: "sd-rating__item--allowhover",
    selected: "sd-rating__item--selected",
    minText: "sd-rating__item-text sd-rating__min-text",
    itemText: "sd-rating__item-text",
    maxText: "sd-rating__item-text sd-rating__max-text",
    itemDisabled: "sd-rating__item--disabled"
  },
  comment: {
    root: "sd-input sd-comment",
    small: "sd-row__question--small",
    controlDisabled: "sd-input--disabled",
  },
  expression: "",
  file: {
    root: "sd-file",
    other: "sd-input sd-comment",
    placeholderInput: "sd-visuallyhidden",
    preview: "sd-file__preview",
    fileSign: "sd-hidden",
    fileList: "sd-file__list",
    fileSignBottom: "sd-file__sign",
    fileDecorator: "sd-file__decorator",
    fileDecoratorDrag: "sd-file__decorator--drag",
    fileInput: "sd-visuallyhidden",
    noFileChosen: "sd-description sd-file__no-file-chosen",
    chooseFile: "sd-file__btn sd-file__choose-btn",
    disabled: "sd-file__choose-btn--disabled",
    removeButton: "sd-hidden",
    removeButtonBottom: "sd-file__btn sd-file__clean-btn",
    removeFile: "sd-hidden",
    removeFileSvg: "sd-hidden",
    wrapper: "sd-file__wrapper",
    defaultImage: "sd-file__default-image",
    removeFileButton: "sd-file__remove-file-button",
    dragAreaPlaceholder: "sd-file__drag-area-placeholder"
  },
  signaturepad: {
    root: "sd-signaturepad sjs_sp_container",
    small: "sd-row__question--small",
    controls: "sjs_sp_controls",
    placeholder: "sjs_sp_placeholder",
    clearButton: "sjs_sp_clear"
  },
  saveData: {
    root: "",
    saving: "",
    error: "",
    success: "",
    saveAgainButton: ""
  },
  window: {
    root: "sv_window",
    body: "sv_window_content",
    header: {
      root: "sv_window_title",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: ""
    }
  }
};
