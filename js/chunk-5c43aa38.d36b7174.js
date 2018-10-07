(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c43aa38"],{"2b99":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hoveranimation-page"},[e._m(0),n("br"),n("br"),n("el-row",{attrs:{type:"flex"}},[n("el-col",[n("a",{directives:[{name:"HoverAnimation",rawName:"v-HoverAnimation",value:{textColor:"#e85a19",backgroundColor:"#f5ce62",foregroundColor:"blue"},expression:"{textColor: '#e85a19', backgroundColor: '#f5ce62',foregroundColor:'blue'}"}]},[e._v(" became hover animate")])]),n("el-col",[n("span",{directives:[{name:"HoverAnimation",rawName:"v-HoverAnimation",value:{textColor:"black",backgroundColor:"#c92918",foregroundColor:"#e74c3c"},expression:"{textColor: 'black', backgroundColor: '#c92918',foregroundColor:'#e74c3c'}"}]},[e._v("\n                span hover animate\n            ")])])],1),n("br"),n("br"),n("br"),n("el-collapse",[n("el-collapse-item",{attrs:{title:"Show Code"}},[n("pre",{staticClass:"code-container language-markup"},[e._v("                "),n("code",[e._v("\n                    "+e._s(e.tpl)+"\n                ")]),e._v("\n            ")]),n("br"),n("pre",{staticClass:"code-container language-javascript"},[e._v("                "),n("code",[e._v("\n                    "+e._s(e.jscode)+"\n                ")]),e._v("\n            ")])])],1),n("br"),n("h2",[e._v(" HoverAnimation 参数:")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"参数"}}),n("el-table-column",{attrs:{prop:"desc",label:"说明"}}),n("el-table-column",{attrs:{prop:"type",label:"类型"}}),n("el-table-column",{attrs:{prop:"values",label:"可选值"}}),n("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{staticClass:"code-container language-javascript"},[e._v("            "),n("code",[e._v('\n                import { HoverAnimation } from "@bpit/vue";\n            ')]),e._v("\n        ")])])}];function i(e,t){const a=n("61a9").default,r=n("8092").default.getNew();e.classList.add("bpit-hover-animation","inject"+r);const i=`\n  .inject${r}..bpit-hover-animation{\n    color:${t.value.textColor}\n  }\n  .inject${r}.bpit-hover-animation::before {\n    background-color: ${t.value.backgroundColor};\n    top: -0.25rem;\n    left: 0.5rem;\n    -webkit-animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s\n      infinite alternate;\n    animation: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite\n      alternate;\n  }\n  .inject${r}.bpit-hover-animation::after {\n    background-color: ${t.value.foregroundColor};\n    top: 2.5rem;\n    right: 0.5rem;\n    -webkit-animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s\n      infinite alternate;\n    animation: bottom 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite\n      alternate;\n  }\n\n  .inject${r}.bpit-hover-animation {\n    position: relative;\n    letter-spacing: 0.15em;\n    margin: 0 auto;\n    padding: 1rem 2.5rem;\n    background: transparent;\n    outline: none;\n    font-size: 28px;\n    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;\n  }\n  .inject${r}.bpit-hover-animation::after,\n  .inject${r}.bpit-hover-animation::before {\n    content: "";\n    position: absolute;\n    height: 40%;\n    width: 10%;\n    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    z-index: -2;\n    border-radius: 50%;\n    -webkit-animation: grow 1s infinite;\n    animation: grow 1s infinite;\n  }\n  \n  .inject${r}.bpit-hover-animation:hover {\n    color: white;\n  }\n  .inject${r}.bpit-hover-animation:hover::before,\n  .inject${r}.bpit-hover-animation:hover::after {\n    top: 0;\n    -webkit-transform: skewx(-10deg);\n    transform: skewx(-10deg);\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n    -webkit-animation: none;\n    animation: none;\n  }\n  .inject${r}.bpit-hover-animation:hover::after {\n    left: 0rem;\n  }\n  .inject${r}.bpit-hover-animation:hover::before {\n    top: 0.5rem;\n    left: 0.35rem;\n  }\n  `;a(i)}var o={HoverAnimation:{bind:i}},s=n("c93e"),l=(n("cadf"),n("551c"),n("097d"),n("c197")),u=n.n(l),c={data:function(){return{tableData:[{name:"textColor",desc:"文字的颜色,hover后是白色",type:"string",values:"字面颜色red或者16进制",default:"-"},{name:"foregroundColor",desc:"hover后前景色",type:"string",values:"字面颜色red或者16进制",default:"-"},{name:"backgroundColor",desc:"hover后背景色",type:"string",values:"字面颜色red或者16进制",default:"-"}],tpl:" <a v-HoverAnimation=\"{textColor: '#e85a19', backgroundColor: '#f5ce62',foregroundColor:'blue'}\"> became hover animate</a>\n            \n            <span v-HoverAnimation=\"{textColor: 'black', backgroundColor: '#c92918',foregroundColor:'#e74c3c'}\">\n                span hover animate\n            </span>\n            ",jscode:"\n            directives: {\n                ...HoverAnimation\n            },  \n            "}},directives:Object(s["a"])({},o),mounted:function(){u.a.highlightAll()}},g=c,d=(n("9fad"),n("2877")),p=Object(d["a"])(g,a,r,!1,null,"09e24918",null);p.options.__file="index.vue";t["default"]=p.exports},"61a9":function(e,t,n){"use strict";n.r(t),t["default"]=function(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.innerHTML+=e,t.appendChild(n)}},8092:function(e,t,n){"use strict";n.r(t);const a={_current:0,getNew:function(){return this._current++,this._current}};t["default"]=a},"9fad":function(e,t,n){"use strict";var a=n("e80d"),r=n.n(a);r.a},c197:function(e,t,n){(function(t){var n="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++t}),e["__id"]},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var r={};for(var i in t[a.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=a.util.clone(e[i],t));return r;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];r=[];return t[a.util.objId(e)]=r,e.forEach(function(e,n){r[n]=a.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];if(2==arguments.length){for(var o in n=arguments[1],n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=i[l]}return a.languages.DFS(a.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,o=r.elements||e.querySelectorAll(r.selector),s=0;i=o[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){var o,s,l=t;while(l&&!e.test(l.className))l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o));var u=t.textContent,c={element:t,language:o,grammar:s,code:u};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&n.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,r,i,o,s){var l=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==s)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,f=!!d.lookbehind,m=!!d.greedy,h=0,b=d.alias;if(m&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var y=r,k=i;y<t.length;k+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof l)){if(m&&y!=t.length-1){d.lastIndex=k;var x=d.exec(e);if(!x)break;for(var j=x.index+(f?x[1].length:0),A=x.index+x[0].length,C=y,F=k,S=t.length;C<S&&(F<A||!t[C].type&&!t[C-1].greedy);++C)F+=t[C].length,j>=F&&(++y,k=F);if(t[y]instanceof l)continue;_=C-y,w=e.slice(k,F),x.index-=k}else{d.lastIndex=0;x=d.exec(w);var _=1}if(x){f&&(h=x[1]?x[1].length:0);j=x.index+h,x=x[0].slice(h),A=j+x.length;var $=w.slice(0,j),O=w.slice(A),N=[y,_];$&&(++y,k+=$.length,N.push($));var P=new l(u,p?a.tokenize(x,p):x,b,x,m);if(N.push(P),O&&N.push(O),Array.prototype.splice.apply(t,N),1!=_&&a.matchGrammar(e,t,n,y,k,!0,u),o)break}else if(o)break}}}}},tokenize:function(e,t,n){var r=[e],i=t.rest;if(i){for(var o in i)t[o]=i[o];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var s=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(s?" "+s:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,o=t.immediateClose;n.postMessage(a.highlight(i,a.languages[r],r)),o&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();"undefined"!==typeof e&&e.exports&&(e.exports=a),"undefined"!==typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css["atrule"].inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside["interpolation"].inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var n,r=t.getAttribute("data-src"),i=t,o=/\blang(?:uage)?-([\w-]+)\b/i;while(i&&!o.test(i.className))i=i.parentNode;if(i&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(r.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,a.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,n("c8ba"))},c93e:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},e80d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5c43aa38.d36b7174.js.map