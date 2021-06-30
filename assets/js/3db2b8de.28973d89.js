(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4604],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,i(i({ref:e},p),{},{components:n})):o.createElement(y,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59324:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"one-to-many-actions",title:"One to Many - Actions"},s=void 0,l={unversionedId:"tutorials/relations/one-to-many-actions",id:"tutorials/relations/one-to-many-actions",isDocsHomePage:!1,title:"One to Many - Actions",description:"We are now going to go a little bit further and create a task for a specific employee.",source:"@site/docs/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-actions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/relations/one-to-many-actions.md",version:"current",frontMatter:{id:"one-to-many-actions",title:"One to Many - Actions"},sidebar:"tutorials",previous:{title:"One to Many - Custom button",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-custom-button"},next:{title:"Relation interactions",permalink:"/go-mobile/docs/tutorials/relations/relation-interactions"}},p=[{value:"Create addProject action",id:"create-addproject-action",children:[]},{value:"On Mobile App Action method",id:"on-mobile-app-action-method",children:[]},{value:"addProject Method",id:"addproject-method",children:[]}],u={toc:p};function d(t){var e=t.components,c=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are now going to go a little bit further and ",(0,a.kt)("strong",{parentName:"p"},"create a task for a specific employee"),"."),(0,a.kt)("p",null,"It is very easy to create an entity using ",(0,a.kt)("strong",{parentName:"p"},"parent Entity")," !"),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Starter project")),(0,a.kt)("h2",{id:"create-addproject-action"},"Create addProject action"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the project editor and go to the Action section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"addProject")," Action"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create addProject Method",src:n(4110).Z})),(0,a.kt)("h2",{id:"on-mobile-app-action-method"},"On Mobile App Action method"),(0,a.kt)("p",null,"The only thing you have to do is defining the ",(0,a.kt)("strong",{parentName:"p"},"addProject")," action in the ",(0,a.kt)("strong",{parentName:"p"},"On Mobile App Action method")," as follows :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n        \n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,a.kt)("h2",{id:"addproject-method"},"addProject Method"),(0,a.kt)("p",null,"Then enter thoses lines in your ",(0,a.kt)("strong",{parentName:"p"},"addProject Method"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n    \n    $entity:=ds[$in.dataClass].new()  //Create a reference\n    \n    For each ($key;$in.parameters)\n        \n        $entity[$key]:=$in.parameters[$key]\n        \n    End for each \n    \n    $primaryKey:=$in.parent.primaryKey   //Get parent primary key\n        \n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n  \n  $inverseRelationName:=$in.entity.relationName   //Get parent relation name\n\n    $entity[$inverseRelationName]:=$parent\n    \n    $status:=$entity.save()  //save the entity\n    \n    $out.success:=True  // notify App that action success\n    \n    $out.dataSynchro:=True  // notify App to refresh the selection\n    \n    $out.statusText:="Task added"\n    \n    $out.close:=True\n    \nElse \n    \n    $out.errors:=New collection("No Selection")\n    \nEnd if \n\n$0:=$out\n\n')),(0,a.kt)("p",null,"And that's it you can then add some task to your employees easily using the parent Entity !"),(0,a.kt)("p",null,"Download the completed project: "),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Completed Project")))}d.isMDXComponent=!0},4110:function(t,e,n){"use strict";e.Z=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);