"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6117],{41310:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=t(83117),i=t(80102),n=(t(67294),t(3905)),r=["components"],l={id:"adding-actions-template",title:"Adicionar a\xe7\xf5es em modelos"},s=void 0,d={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R5/tutorials/actions/adding-actions-template",title:"Adicionar a\xe7\xf5es em modelos",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/pt/docs/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R5",frontMatter:{id:"adding-actions-template",title:"Adicionar a\xe7\xf5es em modelos"},sidebar:"tutorials",previous:{title:"Definir sua primeira a\xe7\xe3o",permalink:"/go-mobile/pt/docs/tutorials/actions/define-first-action"},next:{title:"Usar par\xe2metros de a\xe7\xe3o",permalink:"/go-mobile/pt/docs/tutorials/actions/using-action-parameters"}},p={},c=[{value:"PASSO 1. Baixe o Starter Project",id:"passo-1-baixe-o-starter-project",level:2},{value:"PASSO 2. Adicione modelos personalizados para Projeto 4D for iOS",id:"passo-2-adicione-modelos-personalizados-para-projeto-4d-for-ios",level:2},{value:"PASSO 3. Adicione a\xe7\xf5es em formul\xe1rios Lista",id:"passo-3-adicione-a\xe7\xf5es-em-formul\xe1rios-lista",level:2},{value:"Adicione a\xe7\xf5es para o modelo personalizado TasksList",id:"adicione-a\xe7\xf5es-para-o-modelo-personalizado-taskslist",level:3},{value:"A. A. A. A. Adicionar uma Tag de a\xe7\xe3o de tabela",id:"a-a-a-a-adicionar-uma-tag-de-a\xe7\xe3o-de-tabela",level:4},{value:"B. B. B. B. Adicionar uma Tag de a\xe7\xe3o de Entidade",id:"b-b-b-b-adicionar-uma-tag-de-a\xe7\xe3o-de-entidade",level:4},{value:"Adicionar a\xe7\xf5es para o modelo personalizado TasksCollection",id:"adicionar-a\xe7\xf5es-para-o-modelo-personalizado-taskscollection",level:3},{value:"A. A. A. A. Adicionar uma Tag de a\xe7\xe3o de tabela",id:"a-a-a-a-adicionar-uma-tag-de-a\xe7\xe3o-de-tabela-1",level:4},{value:"B. B. B. B. Adicionar uma Tag de a\xe7\xe3o de Entidade",id:"b-b-b-b-adicionar-uma-tag-de-a\xe7\xe3o-de-entidade-1",level:4},{value:"PASSO 4. Adicionar as a\xe7\xf5es nos formul\xe1rios Detalhados",id:"passo-4-adicionar-as-a\xe7\xf5es-nos-formul\xe1rios-detalhados",level:2}],m={toc:c};function u(e){var a=e.components,l=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Adicionar a\xe7\xf5es para modelos de formul\xe1rios de Lista e formul\xe1rios detalhados.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"PR\xc9-REQUISITOS")),(0,n.kt)("p",{parentName:"blockquote"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,n.kt)("p",null,"Neste tutorial, veremos como \xe9 f\xe1cil ",(0,n.kt)("strong",{parentName:"p"},"agregar a\xe7\xf5es a planilhas personalizadas"),"."),(0,n.kt)("h2",{id:"passo-1-baixe-o-starter-project"},"PASSO 1. Baixe o Starter Project"),(0,n.kt)("p",null,"Para come\xe7ar, baixe o ",(0,n.kt)("strong",{parentName:"p"},"Starter Project"),", que inclui:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 modelos personalizados formul\xe1rios Lista (TaskList e TasksCollection)"),(0,n.kt)("li",{parentName:"ul"},"1 modelo personalizado Formul\xe1rio Detalhado (TasksDetails)"),(0,n.kt)("li",{parentName:"ul"},"um arquivo Tasks.4dbase")),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Baixar")),(0,n.kt)("h2",{id:"passo-2-adicione-modelos-personalizados-para-projeto-4d-for-ios"},"PASSO 2. Adicione modelos personalizados para Projeto 4D for iOS"),(0,n.kt)("p",null,"Primeiro, solte:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"as pastas de planilhas ",(0,n.kt)("strong",{parentName:"li"},"TasksList")," e ",(0,n.kt)("strong",{parentName:"li"},"TasksCollection")," na pasta ",(0,n.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listform templates",src:t(61537).Z,width:"2274",height:"734"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"as pastas do modelo ",(0,n.kt)("strong",{parentName:"li"},"TasksDetail")," en ",(0,n.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Detailform template",src:t(60588).Z,width:"2274",height:"734"})),(0,n.kt)("h2",{id:"passo-3-adicione-a\xe7\xf5es-em-formul\xe1rios-lista"},"PASSO 3. Adicione a\xe7\xf5es em formul\xe1rios Lista"),(0,n.kt)("p",null,"H\xe1 dois tipos de a\xe7\xf5es dispon\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a\xe7\xf5es de Tabela"),(0,n.kt)("li",{parentName:"ul"},"a\xe7\xf5es de entidade")),(0,n.kt)("p",null,"Primeiro vamos abrir o arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.. Storyboard")," ."),(0,n.kt)("h3",{id:"adicione-a\xe7\xf5es-para-o-modelo-personalizado-taskslist"},"Adicione a\xe7\xf5es para o modelo personalizado TasksList"),(0,n.kt)("h4",{id:"a-a-a-a-adicionar-uma-tag-de-a\xe7\xe3o-de-tabela"},"A. A. A. A. Adicionar uma Tag de a\xe7\xe3o de tabela"),(0,n.kt)("p",null,"Selecione o ",(0,n.kt)("strong",{parentName:"p"},"List form Controller")," e adicione esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add table action tag",src:t(49274).Z,width:"2530",height:"1932"})),(0,n.kt)("h4",{id:"b-b-b-b-adicionar-uma-tag-de-a\xe7\xe3o-de-entidade"},"B. B. B. B. Adicionar uma Tag de a\xe7\xe3o de Entidade"),(0,n.kt)("p",null,"Selecione a vista Animatable Table e adicione esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add entity action tag",src:t(80293).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Seu modelo personalizado est\xe1 pronto para exibir as a\xe7\xf5es!"),(0,n.kt)("p",null,"Pode selecionar o modelo personalizado TaskList na ",(0,n.kt)("strong",{parentName:"p"},"se\xe7\xe3o Formul\xe1rios")," e agregar os seguintes campos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Taskslist Forms section",src:t(88154).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"Agora vamos agregar as etiquetas de a\xe7\xe3o ao modelo personalizado TasksCollection"),(0,n.kt)("h3",{id:"adicionar-a\xe7\xf5es-para-o-modelo-personalizado-taskscollection"},"Adicionar a\xe7\xf5es para o modelo personalizado TasksCollection"),(0,n.kt)("p",null,"Para fazer isso, abra o arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm. Storyboard"),"."),(0,n.kt)("h4",{id:"a-a-a-a-adicionar-uma-tag-de-a\xe7\xe3o-de-tabela-1"},"A. A. A. A. Adicionar uma Tag de a\xe7\xe3o de tabela"),(0,n.kt)("p",null,"O processo \xe9 similar ao processo do modelo personalizado TasksList"),(0,n.kt)("p",null,"Selecione o ",(0,n.kt)("strong",{parentName:"p"},"List form Controller")," e adicione esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add collection table action tag",src:t(4299).Z,width:"2530",height:"1932"})),(0,n.kt)("h4",{id:"b-b-b-b-adicionar-uma-tag-de-a\xe7\xe3o-de-entidade-1"},"B. B. B. B. Adicionar uma Tag de a\xe7\xe3o de Entidade"),(0,n.kt)("p",null,"Para as entidades, a forma de mostrar as a\xe7\xf5es \xe9 bastante diferente de TableView: a a\xe7\xe3o de deslizar n\xe3o est\xe1 adaptada a CollectionViews."),(0,n.kt)("p",null,"Para as vistas de cole\xe7\xe3o, a melhor maneira de mostrar as a\xe7\xf5es \xe9 utilizar um gesto de ",(0,n.kt)("strong",{parentName:"p"},"press\xe3o longo")," nas c\xe9lulas com as quais queira interagir."),(0,n.kt)("p",null,"Para isso, selecione a c\xe9lula collectionView e agregue esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add collection entity action tag",src:t(27514).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Para otimizar a intera\xe7\xe3o, pode agregar um efeito escalar com uma haptic feedback (que permite modular sutilmente vibra\xe7\xf5es em games) agregando a linha abaixo em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Number")),(0,n.kt)("li",{parentName:"ul"},"Valor: ",(0,n.kt)("inlineCode",{parentName:"li"},"0,96")," (adapte a rela\xe7\xe3o de escala segundo o resultado que quiser obter)")),(0,n.kt)("p",null,"Pode selecionar o modelo personalizado TasksCollection na ",(0,n.kt)("strong",{parentName:"p"},"se\xe7\xe3o Formul\xe1rios")," e adicionar os campos abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TasksCollection Forms section",src:t(9684).Z,width:"2164",height:"1988"})),(0,n.kt)("h2",{id:"passo-4-adicionar-as-a\xe7\xf5es-nos-formul\xe1rios-detalhados"},"PASSO 4. Adicionar as a\xe7\xf5es nos formul\xe1rios Detalhados"),(0,n.kt)("p",null,"Nos formul\xe1rios detalhados, pode utilizar o ",(0,n.kt)("strong",{parentName:"p"},"bot\xe3o gen\xe9rico")," na barra de navega\xe7\xe3o ou ",(0,n.kt)("strong",{parentName:"p"},"criar facilmente seu pr\xf3prio bot\xe3o de a\xe7\xe3o personalizado"),". Em ambos os casos voc\xea tem que adicionar tags."),(0,n.kt)("p",null,"Para o bot\xe3o gen\xe9rico integrado na barra de navega\xe7\xe3o, selecione o Controlador e adicione esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add detailform entity action tag",src:t(20805).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Em nosso tutorial, queremos construir nosso pr\xf3prio bot\xe3o gen\xe9rico. Para isso, abra o arquivo Storyboard ",(0,n.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard"),"."),(0,n.kt)("p",null,"Abra o arquivo, selecione o bot\xe3o na parte inferior direita e agregue esta linha em ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add detailform entity action tag custom action button",src:t(99825).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Como pode ver, alguns bot\xf5es visuais est\xe3o faltando no arquivo Storyboard. Pode encontrar estas imagens na planilha",(0,n.kt)("strong",{parentName:"p"},"carpeta Resources"),". Ser\xe3o inclu\xeddas no projeto durante o processo de build."),(0,n.kt)("p",null,"Por exemplo, para  ",(0,n.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template ressources",src:t(15326).Z,width:"1522",height:"766"})),(0,n.kt)("p",null,"Pode selecionar o modelo personalizado TasksDetail na ",(0,n.kt)("strong",{parentName:"p"},"se\xe7\xe3o Formul\xe1rios")," e agregar os campos abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TasksDetail Forms section",src:t(10093).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"Parab\xe9ns, sua aplica\xe7\xe3o iOS Tasks agora est\xe1 completa e inclui a\xe7\xf5es nos formul\xe1rios Lista e detalhados."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template ressources",src:t(40191).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"Baixe o projeto terminado:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Baixar")))}u.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var o=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=d(e.components);return o.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return t?o.createElement(k,r(r({ref:a},p),{},{components:t})):o.createElement(k,r({ref:a},p))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,r=new Array(n);r[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<n;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27514:function(e,a,t){a.Z=t.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},4299:function(e,a,t){a.Z=t.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},80293:function(e,a,t){a.Z=t.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},49274:function(e,a,t){a.Z=t.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},99825:function(e,a,t){a.Z=t.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},20805:function(e,a,t){a.Z=t.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},60588:function(e,a,t){a.Z=t.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},40191:function(e,a,t){a.Z=t.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},61537:function(e,a,t){a.Z=t.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},15326:function(e,a,t){a.Z=t.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},10093:function(e,a,t){a.Z=t.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},9684:function(e,a,t){a.Z=t.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},88154:function(e,a,t){a.Z=t.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);