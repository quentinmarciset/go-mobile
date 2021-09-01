(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5891],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75249:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"many-to-one-relations",title:"Many to One relations"},l=void 0,c={unversionedId:"tutorials/relations/many-to-one-relations",id:"tutorials/relations/many-to-one-relations",isDocsHomePage:!1,title:"Many to One relations",description:"Este tutorial vai mostrar como \xe9 f\xe1cil incluir rela\xe7\xf5es Muitos para Um em seu projeto m\xf3vel.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/go-mobile/pt/docs/next/tutorials/relations/many-to-one-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/many-to-one-relations.md",version:"current",frontMatter:{id:"many-to-one-relations",title:"Many to One relations"},sidebar:"tutorials",previous:{title:"Usar par\xe2metros de a\xe7\xe3o",permalink:"/go-mobile/pt/docs/next/tutorials/actions/using-action-parameters"},next:{title:"One to Many relations",permalink:"/go-mobile/pt/docs/next/tutorials/relations/one-to-many-relations"}},u=[{value:"Structure section",id:"structure-section",children:[]}],p={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Este tutorial vai mostrar como \xe9 f\xe1cil incluir rela\xe7\xf5es Muitos para Um em seu projeto m\xf3vel."),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"Neste tutorial, vamos usar os nomes das rela\xe7\xf5es entre suas tabelas. Dar nomes de rela\xe7\xe3o bem descritivos ajuda a facilitar a defini\xe7\xe3o de sua estrutura de projeto."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"Vamos come\xe7ar baixando o Projeto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"Starter project")),(0,o.kt)("p",null,"Aqu\xed queremos mostrar la categor\xeda de cada tarea en el formulario detallado de su aplicaci\xf3n generada. Para fazer isso, abra ",(0,o.kt)("strong",{parentName:"p"},"StarteriOSProject")," from ",(0,o.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,o.kt)("p",null,"Depois v\xe1 para a se\xe7\xe3o Estrutura e selecione a ",(0,o.kt)("strong",{parentName:"p"},"tabela Task"),"."),(0,o.kt)("h3",{id:"structure-section"},"Structure section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pode verificar que a ",(0,o.kt)("strong",{parentName:"p"},"rela\xe7\xe3o TaskCategory")," est\xe1 sublinhado")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ao clicar nele, ser\xe3o mostrados os campos dispon\xedveis atrav\xe9s dessa rela\xe7\xe3o.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Selecione o  ",(0,o.kt)("strong",{parentName:"p"},"campo Name")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select link from structure section",src:a(88975).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Este campo funcionar\xe1 como qualquer outro campo durante o resto do processo de cria\xe7\xe3o da aplica\xe7\xe3o")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pode tamb\xe9m filtrar seu conte\xfado de app usando campos relacionados da se\xe7\xe3o Data. Para fazer isso digite ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," no campo Filter query para excluir as tarefas pessoais."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Related field from Data section",src:a(31505).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ent\xe3o pode selecionar um ",(0,o.kt)("strong",{parentName:"p"},"\xedcone")," assim como ",(0,o.kt)("strong",{parentName:"p"},"formatadores")," e definir ",(0,o.kt)("strong",{parentName:"p"},"etiquetas curtas e longas")," na se\xe7\xe3o Etiquetas e \xcdcones"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field from Labels and Icons section",src:a(29923).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o Formul\xe1rios e arraste o campo no formul\xe1rio detalhado Tasks")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:a(23135).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and Run")),(0,o.kt)("p",null,"Seu campo relacionado deve aparecer no formul\xe1rio detalhado do app!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:a(63182).Z})))}m.isMDXComponent=!0},31505:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},63182:function(e,t,a){"use strict";t.Z=a.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},23135:function(e,t,a){"use strict";t.Z=a.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},29923:function(e,t,a){"use strict";t.Z=a.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},88975:function(e,t,a){"use strict";t.Z=a.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);