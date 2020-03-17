function loadJS(file, cont) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		 cont(this.responseText);
		}
	};
	xhttp.open("GET", file, true);
	xhttp.send();
}

var AppInitiated = false;

var replyMessage = function(data) {
	if (ENVIRONMENT_IS_WORKER) 
	  self.postMessage(data);
	else returnMessage(data);
}

var makeCall = function(msg, p1, p2) {
	if      (msg === "compile"  ) replyMessage({ msg: msg, res: App.compile  (p1, p2) } );
	else if (msg === "translate") replyMessage({ msg: msg, res: App.translate(p1, p2) } );
	else if (msg === "runAsm"   ) replyMessage({ msg: msg, res: App.runAsm   (p1    ) } );
	else if (msg === "fsiEval"  ) replyMessage({ msg: msg, res: App.fsiEval  (p1, p2) } );
	else if (msg === "listdir"  ) replyMessage({ msg: msg, res: App.listdir  (p1    ) } );
	else if (msg === "printFile") replyMessage({ msg: msg, res: App.printFile(p1    ) } );
	else if (msg === "writeFile") replyMessage({ msg: msg, res: App.writeFile(p1    ) } );
	else if (msg === "wait"     ) replyMessage({ msg: msg, res: App.wait     (      ) } );
	else console.log(msg, p1, p2);
}

self.onmessage = function (evt) {
	var data = evt.data;
	var msg  = data.msg;
	if (!!AppInitiated && typeof(msg) !== "undefined") this.makeCall(msg, data.p1, data.p2);
	else if (msg === "AddValues") {
		var iResult = int_add(data.Val1, data.Val2);
		self.postMessage(`This is the Web Worker...The result of ${data.Val1.toString()} + ${data.Val2.toString()} is ${iResult.toString()}.`);
	}
	else if (msg === "CompiledModule") {
		WebAssembly.instantiate(data.WasmModule, g_importObject).then(instance => 
		g_objInstance = instance // Hold onto the module's instance so that we can reuse it
		);
	}
}

var Browser = {
	init : function () {},
	asyncLoad : function readAsync(url, onload, onerror) {
		var xhr = new XMLHttpRequest;
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.onload = function xhr_onload() {
			if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
				onload(new Uint8Array(xhr.response));
				return
			}
			onerror()
		};
		xhr.onerror = onerror;
		xhr.send(null)
	}
}

var App = {
	preloaded : "/tmp",
	init: function () {
		this.listdir         = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:listdir"    );
		this.printFile       = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:printFile"  );
		this.writeFile       = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:writeFile"  );
		this.runAsm          = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:runAssembly");
		this.fsiEval		 = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:fsiEval"    );
		this.compile         = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:compile"    );
		this.translate       = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:translate"  );
		this.wait            = Module.mono_bind_static_method ("[WasmTest2] FsRoot.WasmTest:wait"       );
		AppInitiated = true;
		FsRootDll.LibraryJS.AppFramework.setVarDirect("lytDemo.wasmStatus", "Loaded");
	},
	morefiles: []
};

let rootPath = "WASM/wasmInterp/";

function preloadFiles() { 
	Module.preloadPlugins = [];
	let loadFiles = (pathFrom, pathTo, files) => {
		try { FS.mkdir(pathTo); } catch(error) {  };
		files.forEach(file => {
			FS.createPreloadedFile(pathTo, file, pathFrom + "/" + file, 1, 1);
		}
		)
	}
	loadFiles(rootPath + config.vfs_prefix, App.preloaded, config.file_list.filter(f => !App.morefiles.includes(f)));
	loadFiles(rootPath + "dlls"           , App.preloaded, App.morefiles);
}

function appendMsg(v) { 
	console.log(v);
	let p = FsRootDll.LibraryJS.AppFramework.getValDirect()("lytDemo.wasmOutput");
	FsRootDll.LibraryJS.AppFramework.setVarDirect("lytDemo.wasmOutput", (p === undefined || p === null || p === '')? v : p + "\n" + v);
}

requirejs([rootPath + "mono-config.js", rootPath + "runtime.js"], function() {
	Module.preRun = [];
	Module.preRun.push(preloadFiles);
	Module.preRun.push(function() { ENV.MONO_TRACE = "none" });
	Module.print    = appendMsg;
	Module.printErr = appendMsg;
	requirejs([rootPath + "dotnet.js"]);
})