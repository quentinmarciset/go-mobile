"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7103],{20009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],r={id:"authentication",title:"Authentication"},l=void 0,c={unversionedId:"special-features/authentication",id:"version-19-R2/special-features/authentication",title:"Authentication",description:"Enabling authentication",source:"@site/versioned_docs/version-19-R2/special-features/authentication.md",sourceDirName:"special-features",slug:"/special-features/authentication",permalink:"/go-mobile/docs/19-R2/special-features/authentication",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/special-features/authentication.md",tags:[],version:"19-R2",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"version-19-R2/docs",previous:{title:"Build Panel",permalink:"/go-mobile/docs/19-R2/project-definition/build-panel"},next:{title:"Session management",permalink:"/go-mobile/docs/19-R2/special-features/session-management"}},p={},u=[{value:"Enabling authentication",id:"enabling-authentication",level:2},{value:"On Mobile App Authentication database method",id:"on-mobile-app-authentication-database-method",level:3},{value:"Email authentication",id:"email-authentication",level:2},{value:"Overview",id:"overview",level:3},{value:"1. Enable authentication",id:"1-enable-authentication",level:4},{value:"2. Enter email address",id:"2-enter-email-address",level:4},{value:"3. Check mailbox and 4. Click on the link",id:"3-check-mailbox-and-4-click-on-the-link",level:4},{value:"5. and 6. Back to the app",id:"5-and-6-back-to-the-app",level:4},{value:"Using the 4D Mobile App Server Component",id:"using-the-4d-mobile-app-server-component",level:3},{value:"Without the Component",id:"without-the-component",level:3},{value:"Remote url definition",id:"remote-url-definition",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enabling-authentication"},"Enabling authentication"),(0,o.kt)("p",null,"A mobile application can require that the user be authenticated or not. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When authentication is not enabled, mobile users navigate in the application in Guest mode. "),(0,o.kt)("li",{parentName:"ul"},"Once authentication is enabled, mobile users are asked to login before connecting to the application.  ")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In any cases, when a mobile user connects to the server, a ",(0,o.kt)("a",{parentName:"p",href:"session-management"},"user session")," is created."))),(0,o.kt)("p",null,"To enable authentication, check the ",(0,o.kt)("strong",{parentName:"p"},"Authentication")," option in the ",(0,o.kt)("a",{parentName:"p",href:"../project-definition/publishing"},"Publishing")," page:  "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"authentication activation",src:n(41213).Z,width:"235",height:"61"})),(0,o.kt)("p",null,"When this option is selected, the mobile app displays a ","[login form]"," at startup. A default login form is provided by the mobile editor, but you can design a custom login form."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Create..."),"/",(0,o.kt)("strong",{parentName:"p"},"Edit...")," button opens the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method in the 4D method editor (see below). "),(0,o.kt)("h3",{id:"on-mobile-app-authentication-database-method"},"On Mobile App Authentication database method"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,o.kt)("em",{parentName:"a"},"On Mobile App Authentication"))," database method is mandatory to authorize specific emails or devices, even in Guest mode."),(0,o.kt)("p",null,"A method template is provided to obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.). You can customize this method according to your needs."),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'// On Mobile App Authentication database method\n// Default template\n\nvar $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Information provided by mobile application\n$response:=New object  // Information returned to mobile application\n\n// Check user email\nIf ($request.email=Null)\n    // No email means Guest mode - Allow connection\n    $response.success:=True\nElse \n    // Authenticated mode - Allow or not the connection according to email or other device property\n    $response.success:=True //access allowed\n    // to deny access :\n    // $response.success:=False \nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),(0,o.kt)("h2",{id:"email-authentication"},"Email authentication"),(0,o.kt)("p",null,"The most common and comfortable way to authenticate mobile users is to rely on email authentication."),(0,o.kt)("p",null,"It provides a way to verify that an email comes from whom it claims to be from, and will allow to block harmful or fraudulent uses of email."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In short, the principle is the following:"),(0,o.kt)("h4",{id:"1-enable-authentication"},"1. Enable authentication"),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Authentication")," in the Publishing page to use a login form into your app. You can use the default login page or install a custom login page. "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"authentication activation",src:n(41213).Z,width:"235",height:"61"})),(0,o.kt)("h4",{id:"2-enter-email-address"},"2. Enter email address"),(0,o.kt)("p",null,"An email is required when the app is launched. When a user enters their email and clicks on the ",(0,o.kt)("strong",{parentName:"p"},"Login")," button, the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication"),' is called and the user\'s session status should be updated to a "pending" status. A validation email is then sent to the user.'),(0,o.kt)("h4",{id:"3-check-mailbox-and-4-click-on-the-link"},"3. Check mailbox and 4. Click on the link"),(0,o.kt)("p",null,"When the validation email is available, the user only needs to click on the validation link. This will call the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Web-Connection-database-method.301-5392847.en.html"},(0,o.kt)("inlineCode",{parentName:"a"},"On Web Connection"))," database method and update the ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R2/special-features/session-management"},"user's session"),' status from "pending" to "accepted".'),(0,o.kt)("h4",{id:"5-and-6-back-to-the-app"},"5. and 6. Back to the app"),(0,o.kt)("p",null,"Once the validation is done, the user can reopen their app and click on the ",(0,o.kt)("strong",{parentName:"p"},"Login")," button. The ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication"),' method is called again but this time, the user\'s session status is "accepted", so the access is granted.'),(0,o.kt)("p",null,"Here is a snapshot of the whole sequence:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Authentication",src:n(60277).Z,width:"1812",height:"1238"})),(0,o.kt)("p",null,"You can handle this sequence using a special component, or manually. "),(0,o.kt)("h3",{id:"using-the-4d-mobile-app-server-component"},"Using the 4D Mobile App Server Component"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," component is a toolbox component developed to help you manage several common mobile features. It provides methods for authenticate email logins. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mobile App Email Checker")," method from the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method with the information provided by the mobile application:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// On Mobile App Authentication database method\n\nC_OBJECT($0)\nC_OBJECT($1)\n$0:= Mobile App Email Checker($1)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mobile App Active Session")," method from the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method with the ",(0,o.kt)("inlineCode",{parentName:"li"},"Session")," ID parameter retrieved from the URL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection database method\n\nC_TEXT($1)\nCase of \n: (Mobile App Active Session($1).success)\n    //add log if you want\nEnd case \n\n")),(0,o.kt)("p",null,"It's as simple as that!"),(0,o.kt)("p",null,"You will find more information in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md"},"Email Checker method documentation"),"."),(0,o.kt)("h3",{id:"without-the-component"},"Without the Component"),(0,o.kt)("p",null,"You can implement your own email authentication without using the 4D Mobile App Server component. Here a basic example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method, write the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'// On Mobile App Authentication database method\n\n\nC_OBJECT($0;$1;$response;$request;$email;$status)\n\n  // parameters settings come from the mobile app\n$request:=$1\n\n  // Create an email with an activation URL\n$mail:=New object\n$mail.from:="myapplication@gmail.com"\n$mail.to:=$request.email  // email entered by the user on their smartphone\n$mail.subject:="Login confirmation"\n$mail.htmlBody:="<a href=\\"https://myserverapplication/activation/"+$request.session.id \\\n+"\\">Click Here to confirm your email.</a>\\"<br>"\n\n  // Send mail\n$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")\n$transporter:=SMTP New transporter($smtp)\n$status:=$transporter.send($mail)\n\n  // Configure response for the mobile app\n$response:=New object\n\n  // Declare that the current session is being verified\n$response.verify:=True\n\n  // Check if the email was successsfully sent\nIf ($status.success)\n      //create a share object to contain our sessions, accessible from all processes\n    If (Storage.pendingSessions=Null)\n        Use (Storage)\n            Storage.pendingSessions:=New shared object\n        End use \n    End if \n    \n    Use (Storage.pendingSessions)\n          //Add a session to our session lists\n        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id\n    End use \n    \n    $response.success:=True\n    $response.statusText:="Please check your mail box"\nElse \n      // Display an error message on the smatphone\n    $response.statusText:="The mail is not sent please try again later"\n    $response.success:=False\nEnd if \n\n$0:=$response\n\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method, write some code to activate the session after the user clicked on the link in the confirmation email.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'// On Web Connection database method\n\nC_TEXT($1;$2;$3;$4;$5;$6)\n\nC_TEXT($token;$session)\nC_OBJECT($sessionFile;$sessionObject)\n\nIf ($1="/activation/@")\n    $token:=Substring($1;13)\nEnd if \n\n\n  //get session from ID received from URL\nIf (Storage.pendingSessions#Null)\n    $session:=Storage.pendingSessions[$token]\nEnd if \n\nIf ($session#"")\n      //get session folder\n    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)\n    $sessionObject:=JSON Parse($sessionFile.getText())\n      //update status value\n    $sessionObject.status:="accepted"\n    $sessionFile.setText(JSON Stringify($sessionObject))\n    Use (Storage.pendingSessions)\n          //delete pending session\n        OB REMOVE(Storage.pendingSessions;$token)\n    End use \n    \n    /*\n        The MOBILE APP REFRESH SESSIONS command checks all mobile\n        application session files located in the MobileApps folder of the server, \n        and updates existing session contents in memory for any edited files.\n    */\n\n    MOBILE APP REFRESH SESSIONS\n    \n    WEB SEND TEXT("You are successfully authenticated")\nElse \n    WEB SEND TEXT("Invalid session")\nEnd if \n')),(0,o.kt)("h3",{id:"remote-url-definition"},"Remote url definition"),(0,o.kt)("p",null,"By default, a remote server URL is defined in your Android app. In case the URL is not correct, the server will not be accessible. Therefore, to modify or update this URL, just make a long pressure on the icon in the login screen, or from the settings tab.\nOnce you press the icon, a message is displayed with the remote url address and the server access status. You will then be able to edit the URL, authenticate successfully and access the server."),(0,o.kt)("p",null,'On iOS, you can edit the remote server URL from the iOS device Settings screen. You just need to check the "Reset server address" option to enter the correct server address.'))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60277:function(e,t,n){t.Z=n.p+"assets/images/4D-for-iOS-email-auth-6e5d979a255eb468fc5d777636c9f442.png"},41213:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAA9CAYAAABMbZ7nAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABMxJREFUeF7tnc9x+jwQQOmJJlIDLaQIUgQFcPQl9ww37tTATFJBTrnq88qIrGSt/2F/WPk9z7zBsqSNbPTQmsyYzff3twOA9YOsAIWArACFgKwAhYCsAIWArACFgKwAhYCsAIXQknW73Y4mjQEA85OVdcyGrAD/D4vKeqne3Ft1ydYN4+Kqt4M7XXN1M3A9ucNc8eeMBZBhkqxfX1/u5eXFfXx82LLK5D1UrjqMmcCpnHPLOme8hT9IABJGyxpEfX19dT8/P6as19PBHU7X+2uuTRtkBbAYJWsqqmx5Wa/uFFZUv8Ke3PVeZwkpr3XaHPDp863uIilmczwS36eeoU/lLjreqbrHavp0xL+PRcb926a6NMd9Ot/qlzumYkVj+41ljy/UA+TJyirprUgpcoYtJ6psWVkjQZW4vpwKosu5unpCh1gXmeCJlKFtXRdJGe6Vu/pE5UbUbnF0+65Ysq8E9eLGdfnxAdhkZRUZRcogrCWqbDlZ09RXyvfJ2TvJrbqknKxcntwKNzS+j2dI44UKf2daLFmdG3k7+qn2AClmGqyFtUSVrS2rTD4l0J0hq1vfRFZlU66J8a140XGdJYyLhazwKJ33rEFYS1TZWrLKKhTdowpNitlMVr1f41etAQK0yrKfS1v7+lh1Rhqsz8dLOCSW7Kdp8JAPKwCbUV8w5bZUVllBcvd9USqs08qqiibr/cuc3pS2xktwaz+wT3/833j6w8UfS/4V1RkrGps9nnYZIM/ssgLAMmRlHUsaAwDmpyUrAKwTZAUoBGQFKARkBSgEZAUoBGQFKARkBSgEZAUoBGQFKARkBSgEZAUoBGSFVfH+/v5PkDv3PpAVVoVM5M/Pzz8NssKfAFltkBVWBbLaICusCmS1eaqs/rEo4VEvk1j4kSjRM5ceZM5YizHX9ZweZ7qsR7fbbNxGsTta7bZuf673z3u3DfutdstRnqwyefl5jSez1PWcHucxWYeIZ7Ub2v9xipOVn9dYA0tdz+lxkNXmSbKq5+/6FZaf17g/ttQcX6hP2qlzlxj+KZK5fq1r0THGQddTjzmuO5xO8bmOYBFZfbrbpMbb/V61C33kVaXQu2M7xoyUJau8sfy8xu9k9xM9rsuPT3NrF527Gt/ga5GOset6do851DUfGDrucB6TVQm32bmjOh7uX8/7bV2XypruL0tRsqapr39zw+TMTiA9Kay6pJysAp7cCjc0vo+Xk6bmJkrDtFiyOjeTvaOfat/fLv176joIvdciF8MYs9R1ZkfDmX1llVV1u3fnbDtk7UHeyGTieIxVICp31SVlU66J8a140XGdJYyLtbysY69FUu4as9Qh62DKkVVWoeiNFZoUs5mser/Gr1rhjR8xufx+Lm3t62PVGWmwPh8/oYfEkn11jpEIXf00fe10WfbHXou03MSwx/xb97w0OCebHJ+QBvv73Fsqbe1PpBhZ5dO4PWmSVFinlfy8RlK2jveUs9fikeup29Wo9+x5XzDpe1b5Munc1B136ljuC6YmxnF36ytfMCErQDfTZS0HZIU/AbLaICusCmS1QVZYFchqg6ywKpDVBllhVchE/hfInXsfyApQCMgKUAjIClAIyApQCMgKUAjIClAIyApQCMgKUAjIClAE3+4/c/9TxdVONH4AAAAASUVORK5CYII="}}]);