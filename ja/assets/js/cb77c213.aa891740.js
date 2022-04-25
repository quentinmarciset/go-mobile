"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5547],{65818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},s=void 0,u={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-19-R4/tutorials/relations/one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",description:"This tutorial will show you how easy it can be to include One to Many relations in your mobile project.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R4/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/ja/docs/19-R4/tutorials/relations/one-to-many-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/relations/one-to-many-relations.md",tags:[],version:"19-R4",frontMatter:{id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"version-19-R4/tutorials",previous:{title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/19-R4/tutorials/relations/many-to-one-relations"},next:{title:"\uff11\u5bfe\uff2e\u30bf\u30a4\u30c8\u30eb\u306e\u8a2d\u5b9a",permalink:"/go-mobile/ja/docs/19-R4/tutorials/relations/one-to-many-title-definition"}},c={},p=[{value:"Structure section",id:"structure-section",level:2},{value:"\u30e9\u30d9\u30eb &amp; \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will show you how easy it can be to include One to Many relations in your mobile project."),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Starter project")),(0,a.kt)("p",null,"In this tutorial, we are going to build a colorful ",(0,a.kt)("strong",{parentName:"p"},"Task app")," using 4D for iOS."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Task App Final result",src:n(87163).Z,width:"650",height:"650"})),(0,a.kt)("p",null,"But first, let's have a look at the structure of our database:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select link from structure section",src:n(80681).Z,width:"2152",height:"1666"})),(0,a.kt)("p",null,"As you can see, there is a One to Many link named ",(0,a.kt)("strong",{parentName:"p"},"tasks")," that we will use in our iOS app to display the employees'(",(0,a.kt)("strong",{parentName:"p"},"One"),") tasks(",(0,a.kt)("strong",{parentName:"p"},"to Many"),")."),(0,a.kt)("p",null,"Now, go straight to Open menu > Mobile project... to select ",(0,a.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,a.kt)("strong",{parentName:"p"},"Structure section"),"."),(0,a.kt)("h2",{id:"structure-section"},"Structure section"),(0,a.kt)("p",null,"You can see the ",(0,a.kt)("strong",{parentName:"p"},"tasks relation")," we have seen earlier... Publish it !"),(0,a.kt)("p",null,"This will now operate as any other field for the rest of the app creation process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Structure section Relations properties",src:n(83470).Z,width:"2164",height:"1988"})),(0,a.kt)("p",null,":::\u30d2\u30f3\u30c8"),(0,a.kt)("p",null,"On mouse over, a tip displays the table name originating the relation."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"The One to Many relation is now available in the ",(0,a.kt)("strong",{parentName:"p"},"Labels and Icons")," section."),(0,a.kt)("p",null,"It is important to know that including a One to Many relation will create a button into the genrated iOS app."),(0,a.kt)("p",null,"So, in the Labels & Icons section you will define:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30bf\u30a4\u30c8\u30eb"),(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30a2\u30a4\u30b3\u30f3"),(0,a.kt)("li",{parentName:"ul"},"a title that will be displayed in the destination view (to indicate where you come from for example).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(96960).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"forms-section"},"Forms section"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Forms section and drop the ",(0,a.kt)("em",{parentName:"li"},"tasks")," relation on the Employee Task Detail form.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(27337).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Employee\u306e\u30ea\u30b9\u30c8\u753b\u9762\u3067\u9069\u5f53\u306a\u5f93\u696d\u54e1\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"This will open the employee's detail form, where you should see a new ",(0,a.kt)("strong",{parentName:"li"},"Relation button")," !"),(0,a.kt)("li",{parentName:"ol"},"Relation\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\uff0c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5f93\u696d\u54e1\u306e\u30bf\u30b9\u30af\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(78617).Z,width:"2268",height:"992"})),(0,a.kt)("p",null,"Well done! You've successfully included One to Many relations in your mobile project."),(0,a.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27337:function(e,t,n){t.Z=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},87163:function(e,t,n){t.Z=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},80681:function(e,t,n){t.Z=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},78617:function(e,t,n){t.Z=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},96960:function(e,t,n){t.Z=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},83470:function(e,t,n){t.Z=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);