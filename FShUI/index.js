
function requireSync(files, f) {
    if (files.length == 0) f()
    else
        requirejs(files.slice(0,1), function() { requireSync(files.slice(1), f); });
}

requirejs([
      "https://code.jquery.com/jquery-3.1.1.min.js"
    ,"https://cdn.jsdelivr.net/npm/marked/marked.min.js"
//      ,"/EPFileX/FileSaver/FileSaver.js"
    ,"FShUI/WebSharper/WebSharper.Core.JavaScript/Runtime.min.js"
] , function (jquery  , markedJS) {
    $      =  jquery  ;
    marked =  markedJS;
    requireSync([
         "FShUI/WebSharper/WebSharper.Main.js?h=1127374076"
        ,"FShUI/WebSharper/WebSharper.Collections.js?h=-598830617"
        ,"FShUI/WebSharper/WebSharper.Web.js?h=1514962264"
        ,"FShUI/WebSharper/WebSharper.Sitelets.js?h=826643874"
        ,"FShUI/WebSharper/WebSharper.Control.js?h=-1010165157"
        ,"FShUI/WebSharper/WebSharper.UI.js?h=-1840229558"
        ,"FShUI/WebSharper/WebSharper.UI.Templating.Runtime.js?h=-177383966"      
        ,"FShUI/LayoutEngine.js"
        ,"FShUI/MonacoPlugIn.js"
        ,"FShUI/SnippetsUI.js"
    ], startPage);
});

function startPage() {
    if (typeof IntelliFactory !=='undefined') {
        IntelliFactory.Runtime.ScriptBasePath = 'FShUI/WebSharper/';
        IntelliFactory.Runtime.Start();
    }
    FsRoot.LibraryJS.MonacoPlugIn.plugInAdded();
    FsRoot.LibraryJS.SnippetsUI  .plugInAdded();
    FsRootDll.LibraryJS.NewLY.addLayout("lytTarget2", "");
    FsRootDll.LibraryJS.NewLY.addLayout("lytDemo", `

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

editor   Docs    "Monaco.editor Snippets.curSnp_content    " "fsharp"   "vs-dark" ""
editor2  Docs    "Monaco.editor Snippets.curSnp_explanation" "markdown" "vs-dark" ""
MarkDown1 ViewJS "t => marked(t.split('\\\\-\\\\-')[0])"      Snippets.curSnp_explanation
MarkDown2 ViewJS "t => marked(t.split('\\\\-\\\\-')[1])"      Snippets.curSnp_explanation

content div "display: flex;flex-direction: column;flex:1;margin:10px" Trigger
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
    FsRootDll.LibraryJS.AppFramework.mainDocV().Set("lytDemo.main2");
    FsRootDll.LibraryJS.StartAppFramework.startWith(`
<div ws-template="Snippet" >
    <div draggable="true" class="code-editor-list-tile \${Predecessor} \${Selected}" 
         ws-ondrag="Drag"
         ws-ondragover="DragOver"
         ws-ondrop="Drop"
        >
        <span class="node \${Parent} \${ErrorMsg}" title="expand" ws-onclick="ToggleCollapse"></span>
        <div  class="code-editor-list-text" style="text-indent:\${Indent}em; white-space: pre" ws-onclick="Select" ws-onafterrender="AfterRender" >\${Name}</div>
        <span class="predecessor" title="toggle predecessor" ws-onclick="TogglePred">X</span>
    </div>
</div>
<style>
    .Hidden     { display   : none         }
    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }
    td input.form-control { 
        padding    : 0px; 
        font-family: monospace;
        font-size  :   small;
        margin-top :   0px;
        margin-left: -2px;
        width      : 100%
    }
    td select {
        font-size : smaller;
        max-width : 8ch;
    }
    textarea {
       resize : none;
    }
    .tab-content {
        overflow: hidden
    }
    .tab-children {
        position:relative;
    }
    .tab-children>div>* {
        position:absolute;
        height: 100%;
        width:  100%;
        display: grid;
    }
    .relative {
        position:relative;
    }
    .relative>* {
        position:absolute;
        height: 100%;
        width:  100%;
        display: grid;
    }
    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }
    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }
    table.table-striped    tbody input              { background: transparent; border: none}
    table.table-striped    tbody select             { background: transparent; border: none}
    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }
    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }
    table.table            tbody tr.hover           { border    : solid thin transparent; } 
    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } 
    table.table            tbody th:hover           { background: gray; cursor: pointer }
    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; 
                                               border-bottom: solid thin blue     ; } 
    table.table            tbody tr.selected { background   : #b9eeff             ; }
    table.table            tbody tr.formula.selected { background: #20f7f7             ; }
    thead { color: gray }
    h3 { 
        color: gray;
        line-height: 1em;
    }
    button       { border: solid thin transparent ; border-radius: 3px; }
    button:hover { border: solid thin blue }
    .indenter { position  : absolute; 
                top:0px; bottom:0px; left:0px; 
                background: white; color:white;
                border-right: gray thin dotted;
                }
    body {
        color      : #333;
        font-size  : small;
        font-family: monospace;
        line-height: 1.2;
    }
    .mainTitle {  
        font-size: 48px;
        font-weight: 500;
        color: gray;
        margin-top: -12px;
    }
    .CodeMirror {
        height: 100%;
    }
    
  
    body { margin: 0px }     
         
    div textarea {
        font-family     : monospace;
    }
    .code-editor-list-tile {
        white-space     : nowrap; 
        border-style    : solid none none;
        border-color    : white;
        border-width    : 1px;
        background-color: #D8D8D8;
        display         : flex;
    }
    .code-editor-list-text{
        padding         : 1px 10px 1px 5px;
        overflow        : hidden;
        text-overflow   : ellipsis;
        white-space     : nowrap;
        flex            : 1;
    }
    
    .code-editor-list-tile span.node.ErrorMsg {
        background-color: red
    }
    .code-editor-list-tile span.node.expanded::before {
        content: "-"
    }
    .code-editor-list-tile span.node.collapsed::before {
        content: "+"
    }
    .code-editor-list-tile.direct-predecessor {
        font-weight     : bold;
        color           : blue;
    }
    .code-editor-list-tile.indirect-predecessor {
        color           : blue;
    }
    .code-editor-list-tile.included-predecessor {
        color           : chocolate;
    }
    .code-editor-list-tile.selected {
        background-color: #77F;
        color           : white;
    }
    .code-editor-list-tile.codeSnippet {
        text-decoration : underline;
        font-weight     : bold;
    }
    .code-editor-list-tile:hover {
        background      : lightgray;
    }
    .code-editor-list-tile.selected:hover {
        background      : blue;
    }
    .code-editor-list-tile>.predecessor {
        font-weight     : bold;
        border-style    : inset;
        border-width    : 1px;
        text-align      : center;
        color           : transparent;
    }
    .code-editor-list-tile.direct-predecessor>.predecessor {
        color           : blue;
    }
    
    .CodeMirror { height: 100%; }
    
    .node {
        background-color: white; 
        width           : 2ch; 
        color           : #A03; 
        font-weight     : bold; 
        text-align      : center;
        font-family     : arial;
    }
    .Warning { text-decoration: underline lightblue } 
    .Error   { text-decoration: underline red       } 
    
</style>
`);

}
