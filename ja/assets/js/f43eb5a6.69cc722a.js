"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[572],{6134:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var a=r(83117),o=r(80102),n=(r(67294),r(3905)),l=["components"],i={id:"detail-form-template",title:"Detail form templates"},p=void 0,m={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R5/tutorials/creating-detail-forms/detail-form-template",title:"Detail form templates",description:"In this tutorial, we'll guide you through the creation of a detail form template. It will display an image header, as well as title and content fields that will be duplicated in the generated iOS and Android Apps.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R5",frontMatter:{id:"detail-form-template",title:"Detail form templates"},sidebar:"tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-layout"},next:{title:"Detail form icons",permalink:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-icon"}},c={},s=[{value:"\u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",id:"---\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",level:2},{value:"Add a detail form template to your mobile project",id:"add-a-detail-form-template-to-your-mobile-project",level:2},{value:"Detail form template folder content",id:"detail-form-template-folder-content",level:2}],d={toc:s};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll guide you through the creation of a detail form template. It will display an ",(0,n.kt)("strong",{parentName:"p"},"image header"),", as well as ",(0,n.kt)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS and Android Apps."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u5b8c\u6210\uff09",src:r(15391).Z,width:"1417",height:"907"})),(0,n.kt)("h2",{id:"---\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"},"\u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,n.kt)("p",null,"To begin, download the ",(0,n.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Custom Detail form")," folder (custom Detail form template folder)"),(0,n.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,n.kt)("h2",{id:"add-a-detail-form-template-to-your-mobile-project"},"Add a detail form template to your mobile project"),(0,n.kt)("p",null,"First, create a ",(0,n.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mobile folder custom template",src:r(75309).Z,width:"1342",height:"367"})),(0,n.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,n.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Forms section",src:r(32549).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"Now let's focus on the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,n.kt)("h2",{id:"detail-form-template-folder-content"},"Detail form template folder content"),(0,n.kt)("p",null,"In this folder, you will find:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your custom template among others"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a manifest.json")," file: includes a basic description of the template"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,n.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,n.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,n.kt)("p",null,"These files and folders are detailed in the next sections."))}u.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32549:function(e,t,r){t.Z=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},15391:function(e,t,r){t.Z=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},75309:function(e,t,r){t.Z=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);