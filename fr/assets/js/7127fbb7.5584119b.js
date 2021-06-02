(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7005],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4807:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"general",title:"General"},u={unversionedId:"project-definition/general",id:"project-definition/general",isDocsHomePage:!1,title:"General",description:"This section allows you to define your app's main information.",source:"@site/docs/project-definition/general.md",sourceDirName:"project-definition",slug:"/project-definition/general",permalink:"/go-mobile/fr/docs/project-definition/general",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/general.md",version:"current",frontMatter:{id:"general",title:"General"},sidebar:"docs",previous:{title:"New Project",permalink:"/go-mobile/fr/docs/project-definition/overview"},next:{title:"Structure",permalink:"/go-mobile/fr/docs/project-definition/structure"}},c=[],p={toc:c};function l(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section allows you to define your app's main information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"General section",src:n(3082).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Organization:")," Enter either your or your company\u2019s name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifier:")," Enter your organization\u2019s bundle identifier. This will be used to identify your application. The product name you enter is concatenated to create the default \u201cBundle ID\u201d using reverse domain name service notation. This bundle ID must be unique to your app."),(0,a.kt)("p",null,"For example, if your company\u2019s name is \u201cMyCompany\u201d and your app\u2019s name is \u201cMyApp\u201d, you could choose \u201ccom.MyCompany\u201d as your company identifier and your App bundle ID would be com.MyCompany.MyApp."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",{parentName:"blockquote"},"Help links are available for the Name and Identifier fields.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Product name:")," Your app\u2019s name. As described above, the product name is used to create the bundle identifier. This Bundle ID must be the same as the Bundle ID you create in your Apple Development account."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Version:")," The version of your app. Add version numbers in ascending, sequential order starting with 1.0."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Copyright:")," Your app's copyright. 4D for iOS suggests a copyright format but you can create your own."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Icons:")," 4D for iOS allows you to create app icons in various ways, in accordance with  Apple's guidelines, including dragging and dropping your icons directly from your computer to the icon area. 4D for iOS will generate all of the required formats for you!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TIPS")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"If you already have an icon for your desktop application, you can drag and drop it directly into the icon area."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Here's the magic trick:")," 4D for iOS automatically determines the dominant color of your app's icon and uses it to generate a custom color scheme for your app!"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Developer:")," This field is automatically filled with your user account name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Team:")," Your Developer Account Team ID."))}l.isMDXComponent=!0},3082:function(e,t,n){"use strict";t.Z=n.p+"assets/images/General-section-4D-for-iOS-b0d489a13190a2f645fa85cc9baaf940.png"}}]);