// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _typedJs = require("typed.js");
var _typedJsDefault = parcelHelpers.interopDefault(_typedJs);
var _mainBack = require("../json/main_back");
var _mainBackDefault = parcelHelpers.interopDefault(_mainBack);
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
var _aosCss = require("aos/dist/aos.css"); // You can also use <link> for styles
const market = document.querySelector(".li_market");
const market_div = document.querySelector(".li_market div");
market.addEventListener("mouseover", (0, _mainBackDefault.default));
function gg(e) {
    market_div.style.display = "block";
}
market.addEventListener("mouseout", (e)=>{
    market_div.style.display = "none";
});
const sale_list = document.querySelector(".sale_list");
const wrapper = document.querySelector(".wrapper");
const block = document.querySelector(".block");
const block_img = document.querySelector(".block_img");
const block_back = document.querySelector(".block_back");
const b = (0, _mainBackDefault.default).map((a)=>{
    if (a.sale == true) return `<li class="sale_list_item"><a ><img src="${a.img}" id=${a.id} width='600' alt="">
		<h3>Your products</h3>
		<p class="sale_price">${a.price_with_sales}
		 <span>${a.price}</span></p></a></li>`;
}).join("");
(0, _mainBackDefault.default).map((a)=>{
    sale_list.addEventListener("click", (e)=>{
        if (e.target.nodeName !== "IMG") return;
        if (a.id === e.target.id) {
            console.log(a.img);
            window.scrollTo({
                top: 0,
                behavior: "smooth" //Это анимация
            });
            wrapper.style.display = "none";
            block.style.display = "block";
            block_img.src = a.img;
        }
    });
});
block_back.addEventListener("click", (e)=>{
    e.preventDefault();
    wrapper.style.display = "block";
    block.style.display = "none";
});
sale_list.innerHTML = b;
var typed = new (0, _typedJsDefault.default)(".hero_title", {
    strings: [
        "GET READY FOR AN ADVENTURE"
    ],
    typeSpeed: 70
});
// ..
(0, _aosDefault.default).init();

},{"../json/main_back":"hqRLv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","typed.js":"6M0L2","aos":"eRzTM","aos/dist/aos.css":"iYkXi"}],"hqRLv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bagsJpg = require("../photos/bags.jpg");
var _bagsJpgDefault = parcelHelpers.interopDefault(_bagsJpg);
var _bigBackpackJpg = require("../photos/big_backpack.jpg");
var _bigBackpackJpgDefault = parcelHelpers.interopDefault(_bigBackpackJpg);
var _oneJpg = require("../photos/sale/one.jpg");
var _oneJpgDefault = parcelHelpers.interopDefault(_oneJpg);
exports.default = [
    {
        "name": "Bag",
        "id": "1",
        "tag": "big_backpack",
        "img": (0, _bagsJpgDefault.default),
        "price": 100,
        "sale": true,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Big Bag",
        "id": "2",
        "tag": "big_backpack",
        "img": (0, _bigBackpackJpgDefault.default),
        "price": 100,
        "sale": true,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "3",
        "tag": "big_backpack",
        "img": (0, _oneJpgDefault.default),
        "price": 100,
        "sale": true,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "1",
        "tag": "big_backpack",
        "img": (0, _bagsJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Big Bag",
        "id": "2",
        "tag": "big_backpack",
        "img": (0, _bigBackpackJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "3",
        "tag": "big_backpack",
        "img": (0, _oneJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "1",
        "tag": "big_backpack",
        "img": (0, _bagsJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Big Bag",
        "id": "2",
        "tag": "big_backpack",
        "img": (0, _bigBackpackJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "3",
        "tag": "big_backpack",
        "img": (0, _oneJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "1",
        "tag": "big_backpack",
        "img": (0, _bagsJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Big Bag",
        "id": "2",
        "tag": "big_backpack",
        "img": (0, _bigBackpackJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    },
    {
        "name": "Bag",
        "id": "3",
        "tag": "big_backpack",
        "img": (0, _oneJpgDefault.default),
        "price": 100,
        "sale": false,
        "price_with_sales": 70,
        "description": "This is a product description. Here you can tell about the product in more detail: write about the dimensions, materials, care and any other important points.",
        "about": "This is information about the product. Tell in detail what it is, and list all the necessary information: dimensions, materials, care instructions, etc. This is also a good opportunity to tell what is special about your product and what benefit buyers will get in the end. Detailed information about the product will help your visitors decide on a purchase."
    }
];

},{"../photos/bags.jpg":"aK77r","../photos/big_backpack.jpg":"bgVgO","../photos/sale/one.jpg":"dZ7Av","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aK77r":[function(require,module,exports) {
module.exports = require("92630b9419f35e56").getBundleURL("10Mjw") + "bags.8cedc857.jpg" + "?" + Date.now();

},{"92630b9419f35e56":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bgVgO":[function(require,module,exports) {
module.exports = require("c41d882a862c807b").getBundleURL("10Mjw") + "big_backpack.639687a5.jpg" + "?" + Date.now();

},{"c41d882a862c807b":"lgJ39"}],"dZ7Av":[function(require,module,exports) {
module.exports = require("6fafc96a7c45fd75").getBundleURL("10Mjw") + "one.053802f5.jpg" + "?" + Date.now();

},{"6fafc96a7c45fd75":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6M0L2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>i);
function t() {
    return t = Object.assign ? Object.assign.bind() : function(t) {
        for(var s = 1; s < arguments.length; s++){
            var e = arguments[s];
            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
    }, t.apply(this, arguments);
}
var s = {
    strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!"
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: Infinity,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function(t) {},
    onComplete: function(t) {},
    preStringTyped: function(t, s) {},
    onStringTyped: function(t, s) {},
    onLastStringBackspaced: function(t) {},
    onTypingPaused: function(t, s) {},
    onTypingResumed: function(t, s) {},
    onReset: function(t) {},
    onStop: function(t, s) {},
    onStart: function(t, s) {},
    onDestroy: function(t) {}
}, e = new /*#__PURE__*/ (function() {
    function e() {}
    var n = e.prototype;
    return n.load = function(e, n, i) {
        if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(t) {
            return t.trim();
        }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
            e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
            var r = Array.prototype.slice.apply(e.stringsElement.children), o = r.length;
            if (o) for(var a = 0; a < o; a += 1)e.strings.push(r[a].innerHTML.trim());
        }
        for(var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings)e.sequence[u] = u;
        e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
        }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e));
    }, n.getCurrentElContent = function(t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
    }, n.appendCursorAnimationCss = function(t) {
        var s = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e);
        }
    }, n.appendFadeOutAnimationCss = function(t) {
        var s = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e);
        }
    }, e;
}()), n = new /*#__PURE__*/ (function() {
    function t() {}
    var s = t.prototype;
    return s.typeHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if ("<" === n || "&" === n) {
            var i;
            for(i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length););
            s++;
        }
        return s;
    }, s.backSpaceHtmlChars = function(t, s, e) {
        if ("html" !== e.contentType) return s;
        var n = t.substring(s).charAt(0);
        if (">" === n || ";" === n) {
            var i;
            for(i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0););
            s--;
        }
        return s;
    }, t;
}()), i = /*#__PURE__*/ function() {
    function t(t, s) {
        e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return s.toggle = function() {
        this.pause.status ? this.start() : this.stop();
    }, s.stop = function() {
        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
    }, s.start = function() {
        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
    }, s.destroy = function() {
        this.reset(!1), this.options.onDestroy(this);
    }, s.reset = function(t) {
        void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
    }, s.begin = function() {
        var t = this;
        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
            0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, this.startDelay);
    }, s.typewrite = function(t, s) {
        var e = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed), r = 1;
        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
            s = n.typeHtmlChars(t, s, e);
            var i = 0, o = t.substring(s);
            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
            }
            if ("`" === o.charAt(0)) {
                for(; "`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)););
                var u = t.substring(0, s), p = t.substring(u.length + 1, s + r), c = t.substring(s + r + 1);
                t = u + p + c, r--;
            }
            e.timeout = setTimeout(function() {
                e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
            }, i);
        }, i) : this.setPauseStatus(t, s, !0);
    }, s.keepTyping = function(t, s, e) {
        0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, s += e);
        this.replaceText(n), this.typewrite(t, s);
    }, s.doneTyping = function(t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
            e.backspace(t, s);
        }, this.backDelay));
    }, s.backspace = function(t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function() {
                s = n.backSpaceHtmlChars(t, s, e);
                var i = t.substring(0, s);
                if (e.replaceText(i), e.smartBackspace) {
                    var r = e.strings[e.arrayPos + 1];
                    e.stopNum = r && i === r.substring(0, s) ? s : 0;
                }
                s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
            }, i);
        } else this.setPauseStatus(t, s, !1);
    }, s.complete = function() {
        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
    }, s.setPauseStatus = function(t, s, e) {
        this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
    }, s.toggleBlinking = function(t) {
        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
    }, s.humanizer = function(t) {
        return Math.round(Math.random() * t / 2) + t;
    }, s.shuffleStringsIfNeeded = function() {
        this.shuffle && (this.sequence = this.sequence.sort(function() {
            return Math.random() - .5;
        }));
    }, s.initFadeOut = function() {
        var t = this;
        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
        }, this.fadeOutDelay);
    }, s.replaceText = function(t) {
        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
    }, s.bindFocusEvents = function() {
        var t = this;
        this.isInput && (this.el.addEventListener("focus", function(s) {
            t.stop();
        }), this.el.addEventListener("blur", function(s) {
            t.el.value && 0 !== t.el.value.length || t.start();
        }));
    }, s.insertCursor = function() {
        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
    }, t;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRzTM":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
            }, O = function() {
                w = (0, h.default)(), j();
            }, M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
            }, _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0);
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0);
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {},
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b, o = v;
                        return b = v = void 0, k = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return k = e, h = setTimeout(f, t), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w, o = e - k, i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w, o = e - k;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(), n = c(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e, t, o) {
                    var r = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: a
                    });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b, o = v;
                        return b = v = void 0, O = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return O = e, h = setTimeout(f, t), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w, o = e - O, i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w, o = e - O;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(), n = s(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            "use strict";
            function n(e) {
                var t = void 0, o = void 0, i = void 0;
                for(t = 0; t < e.length; t += 1){
                    if (o = e[t], o.dataset && o.dataset.aos) return !0;
                    if (i = o.children && n(o.children)) return !0;
                }
                return !1;
            }
            function o() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document, i = o(), r = new i(a);
                u = t, r.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function a(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                    if (n(i)) return u();
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {};
            t.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e() {
                    n(this, e);
                }
                return i(e, [
                    {
                        key: "phone",
                        value: function() {
                            var e = o();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e = o();
                            return !(!u.test(e) && !c.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e;
            }();
            t.default = new s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
            }, o = function(e, t) {
                var o = window.pageYOffset, i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t);
                });
            };
            t.default = o;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12), r = o(i), a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                }), e;
            };
            t.default = a;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(13), r = o(i), a = function(e, t) {
                var n = 0, o = 0, i = window.innerHeight, a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i;
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
            };
            t.default = a;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    };
                });
            };
            t.default = n;
        }
    ]);
});

},{}],"iYkXi":[function() {},{}]},["9tRox","1SICI"], "1SICI", "parcelRequireb445")

//# sourceMappingURL=index.18dbc454.js.map
