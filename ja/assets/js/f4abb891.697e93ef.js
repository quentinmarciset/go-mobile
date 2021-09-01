(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[62],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38120:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a=["components"],l={id:"relation-interactions",title:"Relation interactions"},s=void 0,c={unversionedId:"tutorials/relations/relation-interactions",id:"version-19-R2/tutorials/relations/relation-interactions",isDocsHomePage:!1,title:"Relation interactions",description:"4D mobile projects allow to add very nice interaction into your apps. For instance you will be able to publish One to Many and Many to One relation from many to one relation.",source:"@site/versioned_docs/version-19-R2/tutorials/relations/relation-interactions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/relation-interactions",permalink:"/go-mobile/ja/docs/19-R2/tutorials/relations/relation-interactions",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/relations/relation-interactions.md",version:"19-R2",frontMatter:{id:"relation-interactions",title:"Relation interactions"},sidebar:"version-19-R2/tutorials",previous:{title:"One to Many - Actions",permalink:"/go-mobile/ja/docs/19-R2/tutorials/relations/one-to-many-actions"},next:{title:"Xcode",permalink:"/go-mobile/ja/docs/19-R2/tutorials/customizing-with-xcode/what-is-xcode"}},u=[{value:"Structure section",id:"structure-section",children:[]},{value:"Labels &amp; Icons section",id:"labels--icons-section",children:[{value:"Getting the number of records",id:"getting-the-number-of-records",children:[]}]},{value:"Forms section",id:"forms-section",children:[{value:"Add any relation anywhere you want",id:"add-any-relation-anywhere-you-want",children:[]},{value:"Make your field clickable",id:"make-your-field-clickable",children:[]}]}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"4D mobile projects allow to add very nice interaction into your apps. For instance you will be able to publish One to Many and Many to One relation from ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/19-R2/tutorials/relations/many-to-one-relations"},"many to one relation"),"."),(0,i.kt)("h1",{id:"project-editor"},"Project editor"),(0,i.kt)("h2",{id:"structure-section"},"Structure section"),(0,i.kt)("p",null,"From the structure section, you will be able to publish relations from Many to One relation very easily. This will allow to display for example Many to Many relation into your iOS app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publish relations from Structure section",src:n(64513).Z})),(0,i.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,i.kt)("p",null,"From the Labels & Icons section, you will be able to customize your relation button label."),(0,i.kt)("h3",{id:"getting-the-number-of-records"},"Getting the number of records"),(0,i.kt)("p",null,"A new great feature is available to display record numbers that will be displayed clicking on a One to Many relation."),(0,i.kt)("p",null,"For that just add %length% into your relation short or long label for a One to Many relation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"length parameter",src:n(16715).Z})),(0,i.kt)("h2",{id:"forms-section"},"Forms section"),(0,i.kt)("h3",{id:"add-any-relation-anywhere-you-want"},"Add any relation anywhere you want"),(0,i.kt)("p",null,"Any kind of relation can be dropped in List and Detail form to add interactions and create more dynamic app as ever before !"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drop relations list and detail forms",src:n(98840).Z})),(0,i.kt)("h3",{id:"make-your-field-clickable"},"Make your field clickable"),(0,i.kt)("p",null,"In the form section, you will be able to make your fields clickable droping relation on a field in List forms and Detail forms."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clickable fields",src:n(85484).Z})),(0,i.kt)("h1",{id:"generated-app"},"Generated app"),(0,i.kt)("p",null,"Those improvements will allow you to add interactions into your app :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Move from a list form to another list form instead of opening a detail form to access to another list form.")),(0,i.kt)("p",null,"In this example we access to the orders list from the Orders list clicking on a One to Many relation from the Customers List form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Many to many relation",src:n(43680).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Diplay relation in List Forms to access to related detail forms.")),(0,i.kt)("p",null,"In this example we access to the Customer detail form the Orders List and Orders Detail form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Many to One relation",src:n(27616).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make your field clickable adding a N to One relation and display records number thanks to %length%.")),(0,i.kt)("p",null,"In this example the number of product for each One to Many relation in the Category List form is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"length for one to many",src:n(8973).Z})))}p.isMDXComponent=!0},85484:function(e,t,n){"use strict";t.Z=n.p+"assets/images/clickable-fields-relation-e7f58ce7731508b386e2c1ba8ce13642.gif"},98840:function(e,t,n){"use strict";t.Z=n.p+"assets/images/drop-relation-list-detail-form-cd6c62be6a2e173e8662b739b9447e8f.gif"},16715:function(e,t,n){"use strict";t.Z=n.p+"assets/images/icons-labels-length-parameter-relation-2d46101e2dd3c4f07c11cba6af435800.png"},8973:function(e,t,n){"use strict";t.Z=n.p+"assets/images/length-for-one-to-many-06083fe5cac14fc36478af3ffb1fa322.png"},43680:function(e,t,n){"use strict";t.Z=n.p+"assets/images/many-to-many-relations-836e50b9cff6260bf81b692c7cdfa17b.gif"},27616:function(e,t,n){"use strict";t.Z=n.p+"assets/images/many-to-one-relations-f3aea82c0d2dc08213263835d9ac3176.gif"},64513:function(e,t,n){"use strict";t.Z=n.p+"assets/images/structure-section-246ed9f40549ce1604cb95acc1167020.gif"}}]);