(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4375],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,i(i({ref:r},c),{},{components:t})):o.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11159:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=t(22122),n=t(19756),a=(t(67294),t(3905)),i=["components"],l={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},s=void 0,u={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R3/debug/from-your-iphone-and-xcode",isDocsHomePage:!1,title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/es/docs/19-R3/debug/from-your-iphone-and-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/debug/from-your-iphone-and-xcode.md",version:"19-R3",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"version-19-R3/docs",previous:{title:"Desde el editor del proyecto",permalink:"/go-mobile/es/docs/19-R3/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/es/docs/19-R3/debug/from-your-android-device-and-android-studio"}},c=[{value:"Debug from Xcode",id:"debug-from-xcode",children:[{value:"Logger (registrador)",id:"logger-registrador",children:[]},{value:"Niveles",id:"niveles",children:[]},{value:"Formato",id:"formato",children:[]}]},{value:"Debug from your iPhone",id:"debug-from-your-iphone",children:[]}],p={toc:c};function d(e){var r=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,a.kt)("p",null,"Si tiene problemas durante el proceso de creaci\xf3n, puede abrir su proyecto generado con Xcode seleccionando la opci\xf3n ",(0,a.kt)("strong",{parentName:"p"}," Abrir el producto con Xcode ")," en el men\xfa ",(0,a.kt)("strong",{parentName:"p"},"Project"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abra el proyecto con Xcode",src:t(33227).Z})),(0,a.kt)("p",null,"Desde aqu\xed puede ",(0,a.kt)("strong",{parentName:"p"}," lanzar su aplicaci\xf3n ")," en el simulador haciendo clic en el ",(0,a.kt)("strong",{parentName:"p"},"bot\xf3n Generar")," y obtener todos los historiales en la parte inferior del espacio de trabajo Xcode."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Historiales Xcode",src:t(53608).Z})),(0,a.kt)("h3",{id:"logger-registrador"},"Logger (registrador)"),(0,a.kt)("p",null,"Un registrador es un objeto que le permitir\xe1 registrar y rastrear."),(0,a.kt)("p",null,"Para eso utilizamos ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger"),"."),(0,a.kt)("p",null,"Encontrar\xe1 la definici\xf3n de los par\xe1metros del registrador en su proyecto Xcode/Settings/Settings.plist."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Historiales Xcode",src:t(13173).Z})),(0,a.kt)("h3",{id:"niveles"},"Niveles"),(0,a.kt)("p",null,"Puede filtrar y mostrar diferentes niveles de registro en su consola agregando log.level en su archivo Settings.plist."),(0,a.kt)("p",null,"Para hacerlo, agregue una l\xednea haciendo clic derecho en el archivo Settings.plist e ingrese:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"log.level como llave"),(0,a.kt)("li",{parentName:"ul"},"N\xfamero como tipo"),(0,a.kt)("li",{parentName:"ul"},"3 como valor (por ejemplo)")),(0,a.kt)("p",null,"Los ",(0,a.kt)("strong",{parentName:"p"},"valores disponibles")," son los siguientes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 para verbose"),(0,a.kt)("li",{parentName:"ul"},"1 para la depuraci\xf3n"),(0,a.kt)("li",{parentName:"ul"},"2 para info (valor por defecto)"),(0,a.kt)("li",{parentName:"ul"},"3 advertencia"),(0,a.kt)("li",{parentName:"ul"},"4 error"),(0,a.kt)("li",{parentName:"ul"},"5 severo")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nivel del historial",src:t(9869).Z})),(0,a.kt)("p",null,"Entonces, para este ejemplo, si define el valor log.level Value en 3, obtendr\xe1 una ",(0,a.kt)("strong",{parentName:"p"},"advertencia, un error y un severo ")," en su consola Xcode."),(0,a.kt)("h3",{id:"formato"},"Formato"),(0,a.kt)("p",null,"Puede mostrar diferentes indicadores visuales en la consola Xcode para ",(0,a.kt)("strong",{parentName:"p"},"resaltar diferentes tipos de historiales"),"."),(0,a.kt)("p",null,"Para hacerlo, solo tiene que abrir su proyecto Xcode/Settings/Settings.plist"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formato del historial",src:t(23039).Z})),(0,a.kt)("h4",{id:"emoticones"},"Emoticones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,a.kt)("h4",{id:"c\xedrculos"},"C\xedrculos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,a.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,a.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,a.kt)("p",null,"Para eso:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vaya a la configuraci\xf3n de su iPhone"),(0,a.kt)("li",{parentName:"ul"},"encuentre su aplicaci\xf3n desplaz\xe1ndose hacia abajo"),(0,a.kt)("li",{parentName:"ul"},"Active los comentarios")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activate feedback and logs",src:t(26779).Z})),(0,a.kt)("p",null,"A partir de aqu\xed, lo \xfanico que tiene que hacer es volver a abrir su aplicaci\xf3n. Aparecer\xe1 una hoja de acci\xf3n que le permitir\xe1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enviar mensajes"),(0,a.kt)("li",{parentName:"ul"},"Sugerir una mejora"),(0,a.kt)("li",{parentName:"ul"},"Mostrar el historial actual"),(0,a.kt)("li",{parentName:"ul"},"Reportar un problema")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mostrar y enviar los historiales",src:t(54997).Z})))}d.isMDXComponent=!0},53608:function(e,r,t){"use strict";r.Z=t.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},26779:function(e,r,t){"use strict";r.Z=t.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},54997:function(e,r,t){"use strict";r.Z=t.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},23039:function(e,r,t){"use strict";r.Z=t.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},9869:function(e,r,t){"use strict";r.Z=t.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},33227:function(e,r,t){"use strict";r.Z=t.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},13173:function(e,r,t){"use strict";r.Z=t.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);