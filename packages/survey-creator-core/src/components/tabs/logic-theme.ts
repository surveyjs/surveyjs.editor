import { defaultActionBarCss } from "survey-core";

export var logicCss = {
  root: "",
  container: "",
  header: "",
  body: "sl-body",
  bodyEmpty: "",
  footer: "",
  title: "",
  description: "",
  logo: "",
  logoImage: "",
  headerText: "",
  navigationButton: "",
  completedPage: "",
  navigation: {
    complete: "",
    prev: "",
    next: "",
    start: "",
    preview: "",
    edit: ""
  },
  panel: {
    title: "",
    titleExpandable: "",
    titleOnExpand: "",
    titleOnError: "",
    description: "",
    container: "sl-panel",
    content: "",
    icon: "",
    iconExpanded: "",
    footer: "sl-panel__footer",
    requiredText: "sl-panel__required-text"
  },
  paneldynamic: {
    mainRoot: "",
    root: "",
    navigation: "",
    title: "",
    button: "",
    buttonRemove: "",
    buttonAdd: "svc-logic-operator sl-paneldynamic__add-btn",
    progressTop: "",
    progressBottom: "",
    buttonPrev: "",
    buttonNext: "",
    progressContainer: "",
    progress: "",
    progressBar: "",
    progressText: "",
    separator: "sv-hidden",
    panelWrapper: "",
    panelWrapperInRow: "sl-panel-wrapper--in-row"
  },
  progress: "",
  progressBar: "",
  progressText: "",
  progressTextInBar: "",
  page: {
    root: "",
    title: "",
    description: ""
  },
  pageTitle: "",
  pageDescription: "",
  row: "sl-row",
  rowMultiple: "sl-row--multiple",
  question: {
    mainRoot: "sl-question",
    flowRoot: "",
    asCell: "",
    header: "sl-question__header",
    headerLeft: "sl-question__header--left",
    headerTop: "",
    headerBottom: "",
    content: "",
    contentLeft: "",
    titleLeftRoot: "",
    titleOnAnswer: "",
    titleOnError: "",
    title: "sl-question__title",
    requiredText: "sl-question__required-text",
    number: "",
    description: "",
    descriptionUnderInput: "",
    comment: "",
    required: "",
    titleRequired: "",
    indent: 0,
    footer: "",
    formGroup: "",
    hasError: "",
    disabled: ""
  },
  image: { root: "" },
  error: {
    root: "",
    icon: "",
    item: "",
    locationTop: "",
    locationBottom: ""
  },
  checkbox: {
    root: "",
    item: "",
    itemSelectAll: "",
    itemNone: "",
    itemDisabled: "",
    itemChecked: "",
    itemHover: "",
    itemInline: "",
    label: "",
    labelChecked: "",
    itemControl: "",
    itemDecorator: "",
    controlLabel: "",
    materialDecorator: "",
    other: "",
    column: ""
  },
  radiogroup: {
    root: "",
    item: "",
    itemInline: "",
    label: "",
    labelChecked: "",
    itemDisabled: "",
    itemChecked: "",
    itemHover: "",
    itemControl: "",
    itemDecorator: "",
    controlLabel: "",
    materialDecorator: "",
    other: "",
    clearButton: "",
    column: ""
  },
  boolean: {
    mainRoot: "",
    root: "",
    item: "",
    control: "",
    itemChecked: "",
    itemIndeterminate: "",
    itemDisabled: "",
    label: "",
    switch: "",
    disabledLabel: "",
    itemDecorator: "",
    materialDecorator: "",
    sliderText: "",
    slider: ""
  },
  text: {
    root: "",
    small: "",
    controlDisabled: "",
    onError: ""
  },
  multipletext: {
    root: "",
    item: "",
    itemTitle: "",
    row: "",
    cell: ""
  },
  dropdown: {
    root: "",
    popup: "",
    small: "",
    control: "sl-dropdown",
    selectWrapper: "",
    other: "",
    onError: "",
    label: "",
    item: "",
    itemDisabled: "",
    itemChecked: "",
    itemHover: "",
    itemControl: "",
    itemDecorator: "",
    controlDisabled: "",
    controlLabel: "",
    materialDecorator: "",
    controlValue: "sl-dropdown__value",
  },
  imagepicker: {
    root: "",
    item: "",
    itemInline: "",
    itemChecked: "",
    itemDisabled: "",
    itemHover: "",
    label: "",
    itemControl: "",
    image: "",
    itemText: "",
    clearButton: "",
    other: ""
  },
  matrix: {
    mainRoot: "",
    tableWrapper: "",
    root: "",
    row: "",
    rowAdditional: "",
    rowError: "",
    cell: "",
    headerCell: "",
    label: "",
    itemValue: "",
    itemChecked: "",
    itemDisabled: "",
    itemHover: "",
    materialDecorator: "",
    itemDecorator: "",
    cellText: "",
    cellTextSelected: "",
    cellTextDisabled: ""
  },
  matrixdropdown: {
    tableWrapper: "",
    mainRoot: "",
    root: "",
    row: "",
    rowAdditional: "",
    cell: "",
    headerCell: ""
  },
  matrixdynamic: {
    tableWrapper: "",
    mainRoot: "sl-question st-row__question st-scrollable",
    root: "sl-table st-matrixdynamic",
    row: "sl-table__row",
    rowAdditional: "sl-table__row--additional",
    cell: "sl-table__cell",
    headerCell: "sl-table__cell st-table__cell--header",
    button: "sl-btn",
    detailRow: "sl-table__row st-table__row--detail",
    detailButton: "sl-table__cell--detail-button",
    detailButtonExpanded: "sl-table__cell--detail-button--expanded",
    detailIcon: "sl-detail-panel__icon",
    detailIconExpanded: "sl-detail-panel__icon--expanded",
    detailPanelCell: "sl-table__cell--detail-panel",
    actionsCell: "sl-table__cell sl-table__cell--actions st-table__cell--actions",
    buttonAdd: "sl-matrixdynamic__add-btn",
    buttonRemove: "sl-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: ""
  },
  rating: {
    root: "",
    item: "",
    itemHover: "",
    selected: "",
    minText: "",
    itemText: "",
    maxText: "",
    itemDisabled: ""
  },
  comment: {
    mainRoot: "",
    root: "spg-input spg-comment sl-comment",
    small: ""
  },
  expression: "",
  file: {
    root: "",
    other: "",
    placeholderInput: "",
    preview: "",
    fileSign: "",
    fileSignBottom: "",
    fileDecorator: "",
    fileInput: "",
    noFileChosen: "",
    chooseFile: "",
    disabled: "",
    removeButton: "",
    removeButtonBottom: "",
    removeFile: "",
    removeFileSvg: "",
    wrapper: ""
  },
  signaturepad: {
    root: "",
    small: "",
    controls: "",
    placeholder: "",
    clearButton: ""
  },
  saveData: {
    root: "",
    saving: "",
    error: "",
    success: "",
    saveAgainButton: ""
  },
  window: {
    root: "",
    body: "",
    header: {
      root: "",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: ""
    }
  },
  embeddedsurvey: {
    mainRoot: "sl-embedded-survey"
  },
  actionBar: defaultActionBarCss
};