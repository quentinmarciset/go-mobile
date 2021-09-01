(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2e3],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8548:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"testing-on-your-device",title:"Installing on your iOS device"},c=void 0,p={unversionedId:"deployment/testing-on-your-device",id:"version-19-R2/deployment/testing-on-your-device",isDocsHomePage:!1,title:"Installing on your iOS device",description:"You can install and test your mobile application on a connected device.",source:"@site/versioned_docs/version-19-R2/deployment/testing-on-your-device.md",sourceDirName:"deployment",slug:"/deployment/testing-on-your-device",permalink:"/go-mobile/ja/docs/19-R2/deployment/testing-on-your-device",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/testing-on-your-device.md",version:"19-R2",frontMatter:{id:"testing-on-your-device",title:"Installing on your iOS device"},sidebar:"version-19-R2/docs",previous:{title:"From your iPhone",permalink:"/go-mobile/ja/docs/19-R2/debug/from-iphone"},next:{title:"Archive and export your Project",permalink:"/go-mobile/ja/docs/19-R2/deployment/deployment-in-house-archive-and-export"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"STEP 1. Account creation",id:"step-1-account-creation",children:[]},{value:"STEP 2. Xcode configuration",id:"step-2-xcode-configuration",children:[]},{value:"STEP 3. Get your Team ID",id:"step-3-get-your-team-id",children:[]},{value:"STEP 4. Team ID for Free account",id:"step-4-team-id-for-free-account",children:[{value:"Let Xcode generate your provisioning profile and certificate",id:"let-xcode-generate-your-provisioning-profile-and-certificate",children:[]},{value:"Build your project from Xcode using your Free Account",id:"build-your-project-from-xcode-using-your-free-account",children:[]}]},{value:"STEP 5. Team ID for paid subscription account",id:"step-5-team-id-for-paid-subscription-account",children:[]},{value:"STEP 6. Installation",id:"step-6-installation",children:[{value:"Install automatically with Apple Configurator 2",id:"install-automatically-with-apple-configurator-2",children:[]},{value:"Install manually using Xcode",id:"install-manually-using-xcode",children:[]}]}],s={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can install and test your mobile application on a connected device. "),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Free Apple Developer Program]",(0,o.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)-- to add"),": For testing only"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization")," or ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual"),": For an App Store Deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program"),": To deploy your app in-house")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need ",(0,o.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," installed on your Mac to automate app installation (optional)."))),(0,o.kt)("h2",{id:"step-1-account-creation"},"STEP 1. Account creation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apple ID"),": Create your Apple ID. If you don\u2019t already have one, click ",(0,o.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Developer Account"),": Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment)."))),(0,o.kt)("h2",{id:"step-2-xcode-configuration"},"STEP 2. Xcode configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developer Account"),": In Xcode > Preferences > Accounts, add your Apple ID.\n",(0,o.kt)("img",{alt:"Developer Account",src:n(81008).Z})," ")),(0,o.kt)("h2",{id:"step-3-get-your-team-id"},"STEP 3. Get your Team ID"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your are using a ","[Free Apple Developer Program]",(0,o.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html--to addd)")," go to ",(0,o.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,o.kt)("li",{parentName:"ul"},"If your are using an ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization"),", ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual")," or an ",(0,o.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," go to ",(0,o.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"step 5"),".")),(0,o.kt)("h2",{id:"step-4-team-id-for-free-account"},"STEP 4. Team ID for Free account"),(0,o.kt)("h3",{id:"let-xcode-generate-your-provisioning-profile-and-certificate"},"Let Xcode generate your provisioning profile and certificate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your current project from the BUILD tab.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build tab",src:n(97146).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify that the ",(0,o.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added ","[here]",(0,o.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)")," from the Team dropdown list.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account-Selection",src:n(4171).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer and select it from the top menu in Xcode.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select your device",src:n(69346).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.")),(0,o.kt)("h3",{id:"build-your-project-from-xcode-using-your-free-account"},"Build your project from Xcode using your Free Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press the Build and run Button from Xcode !")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build and Run",src:n(25400).Z})," "),(0,o.kt)("h2",{id:"step-5-team-id-for-paid-subscription-account"},"STEP 5. Team ID for paid subscription account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Team ID"),": Go to Developer Account > Membership and get your Team ID.\n",(0,o.kt)("img",{alt:"Developer Account membership",src:n(85296).Z})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D for iOS"),": Launch 4D for iOS in Sections > General and enter your Team ID.\n",(0,o.kt)("img",{alt:"General section",src:n(94455).Z})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to STEP 6 to run your project on your device."))),(0,o.kt)("h2",{id:"step-6-installation"},"STEP 6. Installation"),(0,o.kt)("h3",{id:"install-automatically-with-apple-configurator-2"},"Install automatically with Apple Configurator 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,o.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install button",src:n(91989).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The app is being installed on your device!")),(0,o.kt)("h3",{id:"install-manually-using-xcode"},"Install manually using Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,o.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,o.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manual installation",src:n(11223).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An archive of your project is created")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Archive creation",src:n(92766).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reveal the generated archive in Finder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reveal archive in Finder",src:n(72800).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Devices and Simulators",src:n(64969).Z})," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The app is now being installed on your device.")))}d.isMDXComponent=!0},92766:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},25400:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},81008:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},64969:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},91989:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},11223:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},97146:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},72800:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},85296:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},94455:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},4171:function(e,t,n){"use strict";t.Z=n.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},69346:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);