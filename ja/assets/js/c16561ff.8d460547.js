"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[246],{17001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"list-form-template",title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"},l=void 0,i={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"version-19-R5/tutorials/creating-list-forms/list-form-template",title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",description:"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a searchBar, a table displaying an image, a title, and a subtitle for each cell.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/ja/docs/19-R5/tutorials/creating-list-forms/list-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-template",title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/go-mobile/ja/docs/19-R5/tutorials/custom-login-form"},next:{title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a2\u30a4\u30b3\u30f3",permalink:"/go-mobile/ja/docs/19-R5/tutorials/creating-list-forms/list-form-icon"}},s={},p=[{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a ",(0,o.kt)("strong",{parentName:"p"},"searchBar"),", a table displaying an ",(0,o.kt)("strong",{parentName:"p"},"image"),", a ",(0,o.kt)("strong",{parentName:"p"},"title"),", and a ",(0,o.kt)("strong",{parentName:"p"},"subtitle")," for each cell."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u5b8c\u6210\uff09",src:r(97762).Z,width:"1417",height:"992"})),(0,o.kt)("h2",{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,o.kt)("p",null,"Before we begin, be sure to download and unzip the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"List form")," folder"),(0,o.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready-to-use mobile app project.')),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,o.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"The first thing you'll need to do is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," folder in ",(0,o.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," location and drag and drop your ",(0,o.kt)("strong",{parentName:"p"},"list form")," folder into it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mobile folder list form template",src:r(73905).Z,width:"1301",height:"367"})),(0,o.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project.'),(0,o.kt)("p",null,'Then, select the "Contact Demo App" mobile project: ',(0,o.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Forms section")," of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forms section",src:r(75552).Z,width:"1072",height:"994"})),(0,o.kt)("p",null,"Now let's focus on the contents of the ",(0,o.kt)("strong",{parentName:"p"},"Custom List form")," folder."),(0,o.kt)("h2",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020"),(0,o.kt)("p",null,"In this folder, you will find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your template"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a manifest.json file"),": includes a basic description of the template"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a template.svg file"),": the visual representation of your template displayed when you define your list form content."),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,o.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,o.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")," folder"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,o.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout")," folder.")),(0,o.kt)("p",null,"These files and folders are detailed in the next sections."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75552:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},97762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},73905:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);