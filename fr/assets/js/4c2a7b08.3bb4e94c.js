"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[616],{96341:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(83117),i=a(80102),l=(a(67294),a(3905)),o=["components"],s={id:"adding-actions-template",title:"Ajouter des actions aux mod\xe8les"},r=void 0,u={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R2/tutorials/actions/adding-actions-template",title:"Ajouter des actions aux mod\xe8les",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/fr/docs/19-R2/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R2",frontMatter:{id:"adding-actions-template",title:"Ajouter des actions aux mod\xe8les"},sidebar:"version-19-R2/tutorials",previous:{title:"D\xe9finir une premi\xe8re action",permalink:"/go-mobile/fr/docs/19-R2/tutorials/actions/define-first-action"},next:{title:"Utiliser des param\xe8tres d'action",permalink:"/go-mobile/fr/docs/19-R2/tutorials/actions/using-action-parameters"}},d={},c=[{value:"\xc9TAPE 1. T\xe9l\xe9chargez le projet Starter",id:"\xe9tape-1-t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"\xc9TAPE 2. Ajouter des formats personnalis\xe9s au projet 4D for iOS",id:"\xe9tape-2-ajouter-des-formats-personnalis\xe9s-au-projet-4d-for-ios",level:2},{value:"\xc9TAPE 3. Ajouter des actions dans les formulaires Liste",id:"\xe9tape-3-ajouter-des-actions-dans-les-formulaires-liste",level:2},{value:"Ajouter des actions au mod\xe8le personnalis\xe9 TasksList",id:"ajouter-des-actions-au-mod\xe8le-personnalis\xe9-taskslist",level:3},{value:"A. Ajouter un Tag d&#39;action de table",id:"a-ajouter-un-tag-daction-de-table",level:4},{value:"B. Ajouter un Tag d&#39;action d&#39;entit\xe9",id:"b-ajouter-un-tag-daction-dentit\xe9",level:4},{value:"Ajouter des actions au mod\xe8le personnalis\xe9 TasksCollection",id:"ajouter-des-actions-au-mod\xe8le-personnalis\xe9-taskscollection",level:3},{value:"A. Ajouter un Tag d&#39;action de table",id:"a-ajouter-un-tag-daction-de-table-1",level:4},{value:"B. Ajouter un Tag d&#39;action d&#39;entit\xe9",id:"b-ajouter-un-tag-daction-dentit\xe9-1",level:4},{value:"\xc9TAPE 4. Ajouter des actions dans les formulaires d\xe9taill\xe9s",id:"\xe9tape-4-ajouter-des-actions-dans-les-formulaires-d\xe9taill\xe9s",level:2}],p={toc:c};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,l.kt)("p",{parentName:"blockquote"},"Ajouter des actions aux mod\xe8les de formulaires Liste et formulaires d\xe9taill\xe9s personnalis\xe9s.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,l.kt)("p",{parentName:"blockquote"},"Cliquez ",(0,l.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," pour commencer !")),(0,l.kt)("p",null,"Dans ce tutoriel, nous verrons qu'il est tr\xe8s simple d'",(0,l.kt)("strong",{parentName:"p"},"ajouter des actions aux mod\xe8les personnalis\xe9s"),"."),(0,l.kt)("h2",{id:"\xe9tape-1-t\xe9l\xe9chargez-le-projet-starter"},"\xc9TAPE 1. T\xe9l\xe9chargez le projet Starter"),(0,l.kt)("p",null,"Pour commencer, t\xe9l\xe9chargez le ",(0,l.kt)("strong",{parentName:"p"},"Projet Starter"),", qui comprend :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2 mod\xe8les de formulaires Liste personnalis\xe9s (TasksList et TasksCollection)"),(0,l.kt)("li",{parentName:"ul"},"1 mod\xe8le de formulaire d\xe9taill\xe9 personnalis\xe9 (TasksDetail)"),(0,l.kt)("li",{parentName:"ul"},"un fichier Tasks.4dbase")),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,l.kt)("h2",{id:"\xe9tape-2-ajouter-des-formats-personnalis\xe9s-au-projet-4d-for-ios"},"\xc9TAPE 2. Ajouter des formats personnalis\xe9s au projet 4D for iOS"),(0,l.kt)("p",null,"Tout d'abord, d\xe9posez :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"les dossiers des mod\xe8les ",(0,l.kt)("strong",{parentName:"li"},"TasksList")," et ",(0,l.kt)("strong",{parentName:"li"},"TasksCollection")," dans le dossier ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Mod\xe8les de formulaire liste",src:a(90878).Z,width:"2274",height:"734"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"les dossiers du mod\xe8le ",(0,l.kt)("strong",{parentName:"li"},"TasksDetail")," dans ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Detailform template",src:a(11531).Z,width:"2274",height:"734"})),(0,l.kt)("h2",{id:"\xe9tape-3-ajouter-des-actions-dans-les-formulaires-liste"},"\xc9TAPE 3. Ajouter des actions dans les formulaires Liste"),(0,l.kt)("p",null,"Deux types d'actions sont possibles :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"actions de table"),(0,l.kt)("li",{parentName:"ul"},"actions d'entit\xe9")),(0,l.kt)("p",null,"D'abord, ouvrons le fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard"),"."),(0,l.kt)("h3",{id:"ajouter-des-actions-au-mod\xe8le-personnalis\xe9-taskslist"},"Ajouter des actions au mod\xe8le personnalis\xe9 TasksList"),(0,l.kt)("h4",{id:"a-ajouter-un-tag-daction-de-table"},"A. Ajouter un Tag d'action de table"),(0,l.kt)("p",null,"S\xe9lectionnez le ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add table action tag",src:a(44034).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"b-ajouter-un-tag-daction-dentit\xe9"},"B. Ajouter un Tag d'action d'entit\xe9"),(0,l.kt)("p",null,"S\xe9lectionnez la vue Animatable Table et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add entity action tag",src:a(29958).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"Votre mod\xe8le personnalis\xe9 est pr\xeat \xe0 afficher les actions !"),(0,l.kt)("p",null,"Vous pouvez s\xe9lectionner le mod\xe8le personnalis\xe9 TasksList depuis la ",(0,l.kt)("strong",{parentName:"p"},"section Formulaires")," et ajouter les champs suivants :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Taskslist Forms section",src:a(33840).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"Ajoutons maintenant les tags d'actions au mod\xe8le personnalis\xe9 TasksCollection"),(0,l.kt)("h3",{id:"ajouter-des-actions-au-mod\xe8le-personnalis\xe9-taskscollection"},"Ajouter des actions au mod\xe8le personnalis\xe9 TasksCollection"),(0,l.kt)("p",null,"Pour ce faire, ouvrez le fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard"),"."),(0,l.kt)("h4",{id:"a-ajouter-un-tag-daction-de-table-1"},"A. Ajouter un Tag d'action de table"),(0,l.kt)("p",null,"Le processus est quasiment identique \xe0 celui du mod\xe8le personnalis\xe9 TasksList."),(0,l.kt)("p",null,"S\xe9lectionnez le ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add collection table action tag",src:a(42346).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"b-ajouter-un-tag-daction-dentit\xe9-1"},"B. Ajouter un Tag d'action d'entit\xe9"),(0,l.kt)("p",null,"Pour les entit\xe9s, la fa\xe7on d'afficher les actions est assez diff\xe9rent de TableView : le glissement des actions n'est pas r\xe9ellement adapt\xe9 \xe0 CollectionViews."),(0,l.kt)("p",null,"Ainsi, avec les vues de collection, la meilleure fa\xe7on d'afficher les actions est d'",(0,l.kt)("strong",{parentName:"p"},"appuyer longtemps")," sur les cellules que avec lesquelles vous souhaitez int\xe9ragir."),(0,l.kt)("p",null,"Pour ce faire, s\xe9lectionnez la cellule collectionView et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add collection entity action tag",src:a(3302).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"Pour optimiser l'interaction, vous pouvez ajouter un effet scalaire avec un retour haptique qui ajoutera la ligne suivante dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Number")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"0,96")," (adapt the scale ratio depending on the result you want to get)")),(0,l.kt)("p",null,"Vous pouvez s\xe9lectionner le mod\xe8le personnalis\xe9 TasksCollection depuis la ",(0,l.kt)("strong",{parentName:"p"},"section Formulaires")," et ajouter les champs suivants :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"TasksCollection Forms section",src:a(66837).Z,width:"2164",height:"1988"})),(0,l.kt)("h2",{id:"\xe9tape-4-ajouter-des-actions-dans-les-formulaires-d\xe9taill\xe9s"},"\xc9TAPE 4. Ajouter des actions dans les formulaires d\xe9taill\xe9s"),(0,l.kt)("p",null,"Dans les formulaires d\xe9taill\xe9s, vous pouvez utiliser le ",(0,l.kt)("strong",{parentName:"p"},"bouton g\xe9n\xe9rique")," dans la barre de navigation ou ",(0,l.kt)("strong",{parentName:"p"},"cr\xe9er simplement votre bouton d'action personnalis\xe9"),". Dans les deux cas, vous devez ajouter des tags."),(0,l.kt)("p",null,"Pour le bouton g\xe9n\xe9rique int\xe9gr\xe9 \xe0 la barre de navigation, s\xe9lectionnez le Controller et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add detailform entity action tag",src:a(86230).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"In our tutorial, we want to build our own generic button. Pour ce faire, ouvrez le fichier Storyboard ",(0,l.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard"),"."),(0,l.kt)("p",null,"Ouvrez-le, s\xe9lectionnez le bouton situ\xe9 en bas \xe0 droite et ajoutez cette ligne dans le ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add detailform entity action tag custom action button",src:a(50104).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"Comme vous pouvez le constater, certains boutons visuels sont manquants dans le fichier Storyboard. Vous pouvez les retrouver dans le mod\xe8le du ",(0,l.kt)("strong",{parentName:"p"},"dossier Resources"),". Ils seront inclus au projet durant la phase de g\xe9n\xe9ration."),(0,l.kt)("p",null,"Par exemple, pour le ",(0,l.kt)("strong",{parentName:"p"},"moreButton.imageset")," :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Template ressources",src:a(3955).Z,width:"1522",height:"766"})),(0,l.kt)("p",null,"Vous pouvez s\xe9lectionner le mod\xe8le personnalis\xe9 TasksDetail depuis la ",(0,l.kt)("strong",{parentName:"p"},"section Formulaires")," et ajouter les champs suivants :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"TasksDetail Forms section",src:a(46556).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"F\xe9licitations, votre application iOS Tasks est maintenant termin\xe9e et inclut des actions dans les formulaires Liste et les formulaires d\xe9taill\xe9s\xa0!"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Template ressources",src:a(22904).Z,width:"1559",height:"907"})),(0,l.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,k=p["".concat(r,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3302:function(e,t,a){t.Z=a.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},42346:function(e,t,a){t.Z=a.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},29958:function(e,t,a){t.Z=a.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},44034:function(e,t,a){t.Z=a.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},50104:function(e,t,a){t.Z=a.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},86230:function(e,t,a){t.Z=a.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},11531:function(e,t,a){t.Z=a.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},22904:function(e,t,a){t.Z=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},90878:function(e,t,a){t.Z=a.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},3955:function(e,t,a){t.Z=a.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},46556:function(e,t,a){t.Z=a.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},66837:function(e,t,a){t.Z=a.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},33840:function(e,t,a){t.Z=a.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);