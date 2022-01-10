(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7556],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,g=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return r?o.createElement(g,l(l({ref:t},p),{},{components:r})):o.createElement(g,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94407:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=r(22122),n=r(19756),i=(r(67294),r(3905)),l=["components"],a={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},u=void 0,s={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R4/debug/from-your-iphone-and-xcode",isDocsHomePage:!1,title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/versioned_docs/version-19-R4/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/fr/docs/debug/from-your-iphone-and-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/debug/from-your-iphone-and-xcode.md",version:"19-R4",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"version-19-R4/docs",previous:{title:"From the Project editor",permalink:"/go-mobile/fr/docs/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/fr/docs/debug/from-your-android-device-and-android-studio"}},p=[{value:"Debug from Xcode",id:"debug-from-xcode",children:[{value:"Logger",id:"logger",children:[]},{value:"Levels",id:"levels",children:[]},{value:"Format",id:"format",children:[]}]}],c={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,i.kt)("p",null,"If you have issues during the build process, you can open your generated project with Xcode selecting the ",(0,i.kt)("strong",{parentName:"p"},"Open the product with Xcode")," option from the ",(0,i.kt)("strong",{parentName:"p"},"Project")," Menu. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Open the project with Xcode",src:r(73947).Z})),(0,i.kt)("p",null,"From here you can ",(0,i.kt)("strong",{parentName:"p"},"launch your application")," in the Simulator clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Build button")," and get all the logs at the bottom of the Xcode work space."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Xcode logs",src:r(93259).Z})),(0,i.kt)("h3",{id:"logger"},"Logger"),(0,i.kt)("p",null,"A logger is an object that will allow you to log and trace."),(0,i.kt)("p",null,"For that we use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," framework."),(0,i.kt)("p",null,"You will find the logger settings definition in your Xcode project/Settings/Settings.plist."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Xcode logs",src:r(93105).Z})),(0,i.kt)("h3",{id:"levels"},"Levels"),(0,i.kt)("p",null,"You can filter and display different log level into your console adding log.level in you Settings.plist file."),(0,i.kt)("p",null,"To do so, add a row Right clicking inside the Settings.plist file and enter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"log.level as Key"),(0,i.kt)("li",{parentName:"ul"},"Number as Type"),(0,i.kt)("li",{parentName:"ul"},"3 as Value (for example)")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"available values")," are the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 for verbose"),(0,i.kt)("li",{parentName:"ul"},"1 for debug"),(0,i.kt)("li",{parentName:"ul"},"2 for info (default value)"),(0,i.kt)("li",{parentName:"ul"},"3 warning"),(0,i.kt)("li",{parentName:"ul"},"4 error"),(0,i.kt)("li",{parentName:"ul"},"5 severe")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Log level",src:r(16404).Z})),(0,i.kt)("p",null,"So for this example, if you set log.level Value to 3, you will get ",(0,i.kt)("strong",{parentName:"p"},"warning, error and sever")," in your Xcode console."),(0,i.kt)("h3",{id:"format"},"Format"),(0,i.kt)("p",null,"You can display different visual indicators in the Xcode console to ",(0,i.kt)("strong",{parentName:"p"},"highlight different log types"),"."),(0,i.kt)("p",null,"To do so, you just have to open your Xcode project/Settings/Settings.plist"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Log Format",src:r(91590).Z})),(0,i.kt)("h4",{id:"emoticones"},"Emoticones"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,i.kt)("h4",{id:"circles"},"Circles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,i.kt)("p",null,"##Debug from your iPhone"),(0,i.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback. "),(0,i.kt)("p",null,"For that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your iPhone Settings"),(0,i.kt)("li",{parentName:"ul"},"find your app scrolling down"),(0,i.kt)("li",{parentName:"ul"},"Switch on the feedback")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Activate feedback and logs",src:r(27524).Z})),(0,i.kt)("p",null,"From here, the only thing you have to do is opening again your app. An action sheet will appear to allow you :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sends messages"),(0,i.kt)("li",{parentName:"ul"},"Suggest an improvement"),(0,i.kt)("li",{parentName:"ul"},"Show current log"),(0,i.kt)("li",{parentName:"ul"},"Report a problem")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Display and send logs",src:r(23847).Z})))}d.isMDXComponent=!0},93259:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},27524:function(e,t,r){"use strict";t.Z=r.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},23847:function(e,t,r){"use strict";t.Z=r.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},91590:function(e,t,r){"use strict";t.Z=r.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},16404:function(e,t,r){"use strict";t.Z=r.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},73947:function(e,t,r){"use strict";t.Z=r.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},93105:function(e,t,r){"use strict";t.Z=r.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);