(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2428],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5099:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={id:"relation-interactions",title:"Relation interactions"},l={unversionedId:"tutorials/relations/relation-interactions",id:"tutorials/relations/relation-interactions",isDocsHomePage:!1,title:"Relation interactions",description:"R6 allows to add very nice interaction into your apps. For instance you will be able to publish One to Many and Many to One relation from `Many to one relation` !",source:"@site/docs/tutorials/relations/relation-interactions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/relation-interactions",permalink:"/go-mobile/docs/tutorials/relations/relation-interactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/relations/relation-interactions.md",version:"current",frontMatter:{id:"relation-interactions",title:"Relation interactions"},sidebar:"tutorials",previous:{title:"One to Many - Actions",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-actions"},next:{title:"Email authentication",permalink:"/go-mobile/docs/tutorials/features/email-authentication"}},s=[{value:"Structure section",id:"structure-section",children:[]},{value:"Labels &amp; Icons section",id:"labels--icons-section",children:[{value:"Getting the number of records",id:"getting-the-number-of-records",children:[]}]},{value:"Forms section",id:"forms-section",children:[{value:"Add any relation anywhere you want",id:"add-any-relation-anywhere-you-want",children:[]},{value:"Make your field clickable",id:"make-your-field-clickable",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"R6 allows to add very nice interaction into your apps. For instance you will be able to publish One to Many and Many to One relation from ",(0,i.kt)("inlineCode",{parentName:"p"},"[Many to one relation](many-to-one-relations.html)")," !"),(0,i.kt)("h1",{id:"project-editor"},"Project editor"),(0,i.kt)("h2",{id:"structure-section"},"Structure section"),(0,i.kt)("p",null,"From the structure section, you will be able to publish relations from Many to One relation very easily. This will allow to display for example Many to Many relation into your iOS app."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![Publish relations from Structure section](assets/en/relations/structure-section.gif)")),(0,i.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,i.kt)("p",null,"From the Labels & Icons section, you will be able to customize your relation button label."),(0,i.kt)("h3",{id:"getting-the-number-of-records"},"Getting the number of records"),(0,i.kt)("p",null,"A new great feature is available to display record numbers that will be displayed clicking on a One to Many relation."),(0,i.kt)("p",null,"For that just add %length% into your relation short or long label for a One to Many relation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![length parameter](assets/en/relations/icons-labels-length-parameter-relation.png)")),(0,i.kt)("h2",{id:"forms-section"},"Forms section"),(0,i.kt)("h3",{id:"add-any-relation-anywhere-you-want"},"Add any relation anywhere you want"),(0,i.kt)("p",null,"Any kind of relation can be dropped in List and Detail form to add interactions and create more dynamic app as ever before !"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![Drop relations list and detail forms](assets/en/relations/drop-relation-list-detail-form.gif)")),(0,i.kt)("h3",{id:"make-your-field-clickable"},"Make your field clickable"),(0,i.kt)("p",null,"In the form section, you will be able to make your fields clickable droping relation on a field in List forms and Detail forms."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![Clickable fields](assets/en/relations/clickable-fields-relation.gif)")),(0,i.kt)("h1",{id:"generated-app"},"Generated app"),(0,i.kt)("p",null,"Those improvements will allow you to add interactions into your app :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Move from a list form to another list form instead of opening a detail form to access to another list form.")),(0,i.kt)("p",null,"In this example we access to the orders list from the Orders list clicking on a One to Many relation from the Customers List form."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![Many to many relation](assets/en/relations/many-to-many-relations.gif)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Diplay relation in List Forms to access to related detail forms.")),(0,i.kt)("p",null,"In this example we access to the Customer detail form the Orders List and Orders Detail form."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![Many to One relation](assets/en/relations/many-to-one-relations.gif)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make your field clickable adding a N to One relation and display records number thanks to %length%.")),(0,i.kt)("p",null,"In this example the number of product for each One to Many relation in the Category List form is displayed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"![length for one to many](assets/en/relations/length-for-one-to-many.png)")))}u.isMDXComponent=!0}}]);