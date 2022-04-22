"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7289],{42009:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=t(83117),n=t(80102),a=(t(67294),t(3905)),i=["components"],l={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},s=void 0,u={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R3/debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R3/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/pt/docs/19-R3/debug/from-your-iphone-and-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/debug/from-your-iphone-and-xcode.md",tags:[],version:"19-R3",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"version-19-R3/docs",previous:{title:"A partir do editor de projeto",permalink:"/go-mobile/pt/docs/19-R3/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/pt/docs/19-R3/debug/from-your-android-device-and-android-studio"}},p={},d=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Logger (registrador)",id:"logger-registrador",level:3},{value:"N\xedveis",id:"n\xedveis",level:3},{value:"Formato",id:"formato",level:3},{value:"Emoticons",id:"emoticons",level:4},{value:"C\xedrculos",id:"c\xedrculos",level:4},{value:"Debug from your iPhone",id:"debug-from-your-iphone",level:2}],c={toc:d};function m(e){var r=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,a.kt)("p",null,"Se tiver problemas durante o processo de compila\xe7\xe3o pode abrir seu projeto gerado com Xcode selecionando a op\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Open the product with Xcode")," a partir do menu ",(0,a.kt)("strong",{parentName:"p"},"Project"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abrir o projeto com Xcode",src:t(31008).Z,width:"2164",height:"1988"})),(0,a.kt)("p",null,"A partir da\xed \xe9 poss\xedvel ",(0,a.kt)("strong",{parentName:"p"},"lan\xe7ar sua aplica\xe7\xe3o")," no Simulator clicando no bot\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Build")," e obter todo o hist\xf3rico no fundo do espa\xe7o de trabalho de Xcode."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:t(17233).Z,width:"2502",height:"2144"})),(0,a.kt)("h3",{id:"logger-registrador"},"Logger (registrador)"),(0,a.kt)("p",null,"Um logger \xe9 um objeto que permite registrar o log e rastrear."),(0,a.kt)("p",null,"Para isso usamos ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," ."),(0,a.kt)("p",null,"Vai encontrar a defini\xe7\xe3o dos par\xe2metros do logger em  Xcode project/Settings/Settings.plist."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:t(58045).Z,width:"2414",height:"1410"})),(0,a.kt)("h3",{id:"n\xedveis"},"N\xedveis"),(0,a.kt)("p",null,"Pode filtrar e exibir diferentes n\xedveis do log em seu console, adicionando o log.level em seu arquivo Settings.plist."),(0,a.kt)("p",null,"Para fazer isso, adicione uma folha dando um clique direito dentro do arquivo Settings.plist e entre:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"log.level como Key"),(0,a.kt)("li",{parentName:"ul"},"Number como Type"),(0,a.kt)("li",{parentName:"ul"},"3 como Value (por exemplo)")),(0,a.kt)("p",null,"Os ",(0,a.kt)("strong",{parentName:"p"},"valores dispon\xedveis")," s\xe3o os abaixo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 para verbose"),(0,a.kt)("li",{parentName:"ul"},"1 para debug"),(0,a.kt)("li",{parentName:"ul"},"2 para info (valor normal)"),(0,a.kt)("li",{parentName:"ul"},"3 aviso"),(0,a.kt)("li",{parentName:"ul"},"4 erro"),(0,a.kt)("li",{parentName:"ul"},"5 severo")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"N\xedvel do hist\xf3rico",src:t(1985).Z,width:"2414",height:"1410"})),(0,a.kt)("p",null,"Para este exemplo, se estabelecer o valor de log.level para 3, vai obter ",(0,a.kt)("strong",{parentName:"p"},"um aviso, um erro e severidade")," no console  Xcode."),(0,a.kt)("h3",{id:"formato"},"Formato"),(0,a.kt)("p",null,"Pode exibir indicadores visuais diferentes no console Xcode para ",(0,a.kt)("strong",{parentName:"p"},"ressaltar diferentes tipos de log"),"."),(0,a.kt)("p",null,"Para fazer isso, precisa abrir  Xcode project/Settings/Settings.plist"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formato do hist\xf3rico",src:t(52541).Z,width:"2414",height:"1410"})),(0,a.kt)("h4",{id:"emoticons"},"Emoticons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,a.kt)("h4",{id:"c\xedrculos"},"C\xedrculos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,a.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,a.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,a.kt)("p",null,"Para isso:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe1 para configura\xe7\xf5es no seu IPhone"),(0,a.kt)("li",{parentName:"ul"},"encontre sua aplica\xe7\xe3o indo para baixo"),(0,a.kt)("li",{parentName:"ul"},"ative os coment\xe1rios (feedback)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activate feedback and logs",src:t(85743).Z,width:"1521",height:"936"})),(0,a.kt)("p",null,"A partir daqui, a \xfanica coisa que precisa fazer \xe9 reabrir sua aplica\xe7\xe3o. Uma folha de a\xe7\xe3o vai aparecer que vai permitir:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enviar mensagens"),(0,a.kt)("li",{parentName:"ul"},"Sugerir uma melhoria"),(0,a.kt)("li",{parentName:"ul"},"Mostrar o hist\xf3rico atual"),(0,a.kt)("li",{parentName:"ul"},"Relatar um problema")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Display and send logs",src:t(28651).Z,width:"1521",height:"936"})))}m.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(g,i(i({ref:r},p),{},{components:t})):o.createElement(g,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},17233:function(e,r,t){r.Z=t.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},85743:function(e,r,t){r.Z=t.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},28651:function(e,r,t){r.Z=t.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},52541:function(e,r,t){r.Z=t.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},1985:function(e,r,t){r.Z=t.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},31008:function(e,r,t){r.Z=t.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},58045:function(e,r,t){r.Z=t.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);