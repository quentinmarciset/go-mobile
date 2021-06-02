(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7753],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,d=h["".concat(c,".").concat(f)]||h[f]||u[f]||a;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=n(2122),o=n(9756),a=(n(7294),n(3905)),r={id:"push-notification",title:"Push notifications"},s={unversionedId:"extra-features/push-notification",id:"extra-features/push-notification",isDocsHomePage:!1,title:"Push notifications",description:"OBJECTIVES",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/extra-features/push-notification.md",sourceDirName:"extra-features",slug:"/extra-features/push-notification",permalink:"/go-mobile/fr/docs/extra-features/push-notification",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extra-features/push-notification.md",version:"current",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"docs",previous:{title:"Email authentication",permalink:"/go-mobile/fr/docs/extra-features/email-authentication"},next:{title:"Installing on your iOS device",permalink:"/go-mobile/fr/docs/testing-projects/testing-on-your-device"}},c=[{value:"What is a push notification?",id:"what-is-a-push-notification",children:[]},{value:"Technical architecture",id:"technical-architecture",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic example to manage your push notifications",id:"basic-example-to-manage-your-push-notifications",children:[]},{value:"Push notification with data synchronization",id:"push-notification-with-data-synchronization",children:[{value:"Data synchronization with a notification opening a record",id:"data-synchronization-with-a-notification-opening-a-record",children:[]},{value:"Data synchronization with a simple notification",id:"data-synchronization-with-a-simple-notification",children:[]}]},{value:"Windows Configuration",id:"windows-configuration",children:[]},{value:"MobileApps folder",id:"mobileapps-folder",children:[]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Integrate push notification to your 4d for iOS apps")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server"},"4D Mobile App Server")," component that allows to send push notifications is integrated in 4D single-user and 4D Server.")),(0,a.kt)("h2",{id:"what-is-a-push-notification"},"What is a push notification?"),(0,a.kt)("p",null,"On a mobile phone, a push notification is an alert message, received via an application, that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available."),(0,a.kt)("p",null,"But what about the architecture to implement, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?"),(0,a.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,a.kt)("p",null,"Here are the different elements needed to create, send and receive a mobile push notification:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push notification process",src:n(1200).Z})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to send push notifications, an AuthKey_XXXYYY.p8 authentication file from Apple is required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, go to Apple developer account page, sign in, then select Certificates, IDs & Profiles.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You will then be able to generate your push certificate and to download it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, activate the Push notification feature integrate your certificate in your 4D for iOS project from the Publishing section."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Publishing section",src:n(7239).Z})),(0,a.kt)("p",null,"You can find more information about this process ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"here")," in the component documentation."),(0,a.kt)("h2",{id:"basic-example-to-manage-your-push-notifications"},"Basic example to manage your push notifications"),(0,a.kt)("p",null,"Here is an example to send a push notification to ",(0,a.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new() \n$notification:=New object \n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,a.kt)("p",null,"It's as simple as that!"),(0,a.kt)("h2",{id:"push-notification-with-data-synchronization"},"Push notification with data synchronization"),(0,a.kt)("p",null,"With a push notification, you can also launch a synchronization to update your data."),(0,a.kt)("p",null,"For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone."),(0,a.kt)("p",null,"To do so in the 4D Mobile App Server component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo")," object."),(0,a.kt)("h3",{id:"data-synchronization-with-a-notification-opening-a-record"},"Data synchronization with a notification opening a record"),(0,a.kt)("p",null,"By default, a notification opening a record automatically triggers a data synchronization."),(0,a.kt)("p",null,"For example, in a Contact app, if a contact\u2019s specific information (",(0,a.kt)("em",{parentName:"p"},"i.e.")," a contact\u2019s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact\u2019s information is fully updated."),(0,a.kt)("p",null,"Here's an example of the default behaviour, a ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro")," request with the ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," method:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that for ",(0,a.kt)("inlineCode",{parentName:"em"},"open()")," method exclusively, this is the default behaviour. As a result, if you don't specify the ",(0,a.kt)("inlineCode",{parentName:"em"},"dataSynchro")," boolean value, it is ",(0,a.kt)("inlineCode",{parentName:"em"},"true")," by default.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,a.kt)("p",null,"However, you can also choose not to force a data synchronization, by preventing ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4D"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,a.kt)("h3",{id:"data-synchronization-with-a-simple-notification"},"Data synchronization with a simple notification"),(0,a.kt)("p",null,"You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part."),(0,a.kt)("p",null,"Here is a code example that you can also use with other methods, as long as you fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo")," object with ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data synchronization animation",src:n(5636).Z})),(0,a.kt)("h2",{id:"windows-configuration"},"Windows Configuration"),(0,a.kt)("p",null,"Windows users need to download the ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"last CURL version")," to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database."),(0,a.kt)("h2",{id:"mobileapps-folder"},"MobileApps folder"),(0,a.kt)("p",null,"Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8 and 4DBASE/MobileApps/ID.BundleID/manifest.json files from your Design database to your production database."),(0,a.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,a.kt)("p",null,"The component that handles and makes the process easier is also available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"here"),", in order to adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests."))}p.isMDXComponent=!0},1200:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},7239:function(e,t,n){"use strict";t.Z=n.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},5636:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);