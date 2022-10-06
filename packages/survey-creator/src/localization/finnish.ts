//Uncomment this line on creating a translation file
import { editorLocalization } from "../editorLocalization";

export var fiStrings = {
  //survey templates
  survey: {
    edit: "Muokkaa",
    externalHelpLink: "Katso ja opi luomaan kyselyjä",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Pudota kysymys Työkalupakista tähän.",
    addLogicItem: "Luo sääntö mukauttamaan kyselyn kulkua.",
    copy: "Kopioi",
    duplicate: "Monista",
    addToToolbox: "Lisää Työkalupakkiin",
    deletePanel: "Poista Paneeli",
    deleteQuestion: "Poista Kysymys",
    convertTo: "Konvertoi",
    drag: "Vedä elementtiä",
  },
  //questionTypes
  qt: {
    default: "Oletusarvo",
    checkbox: "Valintaruutu",
    comment: "Kommentti",
    imagepicker: "Kuvanvalitsin",
    ranking: "Sijoitus",
    image: "Kuva",
    dropdown: "Pudotusvalikko",
    file: "Tiedosto",
    html: "Html",
    matrix: "Matrix (yksi valinta)",
    matrixdropdown: "Matrix (monivalinta)",
    matrixdynamic: "Matrix (dynaamiset rivit)",
    multipletext: "Useita tekstejä",
    panel: "Paneeli",
    paneldynamic: "Paneeli (dynaamiset paneelit)",
    radiogroup: "Radiopainikeryhmä",
    rating: "Luokitus",
    text: "Teksti",
    boolean: "Totuusarvomuuttuja",
    expression: "Lauseke(vain luku)",
    signaturepad: "Allekirjoitusalusta",
    // flowpanel: "Sujuva Paneeli",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Vakio ({0})",
    survey: "Kysely",
    settings: "Kyselyn asetukset",
    settingsTooltip: "Avaa kyselyn asetukset",
    //opjectPropertiesHeader: "Edeistynyt",
    //showObjectProperties: "Näytä objektin ominaisuudet",
    //hideObjectProperties: "Piilota objektin ominaisuudet",
    showPanel: "Näytä Paneeli",
    hidePanel: "Piilota Paneeli",
    editSurvey: "Muokkaa kyselyä",
    addNewPage: "Lisää uusi sivu",
    moveRight: "Selaa oikealle",
    moveLeft: "Selaa vasemmalle",
    deletePage: "Poista sivu",
    editPage: "Muokkaa sivua",
    edit: "Muokkaa",
    newPageName: "sivu",
    newQuestionName: "kysymys",
    newPanelName: "paneeli",
    newTextItemName: "teksti",
    testSurvey: "Testaa kyselyä",
    testSurveyAgain: "Testaa kysely uudestaan",
    testSurveyWidth: "Kyselyn laajuus: ",
    navigateToMsg: "Sinun piti navigoida:",
    logic: "Kysely logiikka",
    embedSurvey: "Upota kysely",
    translation: "Käännökset",
    saveSurvey: "Tallenna kysely",
    saveSurveyTooltip: "Tallenna kysely",
    designer: "Kysely",
    jsonEditor: "JSON Editori",
    undo: "Kumoa",
    redo: "Tee uudelleen",
    undoTooltip: "Kumoa viimeinen muutos",
    redoTooltip: "Tee muutos uudelleen",
    copy: "Kopioi",
    cut: "Leikkaa",
    paste: "Liitä",
    copyTooltip: "Kopioi valinta leikepöydälle",
    cutTooltip: "Leikkaa valinta leikepöydälle",
    pasteTooltip: "Liitä leikepöydältä",
    options: "Vaihtoehdot",
    generateValidJSON: "Luo kelvollinen JSON",
    generateReadableJSON: "Luo luettava JSON",
    toolbox: "Työkalupakki",
    "property-grid": "Asetukset",
    toolboxGeneralCategory: "Yleinen",
    delSelObject: "Poista valittu objekti",
    editSelObject: "Muokkaa valittua objektia",
    correctJSON: "Korjaa JSON.",
    surveyResults: "Kyselyn tulos:",
    surveyResultsTable: "Taulukossa",
    surveyResultsJson: "JSON:ssa",
    resultsTitle: "Kysymyksen otsikko",
    resultsName: "Kysymyksen nimi",
    resultsValue: "Vastauksen arvo",
    resultsDisplayValue: "Näytä arvo",
    modified: "Muokattu",
    saving: "Tallentaa",
    saved: "Tallennettu",
    propertyEditorError: "Virhe:",
    saveError: "Virhe! Editorin sisältöä ei ole tallennettu.",
    translationAddLanguage: "Valitse käännettävä kieli",
    translationShowAllStrings: "Näytä kaikki merkkijonot",
    translationShowAllPages: "Näytä kaikki sivut",
    translationNoStrings: "Ei merkkijonoja käännettäväksi. Vaihda suodatin.",
    translationExportToSCVButton: "Vie (CSV)",
    translationImportFromSCVButton: "Tuo (CSV)",
    translationMergeLocaleWithDefault: "Yhdistä {0} oletuskielellä",
    bold: "Lihavoitu",
    italic: "Kursiivi",
    underline: "Alleviivaa",
    fpAddQuestion: "Lisää kysymys...",
    selectPage: "Valitse sivu...",
    chooseElement: "Valitse elementti...",
    //completedHtmlOnConditionItemText: "Näytä jos:",
    lg: {
      addNewItem: "", //By default the value is taken from pe.addNew 'Add New', you can set it to 'Add New Rule' for example.
      //Logic tab strings
      page_visibilityName: "Sivun näkyvyys",
      panel_visibilityName: "Panelin näkyvyys",
      panel_enableName: "Paneeli käytössä/Ei käytössä",
      question_visibilityName: "Kysymyksen näkyvyys",
      question_enableName: "Kysymys käytössä/Ei käytössä",
      question_requireName: "Kysymys valinnainen vaaditaan",
      trigger_completeName: "Valmis kysely",
      trigger_setvalueName: "Aseta kysymyksen arvo",
      trigger_copyvalueName: "Kopioi kysymyksen arvo",
      trigger_skipName: "Ohita kysymys",
      trigger_runExpressionName: "Suorita mukautettu lauseke",
      completedHtmlOnConditionName: "Mukautettu Kiitos -sivuteksti",

      page_visibilityDescription:
        "Tee sivusta näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      panel_visibilityDescription:
        "Tee paneelista näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      panel_enableDescription:
        "Ota paneeli ja kaikki sen sisällä olevat elementit käyttöön, kun looginen lauseke palauttaa arvon tosi. Muuten pidä ne poissa käytöstä.",
      question_visibilityDescription:
        "Tee kysymyksestä näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      question_enableDescription:
        "Ota kysymys käyttöön, kun looginen lauseke palauttaa arvon tosi. Muussa tapauksessa pidä se poissa käytöstä.",
      question_requireDescription:
        "Kysymys tulee pakolliseksi, kun looginen lauseke palauttaa arvon tosi.",
      trigger_completeDescription:
        "Kun looginen lauseke palauttaa arvon tosi, kysely valmistuu ja loppukäyttäjä näkee Kiitos -sivun.",
      trigger_setvalueDescription:
        "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, arvo asetetaan valitulle kysymykselle.",
      trigger_copyvalueDescription:
        "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, yhden valitun kysymyksen arvo kopioidaan toiseen valittuun kysymykseen.",
      trigger_skipDescription:
        "Kun looginen lauseke palauttaa arvon tosi, kysely siirtyy valittuun kysymykseen / kohdista valittu kysymys.",
      trigger_runExpressionDescription:
        "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription:
        "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",

      itemExpressionText: "Kun lauseke: '{0}' palauttaa arvon tosi:", //{0} - the expression
      page_visibilityText: "Tee sivu {0} näkyväksi", //{0} page name
      panel_visibilityText: "Tee paneelista {0} näkyvä", //{0} panel name
      panel_enableText: "Ota paneeli {0} käyttöön", //{0} panel name
      question_visibilityText: "Tee kysymys {0} näkyväksi", //{0} question name
      question_enableText: "Ota kysymys {0} käyttöön", //{0} question name
      question_requireText: "Tee kysymyksestä {0} pakollinen", //{0} question name
      trigger_completeText: "Kyselystä tulee täytetty",
      trigger_setvalueText: "Laita arvo {1} kysymykseen {0}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopioi kysymykseen: {0} arvo kysymyksestä {1}", //{0} and {1} question names
      trigger_skipText: "Siirry kyselyn kysymykseen {0}", //{0} question name
      trigger_runExpressionText1: "Suorita lauseke: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ja aseta sen tulos kysymykseen: {0}", //{0} question name
      completedHtmlOnConditionText: "Näytä mukautettu teksti Kiitos -sivulle.",

      conditions: "Ehdot",
      actions: "Toiminnot",
      expressionEditorTitle: "Määritä olosuhteet",
      actionsEditorTitle: "Määritä toiminnot",

      deleteAction: "Poista toiminto",
      addNewAction: "Lisää uusi toiminto",
      selectedActionCaption: "Valitse lisättävä toiminto ...",

      expressionInvalid: "Looginen lauseke on tyhjä tai virheellinen. Korjaa se.",
      noActionError: "Lisää ainakin yksi toiminto.",
      actionInvalid: "Korjaa ongelmat toiminnoissa.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Vaadittu?"
  // },
  //Property Editors
  pe: {
    apply: "Käytä",
    ok: "OK",
    save: "Tallenna",
    saveTooltip: "Tallenna",
    cancel: "Peruuta",
    reset: "Nollaa",
    refresh: "Päivitä",
    // close: "Sulje",
    delete: "Poista",
    add: "Lisää",
    addNew: "Lisää uusi",
    addItem: "Klikkaa lisätäksesi uusi kohde...",
    addOther: "Muu",
    addSelectAll: "Valitse kaikki",
    addNone: "Ei mitään",
    removeAll: "Poista kaikki",
    edit: "Muokkaa",
    back: "Palaa tallentamatta",
    backTooltip: "Palaa tallentamatta",
    saveAndBack: "Tallenna ja palaa",
    saveAndBackTooltip: "Tallenna ja palaa",
    // itemValueEdit: "Näkyvä jos",
    editChoices: "Muokkaa valintoja",
    showChoices: "Näytä valinnat",
    move: "Siirrä",
    empty: "<tyhjä>",
    // notEmpty: "<Muokkaa arvoa>",
    fastEntry: "Nopea pääsy",
    formEntry: "Lomakkeen pääsy",
    testService: "Testaa palvelu",
    itemSelectorEmpty: "Valitse elementti",
    conditionActionEmpty: "Valitse toiminto",
    conditionSelectQuestion: "Valitse kysymys...",
    conditionSelectPage: "Valitse sivu...",
    conditionSelectPanel: "Valitse paneeli...",
    conditionValueQuestionTitle: "Syötä / valitse arvo",
    conditionHelp: "Anna looginen lauseke. Sen pitäisi palauttaa arvo tosi pitääkseen kysymys / sivu näkyvissä. Esimerkiksi: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp: "Voit käyttää aalto ​​sulkeita päästäksesi kysymysarvoihin: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Voit käyttää funktioita: iif(), today(), age(), min(), max(), count(), avg() ja muita.",
    aceEditorHelp: "Paina ctrl + välilyönti saadaksesi lausekkeen täydennysvihje",
    aceEditorRowTitle: "Nykyinen rivi",
    aceEditorPanelTitle: "Nykyinen paneeli",
    showMore: "Katso lisätietoja dokumentaatiosta",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Saatavilla olevat kysymykset:",
    cellsEmptyRowsColumns: "Sarakkeita tai rivejä on oltava vähintään yksi",

    propertyIsEmpty: "Anna arvo",
    propertyIsNoUnique: "Anna yksilöllinen arvo",
    propertyNameIsNotUnique: "Anna yksilöllinen nimi",
    listIsEmpty: "Lisää uusi kohde",
    expressionIsEmpty: "Lauseke on tyhjä",
    value: "Arvo",
    text: "Teksti",
    rowid: "Rivi ID",
    imageLink: "Kuvalinkki",
    columnEdit: "Muokkaa saraketta: {0}",
    itemEdit: "Muokkaa kohdetta: {0}",

    url: "URL",
    path: "Polku",
    valueName: "Arvon nimi",
    titleName: "Otsikon nimi",
    titlePlaceholder: "Syötä otsikko tähän",
    surveyTitlePlaceholder: "Syötä kyselyn otsikko tähän",
    pageTitlePlaceholder: "Syötä sivun otsikko tähän",
    descriptionPlaceholder: "Lisää kuvaus",
    surveyDescriptionPlaceholder: "Lisää kyselyn kuvaus",
    pageDescriptionPlaceholder: "Lisää sivun kuvaus",

    showOtherItem: "On muu",
    otherText: "Muu teksti",
    showNoneItem: "Ei mitään",
    noneText: "Ei mitään tekstiä",
    hasSelectAll: "On valinnut kaikki",
    selectAllText: "Valitse kaikki tekstit",
    choicesMin: "Automaattisesti luotujen valintojen vähimmäisarvo",
    choicesMax: "Automaattisesti luotujen valintojen enimmäisarvo",
    choicesStep: "Automaattisesti luotujen valintojen ero",
    name: "Nimi",
    title: "Otsikko",
    cellType: "Solutyyppi",
    colCount: "Sarakemäärä",
    choicesOrder: "Valitse valintojen järjestys",
    visible: "On näkyvä?",
    isRequired: "On vaadittu?",
    isAllRowRequired: "Vaadi vastaus kaikille riveille",
    requiredErrorText: "Vaadittu virheteksti",
    startWithNewLine: "Onko aloitus uudella rivillä?",
    rows: "Rivit",
    cols: "Sarakeet",
    placeholder: "Syötä paikkamerkintä",
    showPreview: "Näytä esikatselu",
    storeDataAsText: "Tallenna tiedostosisältö JSON-tulokseen tekstinä",
    maxSize: "Tiedoston enimmäiskoko tavuina",
    imageHeight: "Kuvan korkeus",
    imageWidth: "Kuvan leveys",
    rowCount: "Rivien määrä",
    columnLayout: "Sarakkeiden asettelu",
    addRowLocation: "Lisää rivipainikkeen sijainti",
    addRowText: "Lisää rivipainikkeen teksti",
    removeRowText: "Poista rivipainikkeen teksti",
    rateMin: "Vähimmäismäärä",
    rateMax: "Enimmäismäärä",
    rateStep: "Arvostele askel",
    minRateDescription: "Vähimmäismäärän kuvaus",
    maxRateDescription: "Enimmäismäärän kuvaus",
    inputType: "Syötä tyyppi",
    optionsCaption: "Vaihtoehdot kuvateksti",
    defaultValue: "Oletusarvo",
    cellsDefaultRow: "Oletussolutekstit",

    surveyEditorTitle: "Muokkaa kyselyn asetuksia",
    qEditorTitle: "Muokkaa: {0}",

    maxLength: "Enimmäispituus",

    buildExpression: "Luo",
    editExpression: "Muokkaa",
    and: "Ja",
    or: "Tai",
    remove: "Poista",
    addCondition: "Lisää ehto",

    //survey
    showTitle: "Näytä/piilota otsikko",
    expandCollapseTitle: "Laajenna / tiivistä otsikkoa",
    locale: "Oletus kieli",
    simulator: "Valitse laite",
    landscapeOrientation: "Vaakasuunta",
    mode: "Tila (vain muokkaus / vain luku)",
    clearInvisibleValues: "Tyhjennä näkymättömät arvot",
    cookieName: "Evästeen nimi (poistaaksesi kysely käytöstä suorita kysely kaksi kertaa paikallisesti)",
    sendResultOnPageNext: "Lähetä kyselyn tulokset seuraavalla sivulla",
    storeOthersAsComment: "Tallenna 'muut' arvo erilliseen kenttään",
    showPageTitles: "Näytä sivun otsikot",
    showPageNumbers: "Näytä sivunumerot",
    pagePrevText: "Edellinen sivu -painikkeen teksti",
    pageNextText: "Seuraava sivu -painikkeen teksti",
    completeText: "Valmis -painikkeen teksti",
    previewText: "Esikatsele -painikkeen teksti",
    editText: "Muokkaa -painikkeen teksti",
    startSurveyText: "Aloita -painikkeen teksti",
    showNavigationButtons: "Näytä navigointipainikkeet (oletusnavigointi)",
    showPrevButton: "Näytä edellinen -painike (käyttäjä voi palata edelliselle sivulle)",
    firstPageIsStarted: "Kyselyn ensimmäinen sivu on aloitussivu.",
    showCompletedPage: "Näytä valmis sivu lopussa (completeHtml)",
    goNextPageAutomatic:
      "Kun vastaat kaikkiin kysymyksiin, siirry seuraavalle sivulle automaattisesti",
    showProgressBar: "Näytä edistymispalkki",
    questionTitleLocation: "Kysymyksen otsikon sijainti",
    requiredText: "Kysymys vaadittu symboli (t)",
    questionStartIndex: "Kysymyksen aloitus indeksi (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Näytä kysymysnumerot",
    questionTitleTemplate:
      "Kysymyksen otsikkomalli, oletusarvo: '{no}. {require} {title}'",
    questionErrorLocation: "Kysymyksen virheen sijainti",
    focusFirstQuestionAutomatic: "Fokusoi ensimmäiseen kysymykseen sivun vaihtuessa",
    questionsOrder: "Elementtien järjestys sivulla",
    maxTimeToFinish: "Enimmäisaika saada kysely täytettyä",
    maxTimeToFinishPage: "Enimmäisaika kyselyn sivun täyttämiseen",
    showTimerPanel: "Näytä ajastus -paneeli",
    showTimerPanelMode: "Näytä ajastus -paneelin tila",
    renderMode: "Renderöinnin tila",
    allowAddPanel: "Salli paneelin lisääminen",
    allowRemovePanel: "Salli paneelin poistaminen",
    panelAddText: "Paneelin tekstin lisääminen",
    panelRemoveText: "Paneelin tekstin poistaminen",
    isSinglePage: "Näytä kaikki elementit yhdellä sivulla",
    html: "Html",
    expression: "Lauseke",

    minValue: "Vähimmäisarvo",
    maxValue: "Suurin arvo",
    minLength: "Vähimmäispituus",
    allowDigits: "Salli numerot",
    minCount: "Vähimmäismäärä",
    maxCount: "Enimmäismäärä",
    regex: "Regular expression",

    // totalText: "Koko teksti",
    // totalType: "Koko tyyppi",
    // totalExpression: "Kokonaislauseke",
    // totalDisplayStyle: "Kokonaisnäyttötyyli",
    // totalCurrency: "Valuutta yhteensä",
    // totalFormat: "Kokonaismuoto",

    // Header  adorner
    logoPosition: "Logo sijainti",
    addLogo: "Lisää logo...",
    changeLogo: "Muuta logo...",
    logoPositions: {
      none: "Poista logo",
      left: "Vasen",
      right: "Oikea",
      top: "Päällä",
      bottom: "Alla",
    },

    tabs: {
      general: "Yleinen",
      fileOptions: "Vaihtoehdot",
      html: "Html Editori",
      columns: "Sarakkeet",
      rows: "Rivit",
      choices: "Valinnat",
      items: "Kohteet",
      visibleIf: "Näkyvä jos",
      enableIf: "Käytössä jos",
      requiredIf: "Vaadittu jos",
      rateValues: "Järjestä arvot",
      choicesByUrl: "Valintoja verkosta",
      matrixChoices: "Oletus valinnat",
      multipleTextItems: "Tekstinsyötöt",
      numbering: "Numerointi",
      validators: "Validattorit",
      navigation: "Navigointi",
      question: "Kysymys",
      pages: "Sivut",
      completedHtml: "Valmis Html",
      completedHtmlOnCondition: "Valmis Html ehdolla",
      loadingHtml: "Lataa Html",
      timer: "Ajastin / tietovisa",
      calculatedValues: "Lasketut arvot",
      triggers: "Triggerit",
      templateTitle: "Mallin otsikko",
      totals: "Yhteensä",
      logic: "Logiikka",
      layout: "Layout",
      data: "Data",
      validation: "Validointi",
      cells: "Solut",
      showOnCompleted: "Näytä kun valmis",
      logo: "Logo kyselyn otsikossa",
      slider: "Liukusäädin",
      others: "Muut",
    },
    editProperty: "Muokkaa ominaisuutta'{0}'",
    items: "[ Kohteet: {0} ]",

    enterNewValue: "Anna arvo.",
    noquestions: "Kyselyssä ei ole yhtään kysymystä.",
    createtrigger: "Luo triggeri",
    titleKeyboardAdornerTip: "Paina Enter -painiketta muokataksesi",
    keyboardAdornerTip: "Voit muokata kohdetta painamalla Enter -painiketta, poistaa kohteen painamalla poistopainiketta, siirtää kohdetta painamalla Alt plus nuoli ylös tai nuoli alas",
    keyboardMoveItemsTip: "Paina Alt plus nuoli ylös tai nuoli alas siirtääksesi kohdetta",
    triggerOn: "Päällä ",
    triggerMakePagesVisible: "Tee sivuista näkyviä:",
    triggerMakeQuestionsVisible: "Tee elementit näkyviksi:",
    triggerCompleteText: "Valmista kysely, jos se on onnistunut.",
    triggerNotSet: "Triggeriä ei ole asetettu",
    triggerRunIf: "Suorita jos",
    triggerSetToName: "Muuta arvoa: ",
    triggerFromName: "Kopioi arvo kohteesta: ",
    triggerRunExpression: "Suorita tämä lauseke:",
    triggerSetValue: "kohtaan: ",
    triggerGotoName: "Siirry kysymykseen:",
    triggerIsVariable: "Älä lisää muuttujaa kyselyn tulokseen.",
    triggerRunExpressionEmpty: "Anna kelvollinen lauseke",

    noFile: "Tiedostoa ei ole valittuna",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    singlePage: "single page",
    standard: "standard",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
  },
  //Operators
  op: {
    empty: "on tyhjä",
    notempty: "ei ole tyhjä",
    equal: "yhtäsuurikuin",
    notequal: "ei ole yhtäsuurikuin",
    contains: "sisältää",
    notcontains: "ei sisällä",
    anyof: "mikä tahansa",
    allof: "kaikki",
    greater: "suurempi",
    less: "vähemmän",
    greaterorequal: "suurempi tai yhtäsuurikuin",
    lessorequal: "vähemmän tai yhtäsuurikuin",
    and: "ja",
    or: "tai",
  },
  //Embed window
  ew: {
    angular: "Käytä Angular versiota",
    jquery: "Käytä jQuery versiota",
    knockout: "Käytä Knockout versiota",
    react: "Käytä React versiota",
    vue: "Käytä Vue versiota",
    bootstrap: "Bootstrap työkalulle",
    modern: "Moderni teema",
    default: "Oletus teema",
    orange: "Oranssi teema",
    darkblue: "Tummansininen teema",
    darkrose: "Tumma ruusu teema",
    stone: "Kiviteema",
    winter: "Talvi teema",
    winterstone: "Talvi-kivi-teema",
    showOnPage: "Näytä kysely sivulla",
    showInWindow: "Näytä kysely ikkunassa",
    loadFromServer: "Lataa kysely palvelimelta JSON muodossa",
    titleScript: "Skriptit ja tyylit",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Valitse sivu testataksesi sitä:",
    showInvisibleElements: "Näytä näkymätön elementti",
  },
  validators: {
    answercountvalidator: "vastausten määrä",
    emailvalidator: "sähköposti",
    expressionvalidator: "lauseke",
    numericvalidator: "lukumääräinen",
    regexvalidator: "säännöllinen lauseke",
    textvalidator: "teksti",
  },
  triggers: {
    completetrigger: "valmis kysely",
    setvaluetrigger: "aseta arvo",
    copyvaluetrigger: "kopioi arvo",
    skiptrigger: "siirry kysymykseen",
    runexpressiontrigger: "suorita lauseke",
    visibletrigger: "muuta näkyvyyttä (vanhentunut)",
  },
  pehelp: {
    //expression:
  },
  //Properties
  p: {
    name: "nimi",
    title: {
      name: "otsikko",
      title: "Jätä se tyhjäksi, jos se on sama kuin 'Nimi'",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "kuvaus",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    showOtherItem: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    showNoneItem: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};
// Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["fi"] = fiStrings;
