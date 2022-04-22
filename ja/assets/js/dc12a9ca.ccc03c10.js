"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8028],{80243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var o=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],a={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},u=void 0,p={unversionedId:"debug/from-your-iphone-and-xcode",id:"debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/ja/docs/next/debug/from-your-iphone-and-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/debug/from-your-iphone-and-xcode.md",tags:[],version:"current",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"docs",previous:{title:"From the Project editor",permalink:"/go-mobile/ja/docs/next/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/ja/docs/next/debug/from-your-android-device-and-android-studio"}},c={},d=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Logger",id:"logger",level:3},{value:"Levels",id:"levels",level:3},{value:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",level:3},{value:"Emoticones",id:"emoticones",level:4},{value:"Circles",id:"circles",level:4},{value:"Debug from your iPhone",id:"debug-from-your-iphone",level:2}],s={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,l.kt)("p",null,"If you have issues during the build process, you can open your generated project with Xcode selecting the ",(0,l.kt)("strong",{parentName:"p"},"Open the product with Xcode")," option from the ",(0,l.kt)("strong",{parentName:"p"},"Project")," Menu."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Open the project with Xcode",src:n(5901).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"From here you can ",(0,l.kt)("strong",{parentName:"p"},"launch your application")," in the Simulator clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Build button")," and get all the logs at the bottom of the Xcode work space."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Xcode logs",src:n(52756).Z,width:"2502",height:"2144"})),(0,l.kt)("h3",{id:"logger"},"Logger"),(0,l.kt)("p",null,"A logger is an object that will allow you to log and trace."),(0,l.kt)("p",null,"For that we use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," framework."),(0,l.kt)("p",null,"You will find the logger settings definition in your Xcode project/Settings/Settings.plist."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Xcode logs",src:n(76779).Z,width:"2414",height:"1410"})),(0,l.kt)("h3",{id:"levels"},"Levels"),(0,l.kt)("p",null,"You can filter and display different log level into your console adding log.level in you Settings.plist file."),(0,l.kt)("p",null,"To do so, add a row Right clicking inside the Settings.plist file and enter:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"log.level as Key"),(0,l.kt)("li",{parentName:"ul"},"Number as Type"),(0,l.kt)("li",{parentName:"ul"},"3 as Value (for example)")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"available values")," are the following :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 for verbose"),(0,l.kt)("li",{parentName:"ul"},"1 for debug"),(0,l.kt)("li",{parentName:"ul"},"2 for info (default value)"),(0,l.kt)("li",{parentName:"ul"},"3 warning"),(0,l.kt)("li",{parentName:"ul"},"4 error"),(0,l.kt)("li",{parentName:"ul"},"5 severe")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Log level",src:n(97200).Z,width:"2414",height:"1410"})),(0,l.kt)("p",null,"So for this example, if you set log.level Value to 3, you will get ",(0,l.kt)("strong",{parentName:"p"},"warning, error and sever")," in your Xcode console."),(0,l.kt)("h3",{id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,l.kt)("p",null,"You can display different visual indicators in the Xcode console to ",(0,l.kt)("strong",{parentName:"p"},"highlight different log types"),"."),(0,l.kt)("p",null,"To do so, you just have to open your Xcode project/Settings/Settings.plist"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Log Format",src:n(34053).Z,width:"2414",height:"1410"})),(0,l.kt)("h4",{id:"emoticones"},"Emoticones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,l.kt)("h4",{id:"circles"},"Circles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,l.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,l.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,l.kt)("p",null,"For that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to your iPhone Settings"),(0,l.kt)("li",{parentName:"ul"},"find your app scrolling down"),(0,l.kt)("li",{parentName:"ul"},"Switch on the feedback")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Activate feedback and logs",src:n(82548).Z,width:"1521",height:"936"})),(0,l.kt)("p",null,"From here, the only thing you have to do is opening again your app. An action sheet will appear to allow you :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sends messages"),(0,l.kt)("li",{parentName:"ul"},"Suggest an improvement"),(0,l.kt)("li",{parentName:"ul"},"Show current log"),(0,l.kt)("li",{parentName:"ul"},"Report a problem")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Display and send logs",src:n(46101).Z,width:"1521",height:"936"})))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(n),g=r,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||l;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52756:function(e,t,n){t.Z=n.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},82548:function(e,t,n){t.Z=n.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},46101:function(e,t,n){t.Z=n.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},34053:function(e,t,n){t.Z=n.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},97200:function(e,t,n){t.Z=n.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},5901:function(e,t,n){t.Z=n.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},76779:function(e,t,n){t.Z=n.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);