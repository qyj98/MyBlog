(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],p=0,u=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s={app:0},i=[];function c(t){return r.p+"js/"+({About:"About",Blog:"Blog",Detail:"Detail",Message:"Message",Project:"Project",home:"home"}[t]||t)+"."+{About:"88b74e1e",Blog:"e0b6c442",Detail:"2fb498b9",Message:"3b758ac4",Project:"c3ddec5f",home:"648bdc92"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={About:1,Blog:1,Detail:1,Message:1,Project:1,home:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({About:"About",Blog:"Blog",Detail:"Detail",Message:"Message",Project:"Project",home:"home"}[t]||t)+"."+{About:"a3859060",Blog:"589f28e3",Detail:"893c6cce",Message:"7b7b1eed",Project:"dab74f1c",home:"6272c443"}[t]+".css",s=r.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===s))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],p=l.getAttribute("data-href");if(p===a||p===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=c(t);var u=new Error;l=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c6d":function(t,e,n){"use strict";var a=n("cebe"),o=n.n(a),s=n("afda"),i=o.a.create();i.interceptors.response.use((function(t){return 0!==t.data.code?(Object(s["a"])({content:t.data.msg,type:"error"}),null):t.data.data})),e["a"]=i},1465:function(t,e,n){},"1df5":function(t,e,n){"use strict";n("43cd")},"1e15":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},o=[],s={},i=s,c=(n("a1d9"),n("2877")),r=Object(c["a"])(i,a,o,!1,null,"3bd3a596",null);e["a"]=r.exports},"2c81":function(t,e,n){t.exports=n.p+"img/404.5b8a38c7.jpg"},"3f50":function(t,e,n){"use strict";n.d(e,"b",(function(){return a["a"]})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s["a"]}));n("afda"),n("c35f");var a=n("8f21"),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=null;return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o)}),e)}},s=n("e5f0")},4045:function(t,e,n){t.exports=n.p+"img/loading.7d26db10.svg"},4174:function(t,e,n){t.exports=n.p+"img/default.969421d9.gif"},"43cd":function(t,e,n){},"48d5":function(t,e,n){},"4b51":function(t,e,n){},"4b8d":function(t,e,n){"use strict";n("87a7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),o=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("LayOut",{scopedSlots:t._u([{key:"left",fn:function(){return[n("div",{staticClass:"left"},[n("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[n("router-view")]},proxy:!0}])}),n("ToTop")],1)},i=[],c=n("1e15"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-asite-container"},[n("Avatar",{attrs:{url:t.data.avatar,size:150}}),n("p",{staticClass:"introduce"},[t._v(t._s(t.data.siteTitle))]),n("Menu"),n("Contact"),n("p",{staticClass:"footer"},[t._v(t._s(t.data.icp))])],1)},l=[],p=n("5530"),u=n("77c0"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-container"},t._l(t.items,(function(e){return n("router-link",{key:e.name,attrs:{to:{name:e.name},exact:e.exact,"active-class":"selected","exact-active-class":""}},[n("div",[n("Icon",{attrs:{type:e.icon}}),n("span",[t._v(t._s(e.title))])],1)])})),1)},m=[],g=n("d010"),h={components:{Icon:g["a"]},data:function(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",title:"留言板",icon:"chat",exact:!0}]}}},f=h,b=(n("8989"),n("2877")),v=Object(b["a"])(f,d,m,!1,null,"f8be2aee",null),y=v.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{target:"_blank",href:t.data.github}},[n("Icon",{attrs:{type:"github"}}),n("span",[t._v(t._s(t.data.githubName))])],1)]),n("li",[n("a",{attrs:{href:"mailto:"+t.data.mail}},[n("Icon",{attrs:{type:"mail"}}),n("span",[t._v(t._s(t.data.mail))])],1)]),n("li",{staticClass:"qq-content"},[n("div",{staticClass:"qqchart pop"},[n("img",{attrs:{src:t.data.qqQrCode,alt:""}})]),n("a",{attrs:{href:"tencent://message/?Menu=yes&uin="+t.data.qq+"&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("Icon",{attrs:{type:"qq"}}),n("span",[t._v(t._s(t.data.qq))])],1)]),n("li",{staticClass:"we-content"},[n("div",{staticClass:"wechart pop"},[n("img",{attrs:{src:t.data.weixinQrCode,alt:""}})]),n("a",{attrs:{href:""}},[n("Icon",{attrs:{type:"weixin"}}),n("span",[t._v(t._s(t.data.weixin))])],1)])])},w=[],x=n("5880"),C={components:{Icon:g["a"]},computed:Object(p["a"])({},Object(x["mapState"])("settings",["data"])),created:function(){this.$store.dispatch("settings/fetchSetting")}},O=C,A=(n("a87e"),Object(b["a"])(O,j,w,!1,null,"13d0bb56",null)),k=A.exports,_={components:{Avatar:u["a"],Menu:y,Contact:k},computed:Object(p["a"])({},Object(x["mapState"])("settings",["data"])),created:function(){this.$store.dispatch("settings/fetchSetting")}},S=_,T=(n("d5fb"),Object(b["a"])(S,r,l,!1,null,"390af6b5",null)),q=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"to-top-container",on:{click:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}},[n("Icon",{attrs:{type:"arrowUp"}})],1)},M=[],D={components:{Icon:g["a"]},data:function(){return{show:!1}},methods:{handleClick:function(){this.$bus.$emit("scrollToTop",0)},handleMainScroll:function(t){this.show=!!t&&t.scrollTop>=500}},mounted:function(){this.$bus.$on("mainScroll",this.handleMainScroll)},beforeDestroyed:function(){this.$bus.$off("mainScroll",this.handleMainScroll)}},P=D,z=(n("4b8d"),Object(b["a"])(P,E,M,!1,null,"d9980aae",null)),R=z.exports,B={components:{LayOut:c["a"],SiteAside:q,ToTop:R}},$=B,L=(n("5ed6"),Object(b["a"])($,s,i,!1,null,"0a9e62cf",null)),H=L.exports,N=n("6389"),I=n.n(N),J=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-found-container"},[a("img",{attrs:{src:n("2c81"),alt:""}})])}],V={},G=V,K=(n("1df5"),Object(b["a"])(G,J,F,!1,null,"4252a629",null)),Y=K.exports,Q=[{name:"Home",path:"/",component:function(){return n.e("home").then(n.bind(null,"16c0"))},meta:{title:"首页"}},{name:"Blog",path:"/article",component:function(){return n.e("Blog").then(n.bind(null,"3b5d"))},meta:{title:"文章"}},{name:"categoryBlog",path:"/article/cate/:categoryId",component:function(){return n.e("Blog").then(n.bind(null,"3b5d"))},meta:{title:"文章"}},{name:"Detail",path:"/article/:id",component:function(){return n.e("Detail").then(n.bind(null,"ccf9"))},meta:{title:"文章详情"}},{name:"Project",path:"/project",component:function(){return n.e("Project").then(n.bind(null,"34fb"))},meta:{title:"项目和效果"}},{name:"Message",path:"/message",component:function(){return n.e("Message").then(n.bind(null,"8fc4"))},meta:{title:"留言板"}},{name:"About",path:"/about",component:function(){return n.e("About").then(n.bind(null,"0737"))},meta:{title:"关于我"}},{
//! *:通配符，除了上述路径外，其余路径都指向该组件
name:"404",path:"*",component:Y}],U=n("e5f0");window.VueRouter||
//!如果当前不是生产环境，就使用下面的代码
o.a.use(I.a);var W=new I.a({routes:Q,mode:"history"});W.afterEach((function(t,e){t.meta.title&&U["a"].setRouteTitle(t.meta.title)}));var X=W,Z=(n("4b51"),n("96eb")),tt=n.n(Z);tt.a.mock("/api/banner","get",{code:0,msg:"请求出错，无数据",data:[{id:"1",midImg:"http://mdrs.yuanjin.tech/img/20201031141507.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031141350.jpg",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"2",midImg:"http://mdrs.yuanjin.tech/img/20201031205550.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031205551.jpg",title:"血火同源",description:"如果我回头，一切都完了"},{id:"3",midImg:"http://mdrs.yuanjin.tech/img/20201031204401.jpg",bigImg:"http://mdrs.yuanjin.tech/img/20201031204403.jpg",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var et=n("ade3"),nt=n("b383"),at=n.n(nt);tt.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),tt.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){var e=at.a.parse(t.url);return tt.a.mock({code:0,msg:"",data:Object(et["a"])({"total|2000-3000":0},"rows|".concat(e.limit||10),[{id:"@guid",title:"@ctitle(3, 50)",description:"@cparagraph(1,10)",category:{"id|1-10":1,name:"分类@id"},"scanNumber|1-3000":0,"commentNumber|0-300":0,"thumb|1":["@image(200x150, @color, #fff, @natural)"],createDate:"@date('T')"}])})})),tt.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},"scanNumber|0-1000":0,"commentNumber|50-200":0,description:"@cparagraph(1,10)",createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[tt.a.Random.image("200x150","#000","#FFF","png","picture"),null],htmlContent:'<blockquote>\n        <p>阅读本文，你需要首先知道：</p><ol>\n        <li>浏览器的同源策略</li>\n        <li>跨域问题</li>\n        <li>JSONP原理</li>\n        <li>cookie原理</li>\n        </ol>\n        </blockquote>\n        <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n        <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n        <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n        </ol>\n        <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n              <figcaption>image-20200421152122793</figcaption>\n          \n            </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n        <li><strong>简单请求</strong></li>\n        <li><strong>需要预检的请求</strong></li>\n        <li><strong>附带身份凭证的请求</strong></li>\n        </ul>\n        <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n        <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n        <li>get</li>\n        <li>post</li>\n        <li>head</li>\n        </ul>\n        </li>\n        <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n        <li><code>Accept</code></li>\n        <li><code>Accept-Language</code></li>\n        <li><code>Content-Language</code></li>\n        <li><code>Content-Type</code></li>\n        <li><code>DPR</code></li>\n        <li><code>Downlink</code></li>\n        <li><code>Save-Data</code></li>\n        <li><code>Viewport-Width</code></li>\n        <li><code>Width</code></li>\n        </ul>\n        </li>\n        <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n        <li><code>text/plain</code></li>\n        <li><code>multipart/form-data</code></li>\n        <li><code>application/x-www-form-urlencoded</code></li>\n        </ul>\n        </li>\n        </ol>\n        <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n        \n        <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n        })\n        \n        <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">headers</span>:{\n            <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n          }\n        })\n        \n        <span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n        })\n        \n        <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n          <span class="hljs-attr">headers</span>: {\n            <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n          }\n        })</code></pre>\n        <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n        <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n        </ol>\n        <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n        <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n        Host: crossdomain.com\n        Connection: keep-alive\n        ...\n        Referer: http://my.com/index.html\n        Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n        <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n        </ol>\n        <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n        <li>*：表示我很开放，什么人我都允许访问</li>\n        <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n        </ul>\n        <blockquote>\n        <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n        <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        ...\n        \n        消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n              <figcaption>image-20200421162846480</figcaption>\n          \n            </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n        <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n        <li><strong>服务器允许</strong></li>\n        <li><strong>浏览器发送真实请求</strong></li>\n        <li><strong>服务器完成真实的响应</strong></li>\n        </ol>\n        <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n          <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n          <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n            <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n            <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n            <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n          },\n          <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n        });</code></pre>\n        <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n        <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n        </ol>\n        <pre><code>OPTIONS /api/user HTTP/1.1\n        Host: crossdomain.com\n        ...\n        Origin: http://my.com\n        Access-Control-Request-Method: POST\n        Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n        <li>请求方法为<code>OPTIONS</code></li>\n        <li>没有请求体</li>\n        <li>请求头中包含<ul>\n        <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n        <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n        <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n        </ul>\n        </li>\n        </ul>\n        <ol start="2">\n        <li><strong>服务器允许</strong></li>\n        </ol>\n        <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        Access-Control-Allow-Methods: POST\n        Access-Control-Allow-Headers: a, b, content-type\n        Access-Control-Max-Age: 86400\n        ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n        <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n        <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n        <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n        <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n        </ul>\n        <ol start="3">\n        <li><strong>浏览器发送真实请求</strong></li>\n        </ol>\n        <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n        Host: crossdomain.com\n        Connection: keep-alive\n        ...\n        Referer: http://my.com/index.html\n        Origin: http://my.com\n        \n        {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n        <li><strong>服务器响应真实请求</strong></li>\n        </ol>\n        <pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        ...\n        \n        添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n              <figcaption>image-20200421165913320</figcaption>\n          \n            </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n        <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n        xhr.withCredentials = <span class="hljs-literal">true</span>;\n        \n        <span class="hljs-comment">// fetch api</span>\n        fetch(url, {\n          <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n        })</code></pre>\n        <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p>\n        <p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，\n        都会在请求头中添加<code>cookie</code>字段</p>\n        <p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p>\n        <p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p>\n        <p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p>\n        <p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。\n        这就是为什么不推荐使用*的原因</p>\n        <h1 id="article-md-title-7">一个额外的补充</h1>\n        <p>在跨域访问时，JS只能拿到一些最基本的响应头，\n        如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。\n        </p>\n        <p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p>\n        <pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre>\n        <p>这样JS就能够访问指定的响应头了。</p>'}}),tt.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),tt.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){var e=at.a.parse(t.url);return tt.a.mock({code:0,msg:"",data:Object(et["a"])({total:42},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),tt.a.mock("/api/setting","get",{code:0,msg:"请求出错，无数据",data:{avatar:"https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg",siteTitle:"覃尤杰的博客",github:"https://github.com/qyj98",qq:"1784885676",qqQrCode:"http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",weixin:"destiny2333",weixinQrCode:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",mail:"duyi@gmail.com",icp:"黑ICP备17001719号",githubName:"qyj98",favicon:"https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg"}}),tt.a.mock("/api/about","get",{code:0,msg:"",data:"https://sports.sohu.com/"}),tt.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@uuid",name:"@ctitle(1, 10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1, 5)"],"thumb|1":["@image(200x150, @color, #fff, @natural)"]}]}),tt.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),tt.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){var e=at.a.parse(t.url);return tt.a.mock({code:0,msg:"",data:Object(et["a"])({total:42},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),tt.a.setup({timeout:"1000-2000"});var ot=n("afda"),st=new o.a({});o.a.prototype.$bus=st;var it=st,ct=n("1da1"),rt=(n("96cf"),n("0c6d"));function lt(){return pt.apply(this,arguments)}function pt(){return pt=Object(ct["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt["a"].get("/api/banner");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),pt.apply(this,arguments)}var ut={namespaced:!0,state:{loading:!0,data:[]},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchBanner:function(t){return Object(ct["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data.length){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,lt();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};function dt(){return mt.apply(this,arguments)}function mt(){return mt=Object(ct["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt["a"].get("/api/setting");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),mt.apply(this,arguments)}var gt={namespaced:!0,state:{loading:!0,data:[]},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchSetting:function(t){return Object(ct["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setLoading",!0),e.next=3,dt();case 3:if(n=e.sent,t.commit("setData",n),t.commit("setLoading",!1),!n.favicon){e.next=17;break}if(a=document.querySelector("link[rel='shortcut icon']"),!a){e.next=12;break}return e.abrupt("return");case 12:a=document.createElement("link"),a.rel="shortcut icon",a.type="images/x-icon",a.href=n.favicon,document.querySelector("head").appendChild(a);case 17:n.siteTitle&&U["a"].setSiteTitle(n.siteTitle);case 18:case"end":return e.stop()}}),e)})))()}}};function ht(){return ft.apply(this,arguments)}function ft(){return ft=Object(ct["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt["a"].get("/api/about");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),ft.apply(this,arguments)}var bt={namespaced:!0,state:{loading:!1,data:""},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchAbout:function(t){return Object(ct["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,ht();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};function vt(){return yt.apply(this,arguments)}function yt(){return yt=Object(ct["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt["a"].get("/api/project");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),yt.apply(this,arguments)}var jt={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(t,e){t.loading=e},setData:function(t,e){t.data=e}},actions:{fetchProject:function(t){return Object(ct["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.data.length){e.next=2;break}return e.abrupt("return");case 2:return t.commit("setLoading",!0),e.next=5,vt();case 5:n=e.sent,t.commit("setData",n),t.commit("setLoading",!1);case 8:case"end":return e.stop()}}),e)})))()}}};
//!只引入vuex中的数据库 
window.Vuex||
//!如果当前不是生产环境，就使用下面的代码
Object(x["install"])(o.a);var wt=new x["Store"]({strict:!0,
//!使用严格模式，只允许通过mutations修改仓库数据
modules:{
//!仓库配置分模块，每个模块开启命名空间namespaced
getBanner:ut,settings:gt,about:bt,project:jt}}),xt=wt,Ct=(n("b0c0"),n("4045")),Ot=n.n(Ct),At=n("5c5c"),kt=n.n(At);function _t(){var t=document.createElement("img");return t.src=Ot.a,t.className=kt.a.loadContainer,t.dataset.name="loading",t}function St(t){return t.querySelector("img[data-name=loading]")}var Tt=function(t,e){var n=St(t);e.value?n||(n=_t(),t.appendChild(n)):n&&n.remove()},qt=n("b85c"),Et=(n("4de4"),n("4174")),Mt=n.n(Et),Dt=n("3f50"),Pt=[];function zt(){var t,e=Object(qt["a"])(Pt);try{var n=function(){var e=t.value;e.dom.src=Mt.a;var n=e.dom.getBoundingClientRect(),a=document.documentElement.clientHeight,o=n.height;-n.top<o&&n.top<a&&(e.dom.src=e.realSrc,Pt=Pt.filter((function(t){return t!==e})))};for(e.s();!(t=e.n()).done;)n()}catch(a){e.e(a)}finally{e.f()}}function Rt(t){t&&zt()}it.$on("mainScroll",Object(Dt["a"])(Rt,50));var Bt={inserted:function(t,e){Pt.push({dom:t,realSrc:e.value}),zt(Pt)},unbind:function(t){Pt=Pt.filter((function(e){return e.dom!==t}))}};o.a.prototype.$showMessage=ot["a"],o.a.config.productionTip=!1,o.a.directive("loading",Tt),o.a.directive("lazy",Bt),new o.a({store:xt,router:X,render:function(t){return t(H)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},5907:function(t,e,n){"use strict";n("1465")},"5c5c":function(t,e,n){t.exports={loadContainer:"loading-module_loadContainer_1iVMK"}},"5d8f":function(t,e,n){},"5ed6":function(t,e,n){"use strict";n("8628")},6389:function(t,e){t.exports=VueRouter},"712c":function(t,e,n){},"77c0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},o=[],s=(n("a9e3"),{props:{url:{type:String,require:!0},size:{type:Number,default:150}}}),i=s,c=(n("5907"),n("2877")),r=Object(c["a"])(i,a,o,!1,null,"23f7c614",null);e["a"]=r.exports},8628:function(t,e,n){},"87a7":function(t,e,n){},8989:function(t,e,n){"use strict";n("48d5")},"8bbf":function(t,e){t.exports=Vue},"8f21":function(t,e,n){"use strict";n("4d90"),n("d3b7"),n("25f0"),n("99af");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(+t),a=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0"),s=n.getHours().toString().padStart(2,"0"),i=n.getMinutes().toString().padStart(2,"0"),c=n.getSeconds().toString().padStart(2,"0");return e?"".concat(n.getFullYear(),"-").concat(a,"-").concat(o," ").concat(s,":").concat(i,":").concat(c):"".concat(n.getFullYear(),"-").concat(a,"-").concat(o)}},a025:function(t,e,n){},a1d9:function(t,e,n){"use strict";n("a025")},a87e:function(t,e,n){"use strict";n("712c")},afda:function(t,e,n){"use strict";n("99af");var a=n("b26a"),o=n.n(a),s=n("c35f"),i=n("d010");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.content||"",n=t.type||"warn",a=t.duration||2e3,c=t.container||document.body,r=document.createElement("div"),l=Object(s["a"])(i["a"],{type:n});r.innerHTML='<span class="'.concat(o.a.icon,'">').concat(l.outerHTML,"</span><div>").concat(e,"</div>"),t.container&&"static"===getComputedStyle(c).position&&(c.style.position="relative"),c.appendChild(r);var p=o.a["message-".concat(n)];r.className="".concat(o.a.message," ").concat(p),r.clientHeight,r.style.opacity=1,r.style.transform="translate(-50%, -50%) translateY(0)",setTimeout((function(){r.style.opacity=0,r.style.transform="translate(-50%, -50%) translateY(-25px)",r.addEventListener("transitionend",(function(){r.remove(),t.callback&&t.callback()}),{once:!0})}),a)}},b26a:function(t,e,n){t.exports={message:"showMessage-module_message_DA2eV","message-info":"showMessage-module_message-info_1WnPE","message-success":"showMessage-module_message-success_1CXOY","message-warn":"showMessage-module_message-warn_34P7A","message-error":"showMessage-module_message-error_1DD2E",icon:"showMessage-module_icon_2dmvD"}},c35f:function(t,e,n){"use strict";var a=n("8bbf"),o=n.n(a);e["a"]=function(t,e){var n=new o.a({render:function(n){return n(t,{props:e})}});return n.$mount(),n.$el}},cebe:function(t,e){t.exports=axios},d010:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont icon-container",class:t.icomMap})},o=[],s=(n("b64b"),{home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"}),i=(Object.keys(s),{props:{type:{type:String,required:!0}},computed:{icomMap:function(){return s[this.type]}}}),c=i,r=(n("ecaf"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,"ed41ece2",null);e["a"]=l.exports},d5fb:function(t,e,n){"use strict";n("fbc8")},e5f0:function(t,e,n){"use strict";n("99af");var a="",o="";function s(){document.title=a||o?a&&!o?a:!a&&o?o:"".concat(a,"-").concat(o):"loading..."}e["a"]={setRouteTitle:function(t){a=t,s()},
//! 设置网站标题根据数据仓库中远程获取的数据中的siteTitle设置,由于是异步的，因此要等获取到数据以后才能设置
setSiteTitle:function(t){o=t,s()}}},ecaf:function(t,e,n){"use strict";n("5d8f")},fbc8:function(t,e,n){}});