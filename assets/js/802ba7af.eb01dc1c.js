"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6925],{3432:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],l={id:"one-to-many-relations",title:"One to Many relations"},s=void 0,c={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-19-R3/tutorials/relations/one-to-many-relations",title:"One to Many relations",description:"This tutorial will show you how easy it can be to include One to Many relations in your mobile project.",source:"@site/versioned_docs/version-19-R3/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/docs/19-R3/tutorials/relations/one-to-many-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/relations/one-to-many-relations.md",tags:[],version:"19-R3",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"version-19-R3/tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/docs/19-R3/tutorials/relations/many-to-one-relations"},next:{title:"One to Many - Title definition",permalink:"/go-mobile/docs/19-R3/tutorials/relations/one-to-many-title-definition"}},u={},p=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will show you how easy it can be to include One to Many relations in your mobile project."),(0,i.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Starter project")),(0,i.kt)("p",null,"In this tutorial, we are going to build a colorful ",(0,i.kt)("strong",{parentName:"p"},"Task app")," using 4D for iOS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Task App Final result",src:n(15777).Z,width:"650",height:"650"})),(0,i.kt)("p",null,"But first, let's have a look at the structure of our database:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select link from structure section",src:n(3930).Z,width:"2152",height:"1666"})),(0,i.kt)("p",null,"As you can see, there is a One to Many link named ",(0,i.kt)("strong",{parentName:"p"},"tasks")," that we will use in our iOS app to display the employees'(",(0,i.kt)("strong",{parentName:"p"},"One"),") tasks(",(0,i.kt)("strong",{parentName:"p"},"to Many"),")."),(0,i.kt)("p",null,"Now, go straight to Open menu > Mobile project... to select ",(0,i.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,i.kt)("strong",{parentName:"p"},"Structure section"),"."),(0,i.kt)("h2",{id:"structure-section"},"Structure section"),(0,i.kt)("p",null,"You can see the ",(0,i.kt)("strong",{parentName:"p"},"tasks relation")," we have seen earlier... Publish it !"),(0,i.kt)("p",null,"This will now operate as any other field for the rest of the app creation process."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Structure section Relations properties",src:n(97426).Z,width:"2164",height:"1988"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On mouse over, a tip displays the table name originating the relation."))),(0,i.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,i.kt)("p",null,"The One to Many relation is now available in the ",(0,i.kt)("strong",{parentName:"p"},"Labels and Icons")," section."),(0,i.kt)("p",null,"It is important to know that including a One to Many relation will create a button into the genrated iOS app."),(0,i.kt)("p",null,"So, in the Labels & Icons section you will define:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a button Label"),(0,i.kt)("li",{parentName:"ul"},"a button icon"),(0,i.kt)("li",{parentName:"ul"},"a title that will be displayed in the destination view (to indicate where you come from for example).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(38898).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"forms-section"},"Forms section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the Forms section and drop the ",(0,i.kt)("em",{parentName:"li"},"tasks")," relation on the Employee Task Detail form.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Related field in Forms section",src:n(42762).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Employee List form, click on one employee "),(0,i.kt)("li",{parentName:"ol"},"This will open the employee's detail form, where you should see a new ",(0,i.kt)("strong",{parentName:"li"},"Relation button")," !"),(0,i.kt)("li",{parentName:"ol"},"Click on this Relation button to display the employee's tasks. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Related field in Forms section",src:n(12284).Z,width:"2268",height:"992"})),(0,i.kt)("p",null,"Well done! You've successfully included One to Many relations in your mobile project."),(0,i.kt)("p",null,"Download the completed project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42762:function(e,t,n){t.Z=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},15777:function(e,t,n){t.Z=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},3930:function(e,t,n){t.Z=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},12284:function(e,t,n){t.Z=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},38898:function(e,t,n){t.Z=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},97426:function(e,t,n){t.Z=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);