"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[79],{89082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"testing-on-your-device",title:"Installing on your iOS device"},p=void 0,u={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"version-19-R4/tutorials/deploying-in-house/testing-on-your-device",title:"Installing on your iOS device",description:"You can install and test your mobile application on a connected device.",source:"@site/versioned_docs/version-19-R4/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/go-mobile/fr/docs/tutorials/deploying-in-house/testing-on-your-device",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"19-R4",frontMatter:{id:"testing-on-your-device",title:"Installing on your iOS device"},sidebar:"version-19-R4/tutorials",previous:{title:"Apple Developer Program as an Individual",permalink:"/go-mobile/fr/docs/tutorials/developer-program/register-apple-developer-program-individual"},next:{title:"Archive and export your Project",permalink:"/go-mobile/fr/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"STEP 1. Account creation",id:"step-1-account-creation",level:2},{value:"STEP 2. Xcode configuration",id:"step-2-xcode-configuration",level:2},{value:"STEP 3. Get your Team ID",id:"step-3-get-your-team-id",level:2},{value:"STEP 4. Team ID for Free account",id:"step-4-team-id-for-free-account",level:2},{value:"Let Xcode generate your provisioning profile and certificate",id:"let-xcode-generate-your-provisioning-profile-and-certificate",level:3},{value:"Build your project from Xcode using your Free Account",id:"build-your-project-from-xcode-using-your-free-account",level:3},{value:"STEP 5. Team ID for paid subscription account",id:"step-5-team-id-for-paid-subscription-account",level:2},{value:"STEP 6. Installation",id:"step-6-installation",level:2},{value:"Install automatically with Apple Configurator 2",id:"install-automatically-with-apple-configurator-2",level:3},{value:"Install manually using Xcode",id:"install-manually-using-xcode",level:3}],d={toc:s};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can install and test your mobile application on a connected device. "),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Free Apple Developer Program -- to add```: For testing only"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization")," or ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual"),": For an App Store Deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program"),": To deploy your app in-house")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need ",(0,o.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," installed on your Mac to automate app installation (optional)."))),(0,o.kt)("h2",{id:"step-1-account-creation"},"STEP 1. Account creation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apple ID"),": Create your Apple ID. If you don\u2019t already have one, click ",(0,o.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Developer Account"),": Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment)."))),(0,o.kt)("h2",{id:"step-2-xcode-configuration"},"STEP 2. Xcode configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developer Account"),": In Xcode > Preferences > Accounts, add your Apple ID.\n",(0,o.kt)("img",{loading:"lazy",alt:"Developer Account",src:n(19961).Z,width:"768",height:"557"})," ")),(0,o.kt)("h2",{id:"step-3-get-your-team-id"},"STEP 3. Get your Team ID"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your are using a Free Apple Developer Program, go to ",(0,o.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,o.kt)("li",{parentName:"ul"},"If your are using an ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization"),", ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual")," or an ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," go to ",(0,o.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"step 5"),".")),(0,o.kt)("h2",{id:"step-4-team-id-for-free-account"},"STEP 4. Team ID for Free account"),(0,o.kt)("h3",{id:"let-xcode-generate-your-provisioning-profile-and-certificate"},"Let Xcode generate your provisioning profile and certificate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your current project from the BUILD tab.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Build tab",src:n(20840).Z,width:"1033",height:"994"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify that the ",(0,o.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added, from the Team dropdown list.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Account-Selection",src:n(72880).Z,width:"1106",height:"877"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer and select it from the top menu in Xcode.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Select your device",src:n(10224).Z,width:"1106",height:"877"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.")),(0,o.kt)("h3",{id:"build-your-project-from-xcode-using-your-free-account"},"Build your project from Xcode using your Free Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press the Build and run Button from Xcode !")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Build and Run",src:n(3865).Z,width:"1106",height:"877"})," "),(0,o.kt)("h2",{id:"step-5-team-id-for-paid-subscription-account"},"STEP 5. Team ID for paid subscription account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Team ID"),": Go to Developer Account > Membership and get your Team ID.\n",(0,o.kt)("img",{loading:"lazy",alt:"Developer Account membership",src:n(34167).Z,width:"768",height:"739"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D for iOS"),": Launch 4D for iOS in Sections > General and enter your Team ID.\n",(0,o.kt)("img",{loading:"lazy",alt:"General section",src:n(31576).Z,width:"768",height:"739"})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to STEP 6 to run your project on your device."))),(0,o.kt)("h2",{id:"step-6-installation"},"STEP 6. Installation"),(0,o.kt)("h3",{id:"install-automatically-with-apple-configurator-2"},"Install automatically with Apple Configurator 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,o.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Install button",src:n(94543).Z,width:"768",height:"739"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The app is being installed on your device!")),(0,o.kt)("h3",{id:"install-manually-using-xcode"},"Install manually using Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,o.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Manual installation",src:n(55005).Z,width:"2164",height:"1988"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An archive of your project is created")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Archive creation",src:n(54335).Z,width:"2164",height:"1988"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reveal the generated archive in Finder")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Reveal archive in Finder",src:n(84101).Z,width:"1168",height:"734"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Devices and Simulators",src:n(64821).Z,width:"2346",height:"1636"})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The app is now being installed on your device.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54335:function(e,t,n){t.Z=n.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},3865:function(e,t,n){t.Z=n.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},19961:function(e,t,n){t.Z=n.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},64821:function(e,t,n){t.Z=n.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},94543:function(e,t,n){t.Z=n.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},55005:function(e,t,n){t.Z=n.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},20840:function(e,t,n){t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},84101:function(e,t,n){t.Z=n.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},34167:function(e,t,n){t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},31576:function(e,t,n){t.Z=n.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},72880:function(e,t,n){t.Z=n.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},10224:function(e,t,n){t.Z=n.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);