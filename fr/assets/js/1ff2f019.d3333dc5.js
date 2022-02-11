(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3150],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64671:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"on-mobile-app-action-database-method",title:"On Mobile App Action database method"},p=void 0,d={unversionedId:"4D Language/on-mobile-app-action-database-method",id:"4D Language/on-mobile-app-action-database-method",isDocsHomePage:!1,title:"On Mobile App Action database method",description:"$1 -> On Mobile App Action database method -> $0",source:"@site/docs/4D Language/on-mobile-app-action-database-method.md",sourceDirName:"4D Language",slug:"/4D Language/on-mobile-app-action-database-method",permalink:"/go-mobile/fr/docs/next/4D Language/on-mobile-app-action-database-method",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/4D Language/on-mobile-app-action-database-method.md",version:"current",frontMatter:{id:"on-mobile-app-action-database-method",title:"On Mobile App Action database method"}},m=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],u={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$1"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Information passed by the mobile application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$0"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Action status & data synchro")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"On Mobile App Action database method")," is in charge of managing actions requested by the mobile application for a specific session.  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The mobile application must have been authenticated by the On Mobile App Authentication database method. "),(0,l.kt)("p",null,"This database method is called by 4D when a mobile application sends an action request. "),(0,l.kt)("p",null,"The database method receives required information from the mobile application in the $1 parameter (object), and must return the action status in the $0 parameter (object). You must declare and initialize these parameters as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"\n//On Mobile App Action database method\nC_OBJECT($0;$1)\n // ...Code for the method\n$0:=New object //do not forget to create the object to return\n")),(0,l.kt)("p",null,"The following properties are received in the ",(0,l.kt)("strong",{parentName:"p"},"$1")," object parameter:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Action name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Session identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Session IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Application id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parameters"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Action parameters sent from the mobile application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Context parameters for the requested action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"dataClass"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"4D dataclass name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"entity.primaryKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a selected entity). Primary key of the entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"entity.relationName"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Many-to-one relation name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"parent.primaryKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Primary key of the parent entity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"parent.relationName"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity).One-to-many relation name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"parent.dataClass"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.")))),(0,l.kt)("p",null,"After processing information, the database method must return an object with the following properties in $0:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if action has been successfully processed, False otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errors"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Each object contains a pair of 'parameter'/'message' keys to display in the mobile application for rejected entries (see Go mobile documentation).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSynchro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'  // On Mobile App Action\n  // 2 actions are defined: "done" and "postponeAll"\n \n C_OBJECT($0)\n C_OBJECT($1)\n \n C_OBJECT($o;$context;$request;$result)\n \n $request:=$1 //Information provided by the mobile app\n $context:=$request.context\n \n Case of\n \n    :($request.action="done")\n       $o:=New object(\\\n       "dataClass";$context.dataClass;\\\n       "ID";$context.entity.primaryKey;\\\n       "CompletePercentage";100)\n \n       $result:=modifyStatus($o) //call your project method to modify the status of the entity\n \n    :($request.action="postponeAll")\n       $o:=New object("dataClass";$context.dataClass)\n \n       $result:=postponeAll($o) //call your project method to postpone all entities of the dataClass\n \n    Else //Unknown request\n       $result:=New object("success";False)\n \n End case\n \n $0:=$result  //Information returned to mobile app\n \n')))}s.isMDXComponent=!0}}]);