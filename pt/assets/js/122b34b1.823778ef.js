(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5809],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?o.createElement(f,d(d({ref:t},c),{},{components:n})):o.createElement(f,d({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,d[1]=a;for(var l=2;l<i;l++)d[l]=n[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34626:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),d=["components"],a={id:"from-your-android-device-and-android-studio",title:"From your Android device"},u=void 0,l={unversionedId:"debug/from-your-android-device-and-android-studio",id:"debug/from-your-android-device-and-android-studio",isDocsHomePage:!1,title:"From your Android device",description:"To make sure your development machine and your phone are linked, only one action is needed on the smartphone and another one in the project editor.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/debug/from-your-android-device-and-android-studio.md",sourceDirName:"debug",slug:"/debug/from-your-android-device-and-android-studio",permalink:"/go-mobile/pt/docs/next/debug/from-your-android-device-and-android-studio",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/debug/from-your-android-device-and-android-studio.md",version:"current",frontMatter:{id:"from-your-android-device-and-android-studio",title:"From your Android device"},sidebar:"docs",previous:{title:"From your iPhone and Xcode",permalink:"/go-mobile/pt/docs/next/debug/from-your-iphone-and-xcode"},next:{title:"Instalar em seu dispositivo iOS",permalink:"/go-mobile/pt/docs/next/deployment/testing-on-your-device"}},c=[{value:"Android Studio configuration",id:"android-studio-configuration",children:[]}],s={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To make sure your development machine and your phone are linked, only one action is needed on the smartphone and another one in the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/debug/from-project-editor"},"project editor"),"."),(0,i.kt)("p",null,"On your device, you need to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options#enable"},"enable ",(0,i.kt)("strong",{parentName:"a"},"USB Debugging"))," in the Developer Options settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dev-options",src:n(82089).Z})),(0,i.kt)("p",null,":::dica"),(0,i.kt)("p",null,"If you can\u2019t find the Developer Options item in your settings, simply click 7 times on the build number."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"If you can\u2019t find it or if you don\u2019t understand it, simply read ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"this Android user guide"),", which explains how to do it depending on the Android versions."),(0,i.kt)("p",null,":::nota notas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To connect and debug with a Google device using Windows, you need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/win-usb"},"Google USB driver"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you're developing on macOS , then you shouldn't need a USB driver.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the other devices, download and manually install a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/oem-usb"},"OEM USB driver")," corresponding to your device."))),(0,i.kt)("p",null,":::"),(0,i.kt)("h3",{id:"android-studio-configuration"},"Android Studio configuration"),(0,i.kt)("p",null,"For Android developers, you also need to configure your Android Studio from the SDK Tools tab. So make sure you have checked and installed the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Build Tools 31")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Command-line Tools (latest)"),". By selecting this checkbox, you will be able to visualize all your virtual devices directly from the 4D mobile Project Editor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android Emulator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Platform Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Google USB driver")," (only on Windows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Intel x86 Emulator Accelerator (HAXM installer)"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android-Studio-Settings",src:n(85843).Z})))}p.isMDXComponent=!0},85843:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AndroidCaptureSetting-a46ad214424a5e76fdcd08d0a66759a3.png"},82089:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dev-options-debug_2x-1bd8dc12803e9e18b7b0baf538ef1f99.png"}}]);