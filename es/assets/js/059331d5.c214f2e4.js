"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8147],{67567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},s=void 0,u={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"tutorials/relations/one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo",description:"Definir un t\xedtulo para sus vistas de destino",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/go-mobile/es/docs/next/tutorials/relations/one-to-many-title-definition",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-title-definition.md",tags:[],version:"current",frontMatter:{id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},sidebar:"tutorials",previous:{title:"One to Many relations",permalink:"/go-mobile/es/docs/next/tutorials/relations/one-to-many-relations"},next:{title:"Uno a Muchos - Bot\xf3n personalizado",permalink:"/go-mobile/es/docs/next/tutorials/relations/one-to-many-custom-button"}},c={},p=[{value:"Definir un t\xedtulo para sus vistas de destino",id:"definir-un-t\xedtulo-para-sus-vistas-de-destino",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"definir-un-t\xedtulo-para-sus-vistas-de-destino"},"Definir un t\xedtulo para sus vistas de destino"),(0,i.kt)("p",null,"Para realizar un seguimiento de la vista de la que proviene en su aplicaci\xf3n, 4D for iOS le permite definir un T\xedtulo personalizado."),(0,i.kt)("p",null,"En este tutorial, utilizaremos el siguiente proyecto:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"Starter project")),(0,i.kt)("p",null,"Ahora, vaya directamente al ",(0,i.kt)("strong",{parentName:"p"},"men\xfa Abrir > Proyecto m\xf3vil..."),", seleccione ",(0,i.kt)("em",{parentName:"p"},"Time Keeper")," y vaya a la secci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Etiquetas e iconos"),"."),(0,i.kt)("p",null,"Desde aqu\xed, abra la pesta\xf1a de relaci\xf3n para definir el t\xedtulo de relaci\xf3n ",(0,i.kt)("em",{parentName:"p"},"tasks")," e ingrese la siguiente l\xednea en la columna ",(0,i.kt)("strong",{parentName:"p"},"Titles"),":",(0,i.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(41144).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"Como habr\xe1 adivinado, esto le permitir\xe1 mostrar el ",(0,i.kt)("strong",{parentName:"p"},"valor del nombre del empleado")," en la vista de destino, en funci\xf3n del formulario detallado Employee en el que estaba anteriormente."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(80659).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"Esta es una excelente manera de hacer un seguimiento de la vista de donde viene."),(0,i.kt)("p",null,"\xa1Ahora veamos c\xf3mo puede crear y agregar su propio bot\xf3n Relation en el pr\xf3ximo tutorial!"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41144:function(e,t,n){t.Z=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},80659:function(e,t,n){t.Z=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);