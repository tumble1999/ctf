var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.arrayFromIterator=function(a){for(var b,d=[];!(b=a.next()).done;)d.push(b.value);return d};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var d=$jscomp.propertyToPolyfillSymbol[b];if(null==d)return a[b];d=a[d];return void 0!==d?d:a[b]};
$jscomp.polyfill=function(a,b,d,g){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,d,g):$jscomp.polyfillUnisolated(a,b,d,g))};$jscomp.polyfillUnisolated=function(a,b,d,g){d=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var e=a[g];if(!(e in d))return;d=d[e]}a=a[a.length-1];g=d[a];b=b(g);b!=g&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,d,g){var e=a.split(".");a=1===e.length;g=e[0];g=!a&&g in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var l=0;l<e.length-1;l++){var c=e[l];if(!(c in g))return;g=g[c]}e=e[e.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&"es6"===d?g[e]:null;b=b(d);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==d&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=
$jscomp.propertyToPolyfillSymbol[e],$jscomp.defineProperty(g,e,{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(d){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.generator={};
$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};
$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};
$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype.return=function(a){this.abruptCompletion_={return:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};
$jscomp.generator.Context.prototype.yieldAll=function(a,b){a=$jscomp.makeIterator(a);var d=a.next();$jscomp.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=b;else return this.yieldAllIterator_=a,this.yield(d.value,b)};$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,d){d?this.finallyContexts_[d]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){b=this.finallyContexts_.splice(b||0)[0];if(b=this.abruptCompletion_=this.abruptCompletion_||b){if(b.isException)return this.jumpToErrorHandler_();void 0!=b.jumpTo&&this.finallyAddress_<b.jumpTo?(this.nextAddress=b.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(d){return{value:d,done:!0}},a,this.context_.return);this.context_.return(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,d){try{var g=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(g);if(!g.done)return this.context_.stop_(),g;var e=g.value}catch(l){return this.context_.yieldAllIterator_=null,this.context_.throw_(l),this.nextStep_()}this.context_.yieldAllIterator_=null;d.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a.return,done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this.throw=function(b){return a.throw_(b)};this.return=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){b=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(b,a.prototype);return b};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(g){return a.next(g)}function d(g){return a.throw(g)}return new Promise(function(g,e){function l(c){c.done?g(c.value):Promise.resolve(c.value).then(b,d).then(l,e)}l(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
$jscomp.initSymbol=function(){};$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(e,l){this.$jscomp$symbol$id_=e;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:l})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var d=0,g=function(e){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(e||"")+"_"+d++,e)};return g},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<b.length;d++){var g=$jscomp.global[b[d]];"function"===typeof g&&"function"!=typeof g.prototype[a]&&$jscomp.defineProperty(g.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function d(c){return c instanceof e?c:new e(function(f,h){f(c)})}if(a&&(!($jscomp.FORCE_POLYFILL_PROMISE||$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION&&"undefined"===typeof $jscomp.global.PromiseRejectionEvent)||!$jscomp.global.Promise||-1===$jscomp.global.Promise.toString().indexOf("[native code]")))return a;b.prototype.asyncExecute=function(c){if(null==this.batch_){this.batch_=[];var f=this;this.asyncExecuteFunction(function(){f.executeBatch_()})}this.batch_.push(c)};
var g=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(c){g(c,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var c=this.batch_;this.batch_=[];for(var f=0;f<c.length;++f){var h=c[f];c[f]=null;try{h()}catch(k){this.asyncThrow_(k)}}}this.batch_=null};b.prototype.asyncThrow_=function(c){this.asyncExecuteFunction(function(){throw c;})};var e=function(c){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];this.isRejectionHandled_=!1;var f=this.createResolveAndReject_();
try{c(f.resolve,f.reject)}catch(h){f.reject(h)}};e.prototype.createResolveAndReject_=function(){function c(k){return function(m){h||(h=!0,k.call(f,m))}}var f=this,h=!1;return{resolve:c(this.resolveTo_),reject:c(this.reject_)}};e.prototype.resolveTo_=function(c){if(c===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof e)this.settleSameAsPromise_(c);else{a:switch(typeof c){case "object":var f=null!=c;break a;case "function":f=!0;break a;default:f=!1}f?this.resolveToNonPromiseObj_(c):
this.fulfill_(c)}};e.prototype.resolveToNonPromiseObj_=function(c){var f=void 0;try{f=c.then}catch(h){this.reject_(h);return}"function"==typeof f?this.settleSameAsThenable_(f,c):this.fulfill_(c)};e.prototype.reject_=function(c){this.settle_(2,c)};e.prototype.fulfill_=function(c){this.settle_(1,c)};e.prototype.settle_=function(c,f){if(0!=this.state_)throw Error("Cannot settle("+c+", "+f+"): Promise already settled in state"+this.state_);this.state_=c;this.result_=f;2===this.state_&&this.scheduleUnhandledRejectionCheck_();
this.executeOnSettledCallbacks_()};e.prototype.scheduleUnhandledRejectionCheck_=function(){var c=this;g(function(){if(c.notifyUnhandledRejection_()){var f=$jscomp.global.console;"undefined"!==typeof f&&f.error(c.result_)}},1)};e.prototype.notifyUnhandledRejection_=function(){if(this.isRejectionHandled_)return!1;var c=$jscomp.global.CustomEvent,f=$jscomp.global.Event,h=$jscomp.global.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):
"function"===typeof f?c=new f("unhandledrejection",{cancelable:!0}):(c=$jscomp.global.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.result_;return h(c)};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var c=0;c<this.onSettledCallbacks_.length;++c)l.asyncExecute(this.onSettledCallbacks_[c]);this.onSettledCallbacks_=null}};var l=new b;e.prototype.settleSameAsPromise_=function(c){var f=this.createResolveAndReject_();
c.callWhenSettled_(f.resolve,f.reject)};e.prototype.settleSameAsThenable_=function(c,f){var h=this.createResolveAndReject_();try{c.call(f,h.resolve,h.reject)}catch(k){h.reject(k)}};e.prototype.then=function(c,f){function h(n,p){return"function"==typeof n?function(q){try{k(n(q))}catch(r){m(r)}}:p}var k,m,t=new e(function(n,p){k=n;m=p});this.callWhenSettled_(h(c,k),h(f,m));return t};e.prototype.catch=function(c){return this.then(void 0,c)};e.prototype.callWhenSettled_=function(c,f){function h(){switch(k.state_){case 1:c(k.result_);
break;case 2:f(k.result_);break;default:throw Error("Unexpected state: "+k.state_);}}var k=this;null==this.onSettledCallbacks_?l.asyncExecute(h):this.onSettledCallbacks_.push(h);this.isRejectionHandled_=!0};e.resolve=d;e.reject=function(c){return new e(function(f,h){h(c)})};e.race=function(c){return new e(function(f,h){for(var k=$jscomp.makeIterator(c),m=k.next();!m.done;m=k.next())d(m.value).callWhenSettled_(f,h)})};e.all=function(c){var f=$jscomp.makeIterator(c),h=f.next();return h.done?d([]):new e(function(k,
m){function t(q){return function(r){n[q]=r;p--;0==p&&k(n)}}var n=[],p=0;do n.push(void 0),p++,d(h.value).callWhenSettled_(t(n.length-1),m),h=f.next();while(!h.done)})};return e},"es6","es3");
var MM_QUERY_STATUS_INITITATED=0,MM_QUERY_STATUS_FINDING_SERVERS=1,MM_QUERY_STATUS_CHANGING_MAPS=2,MM_QUERY_STATUS_FAILED=3,MM_QUERY_STATUS_CANCELLED=4,MM_QUERY_STATUS_FINISHED=5,MM_QUERY_UPDATE_INTERVAL=3,MM_SOUND_JOIN=SOUND_BASE+"ui/mm_join.wav",MM_SOUND_QUEUE=SOUND_BASE+"ui/mm_queue.wav",m_bMMIsSearchInProgress=!1,m_aActiveMatchResults=[];
function Matchmaking_CreateMatchWithPageOptions(){var a={};a.region=document.querySelector("#mm_option_region").value;a.region_locked=document.querySelector("input[name=region_locked]").checked;a.map=document.querySelector("#mapname").value;a.mission=document.querySelector("#missionname").value;Matchmaking_CreateMatch(a)}
function Matchmaking_CreateMatch(a){a=void 0===a?{}:a;m_bMMIsSearchInProgress||(m_bMMIsSearchInProgress=!0,m_aActiveMatchResults=[],Creators.Actions.API.send("/api/IMatchmaking/Match",{method:"POST",data:a}).then(function(b){"SUCCESS"==b.result?(localStorage.matchmaking_match_id=b.match_id,Creators.Actions.Sounds.play(MM_SOUND_QUEUE),Matchmaking_CheckMatchStatus(b.match_id)):m_bMMIsSearchInProgress=!1}).catch(function(b){m_bMMIsSearchInProgress=!1;Creators.Actions.Modals.error({name:"Error "+b.error.code,
innerText:b.error.title})}))}function Matchmaking_CancelMatch(a){Creators.Actions.API.send("/api/IMatchmaking/Match",{method:"DELETE",data:{match_id:a}})}function Matchmaking_CancelActiveMatch(a){m_bMMIsSearchInProgress&&(a=localStorage.matchmaking_match_id)&&Matchmaking_CancelMatch(a);localStorage.removeItem("matchmaking_match_id");Matchmaking_SetStatusPanelVisible(!1);Matchmaking_SetResultPanelVisible(!1);m_bMMIsSearchInProgress=!1;m_aActiveMatchResults=[]}
function Matchmaking_CheckMatchStatus(a){Creators.Actions.API.send("/api/IMatchmaking/Match",{data:{match_id:a,embed_html:!0,best_result:!0}}).then(function(b){if("SUCCESS"==b.result){if(a==localStorage.matchmaking_match_id){var d=!1;switch(b.status){case MM_QUERY_STATUS_INITITATED:case MM_QUERY_STATUS_FINDING_SERVERS:case MM_QUERY_STATUS_CHANGING_MAPS:d=!0}var g=!1,e=!1;if(d){g=!0;switch(b.status){case MM_QUERY_STATUS_INITITATED:case MM_QUERY_STATUS_FINDING_SERVERS:Matchmaking_SetStatusPanelLog("Searching for servers...");
break;case MM_QUERY_STATUS_CHANGING_MAPS:Matchmaking_SetStatusPanelLog("Trying to rotate maps on empty servers...")}setTimeout(function(){a==localStorage.matchmaking_match_id&&Matchmaking_CheckMatchStatus(a)},1E3*MM_QUERY_UPDATE_INTERVAL)}else if(m_bMMIsSearchInProgress&&Creators.Actions.Sounds.play(MM_SOUND_JOIN),e=!0,m_aActiveMatchResults=b.servers,Matchmaking_ResetResultPanelServerList(),Matchmaking_SetResultShowMoreServerCount(b.servers.length),b=b.servers[0]){var l=document.querySelector("#matchmaking_result_panel .qps_server_container");
l&&(l.innerHTML+=b.html)}m_bMMIsSearchInProgress=d;Matchmaking_SetStatusPanelVisible(g);Matchmaking_SetResultPanelVisible(e)}}else Matchmaking_SetStatusPanelVisible(!1),Matchmaking_SetResultPanelVisible(!1)})}function Matchmaking_ShowFullActiveMatchResults(){0<m_aActiveMatchResults.length&&Creators.Actions.Modals.alert({name:"Search Results",innerHTML:m_aActiveMatchResults.map(function(a){return a.html}).join(""),options:{height:"500px",width:"700px"}})}
function Matchmaking_SetStatusPanelVisible(a){var b=document.querySelector("#matchmaking_status_panel");b&&(a?b.classList.add("visible"):b.classList.remove("visible"))}function Matchmaking_SetStatusPanelLog(a){var b=document.querySelector("#matchmaking_status_panel .qps-log");b&&(b.innerText=a)}
function Matchmaking_SetResultPanelVisible(a){var b=document.querySelector("#matchmaking_result_panel");0<b.querySelector(".qps_server_container").children.length?b.querySelector(".qps-log").innerText="Warning! Search results may not be 100% accurate.":b.querySelector(".qps-log").innerText="We could not find any servers matching your request at this time. Please try again later.";b&&(a?b.classList.add("visible"):b.classList.remove("visible"))}
function Matchmaking_ResetResultPanelServerList(a){if(a=document.querySelector("#matchmaking_result_panel .qps_server_container"))a.innerHTML=""}function Matchmaking_SetResultShowMoreServerCount(a){var b=document.querySelector("#matchmaking_result_panel .qps_show_more");b&&(0<a?(b.innerText="Show More ("+a+")",b.style.display=""):b.style.display="none")}
function Matchmaking_SelectAllMissions(a){a=void 0===a?!1:a;for(var b=$jscomp.makeIterator(document.querySelectorAll(".qp_tour_mission input[type=checkbox]")),d=b.next();!d.done;d=b.next())d.value.checked=a}function Matchmaking_SelectNoncompletedMissions(a){a=void 0===a?!1:a;Matchmaking_SelectAllMissions(!1);for(var b=$jscomp.makeIterator(document.querySelectorAll(".qp_tour_mission:not(.completed) input[type=checkbox]")),d=b.next();!d.done;d=b.next())d.value.checked=a}
function Matchmaking_SelectNoncompletedMissionsFromCheckbox(a){document.querySelector("#checkbox_any_mission").checked=!1;Matchmaking_SelectNoncompletedMissions(a.checked)}function Matchmaking_SelectAllMissionsFromCheckbox(a){document.querySelector("#checkbox_not_completed").checked=!1;Matchmaking_SelectAllMissions(a.checked)}
function Matchmaking_CreateMatchFromCoopTourPage(){var a=[].concat($jscomp.arrayFromIterable(document.querySelectorAll(".qp_tour_mission input[type=checkbox]:checked"))).map(function(b){return b.name});1>a.length||Matchmaking_CreateMatch({missions:a,region:Matchmaking_GetRegionCodeFromPage(),region_locked:Matchmaking_GetOptionsFromPage().region_locked})}function Matchmaking_SelectAllGamemodesFromCheckbox(a){Matchmaking_SelectAllGamemodes(a.checked)}
function Matchmaking_SelectAllGamemodes(a){a=void 0===a?!1:a;for(var b=$jscomp.makeIterator(document.querySelectorAll("#quickplay_gamemodes input[type=checkbox]")),d=b.next();!d.done;d=b.next())d.value.checked=a}
function Matchmaking_CreateMatchFromPubsPage(){var a=[].concat($jscomp.arrayFromIterable(document.querySelectorAll(".quickplay_gamemode input[type=checkbox]:checked"))).map(function(b){return b.name});1>a.length||Matchmaking_CreateMatch({maps:a,region:Matchmaking_GetRegionCodeFromPage(),region_locked:Matchmaking_GetOptionsFromPage().region_locked})}function Matchmaking_GetOptionsFromPage(){return{region_locked:document.querySelector("input[name=region_locked]").checked||!1}}
function Matchmaking_GetRegionCodeFromPage(){return document.querySelector("#mm_option_region").value}document.addEventListener("DOMContentLoaded",function(a){(a=localStorage.matchmaking_match_id)&&Matchmaking_CheckMatchStatus(a)});
function Matchmaking_OpenAssetsAlertBeforeRedirect(a){var b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress)return event.preventDefault(),(b="true"!=localStorage.mm_asset_msg_shown)?d.yield(Matchmaking_OpenAssetPackAlertMessage(),3):d.jumpTo(2);2!=d.nextAddress&&(localStorage.mm_asset_msg_shown=!0);document.location.href=a;d.jumpToEnd()})}
function Matchmaking_OpenAssetPackAlertMessage(){return new Promise(function(a,b){Creators.Actions.Modals.alert({name:"Hey! Before you go...",innerHTML:"\n<p>The server you're about to join has several custom downloads, so you may want to download these assets through our website to skip the long wait!</p>\n<p>You can do this manually by downloading the <a href='/assetpack' target='_blank'>zip</a>, or automatically by installing our <a href='/launcher' target='_blank'>launcher</a>.</p>\n<p>Closing this popup will connect you to the server.</p>"}).then(function(){a()}).catch(function(){b()})})}
;