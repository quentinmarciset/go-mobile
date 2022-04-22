"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6194],{13207:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),n=["components"],i={id:"detail-form-template",title:"Plantillas de formulario detallado"},c=void 0,s={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"tutorials/creating-detail-forms/detail-form-template",title:"Plantillas de formulario detallado",description:"En este tutorial, lo guiaremos en la creaci\xf3n de varios ejemplos de plantilla de formulario detallado. Se mostrar\xe1 un encabezado de imagen , as\xed como tambi\xe9n los campos de t\xedtulo y contenido que se duplicar\xe1n en las aplicaciones iOS y Android generadas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/es/docs/next/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"current",frontMatter:{id:"detail-form-template",title:"Plantillas de formulario detallado"},sidebar:"tutorials",previous:{title:"Dise\xf1o de Android",permalink:"/go-mobile/es/docs/next/tutorials/creating-list-forms/list-form-layout"},next:{title:"Iconos de formulario detallado",permalink:"/go-mobile/es/docs/next/tutorials/creating-detail-forms/detail-form-icon"}},u={},d=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2},{value:"A\xf1ada una plantilla de formulario detallado a su proyecto m\xf3vil",id:"a\xf1ada-una-plantilla-de-formulario-detallado-a-su-proyecto-m\xf3vil",level:2},{value:"La carpeta de plantillas de formulario detallado y su contenido",id:"la-carpeta-de-plantillas-de-formulario-detallado-y-su-contenido",level:2}],p={toc:d};function m(e){var t=e.components,i=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"En este tutorial, lo guiaremos en la creaci\xf3n de varios ejemplos de plantilla de formulario detallado. Se mostrar\xe1 un ",(0,l.kt)("strong",{parentName:"p"},"encabezado de imagen "),", as\xed como tambi\xe9n ",(0,l.kt)("strong",{parentName:"p"},"los campos de t\xedtulo y contenido")," que se duplicar\xe1n en las aplicaciones iOS y Android generadas."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Custom template final result",src:a(94234).Z,width:"1417",height:"907"})),(0,l.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,l.kt)("p",null,"Para comenzar, descargue el ",(0,l.kt)("strong",{parentName:"p"},"proyecto Starter"),", que incluye:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Una carpeta ",(0,l.kt)("strong",{parentName:"li"},"Custom Detail form")," (Carpeta de plantilla personalizada de formulario detallado)"),(0,l.kt)("li",{parentName:"ul"},'Un proyecto de demostraci\xf3n en 4D ("Contact") con un proyecto de aplicaci\xf3n m\xf3vil listo para usar.')),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,l.kt)("h2",{id:"a\xf1ada-una-plantilla-de-formulario-detallado-a-su-proyecto-m\xf3vil"},"A\xf1ada una plantilla de formulario detallado a su proyecto m\xf3vil"),(0,l.kt)("p",null,"Primero, cree una carpeta ",(0,l.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," y arrastre y suelte la carpeta ",(0,l.kt)("strong",{parentName:"p"},"Custom Detail form")," en ella."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Mobile folder custom template",src:a(51456).Z,width:"1342",height:"367"})),(0,l.kt)("p",null,'Ahora, inicie su aplicaci\xf3n 4D y abra el proyecto 4D "Contact". A continuaci\xf3n, seleccione el proyecto m\xf3vil "Contact Demo App": ',(0,l.kt)("strong",{parentName:"p"},"Archivo > Abrir > Proyecto m\xf3vil > App Demo Contact"),"."),(0,l.kt)("p",null,"En la ",(0,l.kt)("strong",{parentName:"p"},"secci\xf3n Formulario")," en el editor del proyecto, puede ver que su plantilla de formulario detallado se ha agregado exitosamente a la lista de plantillas de formularios detallados disponibles:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Forms section",src:a(92388).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Ahora vamos a centrarnos en el contenido de la carpeta ",(0,l.kt)("strong",{parentName:"p"},"Formulario detallado personalizado"),"."),(0,l.kt)("h2",{id:"la-carpeta-de-plantillas-de-formulario-detallado-y-su-contenido"},"La carpeta de plantillas de formulario detallado y su contenido"),(0,l.kt)("p",null,"En esta carpeta, encontrar\xe1:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Un icono ",(0,l.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," de 160x160px: mostrado en el editor del proyecto cuando seleccione su plantilla personalizada entre otras"),(0,l.kt)("li",{parentName:"ul"},"Un archivo ",(0,l.kt)("strong",{parentName:"li"},"a manifest.json"),": incluye una descripci\xf3n b\xe1sica de la plantilla"),(0,l.kt)("li",{parentName:"ul"},"Un archivo ",(0,l.kt)("strong",{parentName:"li"},"template.svg"),": la representaci\xf3n de su plantilla que se mostrar\xe1 cuando defina el contenido de su formulario detallado y d\xf3nde arrastrar\xe1 y soltar\xe1 sus campos"),(0,l.kt)("li",{parentName:"ul"},"una carpeta ",(0,l.kt)("strong",{parentName:"li"},"ios")," que incluye el storyboard (interfaz gr\xe1fica) y el archivo ",(0,l.kt)("strong",{parentName:"li"},"Swift")," (c\xf3digo del formulario) en la carpeta ",(0,l.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")),(0,l.kt)("li",{parentName:"ul"},"una ",(0,l.kt)("strong",{parentName:"li"},"carpeta android")," que incluya el archivo layout.xml (interfaz gr\xe1fica) en la carpeta ",(0,l.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout"),".")),(0,l.kt)("p",null,"Estos archivos y carpetas se detallan en las siguientes secciones."))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,n(n({ref:t},u),{},{components:a})):r.createElement(f,n({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var s=2;s<l;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92388:function(e,t,a){t.Z=a.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},94234:function(e,t,a){t.Z=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},51456:function(e,t,a){t.Z=a.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);