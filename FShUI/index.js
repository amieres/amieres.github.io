requirejs([
      "https://code.jquery.com/jquery-3.1.1.min.js"
    , "/EPFileX/FileSaver/FileSaver.js"
    , "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    , "testing"
],
function   (jquery, fileSaver, markedJS, FShUI) {
    marked = markedJS;
    FsRoot.TestingJS.SnippetsUI.addLayout("lytDemo", `
marked    View "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
requireMk ViewJS "require(['@{marked}'], mk => marked = mk ),'';"

lytTarget2 PlugIn
: Var ParseMsgs
: Doc main 

editorDataSel Var ""

target    ViewJS "n => n.includes('main ')?n:'main Docs "" ""'" Snippets.curSnp_content

goPrev    Action AF.SetVar     "Snippets.snippets_sel"        Snippets.prevSel
goNext    Action AF.SetVar     "Snippets.snippets_sel"        Snippets.nextSel

SetTarget Action AF.SetVar     "lytTarget2.Layout"        target
SetMain2  Action AF.SetVar     "AppFramework.mainDocV"    "lytDemo.main2"
SetMain   Action AF.SetVar     "AppFramework.mainDocV"    "lytDemo.main"

Trigger   Doc    AF.TrigAction Snippets.snippets_sel "lytDemo.SetTarget"

gotoMain  button "click=@{SetMain};width:16px" "<<"
gotoMain2 button "click=@{SetMain2};width:16px" ">>"

SearchFor   Doc AF.InputLabel "" "Search" Snippets.searchFor

buttons ul ""
: div "margin:3px"
:: button "click=@{Snippets.IndentOut};title=indent out"     "<--"
:: button "click=@{Snippets.IndentIn};title=indent in"       "--> "

File span "class=input-group;margin:5px;id=LoadSnippets"
: div "class=input-group-btn"
:: label "class=btn btn-info" "Load File"
::: div ""
:::: input "class=form-control;type=file;display: none;change=@{Snippets.LoadSnippets}" 
:: label "class=btn btn-primary;click=@{Snippets.SaveSnippets}" "Save File"

list div "display: flex;flex-direction: column" gotoMain File
: div    "margin:5px" SearchFor 
: Docs buttons
: div "overflow:auto;width:100%;max-width:calc(100% - 10px)" Snippets.snippets_list
: ul "margin:3px"
:: button "click=@{Snippets.AddSnippet}   ;title=Add New Snippet" "+"
:: button "margin-left:20px;click=@{Snippets.DeleteSnippet};title=Delete  Snippet" "x"

editor   Doc    Monaco.editor Snippets.curSnp_content     "fsharp"   "vs-dark" ""
editor2  Doc    Monaco.editor Snippets.curSnp_explanation "markdown" "vs-dark" ""
MarkDown1 ViewJS "t => marked(t.split('\\\-\\\-')[0])"      Snippets.curSnp_explanation
MarkDown2 ViewJS "t => marked(t.split('\\\-\\\-')[1])"      Snippets.curSnp_explanation

content div "display: flex;flex-direction: column;flex:1;margin:10px" Trigger requireMk
:  h2        ""              Snippets.curSnp_name
:  Doc       AF.HtmlDoc MarkDown1
:  div       "height:100%;class=relative;flex:2" editor
:  span      "width:100%"
:: button    "click=@{SetTarget}"  "Apply >>"
:  Doc       AF.HtmlDoc MarkDown2
:  Doc       AF.TextArea "color:red;font-weight:800;flex:1;border:none"  Snippets.parseOut
:  span      "width:100%"
:: button    "click=@{goPrev};title=@{Snippets.prevTxt}"  "Prev."
:: button    "click=@{goNext};title=@{Snippets.nextTxt}"  "Next"

snippet div "display: flex;flex-direction: column;flex:1;margin:10px" Trigger
:  Docs      content

Right div "display: flex; flex-direction:column" lytTarget2.main

Right0 horizontal 0-60-100 Right
:   div       "display:flex;flex-direction:column"
::  Doc       AF.InputLabel "" "Name:" Snippets.curSnp_name
::  div       "height:100%;class=relative;flex:2" editor2

Left2 vertical 0-25-100 list snippet
main2 vertical 0-60-100 Left2 Right0
    
Left div "display:flex;flex-direction:column" gotoMain2 snippet
main vertical 0-60-100 Left Right0

main0 vertical 0-60-100 
: div "display:flex;flex-direction:column" content 
: Docs Right
    
    `);
    FsRootDll.LibraryJS.AppFramework.mainDocV.Set("lytDemo.main2");
});
