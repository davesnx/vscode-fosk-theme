import * as Fs from 'fs'

const pink = "#f27983";
const pink_1 = "#f2798399";
const pink_2 = "#f27983b3";
const red_0 = "#f28779";
const red = "#db6165";
const cyan = "#68c1ed";
const blue = "#5ccfe6";
const blue_2 = "#73d0ff";
const blue_3 = "#5ccfe680";
const blue_4 = "#77a8d9";
const dark_blue = "#33415e";
const dark_blue_1 = "#33415efd";
const yellow_0 = "#fac761";
const yellow = "#ffcc66";
const yellow_2 = "#ffd580";
const pale_yellow = "#ffe6b3";
const orange_0 = "#f29e74";
const orange = "#ffa759";
const grey = "#707a8c";
const grey_2 = "#5c6773";
const white_2 = "#cbccc6";
const white_3 = "#cbccc6b3";
const black = "#cbccc605";
const green = "#bae67e";
const green_2 = "#a6cc70";
const green_3 = "#95e6cb";
const purple = "#c594c5";
const purple_2 = "#d4bfff";

const commentColor = grey_2;
const stringColor = green;
const regularExpressionColor = green_3;
const numberColor = yellow;
const constantColor = yellow;
const variableColor = white_2;
const memberColor = red_0;
const keywordColor = blue;
const lambdaArrowColor = orange;
const errorColor = red;
const operatorColor = orange_0;
const typesColor = blue_2;
const separatorColor = white_3;
const punctuationColor = white_2;
const functionArgumentsColor = purple_2;
const functionCallColor = yellow_2;
const libraryFunctionColor = red_0;
const importColor = green;
const entityNameColor = blue_2;
const tagStartEndColor = blue_3;
const decoratorColor = pale_yellow;
const diffHeaderColor = purple;
const cssTagNameColor = blue_2;
const cssBrowserPrefixColor = grey_2;
const searchResultsNumColor = grey_2;
const markupHeadingColor = green;
const markupItalicColor = red_0;
const markupBoldColor = red_0;
const markupCodeColor = black;
const markdownSeparatorColor = grey_2;
const markupBlockquoteColor = green_3;
const markupAddedColor = green_2;
const markupModifiedColor = blue_4;
const markupRemovedColor = pink;
const markupStrikeColor = pale_yellow;
const markdownLineBreakColor = grey_2;
const markdownRawBlockColor = grey_2;

// UI colors
const background = "#161B22"; /* mega oscuro from iterm header #080E16 */
const background_2 = "#1a2027";
const background_3 = "#2A3541";
const focusBorderColor = "#596171";
const widgetShadowColor = "#141925";
const selectionBackgroundColor = dark_blue_1;
const dropdownBorderColor = "#434957";
const inputBorderColor = "#434957";
const inputPlaceholderColor = "#5f6878";
const scrollbarSliderBackgroundColor = "#707a8c66";
const scrollbarSliderHoverColor = "#313842";
const scrollbarSliderActiveColor = "#707a8cb3";
const activityBarForegroundColor = "#707a8ccc";
const listInvalidItemColor = "#5f6878";
const editorLineNumberColor = "#707a8c66";
const editorLineNumberActiveColor = "#707a8ccc";
const editorSelectionColor = dark_blue;
const editorWordHighlightStrongColor = "#ffcc6633";
const editorFindMatchBackgroundColor = "#ffcc660d";
const editorFindMatchHighlightBorderColor = "#ffcc6659";
const editorFindRangeHighlightBorderColor = "#1f243000";
const editorWhitespaceColor = "#707a8c66";
const editorIndentGuideColor = "#707a8c4d";
const editorIndentGuideActiveColor = "#707a8cb3";
const editorRulerColor = "#707a8c4d";
const editorBracketMatchBackgroundColor = "#707a8c4d";
const editorBracketMatchBorderColor = "#313842";
const editorOverviewRulerModifiedColor = "#77a8d999";
const editorOverviewRulerAddedColor = "#a6cc7099";
const editorOverviewRulerDeletedColor = pink_1;
const diffEditorInsertedTextColor = "#bae67e26";
const diffEditorRemovedTextColor = "#f29e7426";
const editorSuggestWidgetBorderColor = "#101521";
const editorHoverWidgetBorderColor = "#101521";
const statusBarItemActiveBackgroundColor = "#00000050";
const statusBarItemHoverBackgroundColor = "#00000030";
const pickerGroupForegroundColor = "#525a69";
const gitDecorationModifiedColor = "#77a8d9b3";
const gitDecorationDeletedColor = pink_2;
const gitDecorationUntrackedColor = "#a6cc70b3";
const gitDecorationIgnoredColor = "#525a69";
const gitDecorationConflictingColor = "#d4bfffb3";
const terminalAnsiRedColor = "#ed8274";
const terminalAnsiGreenColor = green_2;
const terminalAnsiYellowColor = "#fad07b";
const terminalAnsiBlueColor = "#6dcbfa";
const terminalAnsiMagentaColor = "#cfbafa";
const terminalAnsiCyanColor = "#90e1c6";
const terminalAnsiWhiteColor = "#c7c7c7";
const terminalAnsiBrightBlackColor = "#686868";
const terminalAnsiBrightRedColor = red_0;
const terminalAnsiBrightGreenColor = green;
const terminalAnsiBrightWhiteColor = "#ffffff";
const bracketHighlightColor = "#cbccc699";

