"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6095],{22292:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),c=["components"],a={id:"working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050"},l=void 0,u={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"tutorials/customizing-with-xcode/working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/ja/docs/next/tutorials/customizing-with-xcode/working-with-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/customizing-with-xcode/working-with-xcode.md",tags:[],version:"current",frontMatter:{id:"working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050"},sidebar:"tutorials",previous:{title:"Relation interactions",permalink:"/go-mobile/ja/docs/next/tutorials/relations/relation-interactions"},next:{title:"Xcode \u30ac\u30a4\u30c9",permalink:"/go-mobile/ja/docs/next/tutorials/customizing-with-xcode/xcode-overview"}},p={},d=[{value:"\u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u2489 \u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"--\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u248a \u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f",id:"----\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092xcode\u3067\u958b\u304f",level:2}],s={toc:d};function m(t){var e=t.components,a=(0,n.Z)(t,c);return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),(0,i.kt)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),(0,i.kt)("p",null,"4D for iOS\u306f\uff0c\u30cd\u30a4\u30c6\u30a3\u30d6iOS\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u51fa\u529b\u3059\u308b\u306e\u3067\uff0cXcode\u3067\u958b\u3044\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5177\u4f53\u7684\u306a\u30d7\u30ed\u30bb\u30b9\u306f\u4ee5\u4e0b\u306b\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),(0,i.kt)("p",null,"We'll use the ",(0,i.kt)("a",{parentName:"p",href:"../create-your-first-app"},"contact application")," we created."),(0,i.kt)("p",null,"Download the Starter project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"#"},"Download")),(0,i.kt)("h2",{id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u307e\u3060\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u3044\u306a\u3044\u306e\u3067\u3042\u308c\u3070\uff0c\u2489\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u3059\u3067\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u305f\u306e\u3067\u3042\u308c\u3070\uff0c\u248a\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("h2",{id:"--\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u2489 \u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u8d77\u52d5\u3059\u308biOS\u30c7\u30d0\u30a4\u30b9\u306e\u30e2\u30c7\u30eb\u3092\u9078\u3073\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Build and Run")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:r(76434).Z,width:"768",height:"739"})),(0,i.kt)("h2",{id:"----\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092xcode\u3067\u958b\u304f"},"\u248a \u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Project > Open the project with Xcode")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f",src:r(36864).Z,width:"1033",height:"994"})),(0,i.kt)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode."))}m.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?o.createElement(f,c(c({ref:e},p),{},{components:r})):o.createElement(f,c({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,c=new Array(i);c[0]=s;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36864:function(t,e,r){e.Z=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},76434:function(t,e,r){e.Z=r.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);