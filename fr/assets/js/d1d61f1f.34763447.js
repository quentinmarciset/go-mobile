(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2711],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||r;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7331:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a={id:"one-to-many-title-definition",title:"One to Many - Title definition"},l={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"tutorials/relations/one-to-many-title-definition",isDocsHomePage:!1,title:"One to Many - Title definition",description:"Defining a title for your destination views",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-title-definition",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/relations/one-to-many-title-definition.md",version:"current",frontMatter:{id:"one-to-many-title-definition",title:"One to Many - Title definition"},sidebar:"tutorials",previous:{title:"One to Many relations",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-relations"},next:{title:"One to Many - Custom button",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-custom-button"}},s=[{value:"Defining a title for your destination views",id:"defining-a-title-for-your-destination-views",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"defining-a-title-for-your-destination-views"},"Defining a title for your destination views"),(0,r.kt)("p",null,"To keep track of the view you come from in your app, 4D for iOS allows you to define custom Title."),(0,r.kt)("p",null,"In this tutorial, we will use the following project:"),(0,r.kt)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"TITLE DEFINITION Starter project")),(0,r.kt)("p",null,"Now go straight to Open menu > Mobile project... select ",(0,r.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons section"),"."),(0,r.kt)("p",null,"From here, open the relation tab to define the ",(0,r.kt)("em",{parentName:"p"},"tasks")," relation title and enter the following line in the ",(0,r.kt)("strong",{parentName:"p"},"Titles column"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Labels & Icons relation title](assets/en/relations/labels-icons-title-definition.png)")),(0,r.kt)("p",null,"As you may have guessed, it will allow you to display ",(0,r.kt)("strong",{parentName:"p"},"Employee's Name value")," on the destination view depending on the Employee detail form you were on previously."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Labels & Icons relation title](assets/en/relations/relations-title-definition.png)")),(0,r.kt)("p",null,"This is a great way to keep track of the view you come from!"),(0,r.kt)("p",null,"Now let's see how you can create and add your own Relation button in the next tutorial!"))}c.isMDXComponent=!0}}]);