const tokenColors = [
  {
    settings: {
      foreground: variableColor,
    },
  },
  {
    name: "Comment",
    scope: ["comment"],
    settings: {
      fontStyle: "italic",
      foreground: commentColor,
    },
  },
  {
    name: "String",
    scope: ["string", "constant.other.symbol"],
    settings: {
      foreground: stringColor,
    },
  },
  {
    name: "Regular Expressions and Escape Characters",
    scope: ["string.regexp", "constant.character", "constant.other"],
    settings: {
      foreground: regularExpressionColor,
    },
  },
  {
    name: "Number",
    scope: ["constant.numeric"],
    settings: {
      foreground: numberColor,
    },
  },
  {
    name: "Built-in constants",
    scope: ["constant.language"],
    settings: {
      foreground: constantColor,
    },
  },
  {
    name: "Variable",
    scope: ["variable"],
    settings: {
      foreground: variableColor,
    },
  },
  {
    name: "Member Variable",
    scope: ["variable.member"],
    settings: {
      foreground: memberColor,
    },
  },
  {
    name: "Language variable",
    scope: ["variable.language"],
    settings: {
      fontStyle: "italic",
      foreground: keywordColor,
    },
  },
  {
    name: "Storage",
    scope: ["storage"],
    settings: {
      foreground: lambdaArrowColor
    },
  },
  {
    name: "Keyword",
    scope: ["keyword"],
    settings: {
      foreground: lambdaArrowColor
    },
  },
  {
    name: "Operators",
    scope: ["keyword.operator"],
    settings: {
      foreground: operatorColor,
    },
  },
  {
    name: "Separators like ; or ,",
    scope: ["punctuation.separator", "punctuation.terminator"],
    settings: {
      foreground: separatorColor
    },
  },
  {
    name: "Punctuation",
    scope: ["punctuation.section"],
    settings: {
      foreground: punctuationColor
    },
  },
  {
    name: "Accessor",
    scope: ["punctuation.accessor"],
    settings: {
      foreground: operatorColor,
    },
  },
  {
    name: "Types fixes",
    scope: [
      "source.java storage.type",
      "source.haskell storage.type",
      "source.c storage.type",
    ],
    settings: {
      foreground: typesColor
    },
  },
  {
    name: "Inherited class type",
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Lambda arrow",
    scope: ["storage.type.function"],
    settings: {
      foreground: lambdaArrowColor
    },
  },
  {
    name: "Java primitive variable types",
    scope: ["source.java storage.type.primitive"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Function name",
    scope: ["entity.name.function"],
    settings: {
      foreground: yellow_2,
    },
  },
  {
    name: "Function arguments",
    scope: ["variable.parameter", "meta.parameter"],
    settings: {
      foreground: functionArgumentsColor
    },
  },
  {
    name: "Function call",
    scope: [
      "variable.function",
      "variable.annotation",
      "meta.function-call.generic",
      "support.function.go",
    ],
    settings: {
      foreground: functionCallColor,
    },
  },
  {
    name: "Library function",
    scope: ["support.function", "support.macro"],
    settings: {
      foreground: libraryFunctionColor,
    },
  },
  {
    name: "Imports and packages",
    scope: ["entity.name.import", "entity.name.package"],
    settings: {
      foreground: importColor,
    },
  },
  {
    name: "Entity name",
    scope: ["entity.name"],
    settings: {
      foreground: entityNameColor,
    },
  },
  {
    name: "Tag",
    scope: ["entity.name.tag", "meta.tag.sgml"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Tag start/end",
    scope: [
      "punctuation.definition.tag.end",
      "punctuation.definition.tag.begin",
      "punctuation.definition.tag",
    ],
    settings: {
      foreground: tagStartEndColor,
    },
  },
  {
    name: "Tag attribute",
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: yellow_2,
    },
  },
  {
    name: "Library constant",
    scope: ["support.constant"],
    settings: {
      fontStyle: "italic",
      foreground: operatorColor,
    },
  },
  {
    name: "Library class/type",
    scope: ["support.type", "support.class", "source.go storage.type"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Decorators/annotation",
    scope: [
      "meta.decorator variable.other",
      "meta.decorator punctuation.decorator",
      "storage.type.annotation",
    ],
    settings: {
      foreground: decoratorColor,
    },
  },
  {
    name: "Invalid",
    scope: ["invalid"],
    settings: {
      foreground: errorColor,
    },
  },
  {
    name: "diff.header",
    scope: ["meta.diff", "meta.diff.header"],
    settings: {
      foreground: diffHeaderColor,
    },
  },
  {
    name: "Ruby class methods",
    scope: ["source.ruby variable.other.readwrite"],
    settings: {
      foreground: yellow_2,
    },
  },
  {
    name: "CSS tag names",
    scope: [
      "source.css entity.name.tag",
      "source.sass entity.name.tag",
      "source.scss entity.name.tag",
      "source.less entity.name.tag",
      "source.stylus entity.name.tag",
    ],
    settings: {
      foreground: cssTagNameColor,
    },
  },
  {
    name: "CSS browser prefix",
    scope: [
      "source.css support.type",
      "source.sass support.type",
      "source.scss support.type",
      "source.less support.type",
      "source.stylus support.type",
    ],
    settings: {
      foreground: cssBrowserPrefixColor,
    },
  },
  {
    name: "CSS Properties",
    scope: ["support.type.property-name"],
    settings: {
      fontStyle: "",
      foreground: cyan,
    },
  },
  {
    name: "Search Results Nums",
    scope: ["constant.numeric.line-number.find-in-files - match"],
    settings: {
      foreground: searchResultsNumColor,
    },
  },
  {
    name: "Search Results Match Nums",
    scope: ["constant.numeric.line-number.match"],
    settings: {
      foreground: lambdaArrowColor
    },
  },
  {
    name: "Search Results Lines",
    scope: ["entity.name.filename.find-in-files"],
    settings: {
      foreground: importColor,
    },
  },
  {
    scope: ["message.error"],
    settings: {
      foreground: errorColor,
    },
  },
  {
    name: "Markup heading",
    scope: ["markup.heading", "markup.heading entity.name"],
    settings: {
      fontStyle: "bold",
      foreground: markupHeadingColor,
    },
  },
  {
    name: "Markup links",
    scope: ["markup.underline.link", "string.other.link"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Markup Italic",
    scope: ["markup.italic"],
    settings: {
      fontStyle: "italic",
      foreground: markupItalicColor,
    },
  },
  {
    name: "Markup Bold",
    scope: ["markup.bold"],
    settings: {
      fontStyle: "bold",
      foreground: markupBoldColor,
    },
  },
  {
    name: "Markup Bold/italic",
    scope: ["markup.italic markup.bold", "markup.bold markup.italic"],
    settings: {
      fontStyle: "bold italic",
    },
  },
  {
    name: "Markup Code",
    scope: ["markup.raw"],
    settings: {
      foreground: markupCodeColor,
    },
  },
  {
    name: "Markup Code Inline",
    scope: ["markup.raw.inline"],
    settings: {},
  },
  {
    name: "Markdown Separator",
    scope: ["meta.separator"],
    settings: {
      fontStyle: "bold",
      foreground: markdownSeparatorColor,
    },
  },
  {
    name: "Markup Blockquote",
    scope: ["markup.quote"],
    settings: {
      foreground: markupBlockquoteColor,
      fontStyle: "italic",
    },
  },
  {
    name: "Markup List Bullet",
    scope: ["markup.list punctuation.definition.list.begin"],
    settings: {
      foreground: yellow_2,
    },
  },
  {
    name: "Markup added",
    scope: ["markup.inserted"],
    settings: {
      foreground: markupAddedColor,
    },
  },
  {
    name: "Markup modified",
    scope: ["markup.changed"],
    settings: {
      foreground: markupModifiedColor,
    },
  },
  {
    name: "Markup removed",
    scope: ["markup.deleted"],
    settings: {
      foreground: markupRemovedColor,
    },
  },
  {
    name: "Markup Strike",
    scope: ["markup.strike"],
    settings: {
      foreground: markupStrikeColor,
    },
  },
  {
    name: "Markup Table",
    scope: ["markup.table"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Markup Raw Inline",
    scope: ["text.html.markdown markup.inline.raw"],
    settings: {
      foreground: operatorColor,
    },
  },
  {
    name: "Markdown - Line Break",
    scope: ["text.html.markdown meta.dummy.line-break"],
    settings: {
      foreground: markdownLineBreakColor,
    },
  },
  {
    name: "Markdown - Raw Block Fenced",
    scope: ["punctuation.definition.markdown"],
    settings: {
      foreground: markdownRawBlockColor,
    },
  },
];

const theme = {
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: {
    focusBorder: focusBorderColor,
    foreground: grey,
    "widget.shadow": widgetShadowColor,
    "selection.background": selectionBackgroundColor,
    "textBlockQuote.background": background_2,
    "textLink.foreground": yellow,
    "textLink.activeForeground": yellow,
    "textPreformat.foreground": white_2,
    "button.background": yellow,
    "button.foreground": background,
    "button.hoverBackground": yellow_0,
    "dropdown.background": background_2,
    "dropdown.foreground": grey,
    "dropdown.border": dropdownBorderColor,
    "input.background": background_2,
    "input.border": inputBorderColor,
    "input.foreground": white_2,
    "input.placeholderForeground": inputPlaceholderColor,
    "inputOption.activeBorder": yellow,
    "inputValidation.errorBackground": background,
    "inputValidation.errorBorder": red,
    "inputValidation.infoBackground": background,
    "inputValidation.infoBorder": cyan,
    "inputValidation.warningBackground": background,
    "inputValidation.warningBorder": yellow_2,
    "scrollbar.shadow": background,
    "scrollbarSlider.background": scrollbarSliderBackgroundColor,
    "scrollbarSlider.hoverBackground": scrollbarSliderHoverColor,
    "scrollbarSlider.activeBackground": scrollbarSliderActiveColor,
    "badge.background": yellow,
    "badge.foreground": background,
    "progressBar.background": yellow,
    "list.activeSelectionBackground": background,
    "list.activeSelectionForeground": grey,
    "list.focusBackground": background,
    "list.focusForeground": grey,
    "list.highlightForeground": yellow,
    "list.hoverBackground": background,
    "list.hoverForeground": grey,
    "list.inactiveSelectionBackground": background,
    "list.inactiveSelectionForeground": grey,
    "list.invalidItemForeground": listInvalidItemColor,
    "activityBar.background": background,
    "activityBar.foreground": activityBarForegroundColor,
    "activityBar.border": background,
    "activityBarBadge.background": yellow,
    "activityBarBadge.foreground": background,
    "sideBar.background": background,
    "sideBar.border": background,
    "sideBarTitle.foreground": grey,
    "sideBarSectionHeader.background": background,
    "sideBarSectionHeader.foreground": grey,
    "editorGroup.border": background,
    "editorGroupHeader.noTabsBackground": background,
    "editorGroupHeader.tabsBackground": background,
    "editorGroupHeader.tabsBorder": background,
    "tab.activeBackground": background,
    "tab.activeForeground": white_2,
    "tab.border": background,
    "tab.activeBorder": yellow,
    "tab.unfocusedActiveBorder": grey,
    "tab.inactiveBackground": background,
    "tab.inactiveForeground": grey,
    "tab.unfocusedActiveForeground": grey,
    "tab.unfocusedInactiveForeground": grey,
    "editor.background": background,
    "editor.foreground": white_2,
    "editorLineNumber.foreground": editorLineNumberColor,
    "editorLineNumber.activeForeground": editorLineNumberActiveColor,
    "editorCursor.foreground": yellow,
    "editor.selectionBackground": editorSelectionColor,
    "editor.inactiveSelectionBackground": background_3,
    "editor.selectionHighlightBackground": background_3,
    "editor.selectionHighlightBorder": background_3,
    "editor.wordHighlightBackground": background_3,
    "editor.wordHighlightStrongBackground": editorWordHighlightStrongColor,
    "editor.findMatchBackground": editorFindMatchBackgroundColor,
    "editor.findMatchBorder": yellow,
    "editor.findMatchHighlightBackground": editorFindMatchBackgroundColor,
    "editor.findMatchHighlightBorder": editorFindMatchHighlightBorderColor,
    "editor.findRangeHighlightBackground": background_3,
    "editor.findRangeHighlightBorder": editorFindRangeHighlightBorderColor,
    "editor.lineHighlightBackground": background,
    "editorLink.activeForeground": yellow,
    "editor.rangeHighlightBackground": background,
    "editorWhitespace.foreground": editorWhitespaceColor,
    "editorIndentGuide.background1": editorIndentGuideColor,
    "editorIndentGuide.activeBackground1": editorIndentGuideActiveColor,
    "editorRuler.foreground": editorRulerColor,
    "editorCodeLens.foreground": commentColor,
    "editorBracketMatch.background": editorBracketMatchBackgroundColor,
    "editorBracketMatch.border": editorBracketMatchBorderColor,
    "editorOverviewRuler.border": background,
    "editorOverviewRuler.modifiedForeground": editorOverviewRulerModifiedColor,
    "editorOverviewRuler.addedForeground": editorOverviewRulerAddedColor,
    "editorOverviewRuler.deletedForeground": editorOverviewRulerDeletedColor,
    "editorOverviewRuler.errorForeground": red,
    "editorOverviewRuler.warningForeground": yellow,
    "editorError.foreground": red,
    "editorWarning.foreground": yellow,
    "editorGutter.modifiedBackground": editorOverviewRulerModifiedColor,
    "editorGutter.addedBackground": editorOverviewRulerAddedColor,
    "editorGutter.deletedBackground": editorOverviewRulerDeletedColor,
    "diffEditor.insertedTextBackground": diffEditorInsertedTextColor,
    "diffEditor.removedTextBackground": diffEditorRemovedTextColor,
    "editorWidget.background": background_2,
    "editorSuggestWidget.background": background_2,
    "editorSuggestWidget.border": editorSuggestWidgetBorderColor,
    "editorSuggestWidget.highlightForeground": yellow,
    "editorSuggestWidget.selectedBackground": background,
    "editorHoverWidget.background": background_2,
    "editorHoverWidget.border": editorHoverWidgetBorderColor,
    "debugExceptionWidget.border": background,
    "debugExceptionWidget.background": background_2,
    "editorMarkerNavigation.background": background_2,
    "peekView.border": background,
    "peekViewEditor.background": background_2,
    "peekViewEditor.matchHighlightBackground": editorWordHighlightStrongColor,
    "peekViewResult.background": background_2,
    "peekViewResult.fileForeground": grey,
    "peekViewResult.matchHighlightBackground": editorWordHighlightStrongColor,
    "peekViewTitle.background": background_2,
    "peekViewTitleDescription.foreground": grey,
    "peekViewTitleLabel.foreground": grey,
    "panel.background": background,
    "panel.border": background,
    "panelTitle.activeBorder": yellow,
    "panelTitle.activeForeground": white_2,
    "panelTitle.inactiveForeground": grey,
    "statusBar.background": background,
    "statusBar.foreground": grey,
    "statusBar.border": background,
    "statusBar.debuggingBackground": operatorColor,
    "statusBar.debuggingForeground": background,
    "statusBar.noFolderBackground": background_2,
    "statusBarItem.activeBackground": statusBarItemActiveBackgroundColor,
    "statusBarItem.hoverBackground": statusBarItemHoverBackgroundColor,
    "statusBarItem.prominentBackground": background,
    "statusBarItem.prominentHoverBackground": statusBarItemHoverBackgroundColor,
    "statusBarItem.remoteForeground": grey,
    "statusBarItem.remoteBackground": background,
    "titleBar.activeBackground": background,
    "titleBar.activeForeground": white_2,
    "titleBar.inactiveBackground": background,
    "titleBar.inactiveForeground": grey,
    "titleBar.border": background,
    "extensionButton.prominentForeground": background,
    "extensionButton.prominentBackground": yellow,
    "extensionButton.prominentHoverBackground": yellow_0,
    "pickerGroup.border": background,
    "pickerGroup.foreground": pickerGroupForegroundColor,
    "debugToolBar.background": background_2,
    "walkThrough.embeddedEditorBackground": background_2,
    "gitDecoration.modifiedResourceForeground": gitDecorationModifiedColor,
    "gitDecoration.deletedResourceForeground": gitDecorationDeletedColor,
    "gitDecoration.untrackedResourceForeground": gitDecorationUntrackedColor,
    "gitDecoration.ignoredResourceForeground": gitDecorationIgnoredColor,
    "gitDecoration.conflictingResourceForeground": gitDecorationConflictingColor,
    "gitDecoration.submoduleResourceForeground": gitDecorationConflictingColor,
    "settings.headerForeground": white_2,
    "settings.modifiedItemIndicator": markupModifiedColor,
    "terminal.background": background,
    "terminal.foreground": white_2,
    "terminal.ansiBlack": background,
    "terminal.ansiRed": terminalAnsiRedColor,
    "terminal.ansiGreen": terminalAnsiGreenColor,
    "terminal.ansiYellow": terminalAnsiYellowColor,
    "terminal.ansiBlue": terminalAnsiBlueColor,
    "terminal.ansiMagenta": terminalAnsiMagentaColor,
    "terminal.ansiCyan": terminalAnsiCyanColor,
    "terminal.ansiWhite": terminalAnsiWhiteColor,
    "terminal.ansiBrightBlack": terminalAnsiBrightBlackColor,
    "terminal.ansiBrightRed": terminalAnsiBrightRedColor,
    "terminal.ansiBrightGreen": terminalAnsiBrightGreenColor,
    "terminal.ansiBrightYellow": yellow_2,
    "terminal.ansiBrightBlue": typesColor,
    "terminal.ansiBrightMagenta": functionArgumentsColor,
    "terminal.ansiBrightCyan": regularExpressionColor,
    "terminal.ansiBrightWhite": terminalAnsiBrightWhiteColor,
    "tree.indentGuidesStroke": grey,
    "editorBracketHighlight.foreground1": bracketHighlightColor,
    "editorBracketHighlight.foreground2": bracketHighlightColor,
    "editorBracketHighlight.foreground3": bracketHighlightColor,
    "editorBracketHighlight.foreground4": bracketHighlightColor,
    "editorBracketHighlight.foreground5": bracketHighlightColor,
    "editorBracketHighlight.foreground6": bracketHighlightColor,
    "editorBracketHighlight.unexpectedBracket.foreground": red,
    "editorInlayHint.typeBackground": background,
    "editorInlayHint.typeForeground": grey_2,
  },
  tokenColors: tokenColors,
};

Fs.writeFileSync("./fosk.json", JSON.stringify(theme, null, 2));
