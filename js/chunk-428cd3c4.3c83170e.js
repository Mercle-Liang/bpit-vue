(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428cd3c4"],{"1c97":function(e,t,n){"use strict";var a=n("4bcc"),r=n.n(a);r.a},"4bcc":function(e,t,n){},"61a9":function(e,t,n){"use strict";n.r(t),t["default"]=function(e){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.innerHTML+=e,t.appendChild(n)}},8092:function(e,t,n){"use strict";n.r(t);const a={_current:0,getNew:function(){return this._current++,this._current}};t["default"]=a},"9e53":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hovermagicunderline-page"},[e._m(0),n("el-row",{staticClass:"demo-container"},[n("h2",[e._v("Wow this one is super incredibly cool, and this\n            "),n("span",{directives:[{name:"HoverMagicUnderline",rawName:"v-HoverMagicUnderline",value:{leftColor:"black",rightColor:"blue"},expression:"{leftColor: 'black',rightColor: 'blue'}"}]},[e._v("\n                one is on Multiple Lines!\n            ")]),e._v("\n            I wish I had found this like thirty projects ago when I was representing the lollipop guild.\n        ")]),n("h1",[e._v("\n            Look At This\n            "),n("span",{directives:[{name:"HoverMagicUnderline",rawName:"v-HoverMagicUnderline",value:{leftColor:"#84fab0",rightColor:"#8fd3f4"},expression:"{leftColor: '#84fab0',rightColor: '#8fd3f4'}"}]},[e._v("\n                Pretty\n            ")]),e._v("\n            Underline\n        ")])]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"Show Code",name:"1"}},[n("pre",{staticClass:"code-container language-markup"},[e._v("                "),n("code",[e._v("\n                    "+e._s(e.tpl)+"\n                ")]),e._v("\n            ")]),n("br"),n("pre",{staticClass:"code-container language-javascript"},[e._v("                "),n("code",[e._v("\n                    "+e._s(e.js)+"\n                ")]),e._v("\n            ")])])],1),n("br"),n("h2",[e._v(" HoverMagicUnderline 参数:")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"参数"}}),n("el-table-column",{attrs:{prop:"desc",label:"说明"}}),n("el-table-column",{attrs:{prop:"type",label:"类型"}}),n("el-table-column",{attrs:{prop:"values",label:"可选值"}}),n("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{staticClass:"code-container language-javascript"},[e._v("            "),n("code",[e._v('\n                import { HoverMagicUnderline } from "@bpit/vue";\n            ')]),e._v("\n        ")])])}];function i(e,t){const a=n("61a9").default,r=n("8092").default.getNew();e.classList.add("bpit-hover-magic-underline","inject"+r);const i=`\n  .inject${r}.bpit-hover-magic-underline {\n    background-image: linear-gradient(120deg, ${t.value.leftColor} 0%, ${t.value.rightColor} 100%);\n    background-repeat: no-repeat;\n    background-size: 100% 0.2em;\n    background-position: 0 88%;\n    transition: background-size 0.25s ease-in;\n  }\n  .inject${r}.bpit-hover-magic-underline:hover {\n    background-size: 100% 88%;\n  }\n\n  `;a(i)}var s={HoverMagicUnderline:{bind:i}},l=n("c93e"),o=(n("cadf"),n("551c"),n("097d"),n("c197")),u=n.n(o),c={data:function(){return{tableData:[{name:"leftColor",desc:"左侧开始的颜色",type:"string",values:"字面颜色red或者16进制",default:"-"},{name:"rightColor",desc:"右侧过渡结束的颜色",type:"string",values:"字面颜色red或者16进制",default:"-"}],tpl:"\n             <h2>Wow this one is super incredibly cool, and this\n                <span v-HoverMagicUnderline=\"{leftColor: 'black',rightColor: 'blue'}\">\n                    one is on Multiple Lines!\n                </span>\n                I wish I had found this like thirty projects ago when I was representing the lollipop guild.\n            </h2>\n            <h1>\n                Look At This\n                <span v-HoverMagicUnderline=\"{leftColor: '#84fab0',rightColor: '#8fd3f4'}\">\n                    Pretty\n                </span>\n                Underline\n            </h1>\n            ",js:"\n             directives: {\n                ...HoverMagicUnderline\n            }"}},directives:Object(l["a"])({},s),mounted:function(){u.a.highlightAll()}},g=c,d=(n("1c97"),n("2877")),p=Object(d["a"])(g,a,r,!1,null,"1269a88b",null);p.options.__file="index.vue";t["default"]=p.exports},c197:function(e,t,n){(function(t){var n="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++t}),e["__id"]},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var r={};for(var i in t[a.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=a.util.clone(e[i],t));return r;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];r=[];return t[a.util.objId(e)]=r,e.forEach(function(e,n){r[n]=a.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];if(2==arguments.length){for(var s in n=arguments[1],n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return a.languages.DFS(a.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),l=0;i=s[l++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){var s,l,o=t;while(o&&!e.test(o.className))o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1].toLowerCase(),l=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u=t.textContent,c={element:t,language:s,grammar:l,code:u};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&n.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,r,i,s,l){var o=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==l)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,h=!!d.lookbehind,f=!!d.greedy,m=0,b=d.alias;if(f&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var y=r,k=i;y<t.length;k+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof o)){if(f&&y!=t.length-1){d.lastIndex=k;var x=d.exec(e);if(!x)break;for(var j=x.index+(h?x[1].length:0),F=x.index+x[0].length,A=y,C=k,_=t.length;A<_&&(C<F||!t[A].type&&!t[A-1].greedy);++A)C+=t[A].length,j>=C&&(++y,k=C);if(t[y]instanceof o)continue;S=A-y,w=e.slice(k,C),x.index-=k}else{d.lastIndex=0;x=d.exec(w);var S=1}if(x){h&&(m=x[1]?x[1].length:0);j=x.index+m,x=x[0].slice(m),F=j+x.length;var O=w.slice(0,j),N=w.slice(F),P=[y,S];O&&(++y,k+=O.length,P.push(O));var E=new o(u,p?a.tokenize(x,p):x,b,x,f);if(P.push(E),N&&P.push(N),Array.prototype.splice.apply(t,P),1!=S&&a.matchGrammar(e,t,n,y,k,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var r=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,s=t.immediateClose;n.postMessage(a.highlight(i,a.languages[r],r)),s&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();"undefined"!==typeof e&&e.exports&&(e.exports=a),"undefined"!==typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css["atrule"].inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside["interpolation"].inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var n,r=t.getAttribute("data-src"),i=t,s=/\blang(?:uage)?-([\w-]+)\b/i;while(i&&!s.test(i.className))i=i.parentNode;if(i&&(n=(t.className.match(s)||[,""])[1]),!n){var l=(r.match(/\.(\w+)$/)||[,""])[1];n=e[l]||l}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading…",t.appendChild(o);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o)):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,n("c8ba"))},c93e:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=chunk-428cd3c4.3c83170e.js.map