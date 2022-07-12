"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9580],{93823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={id:"deployment-in-house-archive-and-export",title:"Archive and export your Project"},a=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Archive and export your Project",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/ja/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"19-R6",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archive and export your Project"},sidebar:"tutorials",previous:{title:"iOS\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribute your app in-House",permalink:"/go-mobile/ja/docs/tutorials/deploying-in-house/deployment-in-house-distribute"}},p={},s=[{value:"\u2488 \u2488 \u2488 \u2488 Xcode configuration",id:"----xcode-configuration",level:2},{value:"\u2489 \u2489 \u2489 \u2489 Get your Team ID",id:"----get-your-team-id",level:2},{value:"\u248a \u248a \u248a \u248a 4D for iOS configuration",id:"----4d-for-ios-configuration",level:2},{value:"\u248b \u248b \u248b \u248b Open your project with Xcode",id:"----open-your-project-with-xcode",level:2},{value:"\u248c \u248c \u248c \u248c Archive your project from Xcode",id:"----archive-your-project-from-xcode",level:2},{value:"\u248d \u248d \u248d \u248d Export your project",id:"----export-your-project",level:2},{value:"\u248e \u248e \u248e \u248e Select your distribution method",id:"----select-your-distribution-method",level:2},{value:"\u248f \u248f \u248f \u248f Select your Enterprise distribution options",id:"----select-your-enterprise-distribution-options",level:2},{value:"What is a manifest?",id:"what-is-a-manifest",level:4},{value:"\u2490 \u2490 \u2490 \u2490 Distribution manifest information",id:"----distribution-manifest-information",level:2},{value:"STEP 11. Review your app.ipa content",id:"step-11-review-your-appipa-content",level:2},{value:"STEP 11. Review your app.ipa content",id:"step-11-review-your-appipa-content-1",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Archive and export your 4D for iOS project"),(0,r.kt)("li",{parentName:"ul"},"Generate .ipa and manifest files"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")),(0,r.kt)("li",{parentName:"ul"},"A secured web server"),(0,r.kt)("li",{parentName:"ul"},"57 x 57 px icon"),(0,r.kt)("li",{parentName:"ul"},"512 x 512 px icon"))),(0,r.kt)("h2",{id:"----xcode-configuration"},"\u2488 \u2488 \u2488 \u2488 Xcode configuration"),(0,r.kt)("p",null,"Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts."),(0,r.kt)("p",null,"Xcode will automatically install required provisioning and certificates."),(0,r.kt)("h2",{id:"----get-your-team-id"},"\u2489 \u2489 \u2489 \u2489 Get your Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into your Apple Developer Account. You can find your Team ID in Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u2489 \u2489 \u2489 Get your Team ID",src:n(60548).Z,width:"768",height:"739"})),(0,r.kt)("h2",{id:"----4d-for-ios-configuration"},"\u248a \u248a \u248a \u248a 4D for iOS configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Launch 4D for iOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the SECTIONS tab:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"General: Enter your Team ID."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Enterprise-Team-ID",src:n(81059).Z,width:"1082",height:"1009"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publishing: Enter your production URL (HTTPS is mandatory for deployment).")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the BUILD tab:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Build and Run: Build your project.")))),(0,r.kt)("h2",{id:"----open-your-project-with-xcode"},"\u248b \u248b \u248b \u248b Open your project with Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the 4D for iOS Project Editor's BUILD tab, click on ",(0,r.kt)("strong",{parentName:"li"},"Project > Open the project with Xcode"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pen your project with Xcode ",src:n(84288).Z,width:"1033",height:"994"})),(0,r.kt)("h2",{id:"----archive-your-project-from-xcode"},"\u248c \u248c \u248c \u248c Archive your project from Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From Xcode, go to the simulator Menu and select ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:n(89123).Z,width:"318",height:"558"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then from the menu, click on Product and select ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive your Project",src:n(68511).Z,width:"225",height:"337"})),(0,r.kt)("h2",{id:"----export-your-project"},"\u248d \u248d \u248d \u248d Export your project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the end of the archive process, the Organizer window appears with the archive you just created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Export"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u248d \u248d \u248d Export your project",src:n(71634).Z,width:"1228",height:"667"})),(0,r.kt)("h2",{id:"----select-your-distribution-method"},"\u248e \u248e \u248e \u248e Select your distribution method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Enterprise")," and click ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Distribution Method",src:n(2582).Z,width:"737",height:"454"})),(0,r.kt)("h2",{id:"----select-your-enterprise-distribution-options"},"\u248f \u248f \u248f \u248f Select your Enterprise distribution options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can leave all option boxes checked.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enterprise distribution options",src:n(26591).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can choose to let Xcode generate a manifest.plist file for you or generate it manually.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."))),(0,r.kt)("h4",{id:"what-is-a-manifest"},"What is a manifest?"),(0,r.kt)("p",null,"The manifest is an XML-based property list and should contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL")," : URL pointing to the .ipa file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"display-image"),": URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"full-size-image"),": URL pointing to a 512 x 512 px PNG image representing the iTunes app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-identifier"),": Your app identifier string. You can get it from your app's .plist file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-version"),": Your app's current bundle version string. You can get it from your app's .plist file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title"),": Your app's name.")),(0,r.kt)("p",null,"Here is an example of a manifest.plist file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,r.kt)("h2",{id:"----distribution-manifest-information"},"\u2490 \u2490 \u2490 \u2490 Distribution manifest information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u2490 \u2490 \u2490 Distribution manifest information",src:n(16719).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"step-11-review-your-appipa-content"},"STEP 11. Review your app.ipa content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let Xcode manage the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Review your app.ipa content",src:n(37576).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"step-11-review-your-appipa-content-1"},"STEP 11. Review your app.ipa content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here you can verify that your application identifier is correct as well as your Team ID.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Review your app.ipa content",src:n(63994).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Export")," and select where to save your app folder on your computer.")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68511:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},89123:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},2582:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},16719:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},81059:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},26591:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},84288:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},71634:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},37576:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},63994:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},60548:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);