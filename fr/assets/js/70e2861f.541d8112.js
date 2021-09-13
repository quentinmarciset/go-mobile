(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5871],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59417:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=r(22122),n=r(19756),i=(r(67294),r(3905)),a=["components"],c={id:"working-with-xcode",title:"Travailler avec Xcode"},u=void 0,l={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"version-19-R2/tutorials/customizing-with-xcode/working-with-xcode",isDocsHomePage:!1,title:"Travailler avec Xcode",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/working-with-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/working-with-xcode.md",version:"19-R2",frontMatter:{id:"working-with-xcode",title:"Travailler avec Xcode"},sidebar:"version-19-R2/tutorials",previous:{title:"Xcode",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/what-is-xcode"},next:{title:"Pr\xe9sentation de Xcode",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/xcode-overview"}},p=[{value:"\xc9TAPE 1. Cr\xe9ez votre projet iOS",id:"\xe9tape-1-cr\xe9ez-votre-projet-ios",children:[]},{value:"\xc9TAPE 2. G\xe9n\xe9rez votre projet",id:"\xe9tape-2-g\xe9n\xe9rez-votre-projet",children:[]},{value:"\xc9TAPE 3. Ouvrez votre projet avec Xcode",id:"\xe9tape-3-ouvrez-votre-projet-avec-xcode",children:[]}],s={toc:p};function d(e){var t=e.components,c=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),(0,i.kt)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),(0,i.kt)("p",null,"4D for iOS vous g\xe9n\xe8re une application iOS native modifiable et personnalisable avec Xcode. Jetons un \u0153il au processus\xa0!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),(0,i.kt)("p",null,"We'll use the ",(0,i.kt)("a",{parentName:"p",href:"../create-your-first-app"},"contact application")," we created."),(0,i.kt)("p",null,"Download the Starter project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"#"},"Download")),(0,i.kt)("h2",{id:"\xe9tape-1-cr\xe9ez-votre-projet-ios"},"\xc9TAPE 1. Cr\xe9ez votre projet iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si vous n\u2019avez pas encore cr\xe9\xe9 votre projet, passez \xe0 l\u2019\xe9tape 2."),(0,i.kt)("li",{parentName:"ul"},"Si vous avez d\xe9j\xe0 cr\xe9\xe9 votre projet, passez \xe0 l\u2019\xe9tape 3.")),(0,i.kt)("h2",{id:"\xe9tape-2-g\xe9n\xe9rez-votre-projet"},"\xc9TAPE 2. G\xe9n\xe9rez votre projet"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'S\xe9lectionnez un appareil \xe0 utiliser en tant que Simulateur en cliquant sur le bouton "appareil".'),(0,i.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,i.kt)("strong",{parentName:"li"},"Cr\xe9er & ex\xe9cuter"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:r(27899).Z})),(0,i.kt)("h2",{id:"\xe9tape-3-ouvrez-votre-projet-avec-xcode"},"\xc9TAPE 3. Ouvrez votre projet avec Xcode"),(0,i.kt)("p",null,"From the Project Editor BUILD tab:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur Projet > Ouvrir le produit avec Xcode")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ouvrez votre projet avec Xcode",src:r(13318).Z})),(0,i.kt)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode."))}d.isMDXComponent=!0},13318:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},27899:function(e,t,r){"use strict";t.Z=r.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);