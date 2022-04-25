"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2290],{57389:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"getting-started",title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3"},c=void 0,l={unversionedId:"tutorials/actions/getting-started",id:"version-19-R5/tutorials/actions/getting-started",title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/ja/docs/tutorials/actions/getting-started",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/getting-started.md",tags:[],version:"19-R5",frontMatter:{id:"getting-started",title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u57fa\u3065\u304f\u30af\u30a8\u30ea",permalink:"/go-mobile/ja/docs/tutorials/filter-queries/user-information-query"},next:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/tutorials/actions/define-first-action"}},u={},p=[],m={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,a.kt)("p",{parentName:"blockquote"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,a.kt)("p",null,"In 4D v17 R5, you can ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,a.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u3069\u3061\u3089\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3066\u3082\uff0c\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u6e08\u3067\u3059\u3002 You just need to ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates."))),(0,a.kt)("p",null,"Now it's time to enjoy building a ",(0,a.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}d.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);