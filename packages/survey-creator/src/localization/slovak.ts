import { editorLocalization } from "../editorLocalization";

export var skStrings = {
  survey: {
    edit: "Upraviť",
    externalHelpLink: "Sledovať a zistiť, ako vytvárať prieskumy",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Sem zadajte otázku zo súpravy nástrojov.",
    addLogicItem: "Vytvoriť pravidlo prispôsobenia priebehu prieskumu.",
    copy: "Kopírovať",
    duplicate: "Duplikovať",
    addToToolbox: "Pridať do súpravy nástrojov",
    deletePanel: "Odstrániť panel",
    deleteQuestion: "Odstrániť otázku",
    convertTo: "Konvertovať na",
    drag: "Presunúť prvok"
  },
  qt: {
    default: "Predvolené",
    checkbox: "Začiarkavacie políčko",
    comment: "Komentár",
    imagepicker: "Nástroj na výber obrázkov",
    ranking: "Hodnotenie",
    image: "Obrázok",
    dropdown: "Rozbaľovací zoznam",
    file: "Súbor",
    html: "Html",
    matrix: "Matica (jedna možnosť)",
    matrixdropdown: "Matica (viacero možností)",
    matrixdynamic: "Matica (dynamické riadky)",
    multipletext: "Text pri viacerých možnostiach",
    panel: "Panel",
    paneldynamic: "Panel (dynamické panely)",
    radiogroup: "Skupina tlačidiel",
    rating: "Hodnotenie",
    text: "Jeden vstup",
    boolean: "Boolean",
    expression: "Výraz (iba na čítanie)",
    signaturepad: "Priestor na podpis",
    flowpanel: "Panel priebehu"
  },
  ed: {
    defaultLocale: "Predvolené ({0})",
    survey: "Prieskum",
    settings: "Nastavenia prieskumu",
    settingsTooltip: "Otvoriť nastavenia prieskumu",
    showPanel: "Zobraziť panel",
    hidePanel: "Skryť panel",
    addNewPage: "Pridať novú stranu",
    moveRight: "Prejsť vpravo",
    moveLeft: "Prejsť vľavo",
    deletePage: "Odstrániť stranu",
    editPage: "Upraviť stranu",
    edit: "Upraviť",
    newPageName: "stránka",
    newQuestionName: "otázka",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Textový prieskum",
    testSurveyAgain: "Ďalší textový prieskum",
    testSurveyWidth: "Šírka prieskumu: ",
    navigateToMsg: "Museli ste prejsť na:",
    logic: "Logika prieskumu",
    embedSurvey: "Začleniť prieskum",
    translation: "Preklad",
    saveSurvey: "Uložiť prieskum",
    saveSurveyTooltip: "Uložiť prieskum",
    designer: "Návrhár prieskumov",
    jsonEditor: "Editor JSON",
    undo: "Späť",
    redo: "Opakovať",
    undoTooltip: "Zrušiť poslednú zmenu",
    redoTooltip: "Opakovať zmenu",
    copy: "Kopírovať",
    cut: "Vystrihnúť",
    paste: "Prilepiť",
    copyTooltip: "Kopírovať výber do schránky",
    cutTooltip: "Vystrihnúť výber do schránky",
    pasteTooltip: "Prilepiť zo schránky",
    options: "Možnosti",
    generateValidJSON: "Vygenerovať platný JSON",
    generateReadableJSON: "Vygenerovať načítateľný JSON",
    toolbox: "Súprava nástrojov",
    "property-grid": "Vlastnosti",
    toolboxGeneralCategory: "Všeobecné",
    correctJSON: "Opravte JSON.",
    surveyResults: "Výsledok prieskumu: ",
    surveyResultsTable: "Ako tabuľku",
    surveyResultsJson: "Ako JSON",
    resultsTitle: "Titul otázky",
    resultsName: "Názov otázky",
    resultsValue: "Hodnota odpovede",
    resultsDisplayValue: "Zobraziť hodnotu",
    modified: "Upravené",
    saving: "Ukladanie",
    saved: "Uložené",
    propertyEditorError: "Chyba:",
    saveError: "Chyba! Obsah editora sa neuložil.",
    translationAddLanguage: "Výber jazyka na preklad",
    translationShowAllStrings: "Zobraziť všetky reťazce",
    translationShowAllPages: "Zobraziť všetky stránky",
    translationNoStrings: "Žiadne reťazce na preklad. Zmeňte filter.",
    translationExportToSCVButton: "Exportovať do CSV",
    translationImportFromSCVButton: "Importovať z CSV",
    translationMergeLocaleWithDefault: "Zlúčiť {0} s predvoleným miestnym nastavením",
    bold: "Tučné",
    italic: "Kurzíva",
    underline: "Podčiarknutie",
    fpAddQuestion: "Pridať otázku...",
    selectPage: "Vybrať stránku...",
    chooseElement: "Vybrať prvok...",
    lg: {
      addNewItem: "",
      page_visibilityName: "Viditeľnosť strany",
      panel_visibilityName: "Viditeľnosť panela",
      panel_enableName: "Panel povoliť/zakázať",
      question_visibilityName: "Viditeľnosť otázky",
      question_enableName: "Otázku povoliť/zakázať",
      question_requireName: "Vyžaduje sa voliteľná otázka",
      trigger_completeName: "Dokončiť prieskum",
      trigger_setvalueName: "Nastaviť hodnotu otázky",
      trigger_copyvalueName: "Kopírovať hodnotu otázky",
      trigger_skipName: "Prejsť na otázku",
      trigger_runExpressionName: "Spustiť vlastný výraz",
      completedHtmlOnConditionName: "Vlastný text stránky s poďakovaním",
      page_visibilityDescription: "Stránka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_visibilityDescription: "Panel bude viditeľný, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      panel_enableDescription: "Panel a všetky jeho prvky sa povolia, keď logický výraz vráti hodnotu true. V opačnom prípade budú zakázané.",
      question_visibilityDescription: "Otázka bude viditeľná, keď logický výraz vráti hodnotu true. V opačnom prípade sa nebude zobrazovať.",
      question_enableDescription: "Otázka sa povolí, keď logický výraz vráti hodnotu true. V opačnom prípade zostane zakázaná.",
      question_requireDescription: "Otázka bude povinná, keď logický výraz vráti hodnotu true.",
      trigger_completeDescription: "Keď logický výraz vráti hodnotu true, prieskum bude dokončený a používateľovi sa zobrazí stránka s poďakovaním.",
      trigger_setvalueDescription: "V prípade, že sa zmenia hodnoty, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, pre vybratú otázku sa nastaví daná hodnota.",
      trigger_copyvalueDescription: "V prípade, že sa zmenia hodnoty otázok, ktoré sa používajú v rámci logického výrazu, a logický výraz vráti hodnotu true, hodnota jednej vybratej otázky sa skopíruje na ďalšiu vybratú otázku.",
      trigger_skipDescription: "Keď logický výraz vráti hodnotu true, prieskum prejde/nastaví sa na vybratú otázku.",
      trigger_runExpressionDescription: "Keď logický výraz vráti hodnotu true, vykoná sa vlastný výraz. Voliteľne môžete nastaviť tento výraz na vybratú otázku.",
      completedHtmlOnConditionDescription: "Keď logický výraz vráti hodnotu true, predvolený text na stránke s poďakovaním sa zmení na zadaný text.",
      itemExpressionText: "Keď výraz: „{0}“ vráti hodnotu true:",
      page_visibilityText: "Stránka {0} bude viditeľná",
      panel_visibilityText: "Panel {0} bude viditeľný",
      panel_enableText: "Panel {0} bude povolený",
      question_visibilityText: "Otázka {0} bude viditeľná",
      question_enableText: "Otázka {0} bude povolená",
      question_requireText: "Otázka {0} sa bude vyžadovať",
      trigger_completeText: "Prieskum bude dokončený",
      trigger_setvalueText: "Nastaviť v otázke: {0} hodnotu {1}",
      trigger_copyvalueText: "Kopírovať do otázky: {0} hodnotu z otázky {1}",
      trigger_skipText: "V prieskume prejsť na otázku {0}",
      trigger_runExpressionText1: "Spustiť výraz: „{0}“",
      trigger_runExpressionText2: " a nastaviť výsledok v otázke: {0}",
      completedHtmlOnConditionText: "Zobraziť vlastný text pre stránku s poďakovaním.",
      conditions: "Podmienka(-y)",
      actions: "Akcia(-e)",
      expressionEditorTitle: "Definovať podmienku(-y)",
      actionsEditorTitle: "Definovať akciu(-e)",
      deleteAction: "Odstrániť akciu",
      addNewAction: "Pridať novú akciu",
      selectedActionCaption: "Vybrať akciu na pridanie...",
      expressionInvalid: "Logický výraz je prázdny alebo neplatný. Opravte ho.",
      noActionError: "Pridajte aspoň jednu akciu.",
      actionInvalid: "Odstráňte problémy v akcii(-ách).",
      expressionSetup: "",
      actionsSetup: ""
    }
  },
  pe: {
    apply: "Použiť",
    ok: "OK",
    save: "Uložiť",
    saveTooltip: "Uložiť",
    cancel: "Zrušiť",
    reset: "Obnovenie pôvodného nastavenia",
    refresh: "Obnoviť",
    delete: "Vymazať",
    add: "Pridať",
    addNew: "Pridať nové",
    addItem: "Kliknutím pridať položku...",
    addOther: "Iné",
    addSelectAll: "Vybrať všetky",
    addNone: "Žiadne",
    removeAll: "Odstrániť všetko",
    edit: "Upraviť",
    view: "Zobraziť",
    back: "Návrat bez uloženia",
    backTooltip: "Návrat bez uloženia",
    saveAndBack: "Uložiť a vrátiť sa",
    saveAndBackTooltip: "Uložiť a vrátiť sa",
    editChoices: "Upraviť možnosti",
    showChoices: "Zobraziť možnosti",
    move: "Presunúť",
    empty: "<empty>",
    fastEntry: "Rýchle zadanie",
    formEntry: "Zadanie formulára",
    testService: "Test služby",
    itemSelectorEmpty: "Vyberte prvok",
    conditionActionEmpty: "Vyberte akciu",
    conditionSelectQuestion: "Vybrať otázku...",
    conditionSelectPage: "Vybrať stránku...",
    conditionSelectPanel: "Vybrať panel...",
    conditionValueQuestionTitle: "Zadajte/vyberte hodnotu",
    expressionHelp: "Pomocou zložených zátvoriek môžete získať prístup k hodnotám otázok: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Môžete používať funkcie ako: iif(), today(), age(), min(), max(), count(), avg() a iné.",
    aceEditorHelp: "Klávesovou skratkou ctrl+space získate tip na dokončenie výrazu",
    aceEditorRowTitle: "Aktuálny riadok",
    aceEditorPanelTitle: "Aktuálny panel",
    showMore: "Ďalšie podrobnosti nájdete v dokumentácii",
    assistantTitle: "Dostupné otázky:",
    cellsEmptyRowsColumns: "K dispozícii má byť aspoň jeden stĺpec alebo riadok",
    propertyIsEmpty: "Zadajte hodnotu",
    propertyIsNoUnique: "Zadajte jedinečnú hodnotu",
    propertyNameIsNotUnique: "Zadajte jedinečný názov",
    listIsEmpty: "Pridajte novú položku",
    expressionIsEmpty: "Výraz je prázdny",
    value: "Hodnota",
    text: "Text",
    rowid: "ID riadka",
    imageLink: "Odkaz na obrázok",
    columnEdit: "Upraviť stĺpec: {0}",
    itemEdit: "Upraviť položku: {0}",
    itemView: "Zobraziť položku: {0}",
    url: "URL",
    path: "Cesta",
    valueName: "Názov hodnoty",
    titleName: "Titulný názov",
    allowEmptyResponse: "Povoliť prázdnu odozvu",
    titlePlaceholder: "Sem zadajte titul",
    surveyTitlePlaceholder: "Sem vložte titul prieskumu",
    pageTitlePlaceholder: "Sem zadajte titul stránky",
    descriptionPlaceholder: "Zadať opis",
    surveyDescriptionPlaceholder: "Zadať opis prieskumu",
    pageDescriptionPlaceholder: "Zadať opis stránky",
    showOtherItem: "Obsahuje inú položku",
    otherText: "Text inej položky",
    showNoneItem: "Neobsahuje žiadnu položku",
    noneText: "Text pri žiadnej položke",
    hasSelectAll: "Obsahuje vybraté všetky položky",
    selectAllText: "Text pri výbere všetkých položiek",
    choicesMin: "Minimálna hodnota pre automaticky vygenerované položky",
    choicesMax: "Maximálna hodnota pre automaticky vygenerované položky",
    choicesStep: "Rozdiel medzi automaticky vygenerovanými položkami",
    name: "Názov",
    title: "Titul",
    cellType: "Typ bunky",
    colCount: "Počet stĺpcov",
    choicesOrder: "Poradie vybratých možností",
    visible: "Je viditeľné?",
    isRequired: "Vyžaduje sa?",
    isAllRowRequired: "Vyžadovať odpoveď pre všetky riadky",
    requiredErrorText: "Text chyby pri povinných položkách",
    startWithNewLine: "Začína sa novým riadkom?",
    rows: "Počet riadkov",
    cols: "Počet stĺpcov",
    placeholder: "Vložiť zástupný symbol",
    showPreview: "Zobraziť oblasť náhľadu",
    storeDataAsText: "Uložiť obsahu súboru vo výsledku JSON ako text",
    maxSize: "Maximálna veľkosť súboru v bajtoch",
    imageHeight: "Výška obrázka",
    imageWidth: "Šírka obrázka",
    rowCount: "Počet riadkov",
    columnLayout: "Rozloženie stĺpcov",
    addRowLocation: "Poloha tlačidla na pridanie riadka",
    addRowText: "Text tlačidla na pridanie riadka",
    removeRowText: "Text tlačidla na odstránenie riadka",
    rateMin: "Minimálne hodnotenie",
    rateMax: "Maximálne hodnotenie",
    rateStep: "Krok hodnotenia",
    minRateDescription: "Opis minimálneho hodnotenia",
    maxRateDescription: "opis maximálneho hodnotenia",
    inputType: "Typ vstupu",
    optionsCaption: "Titulok možností",
    showOptionsCaption: "Zobraziť titulok možností",
    defaultValue: "Predvolená hodnota",
    cellsDefaultRow: "Predvolené texty buniek",
    surveyEditorTitle: "Upraviť nastavenia prieskumu",
    qEditorTitle: "Upraviť: {0}",
    maxLength: "Maximálna dĺžka",
    buildExpression: "Zostaviť",
    editExpression: "Upraviť",
    and: "A",
    or: "Alebo",
    remove: "Odstrániť",
    addCondition: "Pridať podmienku",
    showTitle: "Zobraziť/skryť titul",
    expandCollapseTitle: "Rozbaliť/zbaliť titul",
    locale: "Predvolený jazyk",
    simulator: "Vybrať zariadenie",
    landscapeOrientation: "Na šírku",
    mode: "Režim (upraviť/iba na čítanie)",
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    cookieName: "Názov súboru cookie (na zabránenie lokálneho spustenia prieskumu dvakrát)",
    sendResultOnPageNext: "Odoslať výsledky prieskumu na ďalšiu stránku",
    storeOthersAsComment: "Uložiť hodnotu „iné“ v samostatnom poli",
    showPageTitles: "Zobraziť tituly stránok",
    showPageNumbers: "Zobraziť čísla stránok",
    pagePrevText: "Text tlačidla pre predchádzajúcu stránku",
    pageNextText: "Text tlačidla pre ďalšiu stránku",
    completeText: "Text tlačidla dokončenia",
    previewText: "Text tlačidla ukážky",
    editText: "Text tlačidla úpravy",
    startSurveyText: "Text tlačidla spustenia",
    showNavigationButtons: "Zobraziť navigačné tlačidlá (predvolená navigácia)",
    showPrevButton: "Zobraziť tlačidlo predchádzajúce (používateľ sa môže vráiť na predchádzajúcu stránku)",
    firstPageIsStarted: "Prvá stránka v prieskume je úvodná stránka.",
    showCompletedPage: "Na konci zobraziť stránku s dokončením (completedHtml)",
    goNextPageAutomatic: "Po zodpovedaní všetkých otázok prejsť na ďalšiu stránku automaticky",
    showProgressBar: "Zobraziť indikátor priebehu",
    questionTitleLocation: "Poloha titulu otázky",
    requiredText: "Povinný symbol(-y) otázok",
    questionStartIndex: "Otázka sa začína indexom (1, 2 alebo „A“, „a“)",
    showQuestionNumbers: "Zobraziť čísla otázok",
    questionTitleTemplate: "Šablóna titulu otázky, predvolená je:  „{no}. {require} {title}“",
    questionErrorLocation: "Poloha chyby otázky",
    focusFirstQuestionAutomatic: "Prechod na prvú otázku pri zmene stránky",
    questionsOrder: "Poradie prvkov na stránke",
    maxTimeToFinish: "Maximálny čas na dokončenie prieskumu",
    maxTimeToFinishPage: "Maximálny čas na dokončenie stránky v rámci prieskumu",
    showTimerPanel: "Zobraziť panel s časovačom",
    showTimerPanelMode: "Zobraziť režim panela s časovačom",
    renderMode: "Režim vykresľovania",
    allowAddPanel: "Povoliť pridanie panela",
    allowRemovePanel: "Povoliť odstránenie panela",
    panelAddText: "Text pri pridaní panela",
    panelRemoveText: "Text pri odstránení panela",
    isSinglePage: "Zobraziť všetky prvky na jednej stránke",
    html: "Html",
    expression: "Výraz",
    minValue: "Minimálna hodnota",
    maxValue: "Maximálna hodnota",
    minLength: "Minimálna dĺžka",
    allowDigits: "Povoliť čísla",
    minCount: "Minimálny počet",
    maxCount: "Maximálny počet",
    regex: "Regulárny výraz",
    totalText: "Celkom – text",
    totalType: "Celkom – typ",
    totalExpression: "Celkom – výraz",
    totalDisplayStyle: "Celkom – štýl zobrazenia",
    totalCurrency: "Celkom – mena",
    totalFormat: "Celkom – formát",
    logoPosition: "Poloha loga",
    addLogo: "Pridať logo...",
    changeLogo: "Zmeniť logo...",
    logoPositions: {
      none: "Odstrániť logo",
      left: "Vľavo",
      right: "Vpravo",
      top: "V hornej časti",
      bottom: "V spodnej časti"
    },
    tabs: {
      general: "Všeobecné",
      fileOptions: "Možnosti",
      html: "Editor Html",
      columns: "Stĺpce",
      rows: "Riadky",
      choices: "Možnosti",
      items: "Položky",
      visibleIf: "Viditeľné ak",
      enableIf: "Povoliť ak",
      requiredIf: "Povinné ak",
      rateValues: "Hodnoty hodnotenia",
      choicesByUrl: "Možnosti z webu",
      matrixChoices: "Predvolené možnosti",
      multipleTextItems: "Zadania textu",
      numbering: "Číslovanie",
      validators: "Overovatelia",
      navigation: "Navigácia",
      question: "Otázka",
      pages: "Stránky",
      completedHtml: "Dokončené Html",
      completedHtmlOnCondition: "Dokončené Html za podmienky",
      loadingHtml: "Načítanie Html",
      timer: "Časovač/kvíz",
      calculatedValues: "Vypočítané hodnoty",
      triggers: "Aktivátory",
      templateTitle: "Titul šablóny",
      totals: "Celkové hodnoty",
      logic: "Logický výraz",
      layout: "Rozloženie",
      data: "Údaje",
      validation: "Overenie",
      cells: "Bunky",
      showOnCompleted: "Zobraziť pri dokončení",
      logo: "Logo v titule prieskumu",
      slider: "Jazdec",
      others: "Iné"
    },
    editProperty: "Upraviť vlastnosť „{0}“",
    items: "[ Položky: {0} ]",
    enterNewValue: "Zadajte hodnotu.",
    noquestions: "V prieskume nie je žiadna otázka.",
    createtrigger: "Vytvorte aktivátor",
    titleKeyboardAdornerTip: "Upraviť stlačením tlačidla Enter",
    keyboardAdornerTip: "Stlačením tlačidla Enter položku upravíte, stlačením tlačidla Odstrániť položku odstránite, stlačením tlačidla Alt a šípky nahor alebo šípky nadol položku presuniete",
    keyboardMoveItemsTip: "Položku presuňte stlačením tlačidla Alt a šípky nahor alebo nadol",
    triggerOn: "Zap. ",
    triggerMakePagesVisible: "Viditeľnosť stránok:",
    triggerMakeQuestionsVisible: "Viditeľnosť prvkov:",
    triggerCompleteText: "V prípade úspechu prieskum dokočniť.",
    triggerNotSet: "Aktivátor nie je nastavený",
    triggerRunIf: "Spustiť ak",
    triggerSetToName: "Zmeniť hodnotu: ",
    triggerFromName: "Kopírovať hodnotu z: ",
    triggerRunExpression: "Spustiť tento výraz:",
    triggerSetValue: "na: ",
    triggerGotoName: "Prejsť na otázku:",
    triggerIsVariable: "Nezaraďujte premennú do výsledku prieskumu.",
    triggerRunExpressionEmpty: "Zadajte platný výraz",
    noFile: "Nevybratý žiadny súbor"
  },
  pv: {
    true: "true",
    false: "false",
    inherit: "prevziať",
    show: "zobraziť",
    hide: "skryť",
    default: "predvolené",
    initial: "počiatočné",
    random: "náhodné",
    collapsed: "zbalené",
    expanded: "rozbalené",
    none: "žiadne",
    asc: "vzostupne",
    desc: "zostupne",
    indeterminate: "nestanovené",
    decimal: "desatinné",
    currency: "mena",
    percent: "percentá",
    firstExpanded: "prvý rozbalený",
    off: "vyp.",
    onPanel: "na paneli",
    onSurvey: "v prieskume",
    list: "zoznam",
    progressTop: "horná časť priebehu",
    progressBottom: "spodná časť priebehu",
    progressTopBottom: "priebeh –​ horná a spodná časť",
    horizontal: "vodorovné",
    vertical: "zvislé",
    top: "hore",
    bottom: "dolu",
    topBottom: "hore a dolu",
    both: "obidva",
    left: "vľavo",
    color: "farba",
    date: "dátum",
    datetime: "dátum a čas",
    "datetime-local": "miestny dátum a čas",
    email: "e-mail",
    month: "mesiac",
    number: "číslo",
    password: "heslo",
    range: "rozsah",
    tel: "tel",
    text: "text",
    time: "čas",
    url: "url",
    week: "týždeň",
    hidden: "skryté",
    on: "na",
    onPage: "na stránke",
    edit: "upraviť",
    display: "zobraziť",
    onComplete: "pri dokončení",
    onHidden: "pri skrytí",
    all: "všetko",
    page: "stránka",
    survey: "prieskum",
    onNextPage: "na ďalšej stránke",
    onValueChanged: "pri zmene hodnoty",
    singlePage: "jedna stránka",
    standard: "štandard",
    questionPerPage: "otázka na stránku",
    noPreview: "žiadna ukážka",
    showAllQuestions: "zobraziť ukážku so všetkými otázkami",
    showAnsweredQuestions: "zobraziť ukážku so zodpovedanými otázkami",
    pages: "stránky",
    questions: "otázky",
    requiredQuestions: "povinné otázky",
    correctQuestions: "správne otázky",
    buttons: "tlačidlá",
    underInput: "v rámci vstupu",
    underTitle: "v rámci titulu"
  },
  op: {
    empty: "je prázdne",
    notempty: "nie je prázdne",
    equal: "rovná sa",
    notequal: "nerovná sa",
    contains: "obsahuje",
    notcontains: "neobsahuje",
    anyof: "ktorákoľvek",
    allof: "všetky",
    greater: "väčšie",
    less: "menšie",
    greaterorequal: "väčšie alebo rovné",
    lessorequal: "menšie alebo rovné",
    and: "a",
    or: "aleb"
  },
  ew: {
    angular: "Použiť verziu Angular",
    jquery: "Použiť verziu jQuery",
    knockout: "Použiť verziu Knockout",
    react: "Použiť verziu React",
    vue: "Použiť verziu Vue",
    bootstrap: "Pre rámec bootstrap",
    modern: "Moderný motív",
    default: "Predvolený motív",
    orange: "Oranžový motív",
    darkblue: "Tmavomodrý motív",
    darkrose: "Motív Darkrose",
    stone: "Motív Stone",
    winter: "Motív Winter",
    winterstone: "Motív Winter-Stone",
    showOnPage: "Zobraziť prieskum na stránke",
    showInWindow: "Zobraziť prieskum v okne",
    loadFromServer: "Načítať JSON prieskumu zo servera",
    titleScript: "Skripty a štýly",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  ts: {
    selectPage: "Vybrať stránku na testovanie:",
    showInvisibleElements: "Zobraziť neviditeľné prvky"
  },
  validators: {
    answercountvalidator: "počet odpovedí",
    emailvalidator: "e-mail",
    expressionvalidator: "výraz",
    numericvalidator: "číslo",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "dokončiť prieskum",
    setvaluetrigger: "nastaviť hodnotu",
    copyvaluetrigger: "kopírovať hodnotu",
    skiptrigger: "prejsť na otázku",
    runexpressiontrigger: "spustiť výraz",
    visibletrigger: "zmeniť viditeľnosť (zastarané)"
  },
  p: {
    name: "názov",
    title: {
      name: "titul",
      title: "Nechajte prázdne, ak sa zhoduje s menom"
    },
    navigationButtonsVisibility: "Viditeľnosť navigačných tlačidiel",
    questionsOrder: "Poradie otázok",
    maxTimeToFinish: "Max. čas na dokončenie",
    visible: "viditeľné",
    visibleIf: "Viditeľné ak",
    questionTitleLocation: "Poloha titulu otázky",
    description: "opis",
    state: "stav",
    isRequired: "Je povinné",
    requiredIf: "Povinné ak",
    indent: "vnorenie",
    requiredErrorText: "Povinné – text chyby",
    startWithNewLine: "Začať novým riadkom",
    innerIndent: "Vnútorné vnorenie",
    page: "stránka",
    width: "šírka",
    commentText: "Text komentára",
    valueName: "Názov hodnoty",
    enableIf: "Povoliť ak",
    defaultValue: "Predvolená hodnota",
    correctAnswer: "Správna odpoveď",
    readOnly: "Iba na čítanie",
    validators: "overovatelia",
    titleLocation: "Poloha titulu",
    hasComment: "Obsahuje komentár",
    showOtherItem: "Obsahuje iné",
    choices: "možnosti",
    choicesOrder: "Poradie možností",
    choicesByUrl: "Možnosti podľa URL",
    otherText: "Iné – text",
    otherErrorText: "Iné – text chyby",
    storeOthersAsComment: "Uložiť iné ako komentár",
    label: "štítok",
    showTitle: "Zobraziť titul",
    valueTrue: "Hodnota True",
    valueFalse: "Hodnota False",
    cols: "stĺpce",
    rows: "riadky",
    placeholder: "Zástupný symbol",
    optionsCaption: "Možnosti – titulok",
    expression: "výraz",
    format: "formát",
    displayStyle: "Štýl zobrazenia",
    currency: "mena",
    useGrouping: "Použiť zoskupenie",
    showPreview: "Zobraziť ukážku",
    allowMultiple: "Povoliť väčší počet",
    imageHeight: "Výška obrázka",
    imageWidth: "Šírka obrázka",
    storeDataAsText: "Uložiť údaje ako text",
    maxSize: "Max. veľkosť",
    html: "html",
    columns: "stĺpce",
    cells: "bunky",
    isAllRowRequired: "Všetky riadky sú povinné",
    horizontalScroll: "Prechádzanie vodorovne",
    cellType: "Typ bunky",
    columnsLayout: "Rozloženie stĺpcov",
    columnColCount: "Počet stĺpcov",
    columnMinWidth: "Minimálna šírka stĺpcov",
    rowCount: "Počet riadkov",
    minRowCount: "Minimálny počet riadkov",
    maxRowCount: "Maximálny počet riadkov",
    keyName: "Názov kľúča",
    keyDuplicationError: "Chyba duplikácie kľúča",
    confirmDelete: "Potvrdenie odstránenia",
    confirmDeleteText: "Text potvrdenia odstránenia",
    addRowLocation: "Poloha pridania riadka",
    addRowText: "Text pridania riadka",
    removeRowText: "Text odstránenia riadka",
    items: "položky",
    itemSize: "Veľkosť položky",
    colCount: "počet stĺpcov",
    templateTitle: "Titul šablóny",
    templateDescription: "Opis šablóny",
    allowAddPanel: "Povoliť pridanie panela",
    allowRemovePanel: "Povoliť odstránenie panela",
    panelCount: "Počet panelov",
    minPanelCount: "Minimálny počet panelov",
    maxPanelCount: "Maximálny počet panelov",
    panelsState: "Stav panelov",
    panelAddText: "Text pridania panela",
    panelRemoveText: "Text odstránenia panela",
    panelPrevText: "Text predchádzajúceho panela",
    panelNextText: "Text ďalšieho panela",
    showQuestionNumbers: "Zobraziť čísla otázok",
    showRangeInProgress: "Zobraziť prebiehajúci rozsah",
    renderMode: "Režim vykreslenia",
    templateTitleLocation: "Poloha titulu šablóny",
    rateValues: "Hodnoty hodnotenia",
    rateMin: "Minimálne hodnotenie",
    rateMax: "Maximálne hodnotenie",
    rateStep: "Krok hodnotenia",
    minRateDescription: "Opis minimálneho hodnotenia",
    maxRateDescription: "Opis maximálneho hodnotenia",
    inputType: "Typ vstupu",
    size: "veľkosť",
    locale: "miestne nastavenia",
    focusFirstQuestionAutomatic: "Automatický prechod na prvú otázku",
    completedHtml: "Dokončené HTML",
    completedBeforeHtml: "Dokončené pred limitom HTML",
    loadingHtml: "Načítanie HTML",
    triggers: "aktivátory",
    cookieName: "Názov súboru cookie",
    sendResultOnPageNext: "Odoslať výsledok na ďalšiu stránku",
    showNavigationButtons: "Zobraziť tlačidlá navigácie",
    showPrevButton: "Zobraziť tlačidlo Predchádzajúce",
    showPageTitles: "Zobraziť tituly stránok",
    showCompletedPage: "Zobraziť stránku Dokončené",
    showPageNumbers: "Zobraziť čísla stránok",
    questionErrorLocation: "Poloha chyby otázky",
    showProgressBar: "Zobraziť indikátor priebehu",
    mode: "režim",
    goNextPageAutomatic: "Automaticky prejsť na ďalšiu stránku",
    checkErrorsMode: "Režim kontroly chýb",
    clearInvisibleValues: "Odstrániť neviditeľné hodnoty",
    startSurveyText: "Spustenie prieskumu –​ text",
    pagePrevText: "Predchádzajúca stránka – text",
    pageNextText: "Ďalšia stránka – text",
    completeText: "Dokončené – text",
    requiredText: "Povinné – text",
    questionStartIndex: "Otázka – začiatočný index",
    questionTitleTemplate: "Otázka – titul šablóny",
    firstPageIsStarted: "Začína sa na prvej stránke",
    isSinglePage: "Je to jedna stránka",
    maxTimeToFinishPage: "Maximálny čas na dokončenie stránky",
    showTimerPanel: "Zobraziť panel časovača",
    showTimerPanelMode: "Zobraziť režim panela časovača",
    defaultPanelValue: "Predvolená hodnota panela",
    defaultRowValue: "Predvolená hodnota riadka",
    showNoneItem: "obsahuje žiadne",
    noneText: "žiadne – text",
    text: "text",
    multiSelect: "Výber viacerých možností",
    showLabel: "Zobraziť štítok",
    logo: "logo",
    logoWidth: "šírka loga",
    logoHeight: "výška loga",
    logoFit: "umiestnenie loga",
    focusOnFirstError: "prejsť na prvú chybu",
    completedHtmlOnCondition: "dokončené HTML na základe podmienky",
    pages: "stránky",
    calculatedValues: "vypočítané hodnoty",
    navigateToUrl: "prejsť na URL",
    navigateToUrlOnCondition: "prejsť na URL na základe podmienky",
    questionDescriptionLocation: "otázka – poloha opisu",
    progressBarType: "typ indikátora priebehu",
    maxTextLength: "maximálna dĺžka textu",
    maxOthersLength: "maximálna dĺžka – iné",
    textUpdateMode: "režim aktualizovania textu",
    autoGrowComment: "automatické pridávanie komentárov",
    questionTitlePattern: "otázka – vzor titulu",
    questionsOnPageMode: "režim otázok na stránke",
    showPreviewBeforeComplete: "zobraziť ukážku pred dokončením",
    widthMode: "šírka režimu",
    showNumber: "zobraziť číslo",
    navigationTitle: "Navigácia –​ titul",
    navigationDescription: "Navigácia – opis",
    useDisplayValuesInTitle: "Použiť zobrazené hodnoty v titule",
    minWidth: "minimálna šírka",
    maxWidth: "maximálna šírka",
    descriptionLocation: "poloha opisu",
    hideNumber: "skryť číslo",
    defaultValueExpression: "predvolený výraz hodnoty",
    bindings: "väzby",
    columnsVisibleIf: "viditeľné stĺpce ak",
    rowsVisibleIf: "viditeľné riadky ak",
    showHeader: "zobraziť hlavičku",
    detailPanelMode: "režim panela podrobností",
    rowTitleWidth: "šírka riadka titulu",
    allowAddRows: "povoliť pridávanie riadkov",
    allowRemoveRows: "povoliť odstránenie riadkov",
    defaultValueFromLastRow: "predvolená hodnota z posledného riadka",
    hideColumnsIfEmpty: "skryť stĺpce, ak sú prázdne",
    emptyRowsText: "prázdne riadky – text",
    detailPanelShowOnAdding: "panel s podrobnosťami – zobrazenie pri pridávaní",
    allowRowsDragAndDrop: "povoliť presúvanie riadkov",
    rowsOrder: "poradie riadkov",
    hideIfRowsEmpty: "skryť, ak sú riadky prázdne",
    maximumFractionDigits: "maximálny počet desatinných miest",
    minimumFractionDigits: "minimálny počet desatinných miest",
    choicesFromQuestion: "možnosti k otázke",
    choicesFromQuestionMode: "režim možností k otázke",
    hideIfChoicesEmpty: "skryť, ak sú možnosti prázdne",
    choicesVisibleIf: "viditeľné možnosti, ak",
    choicesEnableIf: "povoliť možnosti, ak",
    otherPlaceHolder: "iné – zástupný symbol",
    maxSelectedChoices: "maximálny počet vybratých možností",
    showClearButton: "zobraziť tlačidlo Vymazať",
    contentMode: "režim obsahu",
    imageFit: "umiestnenie obrázka",
    autocomplete: "automatické dokončenie",
    min: "min.",
    max: "max.",
    minValueExpression: "výraz minimálnej hodnoty",
    maxValueExpression: "výraz maximálnej hodnoty",
    minErrorText: "min. – text chyby",
    maxErrorText: "max. – text chyby",
    step: "krok",
    dataList: "zoznam údajov",
    autoGrow: "automatické rozšírenie",
    multiLine: "viaceré riadky",
    allowImagesPreview: "povoliť ukážku obrázkov",
    acceptedTypes: "akceptované typy",
    waitForUpload: "čakanie na odovzdanie",
    needConfirmRemoveFile: "vyžadovať potvrdenie pri odstránení súboru",
    labelTrue: "štítok true",
    labelFalse: "štítok false",
    height: "výška",
    allowClear: "povoliť vymazanie",
    penColor: "farba pera",
    backgroundColor: "farba pozadia",
    dataFormat: "formát údajov",
    defaultValueFromLastPanel: "predvolená hodnota z posledného panela",
    panelRemoveButtonLocation: "poloha tlačidla odstránenia panela",
    showCaption: "zobraziť titulok",
    iconName: "názov ikony",
    iconSize: "veľkosť ikony"
  }
};

editorLocalization.locales["sk"] = skStrings;
