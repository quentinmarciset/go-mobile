(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4176],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9588:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"testing-on-your-device",title:"Installing on your iOS device"},l={unversionedId:"testing-projects/testing-on-your-device",id:"testing-projects/testing-on-your-device",isDocsHomePage:!1,title:"Installing on your iOS device",description:"OBJECTIVES",source:"@site/docs/testing-projects/testing-on-your-device.md",sourceDirName:"testing-projects",slug:"/testing-projects/testing-on-your-device",permalink:"/go-mobile/docs/testing-projects/testing-on-your-device",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/testing-projects/testing-on-your-device.md",version:"current",frontMatter:{id:"testing-on-your-device",title:"Installing on your iOS device"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/go-mobile/docs/extra-features/push-notification"},next:{title:"Using the Simulator",permalink:"/go-mobile/docs/testing-projects/using-the-simulator"}},c=[{value:"STEP 1. Account creation",id:"step-1-account-creation",children:[]},{value:"STEP 2. Xcode configuration",id:"step-2-xcode-configuration",children:[]},{value:"STEP 3. Get your Team ID",id:"step-3-get-your-team-id",children:[]},{value:"STEP 4. Team ID for Free account",id:"step-4-team-id-for-free-account",children:[{value:"Let Xcode generate your provisioning profile and certificate",id:"let-xcode-generate-your-provisioning-profile-and-certificate",children:[]},{value:"Build your project from Xcode using your Free Account",id:"build-your-project-from-xcode-using-your-free-account",children:[]}]},{value:"STEP 5. Team ID for paid subscription account",id:"step-5-team-id-for-paid-subscription-account",children:[]},{value:"STEP 6. Installation",id:"step-6-installation",children:[{value:"Install automatically with Apple Configurator 2",id:"install-automatically-with-apple-configurator-2",children:[]},{value:"Install manually using Xcode",id:"install-manually-using-xcode",children:[]}]}],p={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Install a 4D for iOS application on a connected device")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Apple Developer Program."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," installed on your Mac to automate app installation (optional)."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",{parentName:"blockquote"},"Apple configurator 2 requires ",(0,a.kt)("strong",{parentName:"p"},"macOS 10.14")," or later.")),(0,a.kt)("p",null,"Depending on your objectives and preferences, you can choose to enroll in one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Free Apple Developer Program]",(0,a.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)"),": For testing only"),(0,a.kt)("li",{parentName:"ul"},"[Apple Developer Program for organization]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-program-organization.html)")," or ","[individual]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-program-individual.html)"),": For an App Store Deployment"),(0,a.kt)("li",{parentName:"ul"},"[Apple Enterprise Developer Program]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-enterprise-program.html)"),": To deploy your app in-house")),(0,a.kt)("p",null,"Let's go through the process..."),(0,a.kt)("h2",{id:"step-1-account-creation"},"STEP 1. Account creation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Apple ID"),": Create your Apple ID. If you don\u2019t already have one, click ",(0,a.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Developer Account"),": Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment)."))),(0,a.kt)("h2",{id:"step-2-xcode-configuration"},"STEP 2. Xcode configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Developer Account"),": In Xcode > Preferences > Accounts, add your Apple ID.\n",(0,a.kt)("img",{alt:"Developer Account",src:n(6065).Z})," ")),(0,a.kt)("h2",{id:"step-3-get-your-team-id"},"STEP 3. Get your Team ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If your are using a ","[Free Apple Developer Program]",(0,a.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)")," go to ",(0,a.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,a.kt)("li",{parentName:"ul"},"If your are using an ","[Apple Developer Program for organization]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-program-organization.html)"),", ","[individual]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-program-individual.html)")," or an ","[Apple Enterprise Developer Program]",(0,a.kt)("inlineCode",{parentName:"li"},"(register-apple-developer-enterprise-program.html)")," go to ",(0,a.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"step 5"),".")),(0,a.kt)("h2",{id:"step-4-team-id-for-free-account"},"STEP 4. Team ID for Free account"),(0,a.kt)("h3",{id:"let-xcode-generate-your-provisioning-profile-and-certificate"},"Let Xcode generate your provisioning profile and certificate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your current project from the BUILD tab.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Build tab",src:n(4916).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify that the ",(0,a.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added ","[here]",(0,a.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)")," from the Team dropdown list.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Account-Selection",src:n(9456).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect your device to your computer and select it from the top menu in Xcode.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select your device",src:n(6490).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.")),(0,a.kt)("h3",{id:"build-your-project-from-xcode-using-your-free-account"},"Build your project from Xcode using your Free Account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Press the Build and run Button from Xcode !")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Build and Run",src:n(2340).Z})," "),(0,a.kt)("h2",{id:"step-5-team-id-for-paid-subscription-account"},"STEP 5. Team ID for paid subscription account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Team ID"),": Go to Developer Account > Membership and get your Team ID.\n",(0,a.kt)("img",{alt:"Developer Account membership",src:n(6724).Z})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"4D for iOS"),": Launch 4D for iOS in Sections > General and enter your Team ID.\n",(0,a.kt)("img",{alt:"General section",src:n(2835).Z})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Go to STEP 6 to run your project on your device."))),(0,a.kt)("h2",{id:"step-6-installation"},"STEP 6. Installation"),(0,a.kt)("h3",{id:"install-automatically-with-apple-configurator-2"},"Install automatically with Apple Configurator 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,a.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,a.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,a.kt)("strong",{parentName:"li"},"Install"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install button",src:n(7988).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The app is being installed on your device!")),(0,a.kt)("h3",{id:"install-manually-using-xcode"},"Install manually using Xcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,a.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,a.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,a.kt)("strong",{parentName:"li"},"Install"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manual installation",src:n(8716).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An archive of your project is created")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archive creation",src:n(9108).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reveal the generated archive in Finder")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reveal archive in Finder",src:n(9413).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devices and Simulators",src:n(3806).Z})," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The app is being installed on your device!")))}u.isMDXComponent=!0},9108:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},2340:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},6065:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},3806:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},7988:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},8716:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},4916:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},9413:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},6724:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},2835:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},9456:function(e,t,n){"use strict";t.Z=n.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},6490:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);