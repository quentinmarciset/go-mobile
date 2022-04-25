"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2035],{8820:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={id:"define-filter-query",title:"Definir un Filter Query"},l=void 0,c={unversionedId:"tutorials/filter-queries/define-filter-query",id:"version-19-R4/tutorials/filter-queries/define-filter-query",title:"Definir un Filter Query",description:'Por el momento, si genera la aplicaci\xf3n del proyecto Starter e introduce "michelle.simpson@mail.com" como correo electr\xf3nico de inicio de sesi\xf3n (uno de los administradores de cuentas), ver\xe1 todos los contratos y estados de los administradores (Closed y In Progress).',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/filter-queries/define-filter-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/define-filter-query",permalink:"/go-mobile/es/docs/19-R4/tutorials/filter-queries/define-filter-query",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/filter-queries/define-filter-query.md",tags:[],version:"19-R4",frontMatter:{id:"define-filter-query",title:"Definir un Filter Query"},sidebar:"version-19-R4/tutorials",previous:{title:"Filter queries",permalink:"/go-mobile/es/docs/19-R4/tutorials/filter-queries/filter-query-introduction"},next:{title:"Filtro de b\xfasqueda usuario",permalink:"/go-mobile/es/docs/19-R4/tutorials/filter-queries/user-information-query"}},u={},p=[],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Por el momento, si genera la aplicaci\xf3n del proyecto Starter e introduce "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n (uno de los administradores de cuentas), ver\xe1 ',(0,o.kt)("strong",{parentName:"p"},"todos los contratos y estados de los administradores")," (",(0,o.kt)("em",{parentName:"p"},"Closed")," y ",(0,o.kt)("em",{parentName:"p"},"In Progress"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS app without queries",src:r(60675).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"Como se indic\xf3 anteriormente, queremos que los administradores de cuentas accedan a sus contratos ",(0,o.kt)("em",{parentName:"p"},"En curso")," iniciando sesi\xf3n en su aplicaci\xf3n m\xf3vil con su correo electr\xf3nico. Para hacer esto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acceda a la ",(0,o.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"')),(0,o.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,o.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,o.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,o.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Campos")," y seleccione ",(0,o.kt)("strong",{parentName:"li"},"Estado"),"."),(0,o.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Comparadores")," y seleccione ",(0,o.kt)("strong",{parentName:"li"},"Igual a"),"."),(0,o.kt)("li",{parentName:"ul"},"Como desea mostrar los contratos ",(0,o.kt)("em",{parentName:"li"},"abiertos"),", ingrese ",(0,o.kt)("strong",{parentName:"li"},"En progreso")),(0,o.kt)("li",{parentName:"ul"},"Recuerde validar su b\xfasqueda haciendo clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Validar"),", de lo contrario no podr\xe1 crear su aplicaci\xf3n.")),(0,o.kt)("p",null,"Deber\xeda obtener este resultado:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:r(7580).Z,width:"2164",height:"1988"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTA")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Se muestra un icono de ",(0,o.kt)("strong",{parentName:"li"},"filtro")," a la derecha de cada tabla cuando se le aplica un filtro b\xe1sico."),(0,o.kt)("li",{parentName:"ul"},"Para este tipo de filtros de b\xfasqueda, puede optar por integrar los datos en la aplicaci\xf3n o cargar los datos despu\xe9s de iniciar sesi\xf3n marcando la casilla de verificaci\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Integrar los datos en la aplicaci\xf3n"),"."),(0,o.kt)("li",{parentName:"ul"},"El tama\xf1o se calcular\xe1 en la primera generaci\xf3n para que pueda visualizar el ",(0,o.kt)("strong",{parentName:"li"},"tama\xf1o de sus datos"),"."))),(0,o.kt)("p",null,'Si genera su aplicaci\xf3n e ingresa "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, ver\xe1 que todos los contratos ',(0,o.kt)("em",{parentName:"p"},"In Progress")," se muestran en el simulador."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aplicaci\xf3n iOS con consulta b\xe1sica",src:r(2366).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"\xa1No es exactamente lo que esper\xe1bamos! Lo que queremos ahora es que cada administrador de cuentas visualice solo sus propios contratos ",(0,o.kt)("em",{parentName:"p"},"In Progress"),", \xa1As\xed que completemos nuestra b\xfasqueda!"))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7580:function(e,t,r){t.Z=r.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},60675:function(e,t,r){t.Z=r.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},2366:function(e,t,r){t.Z=r.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"}}]);