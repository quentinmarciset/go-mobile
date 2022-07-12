"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1087],{45747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const r={id:"list-form-svg-file",title:"Template.svg"},i=void 0,o={unversionedId:"tutorials/creating-list-forms/list-form-svg-file",id:"version-19-R5/tutorials/creating-list-forms/list-form-svg-file",title:"Template.svg",description:"El archivo template.svg es una representaci\xf3n visual b\xe1sica de una plantilla. En este archivo, deber\xe1 definir \xe1reas para poder agregar campos a su plantilla de formulario listado desde el editor de proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-svg-file.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-svg-file",permalink:"/go-mobile/es/docs/19-R5/tutorials/creating-list-forms/list-form-svg-file",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-svg-file.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-svg-file",title:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/es/docs/19-R5/tutorials/creating-list-forms/list-form-manifest"},next:{title:"B\xfasqueda multicriterios",permalink:"/go-mobile/es/docs/19-R5/tutorials/creating-list-forms/multi-criteria-search"}},s={},c=[{value:"T\xedtulo",id:"t\xedtulo",level:2},{value:"ios:values",id:"iosvalues",level:2},{value:"Posici\xf3n, alto y ancho del \xe1rea",id:"posici\xf3n-alto-y-ancho-del-\xe1rea",level:2},{value:"\xc1rea SearchableField:",id:"\xe1rea-searchablefield",level:3},{value:"\xc1rea SectionField:",id:"\xe1rea-sectionfield",level:3},{value:"\xc1rea ImageField:",id:"\xe1rea-imagefield",level:3},{value:"\xc1rea Title Field:",id:"\xe1rea-title-field",level:3},{value:"\xc1rea Subtitle Field:",id:"\xe1rea-subtitle-field",level:3},{value:"tipos:ios",id:"tiposios",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"template.svg")," es una representaci\xf3n visual b\xe1sica de una plantilla. En este archivo, deber\xe1 definir \xe1reas para poder agregar campos a su plantilla de formulario listado desde el editor de proyecto."),(0,n.kt)("p",null,"Aqu\xed hay una versi\xf3n final:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template svg file",src:a(361).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"Centr\xe9monos en las diferentes partes de este archivo svg y en lo que necesitar\xe1 editar."),(0,n.kt)("h2",{id:"t\xedtulo"},"T\xedtulo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom List form</title>\n")),(0,n.kt)("p",null,"T\xedtulo de la plantilla."),(0,n.kt)("h2",{id:"iosvalues"},"ios:values"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<text id="cookery" ios:values="search,section,f1,f2,f3"/>\n')),(0,n.kt)("p",null,"Incluye las identificaciones que definen sus \xe1reas de formulario:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"search"),": se refiere al \xe1rea del campo de b\xfasqueda. Esto le permitir\xe1 arrastrar y soltar un campo como criterio de b\xfasqueda en su formulario Lista (opcional)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"section"),": se refiere al \xe1rea de campo de la secci\xf3n. Esto le permitir\xe1 arrastrar y soltar un campo como criterio de ordenaci\xf3n en su formulario Lista (opcional)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"f1, f2 y f3"),": se refiere a los campos a mostrar en cada celda de su formulario listado. Esto le permitir\xe1 arrastrar y soltar campos para que aparezcan en las celdas de su formulario Lista.")),(0,n.kt)("h2",{id:"posici\xf3n-alto-y-ancho-del-\xe1rea"},"Posici\xf3n, alto y ancho del \xe1rea"),(0,n.kt)("p",null,"Puede definir la posici\xf3n, el alto y ancho para:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Searchfield"),(0,n.kt)("li",{parentName:"ul"},"Sectionfield"),(0,n.kt)("li",{parentName:"ul"},"Otros campos generales que se mostrar\xe1n en cada celda de la tabla")),(0,n.kt)("h3",{id:"\xe1rea-searchablefield"},"\xc1rea SearchableField:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,60)\u201d>\n\n//2\n<rect class="bg field" x="14" y="12" width="238" height="30\u201d/>\n\n//3\n<path class="magnifyingGlass" transform="translate(20,8) scale(1)\u201d/>\n\n//4\n<textArea id="search.label" class="label" x="14" y="8" width="238"/>\n\n//5\n<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>\n\n//6\n<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,n.kt)("li",{parentName:"ol"},"Icono para mostrar un icono de lupa en el campo de b\xfasqueda"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho, as\xed como los ",(0,n.kt)("a",{parentName:"li",href:"#iostypes"},(0,n.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,n.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,n.kt)("p",null,"El campo de b\xfasqueda es opcional."),(0,n.kt)("h3",{id:"\xe1rea-sectionfield"},"\xc1rea SectionField:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<rect class="bg field" x="10" y="110" width="246" height="30\u201d/>\n\n//2\n<textArea id="section.label" class="label" x="0" y="118" width="250"/>\n\n//3\n<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField\u201d/>\n\n//4\n<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho y tambi\xe9n los ",(0,n.kt)("a",{parentName:"li",href:"#iostypes"},(0,n.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,n.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,n.kt)("p",null,"El campo de secci\xf3n es opcional."),(0,n.kt)("h3",{id:"\xe1rea-imagefield"},"\xc1rea ImageField:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)">\n\n//2\n<rect class="bg field" x="14" y="0" width="60" height="65"/>\n\n//3\n<path class="picture" transform="translate(-60 0) scale(5)"/>\n\n//4\n<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,n.kt)("li",{parentName:"ol"},"Icono para mostrar una imagen en el imageField"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho y tambi\xe9n los ",(0,n.kt)("a",{parentName:"li",href:"#iostypes"},(0,n.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,n.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,n.kt)("h3",{id:"\xe1rea-title-field"},"\xc1rea Title Field:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>\n\n//4\n<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]\u201d/>\n\n//5\n<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho y tambi\xe9n los ",(0,n.kt)("a",{parentName:"li",href:"#iostypes"},(0,n.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,n.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,n.kt)("h3",{id:"\xe1rea-subtitle-field"},"\xc1rea Subtitle Field:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,198)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>\n\n//4\n<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]\u201d/>\n\n//5\n<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n de toda el \xe1rea Y"),(0,n.kt)("li",{parentName:"ol"},"Posici\xf3n, alto y ancho del \xe1rea de fondo"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del \xe1rea de texto y el ancho"),(0,n.kt)("li",{parentName:"ol"},"Definir la posici\xf3n del campo soltable, su alto y su ancho y tambi\xe9n los ",(0,n.kt)("a",{parentName:"li",href:"#iostypes"},(0,n.kt)("strong",{parentName:"a"},"tipos de campos"))," aceptados"),(0,n.kt)("li",{parentName:"ol"},"Definir un bot\xf3n de cancelaci\xf3n que se mostrar\xe1 para eliminar el contenido actual")),(0,n.kt)("h2",{id:"tiposios"},"tipos:ios"),(0,n.kt)("p",null,"Se soportan los siguientes tipos de campos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"alfa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"real")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"texto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"imagen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"fecha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"entero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"entero largo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"hora")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"25"),(0,n.kt)("td",{parentName:"tr",align:null},"entero 64 bits")))),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n sobre estos tipos de campo, consulte ",(0,n.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Concepts/data-types.html"},(0,n.kt)("strong",{parentName:"a"},"esta p\xe1gina")),"."),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,":::consejo"),(0,n.kt)("p",null,"Para facilitar la definici\xf3n de los tipos de campos, 4D for iOS le permite incluir tipos de campos con los ",(0,n.kt)("strong",{parentName:"p"}," valores positivos ")," y tambi\xe9n excluir los tipos de campo con ",(0,n.kt)("strong",{parentName:"p"}," valores negativos "),". Por ejemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," le permitir\xe1 arrastrar y soltar todos los campos excepto las im\xe1genes y las fechas. Para incluir todos los tipos de campos, introduzca simplemente ",(0,n.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."),(0,n.kt)("p",null,":::"))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?l.createElement(f,i(i({ref:t},p),{},{components:a})):l.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},361:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/template-svg-file-e14ce32222c51abd644acf29b8a0649e.png"}}]);