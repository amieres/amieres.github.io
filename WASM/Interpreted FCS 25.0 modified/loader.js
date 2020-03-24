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

let rootPath = RequireOnePlugInLoadPath.replace("loader.js", "");

var App = {
	preloaded : "/tmp",
	init: function () {
		var asm =  rootPath.includes("25") ? "[WasmTest2] " : "[WasmTest3] ";
		this.wasm_setenv     = Module.cwrap ('mono_wasm_setenv', 'void', ['string', 'string']);
		this.wasm_setenv("MONO_LOG_LEVEL", "debug");
		this.wasm_setenv("MONO_LOG_MASK" , "all");
		this.listdir         = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:listdir"    );
		this.printFile       = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:printFile"  );
		this.writeFile       = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:writeFile"  );
		this.runAsm          = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:runAssembly");
		this.fsiEval		 = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:fsiEval"    );
		this.compile         = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:compile"    );
		this.translate       = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:translate"  );
		this.wait            = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:wait"       );
		this.fibo            = Module.mono_bind_static_method (asm + "FsRoot.WasmTest:fiboTime"   );
		this.writeFile       = FS.writeFile;
		AppInitiated 		 = true;
		FsRootDll.LibraryJS.AppFramework.setVarDirect("lytDemo.wasmStatus", "");
	},
	morefiles: []
};

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