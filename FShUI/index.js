
function requireSync(files, f) {
    if (files.length == 0) f()
    else
        requirejs(files.slice(0,1), function() { requireSync(files.slice(1), f); });
}

requirejs([
     "https://code.jquery.com/jquery-3.1.1.min.js"
    ,"https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    ,"/EPFileX/FileSaver/FileSaver.js"
    ,"FShUI/WebSharper/WebSharper.Core.JavaScript/Runtime.min.js"
], function( jquery  , markedJS) {
    $      = jquery  ;
    marked = markedJS;
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
    ], function() {
        IntelliFactory.Runtime.ScriptBasePath = 'FShUI/WebSharper/';
        IntelliFactory.Runtime.Start();
        fetch("FShUI/demoLayout.txt").then(resp => resp.text()).then(demoLayout =>
        fetch("FShUI/templates.html").then(resp => resp.text()).then(templates  =>
            startPage(demoLayout, templates)
        ));
    });
});

function startPage(demoLayout, templates) {
    FsRootDll.LibraryJS.MonacoPlugIn.plugInAdded();
    FsRootDll.LibraryJS.SnippetsUI  .plugInAdded();
    FsRootDll.LibraryJS.NewLY.addLayout("lytTarget2", "");
    FsRootDll.LibraryJS.NewLY.addLayout("lytDemo"   , demoLayout);
    FsRootDll.LibraryJS.AppFramework.mainDocV().Set("lytDemo.main2");
    FsRootDll.LibraryJS.StartAppFramework.startWith(templates);
}
