(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7172],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},94510:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),i=["components"],p={id:"from-project-editor",title:"A partir do editor de projeto"},u=void 0,l={unversionedId:"debug/from-project-editor",id:"debug/from-project-editor",isDocsHomePage:!1,title:"A partir do editor de projeto",description:"Pode acontecer que tenha problemas usando o editor de projeto 4D m\xf3vel em sua aplica\xe7\xe3o iOS ou android. Ler os arquivos de hist\xf3rico oferece informa\xe7\xe3o \xfatil nesses casos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/debug/from-project-editor.md",sourceDirName:"debug",slug:"/debug/from-project-editor",permalink:"/go-mobile/pt/docs/next/debug/from-project-editor",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/debug/from-project-editor.md",version:"current",frontMatter:{id:"from-project-editor",title:"A partir do editor de projeto"},sidebar:"docs",previous:{title:"Deep Linking",permalink:"/go-mobile/pt/docs/next/special-features/deep-linking"},next:{title:"From your iPhone and Xcode",permalink:"/go-mobile/pt/docs/next/debug/from-your-iphone-and-xcode"}},c=[{value:"How to debug your app",id:"how-to-debug-your-app",children:[]}],d={toc:c};function s(e){var t=e.components,p=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pode acontecer que tenha problemas usando o editor de projeto 4D m\xf3vel em sua aplica\xe7\xe3o iOS ou android. Ler os arquivos de hist\xf3rico oferece informa\xe7\xe3o \xfatil nesses casos."),(0,a.kt)("p",null,"Para acessar arquivos de hist\xf3rico, aperte a tecla ",(0,a.kt)("strong",{parentName:"p"},"Alt")," e selecione ",(0,a.kt)("strong",{parentName:"p"},"Project")," no painel BUILD do editor de projetos:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Depura\xe7\xe3o",src:r(4614).Z})),(0,a.kt)("p",null,"Itens de menu debug adicionais aparecem para o ",(0,a.kt)("a",{parentName:"p",href:"../project-definition/build-panel#using-the-simulator"},"simulador atualmente selecionado"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open Simulator logs"),": aqui pode encontrar a pasta ",(0,a.kt)("inlineCode",{parentName:"p"},"CrashReporter MobileInstallation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Abra o Relat\xf3rios de Diagn\xf3stico de Simulador"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Abra a pasta de simulador atual"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open Application Simulator Folder"),": abre um submenu para cada aplica\xe7\xe3o"))),(0,a.kt)("h2",{id:"how-to-debug-your-app"},"How to debug your app"),(0,a.kt)("p",null,"Once your app is complete and the simulator\u2019s result is satisfactory, you may want to test it on your smartphone, whether you're working on 4D for iOS or 4D for Android.."),(0,a.kt)("p",null,'To do so, in the Project editor, make sure you have plugged your smartphone, then select your physical device from the list and click on the \u201cBuild and Run" button.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AndroidDevice",src:r(41698).Z})),(0,a.kt)("p",null,":::nota"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Updating the list of devices...")," button enables to refresh the list of available devices."),(0,a.kt)("p",null,":::"),(0,a.kt)("p",null,"4D shall then build the application and install it on the connected device."),(0,a.kt)("p",null,":::nota"),(0,a.kt)("p",null,"If you're an Android developer, you need to add an extra step to the debug process. More details ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/debug/from-your-android-device-and-android-studio"},"here")),(0,a.kt)("p",null,":::"))}s.isMDXComponent=!0},41698:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Sans-titre-7457a478fa192b2c2d1e1da3ab19b283.png"},4614:function(e,t,r){"use strict";t.Z=r.p+"assets/images/debug-from-4D-for-iOS-afaf5a08a7964f3470dddd028f1e3b5a.png"}}]);