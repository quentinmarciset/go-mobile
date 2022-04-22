"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9336],{7798:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),p=["components"],i={id:"deploy-on-app-store-create-appstore-record",title:"Create App Store record"},l=void 0,s={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",id:"tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",title:"Create App Store record",description:"OBJECTIVES",source:"@site/docs/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",permalink:"/go-mobile/pt/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",tags:[],version:"current",frontMatter:{id:"deploy-on-app-store-create-appstore-record",title:"Create App Store record"},sidebar:"tutorials",previous:{title:"Distribute your app in-House",permalink:"/go-mobile/pt/docs/next/tutorials/deploying-in-house/deployment-in-house-distribute"},next:{title:"Archive and upload your Project",permalink:"/go-mobile/pt/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload"}},u={},c=[{value:"STEP 1. Create an App ID",id:"step-1-create-an-app-id",level:2},{value:"What is an App ID ?",id:"what-is-an-app-id-",level:4},{value:"STEP 2. Sign in to App Store Connect",id:"step-2-sign-in-to-app-store-connect",level:2},{value:"STEP 3. Create a new iOS App",id:"step-3-create-a-new-ios-app",level:2},{value:"STEP 4. App information",id:"step-4-app-information",level:2},{value:"STEP 5. Pricing and Availability",id:"step-5-pricing-and-availability",level:2},{value:"STEP 6. Prepare for Submission",id:"step-6-prepare-for-submission",level:2}],m={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Create an App ID on your Developer Account"),(0,o.kt)("li",{parentName:"ul"},"Create your app in App Store Connect"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization")," or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"Apple Developer Program as an individual")))),(0,o.kt)("h2",{id:"step-1-create-an-app-id"},"STEP 1. Create an App ID"),(0,o.kt)("h4",{id:"what-is-an-app-id-"},"What is an App ID ?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"An App ID is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a Bundle ID, with a period (.) separating the two parts (ex: TeamID.BundleID).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If you have chosen an Apple Developer Account as an individual, your account is available immediately and you can create your App ID."),(0,o.kt)("li",{parentName:"ul"},"If you have chosen an Apple Developer Account as an organization, you must wait for Apple validation to create your App ID."))),(0,o.kt)("p",null,"To create your App ID, go to your developer account and select ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/ios/identifier/bundle"},"Certificates, IDs & Profile")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the + sign next to ",(0,o.kt)("em",{parentName:"p"},"Register iOS App IDs")," to add a new App ID. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Define your app's Name and Bundle ID. "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App ID",src:a(43998).Z,width:"1134",height:"1206"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define the App Services to include in your app")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Services",src:a(24816).Z,width:"1150",height:"1331"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Confirm your App ID by clicking ",(0,o.kt)("strong",{parentName:"li"},"Register"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm App ID",src:a(40321).Z,width:"1150",height:"1331"})),(0,o.kt)("h2",{id:"step-2-sign-in-to-app-store-connect"},"STEP 2. Sign in to App Store Connect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign in to your ",(0,o.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com"},"App Store Connect Account")),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"My Apps"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Store Connect",src:a(84331).Z,width:"1189",height:"842"})),(0,o.kt)("h2",{id:"step-3-create-a-new-ios-app"},"STEP 3. Create a new iOS App"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"+")," sign in the top left corner to create a new iOS App. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new iOS App",src:a(87587).Z,width:"1025",height:"869"})),(0,o.kt)("p",null,"Add the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Platforms"),": Select iOS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name"),": The name of your app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Primary language"),": The main language for your app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bundle ID"),": Select your App Bundle ID from the dropdown list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SKU"),": A unique ID for your app (this stays private and is not seen by users)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limit User Access (optional)"),": Allows you to limit access to your app to users with App Manager, Developer, Marketer, or Sales roles.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change BundleID",src:a(7461).Z,width:"1074",height:"861"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("p",{parentName:"blockquote"},"If your Bundle ID is not available, it may already be used by another app in the App Store. You'll need to change yours in your Xcode project.")),(0,o.kt)("h2",{id:"step-4-app-information"},"STEP 4. App information"),(0,o.kt)("p",null,"From App Store Connect > App Information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define your app's Privacy Policy URL (optional)."),(0,o.kt)("li",{parentName:"ul"},"Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11."),(0,o.kt)("li",{parentName:"ul"},"Select a primary and secondary (optional) category for your app to appear in.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App information",src:a(68625).Z,width:"1300",height:"1182"})),(0,o.kt)("h2",{id:"step-5-pricing-and-availability"},"STEP 5. Pricing and Availability"),(0,o.kt)("p",null,"This is where you define the price for your app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TIPS")),(0,o.kt)("p",{parentName:"blockquote"},"You can define limited-time discounts by specifying start and end dates.")),(0,o.kt)("h2",{id:"step-6-prepare-for-submission"},"STEP 6. Prepare for Submission"),(0,o.kt)("p",null,"Add all of the assets for your app to appear in the App Store in ",(0,o.kt)("strong",{parentName:"p"},"Version Information"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TIPS")),(0,o.kt)("p",{parentName:"blockquote"},"You can generate all of your screenshots in Simulator (File > New Screen Shot).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prepare for Submission",src:a(57319).Z,width:"1247",height:"1162"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add your app screenshots. Screenshots for the iPhone 5.5" Super Retina Display and iPad 12.9" Retina Display are mandatory. For more details, see ',(0,o.kt)("a",{parentName:"p",href:"https://help.apple.com/app-store-connect/#/devd274dd925"},"Screenshot specifications"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scroll down and define the ",(0,o.kt)("strong",{parentName:"p"},"Keywords")," and complete the ",(0,o.kt)("strong",{parentName:"p"},"Description")," (this is what users will see in the App Store).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a ",(0,o.kt)("strong",{parentName:"p"},"Promotional Text")," that will appear above your description on the App Store (for customers with devices running iOS 11 or later).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Support URL")," that includes support information for your app. This URL will be visible on the App Store.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Marketing URL")," is optional. This can direct users to a marketing website for your app.\t"))),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"iOS App section"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS App section",src:a(513).Z,width:"1289",height:"1216"})),(0,o.kt)("p",null,"Locate your build versions in ",(0,o.kt)("strong",{parentName:"p"},"Build"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"General App Information")," area, enter the Copyright, Version, and Trade Representative Contact Information for your app."),(0,o.kt)("li",{parentName:"ul"},"Your app icon is included in the generated 4D for iOS project."),(0,o.kt)("li",{parentName:"ul"},"Rating is a required property used by the App Store's parental controls. Click Edit and select the appropriate age category for your app.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"App Review Information")," and ",(0,o.kt)("strong",{parentName:"p"},"Version Release")," sections include information required by the App Store. The information provided here will not be seen by users."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Review Information",src:a(31465).Z,width:"1275",height:"1374"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"App Review Information"),": Confidential contact and security information. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Version Release"),": Specifies an automatic or manual publication."),(0,o.kt)("li",{parentName:"ul"},"Finally, click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")))}d.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24816:function(e,t,a){t.Z=a.p+"assets/images/App-Services-to-include-6aa83e7c749cb27c8f87e51f0d33483c.png"},68625:function(e,t,a){t.Z=a.p+"assets/images/App-Store-Connect-app-information-05b7e6c549964f84962ec3da5bcd2012.png"},84331:function(e,t,a){t.Z=a.p+"assets/images/App-Store-Connect-home-page-698480bb11d26087c992c3cf7cdd5827.png"},7461:function(e,t,a){t.Z=a.p+"assets/images/Change-BundleID-Xcode-Project-89a5b406762fa844cbd901cd20a04da1.png"},40321:function(e,t,a){t.Z=a.p+"assets/images/Confirm-App-ID-badc7b63a6b1caa055a9c8bcd346fc3f.png"},87587:function(e,t,a){t.Z=a.p+"assets/images/Create-new-iOS-App-9fa88738ec4946ec2eb2fe04f1d0da42.png"},43998:function(e,t,a){t.Z=a.p+"assets/images/Developer-account-App-ID-a3e672797d9d37c866ed2fe8928167c1.png"},513:function(e,t,a){t.Z=a.p+"assets/images/Prepare-for-submission-build-icon-331b09ed3c8aa01bc83a19cc0ace2206.png"},31465:function(e,t,a){t.Z=a.p+"assets/images/Prepare-for-submission-review-information-677d367b658298c314ebaad942685180.png"},57319:function(e,t,a){t.Z=a.p+"assets/images/Prepare-for-submission-screenshot-description-ff47eb1948bf404fa6f88ece1c0410c3.png"}}]);