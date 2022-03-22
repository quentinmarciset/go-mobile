"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8776],{21606:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(83117),i=a(80102),l=(a(67294),a(3905)),o=["components"],s={id:"adding-actions-template",title:"Adding actions in templates"},r=void 0,d={unversionedId:"tutorials/actions/adding-actions-template",id:"tutorials/actions/adding-actions-template",title:"Adding actions in templates",description:"OBJECTIVES",source:"@site/docs/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/docs/next/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/adding-actions-template.md",tags:[],version:"current",frontMatter:{id:"adding-actions-template",title:"Adding actions in templates"},sidebar:"tutorials",previous:{title:"Defining your first action",permalink:"/go-mobile/docs/next/tutorials/actions/define-first-action"},next:{title:"Using action parameters",permalink:"/go-mobile/docs/next/tutorials/actions/using-action-parameters"}},c={},p=[{value:"STEP 1. Download the Starter project",id:"step-1-download-the-starter-project",level:2},{value:"STEP 2. Add custom templates to 4D for iOS Project",id:"step-2-add-custom-templates-to-4d-for-ios-project",level:2},{value:"STEP 3. Add actions in List forms",id:"step-3-add-actions-in-list-forms",level:2},{value:"Add actions to TasksList custom template",id:"add-actions-to-taskslist-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag",level:4},{value:"Add actions to TasksCollection custom template",id:"add-actions-to-taskscollection-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag-1",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag-1",level:4},{value:"STEP 4. Add actions in Detail forms",id:"step-4-add-actions-in-detail-forms",level:2}],u={toc:p};function m(t){var e=t.components,s=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,l.kt)("p",{parentName:"blockquote"},"Add actions to custom List and Detail forms templates.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,l.kt)("p",{parentName:"blockquote"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,l.kt)("p",null,"In this tutorial, we are going to see how easy it can be to ",(0,l.kt)("strong",{parentName:"p"},"add actions to custom templates"),"."),(0,l.kt)("h2",{id:"step-1-download-the-starter-project"},"STEP 1. Download the Starter project"),(0,l.kt)("p",null,"To begin, download the ",(0,l.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"two custom List form templates (TasksList and TasksCollection)"),(0,l.kt)("li",{parentName:"ul"},"a custom Detail form template (TasksDetail)"),(0,l.kt)("li",{parentName:"ul"},"a Tasks.4dbase file")),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,l.kt)("h2",{id:"step-2-add-custom-templates-to-4d-for-ios-project"},"STEP 2. Add custom templates to 4D for iOS Project"),(0,l.kt)("p",null,"First, drop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksList")," and ",(0,l.kt)("strong",{parentName:"li"},"TasksCollection")," template folders in ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," folder ")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Listform templates",src:a(59829).Z,width:"2274",height:"734"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksDetail")," template folders in ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Detailform template",src:a(59093).Z,width:"2274",height:"734"})),(0,l.kt)("h2",{id:"step-3-add-actions-in-list-forms"},"STEP 3. Add actions in List forms"),(0,l.kt)("p",null,"Two types of actions are available: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table actions"),(0,l.kt)("li",{parentName:"ul"},"entity actions ")),(0,l.kt)("p",null,"Let's first open the ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,l.kt)("h3",{id:"add-actions-to-taskslist-custom-template"},"Add actions to TasksList custom template"),(0,l.kt)("h4",{id:"a-add-table-action-tag"},"A. Add Table action Tag"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add table action tag",src:a(99525).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"b-add-entity-action-tag"},"B. Add Entity action Tag"),(0,l.kt)("p",null,"Select the Animatable Table View and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add entity action tag",src:a(34733).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"Your custom template is ready to display actions! "),(0,l.kt)("p",null,"You can select the TaskList custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Taskslist Forms section",src:a(65397).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"Now let's add action tags to the TasksCollection custom template"),(0,l.kt)("h3",{id:"add-actions-to-taskscollection-custom-template"},"Add actions to TasksCollection custom template"),(0,l.kt)("p",null,"To do so, open the ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,l.kt)("h4",{id:"a-add-table-action-tag-1"},"A. Add Table action Tag"),(0,l.kt)("p",null,"The process is quite as similar as TasksList custom template's process."),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add collection table action tag",src:a(12973).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"b-add-entity-action-tag-1"},"B. Add Entity action Tag"),(0,l.kt)("p",null,"For entity, the way you display actions is quite different than TableView: swipe action are not really adapted to CollectionViews."),(0,l.kt)("p",null,"So with collection views, the best way to display actions is to use a ",(0,l.kt)("strong",{parentName:"p"},"long pressure")," gesture on the cells you want to interact with."),(0,l.kt)("p",null,"For that, select the collectionView cell and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add collection entity action tag",src:a(24345).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Number")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"0,96")," (adapt the scale ratio depending on the result you want to get)")),(0,l.kt)("p",null,"You can select the TasksCollection custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"TasksCollection Forms section",src:a(54856).Z,width:"2164",height:"1988"})),(0,l.kt)("h2",{id:"step-4-add-actions-in-detail-forms"},"STEP 4. Add actions in Detail forms"),(0,l.kt)("p",null,"In Detail forms, you can use the ",(0,l.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar or ",(0,l.kt)("strong",{parentName:"p"},"create easily your own custom action button"),". In both cases, you have to add tags."),(0,l.kt)("p",null,"For generic button embedded in the navigation bar, select the Controller and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add detailform entity action tag",src:a(75370).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"In our tutorial, we want to build our own generic button. For that, open the ",(0,l.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," file."),(0,l.kt)("p",null,"Open it, select the button at bottom right and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add detailform entity action tag custom action button",src:a(70421).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"As you can see, a few visual buttons are missing in the Storyboard file. You can actually find those visuals in the  ",(0,l.kt)("strong",{parentName:"p"},"Resources folder")," template. They will be included in the project during the build process."),(0,l.kt)("p",null,"For example for the ",(0,l.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Template ressources",src:a(68357).Z,width:"1522",height:"766"})),(0,l.kt)("p",null,"You can select the TasksDetail custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"TasksDetail Forms section",src:a(48128).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"Congratulations, your Tasks iOS app is now complete and includes actions in List form and Detail form !"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Template ressources",src:a(14221).Z,width:"1559",height:"907"})),(0,l.kt)("p",null,"Download the completed project: "),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}m.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=n.createContext({}),d=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,r=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(a),m=i,k=u["".concat(r,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(k,o(o({ref:e},c),{},{components:a})):n.createElement(k,o({ref:e},c))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24345:function(t,e,a){e.Z=a.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},12973:function(t,e,a){e.Z=a.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},34733:function(t,e,a){e.Z=a.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},99525:function(t,e,a){e.Z=a.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},70421:function(t,e,a){e.Z=a.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},75370:function(t,e,a){e.Z=a.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},59093:function(t,e,a){e.Z=a.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},14221:function(t,e,a){e.Z=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},59829:function(t,e,a){e.Z=a.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},68357:function(t,e,a){e.Z=a.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},48128:function(t,e,a){e.Z=a.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},54856:function(t,e,a){e.Z=a.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},65397:function(t,e,a){e.Z=a.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);