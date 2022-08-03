"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1408],{1049:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={id:"use-data-formatter",title:"Use formatters"},l=void 0,i={unversionedId:"tutorials/data-formatter/use-data-formatter",id:"tutorials/data-formatter/use-data-formatter",title:"Use formatters",description:"OBJECTIVES",source:"@site/docs/tutorials/data-formatter/use-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/use-data-formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/use-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/use-formatter.md",tags:[],version:"current",frontMatter:{id:"use-data-formatter",title:"Use formatters"},sidebar:"tutorials",previous:{title:"Atualizar um modelo",permalink:"/go-mobile/pt/docs/next/tutorials/gallery/update-gallery-template"},next:{title:"Create a static data formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-static-data-formatter"}},s={},c=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Open mobile project",id:"open-mobile-project",level:2},{value:"Build and Run your project",id:"build-and-run-your-project",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Use built-in formatters.")),(0,o.kt)("p",null,"In this tutorial, we'll show you how to apply built-in ",(0,o.kt)("a",{parentName:"p",href:"../../project-definition/labels-and-icons.md#formatters"},"formatters")," to your fields."),(0,o.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,o.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Download")),(0,o.kt)("h2",{id:"open-mobile-project"},"Open mobile project"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons")," in Sections, you'll see that a Formats column is available in the Field Properties area:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data formatter labels icons",src:r(63775).Z,width:"1082",height:"994"})),(0,o.kt)("p",null,"From here, you can select specific formats depending on your needs. You can choose between ",(0,o.kt)("a",{parentName:"p",href:"../../project-definition/labels-and-icons.md#selecting-a-formatter"},"multiple built-in formats"),". "),(0,o.kt)("p",null,"Let's define the Available Credit field as a Currency:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Available credit currency",src:r(96705).Z,width:"1082",height:"994"})),(0,o.kt)("p",null,"Let's do the same process for all of the other fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set Current Balance as a ",(0,o.kt)("strong",{parentName:"li"},"Currency $")),(0,o.kt)("li",{parentName:"ul"},"Set Percent Used as a ",(0,o.kt)("strong",{parentName:"li"},"Percentage")),(0,o.kt)("li",{parentName:"ul"},"Set Credit Limit as a ",(0,o.kt)("strong",{parentName:"li"},"No or Yes")),(0,o.kt)("li",{parentName:"ul"},"Set Credit Date as a ",(0,o.kt)("strong",{parentName:"li"},"Short Date"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select field formatters",src:r(50538).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"build-and-run-your-project"},"Build and Run your project"),(0,o.kt)("p",null,"Here is the final result in your iOS app with a Tasks list form and a Numbers detail form selected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result data formatter iphone",src:r(86758).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"You're done! Your fields are well formatted according to its defined type in ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons"),"."))}p.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,l(l({ref:e},u),{},{components:r})):a.createElement(f,l({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96705:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/available-credit-currency-fa67ffaa458987fab0788afb0928fcc2.png"},63775:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/data-formatter-labels-icons-c079d865950c70ca0a5b92a05d3b0a8d.png"},86758:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/result-data-formatter-iphone-08af00b5a78df32dd0f7f19d5228cda5.png"},50538:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/select-field-formatters-41a9c6d67a78e82b6b4d736e5d171eb7.png"}}]);