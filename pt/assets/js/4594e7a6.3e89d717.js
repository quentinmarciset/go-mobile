(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8360],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return d},kt:function(){return c}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?t.createElement(k,r(r({ref:a},d),{},{components:n})):t.createElement(k,r({ref:a},d))}));function c(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87786:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var t=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],l={id:"deep-linking",title:"Deep Linking"},s=void 0,p={unversionedId:"special-features/deep-linking",id:"special-features/deep-linking",isDocsHomePage:!1,title:"Deep Linking",description:'Gra\xe7as a funcionalidade deep linking, \xe9 poss\xedvel partilhar o conte\xfado que est\xe1 vendo com todos os seus colegas. Aqui h\xe1 uma ilustra\xe7\xe3o que resume o "deep linking":',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/go-mobile/pt/docs/next/special-features/deep-linking",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/deep-linking.md",version:"current",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/go-mobile/pt/docs/next/special-features/push-notification"},next:{title:"A partir do editor de projeto",permalink:"/go-mobile/pt/docs/next/debug/from-project-editor"}},d=[{value:"Compara\xe7\xe3o de modos deep linking",id:"compara\xe7\xe3o-de-modos-deep-linking",children:[{value:"URL Scheme",id:"url-scheme",children:[]},{value:"Universal links",id:"universal-links",children:[]}]},{value:"Esquema URL personalizado",id:"esquema-url-personalizado",children:[{value:"Esquema de URL personalizado no editor de projeto",id:"esquema-de-url-personalizado-no-editor-de-projeto",children:[]},{value:"Usar esquemas URL em seu app m\xf3vel",id:"usar-esquemas-url-em-seu-app-m\xf3vel",children:[]}]},{value:"Universal links",id:"universal-links-1",children:[{value:"Links universais no Editor de Projeto",id:"links-universais-no-editor-de-projeto",children:[]}]},{value:"Deep Linking e notifica\xe7\xf5es Push",id:"deep-linking-e-notifica\xe7\xf5es-push",children:[]}],m={toc:d};function u(e){var a=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gra\xe7as a funcionalidade ",(0,i.kt)("strong",{parentName:"p"},"deep linking"),', \xe9 poss\xedvel partilhar o conte\xfado que est\xe1 vendo com todos os seus colegas. Aqui h\xe1 uma ilustra\xe7\xe3o que resume o "deep linking":'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Anima\xe7\xe3o Deep Link",src:n(57876).Z})),(0,i.kt)("p",null,'H\xe1 duas maneiras de implementar "deep linking" em IOS: ',(0,i.kt)("strong",{parentName:"p"},'"URL scheme"')," e ",(0,i.kt)("strong",{parentName:"p"},'"Universal Links"'),'. Os "URL schemes" s\xe3o um m\xe9todo bem conhecido de "deep linking"  e os "Universal links" s\xe3o o novo m\xe9todo que Apple implementou para conectar facilmente sua p\xe1gina web e sua aplica\xe7\xe3o sob o mesmo link.'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"rma\xe7\xe3o 4D for Android")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A funcionalidade Deep linking n\xe3o est\xe1 atualmente dispon\xedvel para 4D for Android."))),(0,i.kt)("h2",{id:"compara\xe7\xe3o-de-modos-deep-linking"},"Compara\xe7\xe3o de modos deep linking"),(0,i.kt)("h3",{id:"url-scheme"},"URL Scheme"),(0,i.kt)("p",null,"Aqui h\xe1 uma compara\xe7\xe3o entre as duas op\xe7\xf5es que est\xe3o dispon\xedveis no editor de projeto:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PR\xd3S"),(0,i.kt)("th",{parentName:"tr",align:null},"CONTRAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F\xe1cil de implementar"),(0,i.kt)("td",{parentName:"tr",align:null},"Sempre requer permiss\xe3o")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N\xe3o precisa de um backend adicional"),(0,i.kt)("td",{parentName:"tr",align:null},"N\xe3o funciona se a aplica\xe7\xe3o n\xe3o estiver instalada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"N\xe3o funciona em Android")))),(0,i.kt)("h3",{id:"universal-links"},"Universal links"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PR\xd3S"),(0,i.kt)("th",{parentName:"tr",align:null},"CONTRAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N\xe3o requer permiss\xe3o"),(0,i.kt)("td",{parentName:"tr",align:null},"Se necessita um backend est\xe1tico com SSL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N\xe3o abre o navegador"),(0,i.kt)("td",{parentName:"tr",align:null},"Mais complexo de implementar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compat\xedvel com Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL de fallback se a aplica\xe7\xe3o n\xe3o estiver instalada"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"esquema-url-personalizado"},"Esquema URL personalizado"),(0,i.kt)("p",null,"No n\xedvel mais simples, os esquemas de URL permitem aos usu\xe1rios abrir uma aplica\xe7\xe3o desde outras aplica\xe7\xf5es. Mas o verdadeiro poder dos esquemas URL est\xe1 na capacidade de realizar a\xe7\xf5es espec\xedficas a medida que se abre a aplica\xe7\xe3o."),(0,i.kt)("h3",{id:"esquema-de-url-personalizado-no-editor-de-projeto"},"Esquema de URL personalizado no editor de projeto"),(0,i.kt)("p",null,"\xc9 muito simples incluir um esquema URL a sua aplica\xe7\xe3o m\xf3vel. Vamos ver um exemplo:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," da p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/next/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action"))," e selecione o alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidade - para compartilhar o conte\xfado de um formul\xe1rio detalhado"),(0,i.kt)("li",{parentName:"ul"},"tabela - para compartilhar um formul\xe1rio lista"))),(0,i.kt)("li",{parentName:"ol"},"Marque a propriedade ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," na se\xe7\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," do editor de projetos."),(0,i.kt)("li",{parentName:"ol"},"A informa\xe7\xe3o do esquema URL \xe9 preenchido automaticamente com o nome da aplica\xe7\xe3o definida previamente na p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/next/project-definition/general"},(0,i.kt)("strong",{parentName:"a"},"General")),". Entretanto, ainda pode ser editado:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Editor de projeto deep linking",src:n(61706).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Preencha seu m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Informa\xe7\xe3o fonrecida por aplica\xe7\xe3o m\xf3vel\nvar $0 : Object  // Informa\xe7\xe3o retornada para aplica\xe7\xe3o m\xf3vel\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Cria\xe7\xe3o da aplica\xe7\xe3o.")),(0,i.kt)("h3",{id:"usar-esquemas-url-em-seu-app-m\xf3vel"},"Usar esquemas URL em seu app m\xf3vel"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clique no bot\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Action")," para mostrar todas as suas a\xe7\xf5es dispon\xedveis atualmente"),(0,i.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Share")," que foi previamente definida no editor de projetos"),(0,i.kt)("li",{parentName:"ol"},"Aparece uma nova vista que lhe permite come\xe7ar a compartilhar o conte\xfado"),(0,i.kt)("li",{parentName:"ol"},"Selecione o m\xe9todo de interc\xe2mbio que quiser utilizar"),(0,i.kt)("li",{parentName:"ol"},"Envie.")),(0,i.kt)("h2",{id:"universal-links-1"},"Universal links"),(0,i.kt)("p",null,"Os Universal links oferecem v\xe1rios benef\xedcios chave que n\xe3o est\xe3o dispon\xedveis com os esquemas de URL personalizados. Espec\xedficamente, os links universais s\xe3o:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": Diferente de schemes personalizados de  URL , links universais n\xe3o podem ser reclamadas por outros apps porque usam links padr\xe3o  HTTP ou HTTPS para seu website.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": quando os usu\xe1rios instalam sua aplica\xe7\xe3o, iOS verifica que seu site web permita que sua aplica\xe7\xe3o abra URLs em seu nome. S\xf3 voc\xea pode criar e subir o arquivo que outorga esta permiss\xe3o a seu servidor web, pelo que a associa\xe7\xe3o de seu website com sua aplica\xe7\xe3o seja segura.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": os links universais funcionam mesmo quando sua aplica\xe7\xe3o n\xe3o estiver instalada. Neste caso, ao pressionar um link a seu site web se abre o conte\xfado em Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": uma \xfanica URL funciona tanto para seu site web quanto para sua aplica\xe7\xe3o.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": outras aplica\xe7\xf5es podem se comunicar com sua aplica\xe7\xe3o sem necessidade de saber se sua aplica\xe7\xe3o estiver instalada."))),(0,i.kt)("h3",{id:"links-universais-no-editor-de-projeto"},"Links universais no Editor de Projeto"),(0,i.kt)("p",null,"Para incluir os links universais em sua aplica\xe7\xe3o, o processo \xe9 bastante similar ao processo dos esquemas URL:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," da p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/next/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action"))," e selecione o alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidade - para compartilhar um conte\xfado de um formul\xe1rio detalhado"),(0,i.kt)("li",{parentName:"ul"},"tabela - para compartilhar um formul\xe1rio lista"))),(0,i.kt)("li",{parentName:"ol"},"Ativar a funcionalidade ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," na se\xe7\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," no editor de projetos"),(0,i.kt)("li",{parentName:"ol"},"Introduza a URL de seu site web no campo ",(0,i.kt)("strong",{parentName:"li"},"Universal links")),(0,i.kt)("li",{parentName:"ol"},"Preencha seu m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Informa\xe7\xe3o fonrecida por aplica\xe7\xe3o m\xf3vel\nvar $0 : Object  // Informa\xe7\xe3o retornada para aplica\xe7\xe3o m\xf3vel\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Cria\xe7\xe3o da aplica\xe7\xe3o."),(0,i.kt)("li",{parentName:"ol"},"Ativar os links universais do m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// M\xe9todo de banco On Web Connection\n\nvar $1; $2; $3; $4; $5; $6 : Text\nvar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Gerenciado por c\xf3digo m\xf3vel normal\n    Else\n        // Seu c\xf3digo web\nEnd case\n\n")),(0,i.kt)("h2",{id:"deep-linking-e-notifica\xe7\xf5es-push"},"Deep Linking e notifica\xe7\xf5es Push"),(0,i.kt)("p",null,"Algo genial sobre Deep Linking \xe9 que \xe9 completamente compat\xedvel com ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/special-features/push-notification"},"notifica\xe7\xf5es push"),". Isso significa que pode enviar links Deep a seus usu\xe1rios e lev\xe1-los diretamente \xe0 p\xe1gina correta."),(0,i.kt)("p",null,"Como pode ver, essa funcionalidade abre uma grande gama de possibilidades. Deep linking \xe9 uma funcionalidade crucial nas aplica\xe7\xf5es de hoje em dia, especialmente j\xe1 que os usu\xe1rios consumem o conte\xfado mais rapidamente. Esta funcionalidade leva diretamente ao lugar desejado. Assim \xe9 recomendado que usem isso em seus apps m\xf3veis."),(0,i.kt)("p",null,":::dica"),(0,i.kt)("p",null,"Veja a documenta\xe7\xe3o ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server")," ")," para saber mais sobre como combinar notifica\xe7\xf5es push com  deep linking."),(0,i.kt)("p",null,":::"))}u.isMDXComponent=!0},57876:function(e,a,n){"use strict";a.Z=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},61706:function(e,a,n){"use strict";a.Z=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);