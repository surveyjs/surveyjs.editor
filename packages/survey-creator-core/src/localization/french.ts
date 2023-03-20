// This dictionary contains 399 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

var frenchTranslation = {
  // survey templates
  survey: {
    edit: "Éditer",
    // externalHelpLink: "Watch and learn how to create surveys",
    // externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Déposer votre question ici.",
    // addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "Copier",
    // duplicate: "Duplicate",
    addToToolbox: "Ajouter à la boîte à outils",
    deletePanel: "Supprimer le panneau",
    deleteQuestion: "Supprimer la question",
    convertTo: "Convertir en",
    // drag: "Drag element"
  },
  // Question types
  qt: {
    default: "Par défaut",
    checkbox: "Cases à cocher",
    comment: "Commentaire",
    imagepicker: "Choix d'image",
    // ranking: "Ranking",
    // image: "Image",
    dropdown: "Liste déroulante",
    // tagbox: "Tag Box",
    file: "Fichier",
    html: "HTML",
    matrix: "Matrice (choix unique)",
    matrixdropdown: "Matrice (choix multiples)",
    matrixdynamic: "Matrice (lignes dynamiques)",
    multipletext: "Champ multilignes",
    panel: "Panneau",
    paneldynamic: "Panneau (panneaux dynamiques)",
    radiogroup: "Boutons radio",
    rating: "Évaluation",
    text: "Champ texte",
    boolean: "Booléen",
    expression: "Expression",
    // signaturepad: "Signature Pad",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    // defaultLocale: "Default ({0})",
    survey: "Questionnaire",
    settings: "Configuration du questionnaire",
    // settingsTooltip: "Open settings",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    // showPanel: "Show Panel",
    // hidePanel: "Hide Panel",
    // prevSelected: "Select previous",
    // nextSelected: "Select next",
    // surveyTypeName: "Survey",
    // pageTypeName: "Page",
    // panelTypeName: "Panel",
    // questionTypeName: "Question",
    // columnTypeName: "Column",
    addNewPage: "Ajouter une page",
    moveRight: "Défiler à droite",
    moveLeft: "Défiler à gauche",
    deletePage: "Supprimer une page",
    editPage: "Éditer une page",
    edit: "Éditer",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panneau",
    newTextItemName: "texte",
    testSurvey: "Tester le questionnaire",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Tester à nouveau le questionnaire",
    testSurveyWidth: "Largeur du questionnaire : ",
    // navigateToMsg: "You had to navigate to",
    // logic: "Logic",
    embedSurvey: "Intégrer le questionnaire",
    translation: "Traduction",
    saveSurvey: "Sauvegarder le questionnaire",
    // saveSurveyTooltip: "Save Survey",
    designer: "Éditeur de questionnaire",
    jsonEditor: "Éditer JSON",
    // jsonHideErrors: "Hide errors",
    // jsonShowErrors: "Show errors",
    undo: "Annuler",
    redo: "Rétablir",
    // undoTooltip: "Undo last change",
    // redoTooltip: "Redo the change",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    // copy: "Copy",
    // cut: "Cut",
    // paste: "Paste",
    // copyTooltip: "Copy selection to clipboard",
    // cutTooltip: "Cut selection to clipboard",
    // pasteTooltip: "Paste from clipboard",
    options: "Options",
    generateValidJSON: "Générer un JSON valide",
    generateReadableJSON: "Générer un JSON lisible",
    toolbox: "Boîte à outils",
    "property-grid": "Propriétés",
    // propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "Général",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "SVP corrigez le JSON",
    surveyResults: "Résultat du questionnaire : ",
    surveyResultsTable: "Comme tableau",
    surveyResultsJson: "Comme JSON",
    resultsTitle: "Titre de la question",
    resultsName: "Nom de la question",
    resultsValue: "Valeur de la réponse",
    resultsDisplayValue: "Valeur affichée",
    modified: "Modifié",
    saving: "Sauvegarde en cours",
    saved: "Sauvegardé",
    // propertyEditorError: "Error",
    saveError: "Erreur! Le contenu de l'éditeur n'a pas été sauvegardé.",
    // translationPropertyGridTitle: "Language Settings",
    // translationLanguages: "Languages",
    translationAddLanguage: "Choisir langue à traduire",
    translationShowAllStrings: "Afficher tous les termes",
    // translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "Afficher toutes les pages",
    translationNoStrings: "Aucun terme à traduire. Veuillez modifier le filtre.",
    translationExportToSCVButton: "Exporter en CSV",
    translationImportFromSCVButton: "Importer d'un CSV",
    translationMergeLocaleWithDefault: "Fusionner {0} avec langue par défaut",
    // translationPlaceHolder: "Translation...",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligné",
    addNewQuestion: "Ajouter une Question",
    // selectPage: "Select page...",
    // htmlPlaceHolder: "HTML content will be here.",
    // panelPlaceHolder: "Drop a question from the toolbox here.",
    surveyPlaceHolder: "L' enquête est vide. Faites glisser un élément de la boîte à outils ou cliquez sur le bouton ci-dessous.",
    addNewTypeQuestion: "Ajouter {0}", //{0} is localizable question type
    // chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      // addNewItem: "Add New Rule",
      // empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Visibilité de la page",
      // page_enableName: "Enable (disable) page",
      panel_visibilityName: "Visibilité du panneau",
      panel_enableName: "Activer/désactiver le panneau",
      question_visibilityName: "Visibilité de la question",
      question_enableName: "Activer/désactiver la question",
      question_requireName: "Question facultative requise",
      // column_visibilityName: "Show (hide) column",
      // column_enableName: "Enable (disable) column",
      // column_requireName: "Make column required",
      trigger_completeName: "Compléter le questionnaire",
      trigger_setvalueName: "Définir la valeur de la question",
      trigger_copyvalueName: "Copier la valeur de la question",
      trigger_skipName: "Passer à la question",
      trigger_runExpressionName: "Exécuter une expression personnalisée",
      completedHtmlOnConditionName: "Personnaliser le texte de la page de remerciements",
      page_visibilityDescription: "Rendre la page visible lorsque l'expression logique renvoie 'vrai'. Sinon, la rendre invisible.",
      panel_visibilityDescription: "Rendre le panneau visible lorsque l'expression logique renvoie 'vrai'. Sinon, le rendre invisible.",
      panel_enableDescription: "Activez le panneau et tous les éléments qu'il contient lorsque l'expression logique renvoie 'vrai'. Sinon, le laisser désactivé.",
      question_visibilityDescription: "Rendez la question visible lorsque l'expression logique renvoie 'vrai'. Sinon, la rendre invisible.",
      question_enableDescription: "Activez la question lorsque l'expression logique renvoie 'vrai'. Sinon, la laisser désactivée.",
      question_requireDescription: "La question devient requise lorsque l'expression logique renvoie 'vrai'.",
      trigger_completeDescription: "Lorsque l'expression logique renvoie 'vrai', l'enquête est alors terminée et un utilisateur voit la page de remerciements.",
      trigger_setvalueDescription: "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription: "Lorsque les valeurs de question, qui sont utilisées dans l'expression logique, sont modifiées et que l'expression logique renvoie 'vrai', la valeur d'une question sélectionnée est copiée dans une autre question sélectionnée.",
      trigger_skipDescription: "Lorsque l'expression logique renvoie 'vrai', l'enquête passe à la question sélectionnée.",
      trigger_runExpressionDescription: "Lorsque l'expression logique renvoie 'vrai', alors l'expression personnalisée est exécutée. Vous pouvez éventuellement définir ce résultat d'expression dans la question sélectionnée.",
      completedHtmlOnConditionDescription: "Si l'expression logique renvoie 'vrai', le texte par défaut de la page de remerciements est remplacé par celui que vous avez défini.",
      itemExpressionText: "Lorsque l'expression: '{0}' renvoie 'vrai':", //{0} - the expression
      // itemEmptyExpressionText: "New rule",
      page_visibilityText: "Rendre la page {0} visible", //{0} page name
      panel_visibilityText: "Rendre le panneau {0} visible", //{0} panel name
      panel_enableText: "Activer le panneau {0}", //{0} panel name
      question_visibilityText: "Rendre la question {0} visible", //{0} question name
      question_enableText: "Activer la question {0}", //{0} question name
      question_requireText: "Rendre la question {0} obligatoire", //{0} question name
      // column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      // column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      // column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "Le questionnaire devient complété.",
      trigger_setvalueText: "Définir dans la question: {0} valeur {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Copier dans la question: {0} valeur de la question {1}", //{0} and {1} question names
      trigger_skipText: "Dans le questionnaire, passez à la question {0}", //{0} question name
      trigger_runExpressionText1: "Exécuter l'expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " et définissez son résultat dans la question: {0}", //{0} question name
      completedHtmlOnConditionText: "Affichez un texte personnalisé pour la page de remerciements.",
      // showAllQuestions: "All Questions",
      // showAllActionTypes: "All Action Types",
      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Définissez le(s) condition(s)",
      actionsEditorTitle: "Définissez le(s) action(s)",
      deleteAction: "Détruire l'action",
      addNewAction: "Ajouter une nouvelle action",
      selectedActionCaption: "Sélectionnez une action à ajouter …",
      expressionInvalid: "L'expression logique est vide ou non valide. Corrigez s'il-vous-plaît.",
      noActionError: "Veuillez ajouter au moins une action.",
      actionInvalid: "Veuillez corriger les problèmes dans vos actions.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Appliquer",
    ok: "OK",
    save: "Enregistrer",
    // clear: "Clear",
    // saveTooltip: "Save",
    cancel: "Annuler",
    // set: "Set",
    reset: "Réinitialiser",
    // change: "Change",
    // refresh: "Refresh",
    close: "Fermer",
    delete: "Supprimer",
    // add: "Add",
    addNew: "Ajouter un nouvel élément",
    addItem: "Cliquer pour ajouter un item...",
    // removeItem: "Click to remove the item...",
    // dragItem: "Drag the item",
    addOther: "Autre",
    addSelectAll: "Tout sélectionner",
    addNone: "Aucun",
    removeAll: "Tout supprimer",
    edit: "Éditer",
    back: "Retourner sans enregistrer",
    backTooltip: "Retourner sans enregistrer",
    saveAndBack: "Enregistrer et retourner",
    saveAndBackTooltip: "Enregistrer et retourner",
    // doneEditing: "Done",
    editChoices: "Editer les choix",
    // showChoices: "Show Choices",
    move: "Déplacer",
    empty: "<vide>",
    // emptyValue: "Value is empty",
    fastEntry: "Ajout rapide",
    // fastEntryNonUniqueError: "Value '{0}' is not unique",
    // fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Ajout via formulaire",
    testService: "Tester le service",
    // itemSelectorEmpty: "Please select the element",
    // conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "Sélectionner une question...",
    // conditionSelectPage: "Select page...",
    // conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "Sélectionner ou saisir la valeur",
    expressionHelp: "Veuillez entrer une expression. Vous pouvez utiliser des accolades pour accéder aux valeurs des questions '{question1} + {question2}', '({prix}*{quantite}) * (100 - {remise})'",
    aceEditorHelp: "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
    aceEditorRowTitle: "Ligne courante",
    aceEditorPanelTitle: "Panneau courant",
    showMore: "Pour plus d'informations, veuillez vous référer à la documentation",
    assistantTitle: "Questions disponibles :",
    cellsEmptyRowsColumns: "Il faut au minimum une ligne ou une colonne",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Veuillez entrer une valeur pour la propriété",
    // propertyIsNoUnique: "Please enter a unique value",
    // propertyNameIsNotUnique: "Please enter a unique name",
    listIsEmpty: "Ajouter un nouvel élément",
    // "listIsEmpty@choices": "No choices have been added yet",
    // "addNew@choices": "Add a choice",
    expressionIsEmpty: "L'expression est vide",
    value: "Valeur",
    text: "Texte",
    rowid: "ID Ligne",
    imageLink: "URL de l'image",
    columnEdit: "Éditer la colonne: {0}",
    itemEdit: "Éditer l'item: {0}",
    url: "URL",
    path: "Chemin",
    valueName: "Nom de la valeur",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Nom du titre",
    // imageLinkName: "Get image URLs from the following JSON field",
    // allowEmptyResponse: "Allow empty response",
    titlePlaceholder: "Titre de la page",
    surveyTitlePlaceholder: "Saisissez le titre de l'enquête",
    pageTitlePlaceholder: "Saisissez le titre de la page",
    descriptionPlaceholder: "Entrer une description",
    surveyDescriptionPlaceholder: "Entrer une description pour l'enquête",
    pageDescriptionPlaceholder: "Entrer une description pour la page",
    showOtherItem: "Contient un item \"Autre\"",
    otherText: "Texte item \"Autre\"",
    showNoneItem: "Contient un item \"Aucun\"",
    noneText: "Texte item \"Aucun\"",
    showSelectAllItem: "Contient un item \"Tout sélectionner\"",
    selectAllText: "Texte item \"Tout sélectionner\"",
    choicesMin: "Valeur minimum pour les items générés automatiquement",
    choicesMax: "Valeur maximum pour les items générés automatiquement",
    choicesStep: "Différence entre items générés automatiquement",
    name: "Nom",
    title: "Titre",
    cellType: "Type de cellule",
    colCount: "Nombre de colonnes",
    choicesOrder: "Sélectionner l'ordre des choix",
    visible: "Est visible ?",
    isRequired: "Est obligatoire ?",
    isAllRowRequired: "Réponse obligatoire pour toutes les lignes",
    requiredErrorText: "Message d'erreur lorsque obligatoire",
    startWithNewLine: "Commencer avec une nouvelle ligne ?",
    rows: "Nombre de lignes",
    // cols: "Columns",
    placeholder: "Placeholder (indice dans le champ)",
    showPreview: "L'aperçu d'image est-il affiché ?",
    storeDataAsText: "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
    maxSize: "Taille maximum du fichier en octets",
    imageHeight: "Hauteur de l'image",
    imageWidth: "Largeur de l'image",
    rowCount: "Nombre de lignes",
    columnLayout: "Inverser les lignes et les colonnes",
    addRowLocation: "Emplacement bouton \"Ajouter une ligne\"",
    addRowText: "Texte bouton \"Ajouter une ligne\"",
    removeRowText: "Texte bouton \"Supprimer une ligne\"",
    rateMin: "Note minimum",
    rateMax: "Note maximum",
    rateStep: "Intervalle des notes",
    minRateDescription: "Description note minimum",
    maxRateDescription: "Description note maximum",
    inputType: "Type de champ",
    optionsCaption: "Texte par défaut",
    defaultValue: "Valeur par défaut",
    cellsDefaultRow: "Texte de cellule par défaut",
    surveyEditorTitle: "Éditer les préférences du questionnaire",
    qEditorTitle: "Éditer la question: {0}",
    maxLength: "Longueur maximum",
    buildExpression: "Construire",
    editExpression: "Editer",
    // and: "and",
    // or: "or",
    remove: "Enlever",
    addCondition: "Ajouter une condition",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    // if: "If",
    // then: "then",
    // setToName: "Target question",
    // fromName: "Question to copy answer from",
    // gotoName: "Question to skip to",
    // ruleIsNotSet: "Rule is incorrect",
    // includeIntoResult: "Include into survey results",
    showTitle: "Afficher/cacher le titre",
    // expandCollapseTitle: "Expand/collapse title",
    locale: "Langue par défaut",
    simulator: "Choisir l'appareil",
    landscapeOrientation: "Paysage",
    // portraitOrientation: "Switch to portrait orientation",
    mode: "Mode (édition/lecture seule)",
    clearInvisibleValues: "Effacer les valeurs invisibles",
    cookieName: "Nom du cookie (pour empêcher de compléter 2 fois le questionnaire localement)",
    sendResultOnPageNext: "Envoyer les résultats au changement de page",
    storeOthersAsComment: "Sauvegarder la valeur \"Autres\" dans un champ séparé",
    showPageTitles: "Afficher les titres de pages",
    showPageNumbers: "Afficher les numéros de pages",
    pagePrevText: "Texte bouton page précédente",
    pageNextText: "Texte bouton page suivante",
    completeText: "Texte bouton terminer",
    // previewText: "Preview Answers button text",
    // editText: "Edit Answer button text",
    startSurveyText: "Texte bouton commencer",
    showNavigationButtons: "Afficher les boutons de navigation (navigation par défaut)",
    showPrevButton: "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
    firstPageIsStarted: "La première page du questionnaire est une page de démarrage.",
    showCompletedPage: "Afficher la page \"terminé\" à la fin (completedHtml)",
    goNextPageAutomatic: "Aller à la page suivante automatiquement pour toutes les questions",
    showProgressBar: "Afficher la barre de progression",
    questionTitleLocation: "Emplacement du titre de la question",
    requiredText: "La question requiert un/des symbole(s)",
    questionStartIndex: "Index de départ de la question (1, 2 ou 'A', 'a')",
    showQuestionNumbers: "Afficher les numéros de questions",
    questionTitleTemplate: "Gabarit du titre de question, par défaut : '{no}. {require} {title}'",
    questionErrorLocation: "Emplacement de l'erreur",
    focusFirstQuestionAutomatic: "Focus sur la première question au changement de page",
    questionsOrder: "Ordre des éléments sur la page",
    maxTimeToFinish: "Temps maximum pour terminer le questionnaire",
    maxTimeToFinishPage: "Temps maximum pour terminer une page",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Afficher le panneau chronomètre",
    showTimerPanelMode: "Mode d'affichage du panneau chronomètre",
    renderMode: "Mode de rendu",
    allowAddPanel: "Autoriser l'ajout du panneau",
    allowRemovePanel: "Autoriser la suppression du panneau",
    // noEntriesText: "Empty entries text",
    panelAddText: "Ajouter un panneau texte",
    panelRemoveText: "Supprimer le panneau texte",
    isSinglePage: "Afficher tous les éléments sur une seule page",
    // html: "HTML markup",
    expression: "Expression",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    minValue: "Valeur minimum",
    maxValue: "Valeur maximum",
    minLength: "Longueur minimum",
    allowDigits: "Permettre chiffres",
    minCount: "Nombre minimum",
    maxCount: "Nombre maximum",
    regex: "Expression régulière",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Texte pour le total",
    totalType: "Type de total",
    totalExpression: "Expression de calcul",
    totalDisplayStyle: "Format d'affichage",
    totalCurrency: "Monnaie",
    totalFormat: "Format du total",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    // allowClear: "Show the Clear button",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    // separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    // displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    logoPosition: "Position du logo",
    addLogo: "Ajouter un logo...",
    changeLogo: "Changer le logo...",
    logoPositions: {
      none: "Retirer le logo",
      left: "Gauche",
      right: "Droite",
      top: "Au dessus",
      bottom: "En dessous"
    },
    tabs: {
      general: "Général",
      fileOptions: "Options",
      html: "Éditeur HTML",
      columns: "Colonnes",
      rows: "Lignes",
      choices: "Choix",
      // items: "Items",
      visibleIf: "Visible si",
      enableIf: "Actif si",
      requiredIf: "Obligatoire si",
      rateValues: "Barème",
      choicesByUrl: "Choix depuis API web",
      matrixChoices: "Choix par défaut",
      multipleTextItems: "Champs texte multiples",
      // numbering: "Numbering",
      validators: "Validateurs",
      navigation: "Navigation",
      question: "Question",
      // pages: "Pages",
      timer: "Chronomètre/Quiz",
      calculatedValues: "Valeurs calculées",
      triggers: "Déclencheurs",
      templateTitle: "Titre de gabarit",
      totals: "Totaux",
      logic: "Conditions",
      layout: "Disposition",
      data: "Données",
      validation: "Validateurs",
      cells: "Cellules",
      // showOnCompleted: "Survey Complete",
      logo: "Logo dans le titre de l'enquête",
      // slider: "Slider",
      // expression: "Expression",
      others: "Autres"
    },
    editProperty: "Éditer la propriété \"{0}\"",
    items: "[ Éléments: {0} ]",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "Veuillez saisir la valeur.",
    noquestions: "Il n'y a aucune question dans le questionnaire.",
    createtrigger: "Veuillez créer un déclencheur",
    // titleKeyboardAdornerTip: "Press enter button to edit",
    // keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "Quand ",
    triggerMakePagesVisible: "Rendre les pages visibles :",
    triggerMakeQuestionsVisible: "Rendre les questions visibles :",
    triggerCompleteText: "Terminer le questionnaire en cas de succès.",
    triggerNotSet: "Le déclencheur n'est pas défini",
    triggerRunIf: "Exécuter si",
    triggerSetToName: "Changer la valeur de : ",
    triggerFromName: "Copier la valeur de : ",
    triggerRunExpression: "Exécuter cette expression :",
    triggerSetValue: "à : ",
    triggerGotoName: "Aller à la question :",
    triggerIsVariable: "Ne placez pas la variable dans le résultat du questionnaire.",
    triggerRunExpressionEmpty: "Veuillez entrer une expression valide",
    // emptyExpressionPlaceHolder: "Type expression here...",
    // noFile: "No file choosen",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    // true: "true",
    // false: "false",
    inherit: "hérité",
    show: "afficher",
    hide: "masquer",
    default: "par défaut",
    initial: "initial",
    random: "aléatoire",
    collapsed: "replié",
    expanded: "déployé",
    none: "aucun",
    asc: "ascendant",
    desc: "descendant",
    indeterminate: "indeterminé",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    firstExpanded: "déployé en premier",
    off: "désactivé",
    // onpanel: "Start on each panel",
    onPanel: "panneau",
    onSurvey: "questionnaire",
    list: "liste",
    progressTop: "Progression en haut",
    progressBottom: "Progression en bas",
    progressTopBottom: "Progression en haut et en bas",
    // horizontal: "Horizontal",
    // vertical: "Vertical",
    top: "haut",
    bottom: "bas",
    topBottom: "haut et bas",
    both: "les deux",
    left: "gauche",
    // right: "Right",
    // color: "color",
    // date: "date",
    // datetime: "datetime",
    // "datetime-local": "datetime-local",
    // email: "email",
    // month: "month",
    // number: "number",
    // password: "password",
    // range: "range",
    // tel: "tel",
    // text: "text",
    // time: "time",
    // url: "url",
    // week: "week",
    hidden: "masqué",
    on: "activé",
    onPage: "page",
    edit: "éditer",
    display: "affichage",
    onComplete: "Quand terminé",
    onHidden: "Quand caché",
    // onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      // none: "Never"
    },
    all: "tous",
    page: "page",
    survey: "questionnaire",
    // onNextPage: "When switching to the next page",
    // onValueChanged: "After an answer is changed",
    // onValueChanging: "Before an answer is changed",
    // standard: "Original structure",
    // singlePage: "All questions on a single page",
    // questionPerPage: "Each question on an individual page",
    // noPreview: "No preview",
    // showAllQuestions: "Show all questions",
    // showAnsweredQuestions: "Show answered questions only",
    // pages: "Completed pages",
    // questions: "Answered questions",
    // requiredQuestions: "Answered required questions",
    // correctQuestions: "Valid answers",
    // buttons: "Completed pages (button UI)",
    // underInput: "Under the input",
    // underTitle: "Under the title",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      // none: "Hidden"
    },
    showProgressBar: {
      // off: "Hidden"
    },
    showTimerPanel: {
      // none: "Hidden"
    },
    showTimerPanelMode: {
      // all: "Both"
    },
    detailPanelMode: {
      // none: "Hidden"
    },
    addRowLocation: {
      // default: "Depends on matrix layout"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "est vide",
    notempty: "n'est pas vide",
    equal: "égal",
    notequal: "n'est pas égal",
    contains: "contient",
    notcontains: "ne contient pas",
    anyof: "n'importe quel de",
    allof: "tous parmi",
    greater: "supérieur",
    less: "inférieur",
    greaterorequal: "supérieur ou égal",
    lessorequal: "inférieur ou égal",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "Utiliser la version Angular",
    jquery: "Utiliser la version jQuery",
    knockout: "Utiliser la version Knockout",
    react: "Utiliser la version React",
    vue: "Utiliser la version Vue",
    bootstrap: "Pour le framework Bootstrap",
    // modern: "Modern theme",
    // default: "Default theme",
    // orange: "Orange theme",
    // darkblue: "Darkblue theme",
    // darkrose: "Darkrose theme",
    // stone: "Stone theme",
    // winter: "Winter theme",
    // winterstone: "Winter-Stone theme",
    showOnPage: "Afficher le questionnaire dans une page",
    showInWindow: "Afficher le questionnaire dans une fenêtre",
    loadFromServer: "Charger le JSON du questionnaire depuis un serveur",
    titleScript: "Scripts et styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Sélectionner une page pour la tester",
    showInvisibleElements: "Afficher les éléments invisibles",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "total de réponses",
    emailvalidator: "e-mail",
    // expressionvalidator: "Expression",
    numericvalidator: "numérique",
    regexvalidator: "regex",
    textvalidator: "texte"
  },
  triggers: {
    completetrigger: "terminer le questionnaire",
    setvaluetrigger: "définir la valeur",
    copyvaluetrigger: "copier la valeur",
    skiptrigger: "sauter à la question",
    runexpressiontrigger: "exécuter expression",
    visibletrigger: "modifier la visibilité"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "Titre",
      title: "Laissez vide, si même texte que le \"Nom\""
    },
    // multiSelect: "Allow multiple selection",
    // showLabel: "Show image captions",
    // value: "Value",
    visibleIf: "Visible si ",
    // attachOriginalItems: "attachOriginalItems",
    // useDisplayValuesInDynamicTexts: "useDisplayValuesInDynamicTexts",
    titleLocation: "Emplacement du titre",
    description: "Description",
    // descriptionLocation: "descriptionLocation",
    // defaultValueExpression: "defaultValueExpression",
    // requiredIf: "requiredIf",
    validators: "Validateurs",
    // bindings: "bindings",
    // renderAs: "renderAs",
    currency: "Monnaie",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    columns: "Colonnes",
    // detailElements: "detailElements",
    choices: "Choix",
    // allowAdaptiveActions: "allowAdaptiveActions",
    // defaultRowValue: "defaultRowValue",
    // detailPanelShowOnAdding: "detailPanelShowOnAdding",
    // logoFit: "logoFit",
    // pages: "pages",
    // questions: "questions",
    triggers: "Déclencheurs",
    // calculatedValues: "calculatedValues",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    // questionDescriptionLocation: "questionDescriptionLocation",
    // progressBarType: "progressBarType",
    // questionTitlePattern: "questionTitlePattern",
    // widthMode: "widthMode",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "Choix par API",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    // min: "min",
    // max: "max",
    // minValueExpression: "minValueExpression",
    // maxValueExpression: "maxValueExpression",
    // step: "step",
    // dataList: "dataList",
    itemSize: "Nombre maximum de caractères",
    // elements: "elements",
    // content: "content",
    navigationButtonsVisibility: "Visibilité des boutons de navigation",
    // navigationTitle: "navigationTitle",
    // navigationDescription: "navigationDescription",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    // autoGrow: "autoGrow",
    // acceptCarriageReturn: "acceptCarriageReturn",
    // displayMode: "displayMode",
    label: "Intitulé",
    // contentMode: "contentMode",
    // imageFit: "imageFit",
    // altText: "altText",
    // height: "height",
    // penColor: "penColor",
    // backgroundColor: "backgroundColor",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression",
    // showCaption: "showCaption",
    // iconName: "iconName",
    // iconSize: "iconSize"
  }
};

editorLocalization.locales["fr"] = frenchTranslation;
