"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8292],{57054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={id:"many-to-one-relations",title:"Many to One relations"},s=void 0,c={unversionedId:"tutorials/relations/many-to-one-relations",id:"tutorials/relations/many-to-one-relations",title:"Many to One relations",description:"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Muchos a uno en proyectos m\xf3viles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/go-mobile/es/docs/next/tutorials/relations/many-to-one-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/many-to-one-relations.md",tags:[],version:"current",frontMatter:{id:"many-to-one-relations",title:"Many to One relations"},sidebar:"tutorials",previous:{title:"Utilizar par\xe1metros de acci\xf3n",permalink:"/go-mobile/es/docs/next/tutorials/actions/using-action-parameters"},next:{title:"One to Many relations",permalink:"/go-mobile/es/docs/next/tutorials/relations/one-to-many-relations"}},u={},p=[{value:"Structure section",id:"structure-section",level:3}],m={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Muchos a uno en proyectos m\xf3viles."),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas. Dar nombres de enlaces descriptivos, puede facilitar la definici\xf3n de la estructura de su proyecto."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"Starter project")),(0,o.kt)("p",null,"Aqu\xed queremos mostrar la categor\xeda de cada tarea en el formulario detallado de su aplicaci\xf3n generada. Para ello, abra el ",(0,o.kt)("strong",{parentName:"p"},"StarteriOSProject")," desde ",(0,o.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,o.kt)("p",null,"Luego dir\xedjase a la secci\xf3n Structure y seleccione la ",(0,o.kt)("strong",{parentName:"p"},"tabla Task "),"."),(0,o.kt)("h3",{id:"structure-section"},"Structure section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Puede constatar que el ",(0,o.kt)("strong",{parentName:"p"},"enlace TaskCategory")," est\xe1 subrayado")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Al hacer clic en \xe9l, se mostrar\xe1n los campos disponibles a trav\xe9s de esta relaci\xf3n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Seleccione el ",(0,o.kt)("strong",{parentName:"p"},"campo Name")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select link from structure section",src:n(54223).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Este campo funcionar\xe1 como cualquier otro campo durante el resto del proceso de creaci\xf3n de la aplicaci\xf3n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tambi\xe9n puede filtrar el contenido de su aplicaci\xf3n utilizando campos relacionados, de la secci\xf3n Datos. Para ello, introduzca ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," en el campo Filter query para excluir las tareas personales."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Related field in Forms section",src:n(84658).Z,width:"2164",height:"1988"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Luego puede seleccionar un ",(0,o.kt)("strong",{parentName:"p"},"\xedcono")," y los ",(0,o.kt)("strong",{parentName:"p"},"formatos")," y definir las ",(0,o.kt)("strong",{parentName:"p"},"etiquetas cortas y largas")," en la secci\xf3n Etiquetas e iconos"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field from Labels and Icons section",src:n(91913).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vaya a la secci\xf3n Formularios y arrastre el campo en el formulario detallado Tasks")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(90934).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and Run")),(0,o.kt)("p",null,"\xa1Su campo relacionado debe aparecer en el formulario detallado de su aplicaci\xf3n!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(93889).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84658:function(e,t,n){t.Z=n.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},93889:function(e,t,n){t.Z=n.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},90934:function(e,t,n){t.Z=n.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},91913:function(e,t,n){t.Z=n.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},54223:function(e,t,n){t.Z=n.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);