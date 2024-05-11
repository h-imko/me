(()=>{var as=Object.create;var X=Object.defineProperty;var cs=Object.getOwnPropertyDescriptor;var ns=Object.getOwnPropertyNames;var rs=Object.getPrototypeOf,os=Object.prototype.hasOwnProperty;var q=(v=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(v,{get:(f,N)=>(typeof require<"u"?require:f)[N]}):v)(function(v){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+v+'" is not supported')});var ms=(v,f)=>()=>(f||v((f={exports:{}}).exports,f),f.exports);var ls=(v,f,N,L)=>{if(f&&typeof f=="object"||typeof f=="function")for(let E of ns(f))!os.call(v,E)&&E!==N&&X(v,E,{get:()=>f[E],enumerable:!(L=cs(f,E))||L.enumerable});return v};var gs=(v,f,N)=>(N=v!=null?as(rs(v)):{},ls(f||!v||!v.__esModule?X(N,"default",{value:v,enumerable:!0}):N,v));var K=ms((G,W)=>{(function(v){if(typeof G=="object"&&typeof W<"u")W.exports=v();else if(typeof define=="function"&&define.amd)define([],v);else{var f;typeof window<"u"?f=window:typeof global<"u"?f=global:typeof self<"u"?f=self:f=this,f.ejs=v()}})(function(){var v,f,N;return function(){function L(E,n,u){function p(w,i){if(!n[w]){if(!E[w]){var o=typeof q=="function"&&q;if(!i&&o)return o(w,!0);if(g)return g(w,!0);var r=new Error("Cannot find module '"+w+"'");throw r.code="MODULE_NOT_FOUND",r}var e=n[w]={exports:{}};E[w][0].call(e.exports,function(m){var k=E[w][1][m];return p(k||m)},e,e.exports,L,E,n,u)}return n[w].exports}for(var g=typeof q=="function"&&q,S=0;S<u.length;S++)p(u[S]);return p}return L}()({1:[function(L,E,n){"use strict";var u=L("fs"),p=L("path"),g=L("./utils"),S=!1,w=L("../package.json").version,i="<",o=">",r="%",e="locals",m="ejs",k="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",_=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],h=_.concat("cache"),D=/^\uFEFF/,y=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;n.cache=g.cache,n.fileLoader=u.readFileSync,n.localsName=e,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,a,s){var c=p.dirname,l=p.extname,b=p.resolve,j=b(s?a:c(a),t),C=l(t);return C||(j+=".ejs"),j};function d(t,a){var s;if(a.some(function(c){return s=n.resolveInclude(t,c,!0),u.existsSync(s)}))return s}function T(t,a){var s,c,l=a.views,b=/^[A-Za-z]+:\\|^\//.exec(t);if(b&&b.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?s=d(t,a.root):s=n.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(c=n.resolveInclude(t,a.filename),u.existsSync(c)&&(s=c)),!s&&Array.isArray(l)&&(s=d(t,l)),!s&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return s}function P(t,a){var s,c=t.filename,l=arguments.length>1;if(t.cache){if(!c)throw new Error("cache option requires a filename");if(s=n.cache.get(c),s)return s;l||(a=H(c).toString().replace(D,""))}else if(!l){if(!c)throw new Error("Internal EJS error: no file name or template provided");a=H(c).toString().replace(D,"")}return s=n.compile(a,t),t.cache&&n.cache.set(c,s),s}function Y(t,a,s){var c;if(s){try{c=P(t)(a)}catch(l){return s(l)}s(null,c)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(l,b){try{c=P(t)(a),l(c)}catch(j){b(j)}});throw new Error("Please provide a callback function")}}function H(t){return n.fileLoader(t)}function ss(t,a){var s=g.shallowCopy(g.createNullProtoObjWherePossible(),a);if(s.filename=T(t,s),typeof a.includer=="function"){var c=a.includer(t,s.filename);if(c&&(c.filename&&(s.filename=c.filename),c.template))return P(s,c.template)}return P(s)}function U(t,a,s,c,l){var b=a.split(`
`),j=Math.max(c-3,0),C=Math.min(b.length,c+3),O=l(s),z=b.slice(j,C).map(function(I,M){var F=M+j+1;return(F==c?" >> ":"    ")+F+"| "+I}).join(`
`);throw t.path=O,t.message=(O||"ejs")+":"+c+`
`+z+`

`+t.message,t}function J(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(a,s){var c;return s&&s.scope&&(S||(S=!0),s.context||(s.context=s.scope),delete s.scope),c=new x(a,s),c.compile()},n.render=function(t,a,s){var c=a||g.createNullProtoObjWherePossible(),l=s||g.createNullProtoObjWherePossible();return arguments.length==2&&g.shallowCopyFromList(l,c,_),P(l,t)(c)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),s,c={filename:a},l,b;return typeof arguments[arguments.length-1]=="function"&&(s=t.pop()),t.length?(l=t.shift(),t.length?g.shallowCopy(c,t.pop()):(l.settings&&(l.settings.views&&(c.views=l.settings.views),l.settings["view cache"]&&(c.cache=!0),b=l.settings["view options"],b&&g.shallowCopy(c,b)),g.shallowCopyFromList(c,l,h)),c.filename=a):l=g.createNullProtoObjWherePossible(),Y(c,l,s)},n.Template=x,n.clearCache=function(){n.cache.reset()};function x(t,a){a=a||g.createNullProtoObjWherePossible();var s=g.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",s.client=a.client||!1,s.escapeFunction=a.escape||a.escapeFunction||g.escapeXML,s.compileDebug=a.compileDebug!==!1,s.debug=!!a.debug,s.filename=a.filename,s.openDelimiter=a.openDelimiter||n.openDelimiter||i,s.closeDelimiter=a.closeDelimiter||n.closeDelimiter||o,s.delimiter=a.delimiter||n.delimiter||r,s.strict=a.strict||!1,s.context=a.context,s.cache=a.cache||!1,s.rmWhitespace=a.rmWhitespace,s.root=a.root,s.includer=a.includer,s.outputFunctionName=a.outputFunctionName,s.localsName=a.localsName||n.localsName||e,s.views=a.views,s.async=a.async,s.destructuredLocals=a.destructuredLocals,s.legacyInclude=typeof a.legacyInclude<"u"?!!a.legacyInclude:!0,s.strict?s._with=!1:s._with=typeof a._with<"u"?a._with:!0,this.opts=s,this.regex=this.createRegex()}x.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},x.prototype={createRegex:function(){var t=k,a=g.escapeRegExpChars(this.opts.delimiter),s=g.escapeRegExpChars(this.opts.openDelimiter),c=g.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,s).replace(/>/g,c),new RegExp(t)},compile:function(){var t,a,s=this.opts,c="",l="",b=s.escapeFunction,j,C=s.filename?JSON.stringify(s.filename):"undefined";if(!this.source){if(this.generateSource(),c+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,s.outputFunctionName){if(!y.test(s.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");c+="  var "+s.outputFunctionName+` = __append;
`}if(s.localsName&&!y.test(s.localsName))throw new Error("localsName is not a valid JS identifier.");if(s.destructuredLocals&&s.destructuredLocals.length){for(var O="  var __locals = ("+s.localsName+` || {}),
`,z=0;z<s.destructuredLocals.length;z++){var I=s.destructuredLocals[z];if(!y.test(I))throw new Error("destructuredLocals["+z+"] is not a valid JS identifier.");z>0&&(O+=`,
  `),O+=I+" = __locals."+I}c+=O+`;
`}s._with!==!1&&(c+="  with ("+s.localsName+` || {}) {
`,l+=`  }
`),l+=`  return __output;
`,this.source=c+this.source+l}s.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+C+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,s.client&&(t="escapeFn = escapeFn || "+b.toString()+`;
`+t,s.compileDebug&&(t="rethrow = rethrow || "+U.toString()+`;
`+t)),s.strict&&(t=`"use strict";
`+t),s.debug,s.compileDebug&&s.filename&&(t=t+`
//# sourceURL=`+C+`
`);try{if(s.async)try{j=new Function("return (async function(){}).constructor;")()}catch(A){throw A instanceof SyntaxError?new Error("This environment does not support async/await"):A}else j=Function;a=new j(s.localsName+", escapeFn, include, rethrow",t)}catch(A){throw A instanceof SyntaxError&&(s.filename&&(A.message+=" in "+s.filename),A.message+=` while compiling ejs

`,A.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,A.message+="https://github.com/RyanZim/EJS-Lint",s.async||(A.message+=`
`,A.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),A}var M=s.client?a:function($){var es=function(is,V){var R=g.shallowCopy(g.createNullProtoObjWherePossible(),$);return V&&(R=g.shallowCopy(R,V)),ss(is,s)(R)};return a.apply(s.context,[$||g.createNullProtoObjWherePossible(),b,es,U])};if(s.filename&&typeof Object.defineProperty=="function"){var F=s.filename,ts=p.basename(F,p.extname(F));try{Object.defineProperty(M,"name",{value:ts,writable:!1,enumerable:!1,configurable:!0})}catch{}}return M},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,s=this.parseTemplateText(),c=this.opts.delimiter,l=this.opts.openDelimiter,b=this.opts.closeDelimiter;s&&s.length&&s.forEach(function(j,C){var O;if(j.indexOf(l+c)===0&&j.indexOf(l+c+c)!==0&&(O=s[C+2],!(O==c+b||O=="-"+c+b||O=="_"+c+b)))throw new Error('Could not find matching close tag for "'+j+'".');a.scanLine(j)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,s=a.exec(t),c=[],l;s;)l=s.index,l!==0&&(c.push(t.substring(0,l)),t=t.slice(l)),c.push(s[0]),t=t.slice(s[0].length),s=a.exec(t);return t&&c.push(t),c},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,s=this.opts.delimiter,c=this.opts.openDelimiter,l=this.opts.closeDelimiter,b=0;switch(b=t.split(`
`).length-1,t){case c+s:case c+s+"_":this.mode=x.modes.EVAL;break;case c+s+"=":this.mode=x.modes.ESCAPED;break;case c+s+"-":this.mode=x.modes.RAW;break;case c+s+"#":this.mode=x.modes.COMMENT;break;case c+s+s:this.mode=x.modes.LITERAL,this.source+='    ; __append("'+t.replace(c+s+s,c+s)+`")
`;break;case s+s+l:this.mode=x.modes.LITERAL,this.source+='    ; __append("'+t.replace(s+s+l,s+l)+`")
`;break;case s+l:case"-"+s+l:case"_"+s+l:this.mode==x.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case x.modes.EVAL:case x.modes.ESCAPED:case x.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case x.modes.EVAL:this.source+="    ; "+t+`
`;break;case x.modes.ESCAPED:this.source+="    ; __append(escapeFn("+J(t)+`))
`;break;case x.modes.RAW:this.source+="    ; __append("+J(t)+`)
`;break;case x.modes.COMMENT:break;case x.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&b&&(this.currentLine+=b,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=g.escapeXML,n.__express=n.renderFile,n.VERSION=w,n.name=m,typeof window<"u"&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(L,E,n){"use strict";var u=/[|\\{}()[\]^$+*?.]/g,p=Object.prototype.hasOwnProperty,g=function(e,m){return p.apply(e,[m])};n.escapeRegExpChars=function(e){return e?String(e).replace(u,"\\$&"):""};var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},w=/[&<>'"]/g;function i(e){return S[e]||e}var o=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(e){return e==null?"":String(e).replace(w,i)};function r(){return Function.prototype.toString.call(this)+`;
`+o}try{typeof Object.defineProperty=="function"?Object.defineProperty(n.escapeXML,"toString",{value:r}):n.escapeXML.toString=r}catch{}n.shallowCopy=function(e,m){if(m=m||{},e!=null)for(var k in m)g(m,k)&&(k==="__proto__"||k==="constructor"||(e[k]=m[k]));return e},n.shallowCopyFromList=function(e,m,k){if(k=k||[],m=m||{},e!=null)for(var _=0;_<k.length;_++){var h=k[_];if(typeof m[h]<"u"){if(!g(m,h)||h==="__proto__"||h==="constructor")continue;e[h]=m[h]}}return e},n.cache={_data:{},set:function(e,m){this._data[e]=m},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}},n.hyphenToCamel=function(e){return e.replace(/-[a-z]/g,function(m){return m[1].toUpperCase()})},n.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()},{}],3:[function(L,E,n){},{}],4:[function(L,E,n){(function(u){function p(i,o){for(var r=0,e=i.length-1;e>=0;e--){var m=i[e];m==="."?i.splice(e,1):m===".."?(i.splice(e,1),r++):r&&(i.splice(e,1),r--)}if(o)for(;r--;r)i.unshift("..");return i}n.resolve=function(){for(var i="",o=!1,r=arguments.length-1;r>=-1&&!o;r--){var e=r>=0?arguments[r]:u.cwd();if(typeof e!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!e)continue;i=e+"/"+i,o=e.charAt(0)==="/"}return i=p(S(i.split("/"),function(m){return!!m}),!o).join("/"),(o?"/":"")+i||"."},n.normalize=function(i){var o=n.isAbsolute(i),r=w(i,-1)==="/";return i=p(S(i.split("/"),function(e){return!!e}),!o).join("/"),!i&&!o&&(i="."),i&&r&&(i+="/"),(o?"/":"")+i},n.isAbsolute=function(i){return i.charAt(0)==="/"},n.join=function(){var i=Array.prototype.slice.call(arguments,0);return n.normalize(S(i,function(o,r){if(typeof o!="string")throw new TypeError("Arguments to path.join must be strings");return o}).join("/"))},n.relative=function(i,o){i=n.resolve(i).substr(1),o=n.resolve(o).substr(1);function r(y){for(var d=0;d<y.length&&y[d]==="";d++);for(var T=y.length-1;T>=0&&y[T]==="";T--);return d>T?[]:y.slice(d,T-d+1)}for(var e=r(i.split("/")),m=r(o.split("/")),k=Math.min(e.length,m.length),_=k,h=0;h<k;h++)if(e[h]!==m[h]){_=h;break}for(var D=[],h=_;h<e.length;h++)D.push("..");return D=D.concat(m.slice(_)),D.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(i){if(typeof i!="string"&&(i=i+""),i.length===0)return".";for(var o=i.charCodeAt(0),r=o===47,e=-1,m=!0,k=i.length-1;k>=1;--k)if(o=i.charCodeAt(k),o===47){if(!m){e=k;break}}else m=!1;return e===-1?r?"/":".":r&&e===1?"/":i.slice(0,e)};function g(i){typeof i!="string"&&(i=i+"");var o=0,r=-1,e=!0,m;for(m=i.length-1;m>=0;--m)if(i.charCodeAt(m)===47){if(!e){o=m+1;break}}else r===-1&&(e=!1,r=m+1);return r===-1?"":i.slice(o,r)}n.basename=function(i,o){var r=g(i);return o&&r.substr(-1*o.length)===o&&(r=r.substr(0,r.length-o.length)),r},n.extname=function(i){typeof i!="string"&&(i=i+"");for(var o=-1,r=0,e=-1,m=!0,k=0,_=i.length-1;_>=0;--_){var h=i.charCodeAt(_);if(h===47){if(!m){r=_+1;break}continue}e===-1&&(m=!1,e=_+1),h===46?o===-1?o=_:k!==1&&(k=1):o!==-1&&(k=-1)}return o===-1||e===-1||k===0||k===1&&o===e-1&&o===r+1?"":i.slice(o,e)};function S(i,o){if(i.filter)return i.filter(o);for(var r=[],e=0;e<i.length;e++)o(i[e],e,i)&&r.push(i[e]);return r}var w="ab".substr(-1)==="b"?function(i,o,r){return i.substr(o,r)}:function(i,o,r){return o<0&&(o=i.length+o),i.substr(o,r)}}).call(this,L("_process"))},{_process:5}],5:[function(L,E,n){var u=E.exports={},p,g;function S(){throw new Error("setTimeout has not been defined")}function w(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?p=setTimeout:p=S}catch{p=S}try{typeof clearTimeout=="function"?g=clearTimeout:g=w}catch{g=w}})();function i(d){if(p===setTimeout)return setTimeout(d,0);if((p===S||!p)&&setTimeout)return p=setTimeout,setTimeout(d,0);try{return p(d,0)}catch{try{return p.call(null,d,0)}catch{return p.call(this,d,0)}}}function o(d){if(g===clearTimeout)return clearTimeout(d);if((g===w||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(d);try{return g(d)}catch{try{return g.call(null,d)}catch{return g.call(this,d)}}}var r=[],e=!1,m,k=-1;function _(){!e||!m||(e=!1,m.length?r=m.concat(r):k=-1,r.length&&h())}function h(){if(!e){var d=i(_);e=!0;for(var T=r.length;T;){for(m=r,r=[];++k<T;)m&&m[k].run();k=-1,T=r.length}m=null,e=!1,o(d)}}u.nextTick=function(d){var T=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)T[P-1]=arguments[P];r.push(new D(d,T)),r.length===1&&!e&&i(h)};function D(d,T){this.fun=d,this.array=T}D.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function y(){}u.on=y,u.addListener=y,u.once=y,u.off=y,u.removeListener=y,u.removeAllListeners=y,u.emit=y,u.prependListener=y,u.prependOnceListener=y,u.listeners=function(d){return[]},u.binding=function(d){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(d){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],6:[function(L,E,n){E.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.9",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha -u tdd"}}},{}]},{},[1])(1)})});var fs=gs(K()),Z=':root{--mobile: 1220px;--laptop: 1400px}@font-face{font-family:"OpenSans";src:url(/assets/static/font/OpenSans-Variable.woff2) format("woff2-variations");font-display:swap;font-weight:125 950;font-style:normal}h1,.h1{font-style:normal;font-weight:700;font-size:35px}@media(max-width: 1220px){h1,.h1{font-style:normal;font-weight:700;font-size:24px}}h2,.h2{font-style:normal;font-weight:700;font-size:28px}@media(max-width: 1220px){h2,.h2{font-style:normal;font-weight:700;font-size:22px}}h3,.h3{font-style:normal;font-weight:700;font-size:22px}@media(max-width: 1220px){h3,.h3{font-style:normal;font-weight:700;font-size:20px}}h4,.h4{font-style:normal;font-weight:700;font-size:18px}@media(max-width: 1220px){h4,.h4{font-style:normal;font-weight:700;font-size:18px}}h5,.h5{font-style:normal;font-weight:700;font-size:16px}@media(max-width: 1220px){h5,.h5{font-style:normal;font-weight:700;font-size:16px}}h6,.h6{font-style:normal;font-weight:700;font-size:14px}@media(max-width: 1220px){h6,.h6{font-style:normal;font-weight:700;font-size:14px;line-height:143.69%}}.font--ruble{font-family:Arial,Helvetica,sans-serif}body,input{font-family:"OpenSans";color:#202a30}a{color:inherit;transition:all ease var(--transition-duration)}.icon--arrow-circle-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down)}.icon--arrow-down-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2)}.icon--arrow-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down)}.icon--arrow-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-left);mask-image:url(/assets/static/img/icon/stack.svg#arrow-left)}.icon--arrow-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right)}.icon--arrow-right2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2)}.icon--arrow-up{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-up);mask-image:url(/assets/static/img/icon/stack.svg#arrow-up)}.icon--box-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box-2);mask-image:url(/assets/static/img/icon/stack.svg#box-2)}.icon--box{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box);mask-image:url(/assets/static/img/icon/stack.svg#box)}.icon--building{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#building);mask-image:url(/assets/static/img/icon/stack.svg#building)}.icon--buildings-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings-2);mask-image:url(/assets/static/img/icon/stack.svg#buildings-2)}.icon--buildings{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings);mask-image:url(/assets/static/img/icon/stack.svg#buildings)}.icon--calendar{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#calendar);mask-image:url(/assets/static/img/icon/stack.svg#calendar)}.icon--call{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#call);mask-image:url(/assets/static/img/icon/stack.svg#call)}.icon--camera{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#camera);mask-image:url(/assets/static/img/icon/stack.svg#camera)}.icon--card{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#card);mask-image:url(/assets/static/img/icon/stack.svg#card)}.icon--check-success{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check-success);mask-image:url(/assets/static/img/icon/stack.svg#check-success)}.icon--check{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check);mask-image:url(/assets/static/img/icon/stack.svg#check)}.icon--clipboard-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text)}.icon--clipboard-tick{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick)}.icon--clock{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clock);mask-image:url(/assets/static/img/icon/stack.svg#clock)}.icon--close{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#close);mask-image:url(/assets/static/img/icon/stack.svg#close)}.icon--direct-inbox{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox);mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox)}.icon--document-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#document-text);mask-image:url(/assets/static/img/icon/stack.svg#document-text)}.icon--edit-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#edit-2);mask-image:url(/assets/static/img/icon/stack.svg#edit-2)}.icon--element-3{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#element-3);mask-image:url(/assets/static/img/icon/stack.svg#element-3)}.icon--folder-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-2);mask-image:url(/assets/static/img/icon/stack.svg#folder-2)}.icon--folder-minus{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-minus);mask-image:url(/assets/static/img/icon/stack.svg#folder-minus)}.icon--folder{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder);mask-image:url(/assets/static/img/icon/stack.svg#folder)}.icon--home{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#home);mask-image:url(/assets/static/img/icon/stack.svg#home)}.icon--house-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house-2);mask-image:url(/assets/static/img/icon/stack.svg#house-2)}.icon--house{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house);mask-image:url(/assets/static/img/icon/stack.svg#house)}.icon--loading{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#loading);mask-image:url(/assets/static/img/icon/stack.svg#loading)}.icon--location{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#location);mask-image:url(/assets/static/img/icon/stack.svg#location)}.icon--login{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#login);mask-image:url(/assets/static/img/icon/stack.svg#login)}.icon--logo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logo);mask-image:url(/assets/static/img/icon/stack.svg#logo)}.icon--logout-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout-2);mask-image:url(/assets/static/img/icon/stack.svg#logout-2)}.icon--logout{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout);mask-image:url(/assets/static/img/icon/stack.svg#logout)}.icon--map-marker{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#map-marker);mask-image:url(/assets/static/img/icon/stack.svg#map-marker)}.icon--menu{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#menu);mask-image:url(/assets/static/img/icon/stack.svg#menu)}.icon--note-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note-2);mask-image:url(/assets/static/img/icon/stack.svg#note-2)}.icon--note{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note);mask-image:url(/assets/static/img/icon/stack.svg#note)}.icon--noun-metro{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#noun-metro);mask-image:url(/assets/static/img/icon/stack.svg#noun-metro)}.icon--people-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people-2);mask-image:url(/assets/static/img/icon/stack.svg#people-2)}.icon--people{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people);mask-image:url(/assets/static/img/icon/stack.svg#people)}.icon--profile-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#profile-circle);mask-image:url(/assets/static/img/icon/stack.svg#profile-circle)}.icon--ruble-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble-2);mask-image:url(/assets/static/img/icon/stack.svg#ruble-2)}.icon--ruble{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble);mask-image:url(/assets/static/img/icon/stack.svg#ruble)}.icon--search-normal{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#search-normal);mask-image:url(/assets/static/img/icon/stack.svg#search-normal)}.icon--shopping-cart{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart);mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart)}.icon--slider-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-left);mask-image:url(/assets/static/img/icon/stack.svg#slider-left)}.icon--slider-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-right);mask-image:url(/assets/static/img/icon/stack.svg#slider-right)}.icon--sms-tracking{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking);mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking)}.icon--spinner{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#spinner);mask-image:url(/assets/static/img/icon/stack.svg#spinner)}.icon--task-square{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#task-square);mask-image:url(/assets/static/img/icon/stack.svg#task-square)}.icon--tick-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#tick-circle);mask-image:url(/assets/static/img/icon/stack.svg#tick-circle)}.icon--ticket-discount{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount);mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount)}.icon--trash{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#trash);mask-image:url(/assets/static/img/icon/stack.svg#trash)}.icon--undo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#undo);mask-image:url(/assets/static/img/icon/stack.svg#undo)}.icon--user-tag-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2);mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2)}.icon--user-tag{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag);mask-image:url(/assets/static/img/icon/stack.svg#user-tag)}.icon--wallet-money{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#wallet-money);mask-image:url(/assets/static/img/icon/stack.svg#wallet-money)}.icon--warning-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#warning-2);mask-image:url(/assets/static/img/icon/stack.svg#warning-2)}.icon--arrow-circle-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down)}.icon--arrow-down-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2)}.icon--arrow-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down)}.icon--arrow-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-left);mask-image:url(/assets/static/img/icon/stack.svg#arrow-left)}.icon--arrow-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right)}.icon--arrow-right2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2)}.icon--arrow-up{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-up);mask-image:url(/assets/static/img/icon/stack.svg#arrow-up)}.icon--box-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box-2);mask-image:url(/assets/static/img/icon/stack.svg#box-2)}.icon--box{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box);mask-image:url(/assets/static/img/icon/stack.svg#box)}.icon--building{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#building);mask-image:url(/assets/static/img/icon/stack.svg#building)}.icon--buildings-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings-2);mask-image:url(/assets/static/img/icon/stack.svg#buildings-2)}.icon--buildings{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings);mask-image:url(/assets/static/img/icon/stack.svg#buildings)}.icon--calendar{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#calendar);mask-image:url(/assets/static/img/icon/stack.svg#calendar)}.icon--call{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#call);mask-image:url(/assets/static/img/icon/stack.svg#call)}.icon--camera{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#camera);mask-image:url(/assets/static/img/icon/stack.svg#camera)}.icon--card{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#card);mask-image:url(/assets/static/img/icon/stack.svg#card)}.icon--check-success{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check-success);mask-image:url(/assets/static/img/icon/stack.svg#check-success)}.icon--check{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check);mask-image:url(/assets/static/img/icon/stack.svg#check)}.icon--clipboard-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text)}.icon--clipboard-tick{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick)}.icon--clock{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clock);mask-image:url(/assets/static/img/icon/stack.svg#clock)}.icon--close{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#close);mask-image:url(/assets/static/img/icon/stack.svg#close)}.icon--direct-inbox{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox);mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox)}.icon--document-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#document-text);mask-image:url(/assets/static/img/icon/stack.svg#document-text)}.icon--edit-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#edit-2);mask-image:url(/assets/static/img/icon/stack.svg#edit-2)}.icon--element-3{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#element-3);mask-image:url(/assets/static/img/icon/stack.svg#element-3)}.icon--folder-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-2);mask-image:url(/assets/static/img/icon/stack.svg#folder-2)}.icon--folder-minus{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-minus);mask-image:url(/assets/static/img/icon/stack.svg#folder-minus)}.icon--folder{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder);mask-image:url(/assets/static/img/icon/stack.svg#folder)}.icon--home{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#home);mask-image:url(/assets/static/img/icon/stack.svg#home)}.icon--house-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house-2);mask-image:url(/assets/static/img/icon/stack.svg#house-2)}.icon--house{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house);mask-image:url(/assets/static/img/icon/stack.svg#house)}.icon--loading{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#loading);mask-image:url(/assets/static/img/icon/stack.svg#loading)}.icon--location{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#location);mask-image:url(/assets/static/img/icon/stack.svg#location)}.icon--login{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#login);mask-image:url(/assets/static/img/icon/stack.svg#login)}.icon--logo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logo);mask-image:url(/assets/static/img/icon/stack.svg#logo)}.icon--logout-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout-2);mask-image:url(/assets/static/img/icon/stack.svg#logout-2)}.icon--logout{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout);mask-image:url(/assets/static/img/icon/stack.svg#logout)}.icon--map-marker{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#map-marker);mask-image:url(/assets/static/img/icon/stack.svg#map-marker)}.icon--menu{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#menu);mask-image:url(/assets/static/img/icon/stack.svg#menu)}.icon--note-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note-2);mask-image:url(/assets/static/img/icon/stack.svg#note-2)}.icon--note{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note);mask-image:url(/assets/static/img/icon/stack.svg#note)}.icon--noun-metro{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#noun-metro);mask-image:url(/assets/static/img/icon/stack.svg#noun-metro)}.icon--people-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people-2);mask-image:url(/assets/static/img/icon/stack.svg#people-2)}.icon--people{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people);mask-image:url(/assets/static/img/icon/stack.svg#people)}.icon--profile-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#profile-circle);mask-image:url(/assets/static/img/icon/stack.svg#profile-circle)}.icon--ruble-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble-2);mask-image:url(/assets/static/img/icon/stack.svg#ruble-2)}.icon--ruble{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble);mask-image:url(/assets/static/img/icon/stack.svg#ruble)}.icon--search-normal{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#search-normal);mask-image:url(/assets/static/img/icon/stack.svg#search-normal)}.icon--shopping-cart{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart);mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart)}.icon--slider-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-left);mask-image:url(/assets/static/img/icon/stack.svg#slider-left)}.icon--slider-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-right);mask-image:url(/assets/static/img/icon/stack.svg#slider-right)}.icon--sms-tracking{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking);mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking)}.icon--spinner{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#spinner);mask-image:url(/assets/static/img/icon/stack.svg#spinner)}.icon--task-square{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#task-square);mask-image:url(/assets/static/img/icon/stack.svg#task-square)}.icon--tick-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#tick-circle);mask-image:url(/assets/static/img/icon/stack.svg#tick-circle)}.icon--ticket-discount{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount);mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount)}.icon--trash{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#trash);mask-image:url(/assets/static/img/icon/stack.svg#trash)}.icon--undo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#undo);mask-image:url(/assets/static/img/icon/stack.svg#undo)}.icon--user-tag-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2);mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2)}.icon--user-tag{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag);mask-image:url(/assets/static/img/icon/stack.svg#user-tag)}.icon--wallet-money{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#wallet-money);mask-image:url(/assets/static/img/icon/stack.svg#wallet-money)}.icon--warning-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#warning-2);mask-image:url(/assets/static/img/icon/stack.svg#warning-2)}.icon{display:var(--display, inline-flex);border:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;flex-shrink:0;transition:all var(--transition-duration) ease;width:var(--size, 24px);height:var(--size, 24px);background-color:var(--color, #202A30)}*{box-sizing:border-box;margin:0;padding:0;border:none;outline:none;text-decoration:none;scroll-behavior:smooth}*::before,*::after{box-sizing:border-box;margin:0;padding:0;outline:none;text-decoration:none}.print{padding-left:8.4033613445vw;padding-right:5.0420168067vw;padding-top:10.0840336134vw;font-size:1.8487394958vw !important;font-style:normal;font-weight:400;line-height:140%;color:#202a30;font-family:"OpenSans"}.print *{font-size:inherit !important}.title{font-size:3.6974789916vw !important;font-style:normal;font-weight:700;line-height:160.182%;text-transform:uppercase;margin-bottom:2.3529411765vw}.client{margin-bottom:6.7226890756vw}.client__title{font-weight:700;line-height:160.182%}.client__name{color:#7b7b7b;line-height:160.182%}.client__logo{position:absolute;top:0;right:5.0420168067vw;width:14.4537815126vw;height:14.4537815126vw;display:flex}.client__logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}.text{color:#000;line-height:172.682%}table{width:100%;table-layout:fixed}table thead{justify-content:center;align-items:center}table thead tr:first-child{height:5.0420168067vw}table thead tr:nth-child(2){border-radius:0.8403361345vw;box-shadow:inset 0 0 0 16.8067226891vw #eef0f2}table thead tr:last-child{padding:0;height:1.6806722689vw}table tbody{border-radius:0.8403361345vw}table tbody tr{box-shadow:0 0 0 0.0840336134vw #e1e1e1 inset;border-left:0.0840336134vw solid #e1e1e1;border-right:0.0840336134vw solid #e1e1e1}table tbody tr:first-child{border-top:0.0840336134vw solid #e1e1e1;border-top-left-radius:0.8403361345vw;border-top-right-radius:0.8403361345vw}table tbody tr:last-child{border-bottom:0.0840336134vw solid #e1e1e1;border-bottom-left-radius:0.8403361345vw;border-bottom-right-radius:0.8403361345vw}table tr{-moz-column-break-inside:avoid;break-inside:avoid;counter-increment:biba;display:grid;grid-template-columns:26fr 62fr 57fr 186fr 41fr 53fr;gap:1.6806722689vw;padding:1.6806722689vw 3.3613445378vw}table td{display:block}.table__content{display:flex}.table__counter::before{content:counter(biba)}.table__name,.table__count{color:#7b7b7b}.table__count{white-space:nowrap}.table__price{white-space:nowrap}.table__price>span{display:block;color:#202a30;text-align:right;line-height:normal}.table__price>span:first-child{font-weight:700}.table__price>span:last-child{font-size:1.512605042vw !important;color:#7b7b7b}.table__img{width:100%}.table__img img{width:100%;height:auto}.summary{display:flex;flex-direction:column;gap:4.2016806723vw;-moz-column-break-inside:avoid;break-inside:avoid}.summary::before{content:"";display:block}.summary__main{display:flex;flex-direction:column;gap:0.8403361345vw}.summary__extra{display:flex;flex-direction:column;gap:1.6806722689vw}.summary__footer{padding-top:2.5210084034vw;border-top:0.1680672269vw solid #e1e1e1;font-size:2.6890756303vw !important}.summary__footer .summary__row{max-width:27.731092437vw}.summary__row{display:flex;justify-content:space-between;max-width:25.2100840336vw}.requisites{display:flex;flex-direction:column;gap:1.6806722689vw;-moz-column-break-before:page;break-before:page;-moz-column-break-inside:avoid;break-inside:avoid}.requisites::before{content:"";display:block;height:4.2016806723vw}.requisites__title,.contacts__title{padding:1.3445378151vw 3.3613445378vw;border-radius:0.8403361345vw;box-shadow:inset 0 0 0 16.8067226891vw #eef0f2;font-size:2.0168067227vw !important;font-weight:700}.requisites__list{display:grid;grid-template-columns:repeat(2, auto);gap:.5em 2.1848739496vw;width:-moz-max-content;width:max-content;padding-left:3.3613445378vw;max-width:100%}.requisites__list__row{display:contents}.requisites__list__row span{min-width:0}.contacts{-moz-column-break-inside:avoid;break-inside:avoid}.contacts::before{content:"";display:block;height:5.8823529412vw}.contacts__title{margin-bottom:4.0336134454vw}.contacts__img{margin-bottom:2.5210084034vw;padding-left:3.3613445378vw}.contacts__img img{width:10.756302521vw;height:10.756302521vw;display:block;border-radius:50%}.contacts__item{padding-left:3.3613445378vw;display:flex;align-items:center;gap:1.3445378151vw;margin-bottom:1.0084033613vw}.contacts__item img{width:2.3529411765vw;height:2.3529411765vw}.contacts__item img *{stroke:#000;fill:#000}@page{margin-top:0;margin-bottom:12.4369747899vw;margin-left:0;margin-right:0}',B=`
<main onload="window.print()">
<div class="print">
	<div class="title">
		<span>\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435</span>
	</div>
	<% if (kp.clientname) { %>
	<div class="client">
		<div class="client__title">
			<span>\u041A\u043B\u0438\u0435\u043D\u0442:</span>
		</div>
		<div class="client__name">
			<span><%- kp.clientname %></span>
		</div>
		<% if (kp.clientlogo) { %>
		<div class="client__logo">
			<img src="<%- kp.clientlogo %>" alt="">
		</div>
		<% } %>
	</div>
	<% } %>
	<% if (kp.text) { %>
	<div class="text">
		<p><%- kp.text %></p>
	</div>
	<% } %>
	<table>
		<thead>
			<tr>
			</tr>
			<tr>
				<td>
					<div class="table__content">
						<span>\u2116</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>\u0424\u043E\u0442\u043E</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>\u0410\u0440\u0442\u0438\u043A\u0443\u043B</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</span>
					</div>
				</td>
				<td>
					<div class="table__content"><span>\u041A\u043E\u043B-\u0432\u043E</span></div>
				</td>
				<td>
					<div class="table__content">
						<span>\u0426\u0435\u043D\u0430</span>
					</div>
				</td>
			</tr>
			<tr>
			</tr>
		</thead>
		<tbody>
			<% for( let index = 0; index < kp.goods?.length; index++ ) { %>
			<tr>
				<td>
					<div class="table__counter"></div>
				</td>
				<td>
					<div class="table__img">
						<img src="<%- kp.goods[index].img %>" alt="">
					</div>
				</td>
				<td>
					<div class="table__article">
						<% if (kp.goods[index].article) { %>
						<span><%- kp.goods[index].article %></span>
						<% } %>
					</div>
				</td>
				<td>
					<div class="table__name">
						<span><%- kp.goods[index].name %></span>
					</div>
				</td>
				<td>
					<div class="table__count">
						<% if (kp.goods[index].count) { %>
						<span><%- kp.goods[index].count %> \u0448\u0442.</span>
						<% } %>
					</div>
				</td>
				<td>
					<div class="table__price">
						<% if (kp.goods[index].summ) { %>
						<span><%- kp.goods[index].summ %> <span class="font--ruble">\u20BD</span></span>
						<% } %>
						<% if (kp.goods[index].price) { %>
						<span><%- kp.goods[index].price %> <span class="font--ruble">\u20BD</span>/\u0448\u0442.</span>
						<% } %>
					</div>
				</td>
			</tr>
			<% } %>
		</tbody>
	</table>
	<div class="summary">
		<div class="summary__main">
			<div class="summary__row">
				<div class="summary__key">
					<span>\u0421\u0443\u043C\u043C\u0430:</span>
				</div>
				<div class="summary__value">
					<span><%- kp.summary.summ %> <span class="font--ruble">\u20BD</span></span>
				</div>
			</div>
			<div class="summary__row">
				<div class="summary__key">
					<span>\u0421\u043A\u0438\u0434\u043A\u0430:</span>
				</div>
				<% if (kp.summary.dicsount) { %>
				<div class="summary__value">
					<span><%- kp.summary.dicsount %> <span class="font--ruble">\u20BD</span></span>
				</div>
				<% } %>
			</div>
			<div class="summary__row">
				<div class="summary__key">
					<span><b>\u0418\u0442\u043E\u0433\u043E:</b></span>
				</div>
				<div class="summary__value">
					<span><b><%- kp.summary.total %> <span class="font--ruble">\u20BD</span></b></span>
				</div>
			</div>
		</div>
		<% if (kp.extra.length) { %>
		<div class="summary__extra">
			<div class="summary__row">
				<div class="summary__key">
					<span><b>\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438:</b></span>
				</div>
			</div>
			<% for( let index = 0; index < kp.extra.length; index++ ) { %>
			<div class="summary__row">
				<div class="summary__key">
					<span><%- kp.extra[index].name %></span>
				</div>
				<div class="summary__value">
					<span><%- kp.extra[index].price %> <span class="font--ruble">\u20BD</span></span>
				</div>
			</div>
			<% } %>
		</div>
		<% } %>
		<% if (kp.total) { %>
		<div class="summary__footer">
			<div class="summary__row">
				<div class="summary__key">
					<span><b>\u0418\u0442\u043E\u0433\u043E:</b></span>
				</div>
				<div class="summary__value">
					<span><b><%- kp.total %> <span class="font--ruble">\u20BD</span></b></span>
				</div>
			</div>
		</div>
		<% } %>
	</div>
	<% if (kp.requisites) { %>
	<div class="requisites">
		<div class="requisites__title">
			<span>\u041D\u0430\u0448\u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B</span>
		</div>
		<div class="requisites__list">
			<% for( let index = 0; index < kp.requisites?.length; index++ ) { %>
			<div class="requisites__list__row">
				<% if (kp.requisites[index].name) { %>
				<span><%- kp.requisites[index].name %></span>
				<% } %>
				<% if (kp.requisites[index].value) { %>
				<span><%- kp.requisites[index].value %></span>
				<% } %>
			</div>
			<% } %>
		</div>
	</div>
	<% } %>
	<% if (kp.contacts) { %>
	<div class="contacts">
		<div class="contacts__title">
			<span>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</span>
		</div>
		<% if (kp.contacts.img) { %>
		<div class="contacts__img">
			<img src="<%- kp.contacts.img %>" alt="">
		</div>
		<% } %>
		<% if (kp.contacts.name) { %>
		<div class="contacts__item">
			<span><%- kp.contacts.name %></span>
		</div>
		<% } %>
		<% if (kp.contacts.tel) { %>
		<div class="contacts__item">
			<img src="./assets/static/img/icon/call.svg" alt="">
			<span><%- kp.contacts.tel %></span>
		</div>
		<% } %>
		<% if (kp.contacts.mail) { %>
		<div class="contacts__item">
			<img src="./assets/static/img/icon/sms-tracking.svg" alt="">
			<span><%- kp.contacts.mail %></span>
		</div>
		<% } %>
	</div>
	<% } %>
	<% if (locals.shouldntPrint) { %>
		<br/>
		<br/>
		<link rel="stylesheet" href="./assets/style/style.css" />
		<div class="button button--blue button--primary button--big" onclick="window.printKP(window.printData)">
			<span>\u041F\u0435\u0447\u0430\u0442\u044C</span>
		</div>
		<br/>
		<a href="<%- locals.editLink %>" class="button button--asphalt button--primary button--big">
			<span>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>
		</a>
		<br/>
		<br/>
		<% } %>
</div>
</main>`,Q={clientname:"\u0414\u0438\u043A\u0435\u043D\u0441\u043E\u043D",clientlogo:"/assets/static/img/logo.svg",text:"\u041C\u0438\u043B\u043B\u0438",goods:[{img:"/upload/iblock/09f/pfkqotdvxerer1yads2rwqtvmr5eso3u.jpg",article:"05-8000",name:"\u0414\u0438\u043F\u043B\u0435\u043A\u0441\u043E\u0440 (\u0441\u0443\u043C\u043C\u0430\u0442\u043E\u0440-\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C) SAT+TV \u0432 \u0443\u0441\u0438\u043B\u0435\u043D\u043D\u043E\u043C \u043A\u043E\u0440\u043F\u0443\u0441\u0435, REXANT",count:4,summ:0,price:5678},{img:"/upload/iblock/57b/o1z1akfm23ybluccrjlpvo0opxwfvcmi.png",article:"00-00122957",name:"TSi-Pe25VP \u0443\u043B\u0438\u0447\u043D\u0430\u044F \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 \u0441 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u043E\u0439, \u0418\u041A \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439 \u0438 \u0432\u0430\u0440\u0438\u043E\u0444\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043E\u043C",count:3,summ:0,price:12745},{img:"/upload/iblock/bf1/v48sccn9icii5dmmh0b2ob0nmd466rk3.jpg",article:"300217353",name:"DS-H104G 4-\u0445 \u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439 HD-TVI \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u0430\u043C\u0435\u0440 + 1 IP-\u043A\u0430\u043D\u0430\u043B EOL",count:3,summ:0,price:6290},{img:"/upload/iblock/bf1/v48sccn9icii5dmmh0b2ob0nmd466rk3.jpg",article:"300217354",name:"DS-H108G 8-\u043C\u0438 \u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439 HD-TVI \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u0430\u043C\u0435\u0440 + 2 IP-\u043A\u0430\u043D\u0430\u043B\u0430",count:3,summ:0,price:9790}],extra:[{name:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",price:1500}],contacts:{name:"\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A154",mail:"agakin@czebra.ru",tel:"+7-952-956-05-48"},total:109687,summary:{summ:109187,dicsount:1e3,total:108187},requisites:[{name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",value:'\u041E\u041E\u041E "\u041F\u0438\u0440\u043E\u0436\u043E\u043A"'},{name:"\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441",value:"\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B. \u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F, \u0434. 1, \u043E\u0444. 2"},{name:"\u0418\u041D\u041D",value:"7712345678"},{name:"\u0411\u0430\u043D\u043A",value:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u0431\u0430\u043D\u043A \u041F\u0410\u041E \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u0433. \u041C\u043E\u0441\u043A\u0432\u0430"},{name:"\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",value:"\u0433. \u0412\u043E\u0440\u043E\u043D\u0435\u0436, \u0443\u043B. \u041F\u0435\u0442\u0440\u043E\u0432\u0441\u043A\u0430\u044F, \u0434. 1, \u043E\u0444. 2"},{name:"\u041A\u041F\u041F",value:"465465465454"},{name:"\u0421\u0447\u0435\u0442",value:"40702810123450101230"},{name:"\u0411\u0418\u041A",value:"044521234"}]};function us(v){v??=Q;let f=window.frames.printframe;f.document.write(ejs.render(`<body onload="window.print()">${B.concat(`<style>${Z}</style>`)}</body>"`,{kp:v})),f.document.close()}function ks(v,f){v??=Q,document.querySelector("body").insertAdjacentHTML("beforeend",ejs.compile(B.concat(`<script>window.printData = ${JSON.stringify(v)}<\/script><style>${Z}</style>`))({kp:v,shouldntPrint:!0,editLink:f}))}window.printKP=us;window.injectKP=ks;})();
