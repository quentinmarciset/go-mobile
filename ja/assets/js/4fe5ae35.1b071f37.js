"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5349],{38339:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=o(83117),a=o(80102),r=(o(67294),o(3905)),i=["components"],l={id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},p=void 0,u={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",id:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/ja/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",tags:[],version:"current",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},sidebar:"tutorials",previous:{title:"Create App Store record",permalink:"/go-mobile/ja/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},c={},s=[{value:"\u2488 \u2488 \u2488 \u2488 Xcode configuration",id:"----xcode-configuration",level:2},{value:"\u2489 \u2489 \u2489 \u2489 Get your Team ID",id:"----get-your-team-id",level:2},{value:"\u248a \u248a \u248a \u248a 4D for iOS configuration",id:"----4d-for-ios-configuration",level:2},{value:"\u248b \u248b \u248b \u248b Open your project with Xcode",id:"----open-your-project-with-xcode",level:2},{value:"\u248c \u248c \u248c \u248c Archive your project from Xcode",id:"----archive-your-project-from-xcode",level:2},{value:"\u248d \u248d \u248d \u248d Validate your project",id:"----validate-your-project",level:2},{value:"\u248e \u248e \u248e \u248e Upload to App Store",id:"----upload-to-app-store",level:2},{value:"\u248f \u248f \u248f \u248f Select the build for the App Store",id:"----select-the-build-for-the-app-store",level:2},{value:"\u2490 \u2490 Submit for Review",id:"--submit-for-review",level:2}],d={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("p",{parentName:"blockquote"},"Archive and upload your project to App Store Connect.")),(0,r.kt)("h2",{id:"----xcode-configuration"},"\u2488 \u2488 \u2488 \u2488 Xcode configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have chosen an Apple Developer Account as an individual, your account is immediately available."),(0,r.kt)("li",{parentName:"ul"},"If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation."),(0,r.kt)("li",{parentName:"ul"},"When your account is accessible, add it to Xcode in Preferences > Accounts."),(0,r.kt)("li",{parentName:"ul"},"Xcode will automatically install the necessary provisioning and certificates.")),(0,r.kt)("h2",{id:"----get-your-team-id"},"\u2489 \u2489 \u2489 \u2489 Get your Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into your Apple Developer Account. You can find your Team ID in Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u2489 \u2489 \u2489 Get your Team ID",src:o(29743).Z,width:"768",height:"739"})),(0,r.kt)("h2",{id:"----4d-for-ios-configuration"},"\u248a \u248a \u248a \u248a 4D for iOS configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch 4D for iOS"),(0,r.kt)("li",{parentName:"ul"},"On the SECTIONS tab:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General: Enter your Team ID")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team ID",src:o(46077).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Publishing: Enter your production URL")),(0,r.kt)("p",null,"(HTTPS is mandatory for deployment)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publishing",src:o(65286).Z,width:"1082",height:"1009"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the BUILD tab:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run: Build your Project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BuildTab",src:o(45402).Z,width:"1215",height:"1009"})),(0,r.kt)("h2",{id:"----open-your-project-with-xcode"},"\u248b \u248b \u248b \u248b Open your project with Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u248b \u248b \u248b Open your project with Xcode",src:o(24943).Z,width:"1033",height:"994"})),(0,r.kt)("h2",{id:"----archive-your-project-from-xcode"},"\u248c \u248c \u248c \u248c Archive your project from Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From Xcode go to the simulator Menu and select ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:o(26636).Z,width:"318",height:"558"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then from the menu, click on Product and select ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u248c \u248c \u248c Archive your project from Xcode",src:o(41067).Z,width:"225",height:"337"})),(0,r.kt)("h2",{id:"----validate-your-project"},"\u248d \u248d \u248d \u248d Validate your project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the end of the archive process, the Organizer window appears with the archive you have just created.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Validate")," button to start the validation process."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u248d \u248d \u248d Validate your project",src:o(88924).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first step is selecting the App Store distribution options.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Store distribution options",src:o(99487).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then you need to re-sign your app. Let Xcode manage this by  checking the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Re-sign your app",src:o(27019).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review your app's content.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App review",src:o(33335).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your project passes the validation process, you should see this message:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Validation",src:o(34204).Z,width:"768",height:"485"})),(0,r.kt)("p",null,"If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Done"),". This will return you to the Organizer window.")),(0,r.kt)("h2",{id:"----upload-to-app-store"},"\u248e \u248e \u248e \u248e Upload to App Store"),(0,r.kt)("p",null,"Once the validation process has been completed, you're ready to add your app to the App Store."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Upload to App Store")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u248e \u248e \u248e Upload to App Store",src:o(83343).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your project has been successfully uploaded, you'll see this window:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upload successful",src:o(4155).Z,width:"768",height:"485"})),(0,r.kt)("h2",{id:"----select-the-build-for-the-app-store"},"\u248f \u248f \u248f \u248f Select the build for the App Store"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From App Store Connect > App Store > iOS App, select your app and click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button that appears in the Build section")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add build",src:o(53048).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the build you want to submit and click ",(0,r.kt)("strong",{parentName:"li"},"Done"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build selection",src:o(77576).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, click on the ",(0,r.kt)("strong",{parentName:"li"},"Submit for Review")," button.")),(0,r.kt)("h2",{id:"--submit-for-review"},"\u2490 \u2490 Submit for Review"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The final step to submitting your app for review is answering a few quick questions about your app.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u2490 Submit for Review",src:o(91088).Z,width:"1160",height:"1101"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you've finished with the questions, click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The average App Store review time is around two days!"))))}m.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},53048:function(e,t,o){t.Z=o.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},99487:function(e,t,o){t.Z=o.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},34204:function(e,t,o){t.Z=o.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},41067:function(e,t,o){t.Z=o.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},45402:function(e,t,o){t.Z=o.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},26636:function(e,t,o){t.Z=o.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},91088:function(e,t,o){t.Z=o.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},24943:function(e,t,o){t.Z=o.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},88924:function(e,t,o){t.Z=o.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},65286:function(e,t,o){t.Z=o.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},27019:function(e,t,o){t.Z=o.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},33335:function(e,t,o){t.Z=o.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},77576:function(e,t,o){t.Z=o.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},29743:function(e,t,o){t.Z=o.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},46077:function(e,t,o){t.Z=o.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},83343:function(e,t,o){t.Z=o.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},4155:function(e,t,o){t.Z=o.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);