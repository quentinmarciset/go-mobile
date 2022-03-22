"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[823],{45524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],l={id:"deployment-in-house-archive-and-export",title:"Archive and export your Project"},p=void 0,u={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Archive and export your Project",description:"OBJECTIVES",source:"@site/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/ja/docs/next/tutorials/deploying-in-house/deployment-in-house-archive-and-export",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"current",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archive and export your Project"},sidebar:"tutorials",previous:{title:"Installing on your iOS device",permalink:"/go-mobile/ja/docs/next/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribute your app in-House",permalink:"/go-mobile/ja/docs/next/tutorials/deploying-in-house/deployment-in-house-distribute"}},s={},c=[{value:"STEP 1. Xcode configuration",id:"step-1-xcode-configuration",level:2},{value:"STEP 2. Get your Team ID",id:"step-2-get-your-team-id",level:2},{value:"STEP 3. 4D for iOS configuration",id:"step-3-4d-for-ios-configuration",level:2},{value:"STEP 4. Open your project with Xcode",id:"step-4-open-your-project-with-xcode",level:2},{value:"STEP 5. Archive your project from Xcode",id:"step-5-archive-your-project-from-xcode",level:2},{value:"STEP 6. Export your project",id:"step-6-export-your-project",level:2},{value:"STEP 7. Select your distribution method",id:"step-7-select-your-distribution-method",level:2},{value:"STEP 8. Select your Enterprise distribution options",id:"step-8-select-your-enterprise-distribution-options",level:2},{value:"What is a manifest?",id:"what-is-a-manifest",level:4},{value:"STEP 9. Distribution manifest information",id:"step-9-distribution-manifest-information",level:2},{value:"STEP 10. Re-sign your application",id:"step-10-re-sign-your-application",level:2},{value:"STEP 11. Review your app.ipa content",id:"step-11-review-your-appipa-content",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Archive and export your 4D for iOS project"),(0,o.kt)("li",{parentName:"ul"},"Generate .ipa and manifest files"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")),(0,o.kt)("li",{parentName:"ul"},"A secured web server"),(0,o.kt)("li",{parentName:"ul"},"57 x 57 px icon"),(0,o.kt)("li",{parentName:"ul"},"512 x 512 px icon"))),(0,o.kt)("h2",{id:"step-1-xcode-configuration"},"STEP 1. Xcode configuration"),(0,o.kt)("p",null,"Following validation of your account by Apple, open Xcode and add your Apple Enterprise Developer account in Preferences > Accounts."),(0,o.kt)("p",null,"Xcode will automatically install required provisioning and certificates."),(0,o.kt)("h2",{id:"step-2-get-your-team-id"},"STEP 2. Get your Team ID"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log into your Apple Developer Account. You can find your Team ID in Membership.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Get your Team ID",src:n(11666).Z,width:"768",height:"739"})),(0,o.kt)("h2",{id:"step-3-4d-for-ios-configuration"},"STEP 3. 4D for iOS configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Launch 4D for iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the SECTIONS tab:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"General: Enter your Team ID.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"Enterprise-Team-ID",src:n(96513).Z,width:"1082",height:"1009"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Publishing: Enter your production URL (HTTPS is mandatory for deployment)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the BUILD tab:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Build and Run: Build your project.")))),(0,o.kt)("h2",{id:"step-4-open-your-project-with-xcode"},"STEP 4. Open your project with Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From the 4D for iOS Project Editor's BUILD tab, click on ",(0,o.kt)("strong",{parentName:"li"},"Project > Open the project with Xcode"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"pen your project with Xcode ",src:n(49869).Z,width:"1033",height:"994"})),(0,o.kt)("h2",{id:"step-5-archive-your-project-from-xcode"},"STEP 5. Archive your project from Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From Xcode, go to the simulator Menu and select ",(0,o.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Generic iOS Device",src:n(62002).Z,width:"318",height:"558"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then from the menu, click on Product and select ",(0,o.kt)("strong",{parentName:"li"},"Archive"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Archive your Project",src:n(3075).Z,width:"225",height:"337"})),(0,o.kt)("h2",{id:"step-6-export-your-project"},"STEP 6. Export your project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At the end of the archive process, the Organizer window appears with the archive you just created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Export"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Export your project",src:n(56088).Z,width:"1228",height:"667"})),(0,o.kt)("h2",{id:"step-7-select-your-distribution-method"},"STEP 7. Select your distribution method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Enterprise")," and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Distribution Method",src:n(74303).Z,width:"737",height:"454"})),(0,o.kt)("h2",{id:"step-8-select-your-enterprise-distribution-options"},"STEP 8. Select your Enterprise distribution options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can leave all option boxes checked.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Enterprise distribution options",src:n(64850).Z,width:"737",height:"454"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can choose to let Xcode generate a manifest.plist file for you or generate it manually.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."))),(0,o.kt)("h4",{id:"what-is-a-manifest"},"What is a manifest?"),(0,o.kt)("p",null,"The manifest is an XML-based property list and should contain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"URL")," : URL pointing to the .ipa file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"display-image"),": URL pointing to a 57 x 57 px (72 x 72 px for iPad) PNG icon used during download and installation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"full-size-image"),": URL pointing to a 512 x 512 px PNG image representing the iTunes app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bundle-identifier"),": Your app identifier string. You can get it from your app's .plist file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bundle-version"),": Your app's current bundle version string. You can get it from your app's .plist file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"title"),": Your app's name.")),(0,o.kt)("p",null,"Here is an example of a manifest.plist file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,o.kt)("h2",{id:"step-9-distribution-manifest-information"},"STEP 9. Distribution manifest information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We recommand letting Xcode do the job of entering your app URL as well as the icons URLs. You will, of course, have the option to change those URLs later.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Distribution manifest information",src:n(99920).Z,width:"737",height:"454"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("h2",{id:"step-10-re-sign-your-application"},"STEP 10. Re-sign your application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Let Xcode manage the ",(0,o.kt)("strong",{parentName:"li"},"Automatically manage signing")," option.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Re-sign your application",src:n(86274).Z,width:"737",height:"454"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),".")),(0,o.kt)("h2",{id:"step-11-review-your-appipa-content"},"STEP 11. Review your app.ipa content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here you can verify that your application identifier is correct as well as your Team ID.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Review your app.ipa content",src:n(68678).Z,width:"737",height:"454"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Export")," and select where to save your app folder on your computer.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3075:function(e,t,n){t.Z=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},62002:function(e,t,n){t.Z=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},74303:function(e,t,n){t.Z=n.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},99920:function(e,t,n){t.Z=n.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},96513:function(e,t,n){t.Z=n.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},64850:function(e,t,n){t.Z=n.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},49869:function(e,t,n){t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},56088:function(e,t,n){t.Z=n.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},86274:function(e,t,n){t.Z=n.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},68678:function(e,t,n){t.Z=n.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},11666:function(e,t,n){t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);