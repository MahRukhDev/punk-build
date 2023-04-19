(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[26],{"./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js":function(e,t,n){"use strict";var r=n("./node_modules/eventemitter3/index.js"),o=n.n(r),i=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t}(o.a);t.a=s},"./node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js":function(e,t,n){"use strict";var r=n("./node_modules/@solana/web3.js/lib/index.browser.esm.js"),o=n("./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js"),i=n("./node_modules/uuid/dist/esm-browser/v4.js"),s=n("./node_modules/bs58/index.js"),a=n.n(s),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},p=function(e){function t(t,n){var o,s=this;return(s=e.call(this)||this)._publicKey=null,s._messageHandlers={},s.handleMessage=function(e){if(s._messageHandlers[e.id]){var t=s._messageHandlers[e.id],n=t.resolve,r=t.reject;delete s._messageHandlers[e.id],e.error?r(e.error):n(e.result)}},s._sendMessage=function(e){if(!s.connected)throw new Error("Wallet not connected");return new Promise((function(t,n){var r,o,a=Object(i.a)();s._messageHandlers[a]={resolve:t,reject:n},null===(o=null===(r=s._iframe)||void 0===r?void 0:r.contentWindow)||void 0===o||o.postMessage({channel:"solflareWalletAdapterToIframe",data:l({id:a},e)},"*")}))},s._iframe=t,s._publicKey=new r.PublicKey(null===(o=null===n||void 0===n?void 0:n.toString)||void 0===o?void 0:o.call(n)),s}return c(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return u(this,void 0,void 0,(function(){return d(this,(function(e){return[2]}))}))},t.prototype.disconnect=function(){return u(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},t.prototype.signTransaction=function(e){return u(this,void 0,void 0,(function(){var t,n;return d(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:a.a.encode(e)}})];case 2:return t=r.sent().signature,[2,a.a.decode(t)];case 3:throw n=r.sent(),console.log(n),new Error("Failed to sign transaction");case 4:return[2]}}))}))},t.prototype.signAllTransactions=function(e){return u(this,void 0,void 0,(function(){var t;return d(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return a.a.encode(e)}))}})];case 2:return[2,n.sent().signatures.map((function(e){return a.a.decode(e)}))];case 3:throw t=n.sent(),console.log(t),new Error("Failed to sign transactions");case 4:return[2]}}))}))},t.prototype.signMessage=function(e,t){return void 0===t&&(t="hex"),u(this,void 0,void 0,(function(){var n,r;return d(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:t}})];case 2:return n=o.sent(),[2,Uint8Array.from(a.a.decode(n))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},t}(o.a);t.a=p},"./node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js":function(e,t,n){"use strict";var r=n("./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js"),o=n("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),i=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),s=n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),a=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=n("./node_modules/eventemitter3/index.js"),l=n.n(c),u=n("./node_modules/@solana/web3.js/lib/index.browser.esm.js"),d=n("./node_modules/bs58/index.js"),p=n.n(d);class f extends l.a{constructor(e,t){var n,r;if(super(),n=this,this._handleMessage=e=>{if(this._injectedProvider&&e.source===window||e.origin===this._providerUrl.origin&&e.source===this._popup)if("connected"===e.data.method){var t=new u.PublicKey(e.data.params.publicKey);this._publicKey&&this._publicKey.equals(t)||(this._publicKey&&!this._publicKey.equals(t)&&this._handleDisconnect(),this._publicKey=t,this._autoApprove=!!e.data.params.autoApprove,this.emit("connect",this._publicKey))}else if("disconnected"===e.data.method)this._handleDisconnect();else if((e.data.result||e.data.error)&&this._responsePromises.has(e.data.id)){var n=this._responsePromises.get(e.data.id),r=Object(a.a)(n,2),o=r[0],i=r[1];e.data.result?o(e.data.result):i(new Error(e.data.error))}},this._handleConnect=()=>(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this._handleMessage),window.addEventListener("beforeunload",this.disconnect)),this._injectedProvider?new Promise((e=>{this._sendRequest("connect",{}),e()})):(window.name="parent",this._popup=window.open(this._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((e=>{this.once("connect",e)})))),this._handleDisconnect=()=>{this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this._handleMessage),window.removeEventListener("beforeunload",this.disconnect)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(((e,t)=>{var n=Object(a.a)(e,2),r=(n[0],n[1]);this._responsePromises.delete(t),r("Wallet disconnected")}))},this._sendRequest=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,r){var s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connect"===t||n.connected){e.next=2;break}throw new Error("Wallet not connected");case 2:return s=n._nextRequestId,++n._nextRequestId,e.abrupt("return",new Promise(((e,o)=>{n._responsePromises.set(s,[e,o]),n._injectedProvider?n._injectedProvider.postMessage({jsonrpc:"2.0",id:s,method:t,params:Object(i.a)({network:n._network},r)}):(n._popup.postMessage({jsonrpc:"2.0",id:s,method:t,params:r},n._providerUrl.origin),n.autoApprove||n._popup.focus())})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.connect=()=>(this._popup&&this._popup.close(),this._handleConnect()),this.disconnect=Object(s.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._injectedProvider){e.next=3;break}return e.next=3,n._sendRequest("disconnect",{});case 3:n._popup&&n._popup.close(),n._handleDisconnect();case 5:case"end":return e.stop()}}),e)}))),this.sign=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,r){var i,s,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof Uint8Array){e.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return e.next=4,n._sendRequest("sign",{data:t,display:r});case 4:return i=e.sent,s=p.a.decode(i.signature),a=new u.PublicKey(i.publicKey),e.abrupt("return",{signature:s,publicKey:a});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.signTransaction=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var r,i,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._sendRequest("signTransaction",{message:p.a.encode(t.serializeMessage())});case 2:return r=e.sent,i=p.a.decode(r.signature),s=new u.PublicKey(r.publicKey),t.addSignature(s,i),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.signAllTransactions=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var r,i,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._sendRequest("signAllTransactions",{messages:t.map((e=>p.a.encode(e.serializeMessage())))});case 2:return r=e.sent,i=r.signatures.map((e=>p.a.decode(e))),s=new u.PublicKey(r.publicKey),t=t.map(((e,t)=>(e.addSignature(s,i[t]),e))),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(e){return"object"===typeof e&&null!==e}(r=e)&&function(e){return"function"===typeof e}(r.postMessage))this._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");this._providerUrl=new URL(e),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString()}this._network=t,this._publicKey=null,this._autoApprove=!1,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._responsePromises=new Map}get publicKey(){return this._publicKey}get connected(){return null!==this._publicKey}get autoApprove(){return this._autoApprove}}var h=f,_=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),m=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},b=function(e){function t(t,n,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,t){return m(o,void 0,void 0,(function(){return v(this,(function(n){switch(n.label){case 0:return this._instance.sendRequest?[4,this._instance.sendRequest(e,t)]:[3,2];case 1:case 3:return[2,n.sent()];case 2:return this._instance._sendRequest?[4,this._instance._sendRequest(e,t)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=n,o._provider=r,o}return _(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return m(this,void 0,void 0,(function(){var e=this;return v(this,(function(t){switch(t.label){case 0:return this._instance=new h(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var t,n;!1!==(null===(n=null===(t=e._instance)||void 0===t?void 0:t._popup)||void 0===n?void 0:n.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return t.sent(),[2]}}))}))},t.prototype.disconnect=function(){return m(this,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},t.prototype.signTransaction=function(e){return m(this,void 0,void 0,(function(){var t;return v(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:p.a.encode(e)})];case 1:return t=n.sent(),[2,p.a.decode(t.signature)]}}))}))},t.prototype.signAllTransactions=function(e){return m(this,void 0,void 0,(function(){return v(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return p.a.encode(e)}))})];case 1:return[2,t.sent().signatures.map((function(e){return p.a.decode(e)}))]}}))}))},t.prototype.signMessage=function(e,t){return void 0===t&&(t="hex"),m(this,void 0,void 0,(function(){var n;return v(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,t)];case 1:return n=r.sent().signature,[2,Uint8Array.from(n)]}}))}))},t}(r.a);t.a=b},"./node_modules/@solflare-wallet/sdk/lib/esm/index.js":function(e,t,n){"use strict";n.r(t),function(e){var r=n("./node_modules/eventemitter3/index.js"),o=n.n(r),i=n("./node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js"),s=n("./node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js"),a=n("./node_modules/@solflare-wallet/sdk/lib/esm/utils.js"),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},d=function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},p=function(t){function n(e){var r=t.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var t,n,o;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new i.a(r._iframe,r._network,(null===(t=e.data)||void 0===t?void 0:t.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new s.a(r._iframe,(null===(n=e.data)||void 0===n?void 0:n.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var t;if("solflareIframeToWalletAdapter"===(null===(t=e.data)||void 0===t?void 0:t.channel)){var n=e.data.data||{};"event"===n.type?r._handleEvent(n.event):"resize"===n.type?r._handleResize(n):"response"===n.type&&r._adapterInstance&&r._adapterInstance.handleMessage(n)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,t,n=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=d(n),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var t,n;null===(n=null===(t=r._iframe)||void 0===t?void 0:t.contentWindow)||void 0===n||n.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===e||void 0===e?void 0:e.network)&&(r._network=null===e||void 0===e?void 0:e.network),(null===e||void 0===e?void 0:e.provider)&&(r._provider=null===e||void 0===e?void 0:e.provider),r}return c(n,t),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return l(this,void 0,void 0,(function(){var e=this;return u(this,(function(t){switch(t.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(t,n){e._connectHandler={resolve:t,reject:n}}))]);case 1:return t.sent(),[2]}}))}))},n.prototype.disconnect=function(){return l(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(t){return l(this,void 0,void 0,(function(){var n,r,o,i,s=this;return u(this,(function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=Object(a.a)(t)?t.serializeMessage():t.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return r=c.sent(),Object(a.a)(t)?t.addSignature(this.publicKey,e.from(r)):(o=t.message.staticAccountKeys.slice(0,t.message.header.numRequiredSignatures),(i=o.findIndex((function(e){return e.equals(s.publicKey)})))>=0&&(t.signatures[i]=r)),[2,t]}}))}))},n.prototype.signAllTransactions=function(t){return l(this,void 0,void 0,(function(){var n,r,o,i,s,c,l=this;return u(this,(function(u){switch(u.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=t.map((function(e){return Object(a.a)(e)?e.serializeMessage():e.message.serialize()})),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(r=u.sent(),o=0;o<t.length;o++)i=t[o],Object(a.a)(i)?i.addSignature(this.publicKey,e.from(r[o])):(s=i.message.staticAccountKeys.slice(0,i.message.header.numRequiredSignatures),(c=s.findIndex((function(e){return e.equals(l.publicKey)})))>=0&&(i.signatures[c]=r[o]));return[2,t]}}))}))},n.prototype.signMessage=function(e,t){return void 0===t&&(t="utf8"),l(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,t)];case 1:return[2,n.sent()]}}))}))},n.prototype.sign=function(e,t){return void 0===t&&(t="utf8"),l(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.signMessage(e,t)];case 1:return[2,n.sent()]}}))}))},n.prototype.detectWallet=function(e){var t;return void 0===e&&(e=10),l(this,void 0,void 0,(function(){return u(this,(function(n){return window.SolflareApp||(null===(t=window.solflare)||void 0===t?void 0:t.isSolflare)?[2,!0]:[2,new Promise((function(t){var n,r;n=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(n),clearTimeout(r),t(!0))}),500),r=setTimeout((function(){clearInterval(n),t(!1)}),1e3*e)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n}(o.a);t.default=p}.call(this,n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)},"./node_modules/@solflare-wallet/sdk/lib/esm/utils.js":function(e,t,n){"use strict";function r(e){return void 0===e.version}n.d(t,"a",(function(){return r}))}}]);