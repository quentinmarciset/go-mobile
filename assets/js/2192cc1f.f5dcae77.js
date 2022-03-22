"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3208],{39121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"many-to-one-relations",title:"Many to One relations"},s=void 0,c={unversionedId:"tutorials/relations/many-to-one-relations",id:"version-19-R3/tutorials/relations/many-to-one-relations",title:"Many to One relations",description:"This tutorial will show you how easy it can be to include Many to one relations in your mobile projects.",source:"@site/versioned_docs/version-19-R3/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/go-mobile/docs/19-R3/tutorials/relations/many-to-one-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/relations/many-to-one-relations.md",tags:[],version:"19-R3",frontMatter:{id:"many-to-one-relations",title:"Many to One relations"},sidebar:"version-19-R3/tutorials",previous:{title:"Using action parameters",permalink:"/go-mobile/docs/19-R3/tutorials/actions/using-action-parameters"},next:{title:"One to Many relations",permalink:"/go-mobile/docs/19-R3/tutorials/relations/one-to-many-relations"}},u={},p=[{value:"Structure section",id:"structure-section",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will show you how easy it can be to include Many to one relations in your mobile projects."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this tutorial, we will use the relation names between your tables. Giving descriptive relation names can make your project structure definition easier."))),(0,o.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"Starter project")),(0,o.kt)("p",null,"Here we want to display the category for each task in the detail form of your generated app. To do so, open the ",(0,o.kt)("strong",{parentName:"p"},"StarteriOSProject")," from ",(0,o.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,o.kt)("p",null,"Then go right to your Structure section and select the ",(0,o.kt)("strong",{parentName:"p"},"Task table"),"."),(0,o.kt)("h3",{id:"structure-section"},"Structure section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can notice that the ",(0,o.kt)("strong",{parentName:"p"},"TaskCategory relation")," is underlined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clicking on it will display available fields through this relation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Name field")))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Select link from structure section",src:n(13099).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This field will operate as any other field for the rest of the app creation process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also filter your app content using related fields from the Data section. To do so enter ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," in the Filter query field to exclude personal tasks."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"Related field from Data section",src:n(31379).Z,width:"2164",height:"1988"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can then select an ",(0,o.kt)("strong",{parentName:"p"},"icon")," as well as ",(0,o.kt)("strong",{parentName:"p"},"formatters")," and define ",(0,o.kt)("strong",{parentName:"p"},"short and long labels")," from the Labels and Icons section"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Related field from Labels and Icons section",src:n(99862).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the Forms section and drag the field on the Task Detail form")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Related field in Forms section",src:n(35375).Z,width:"2164",height:"1988"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and Run")),(0,o.kt)("p",null,"You should see your related field in your app detail form !"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Related field in Forms section",src:n(14604).Z,width:"1559",height:"907"})))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31379:function(e,t,n){t.Z=n.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},14604:function(e,t,n){t.Z=n.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},35375:function(e,t,n){t.Z=n.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},99862:function(e,t,n){t.Z=n.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},13099:function(e,t,n){t.Z=n.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);