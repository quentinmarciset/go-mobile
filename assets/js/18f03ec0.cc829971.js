(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1458],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5804:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"publishing",title:"Publishing"},l={unversionedId:"project-definition/publishing",id:"project-definition/publishing",isDocsHomePage:!1,title:"Publishing",description:"This is where you define or create your app's:",source:"@site/docs/project-definition/publishing.md",sourceDirName:"project-definition",slug:"/project-definition/publishing",permalink:"/go-mobile/docs/project-definition/publishing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/publishing.md",version:"current",frontMatter:{id:"publishing",title:"Publishing"}},s=[{value:"Web Server Settings",id:"web-server-settings",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Authentication Method",id:"authentication-method",children:[{value:"On Mobile App Authentication Database Method",id:"on-mobile-app-authentication-database-method",children:[]},{value:"Session Management",id:"session-management",children:[]},{value:"Mobile Session Management Component",id:"mobile-session-management-component",children:[]}]},{value:"How it looks on a device",id:"how-it-looks-on-a-device",children:[{value:"Settings screen",id:"settings-screen",children:[]},{value:"Reset remote url",id:"reset-remote-url",children:[]}]}],u={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is where you define or create your app's:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web Server Settings"),(0,o.kt)("li",{parentName:"ul"},"Authentication Mode "),(0,o.kt)("li",{parentName:"ul"},"Authentication Method")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing section",src:n(9307).Z})),(0,o.kt)("h2",{id:"web-server-settings"},"Web Server Settings"),(0,o.kt)("p",null,"Activate and define your HTTPS and/or HTTP ports, if you haven't already done so. You can do this by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," button."),(0,o.kt)("p",null,"Activating the HTTPS port requires certificate installation to work properly. You can create test certificates with 4D."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The Simulator works locally (127.0.0.1 or localhost)."),(0,o.kt)("li",{parentName:"ul"},"If the production URL is defined, both HTTP and HTTPS are accepted. Otherwise, the IP address is used."),(0,o.kt)("li",{parentName:"ul"},"If both HTTP and HTTPS are activated, HTTP is used."))),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authorized User:")," Check the ",(0,o.kt)("strong",{parentName:"p"},"Login required")," option to display a login form when the app starts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Guest:")," Leave the ",(0,o.kt)("strong",{parentName:"p"},"Login required")," option unchecked. No login form will appear when the app starts."))),(0,o.kt)("h2",{id:"authentication-method"},"Authentication Method"),(0,o.kt)("h3",{id:"on-mobile-app-authentication-database-method"},"On Mobile App Authentication Database Method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Development"),": The authentication method allows you to use the app locally. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deployment"),": You must create/edit the ",(0,o.kt)("a",{parentName:"li",href:"https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html"},(0,o.kt)("em",{parentName:"a"},"On Mobile App Authentication"))," database method to authorize specific emails or devices, even in Guest mode.")),(0,o.kt)("p",null,"A template is available to obtain all necessary information about the session, as well as user information (email address, app information, device, team ID, etc.)"),(0,o.kt)("p",null,"You can customize this method according to your needs! "),(0,o.kt)("h3",{id:"session-management"},"Session Management"),(0,o.kt)("p",null,"When a user opens the app for the first time, a session file is created and stored next to the current data file in the MobileApps folder. "),(0,o.kt)("p",null,"The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names."),(0,o.kt)("p",null,"Here is an example of a 4D for iOS-generated session file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,o.kt)("p",null,'If you want the ability to manually validate the first login for every user session, you must change the "accepted" default status to "pending" by adding ',(0,o.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html"},(0,o.kt)("em",{parentName:"a"},"On Mobile App Authentication"))," database method."),(0,o.kt)("h3",{id:"mobile-session-management-component"},"Mobile Session Management Component"),(0,o.kt)("p",null,"Sessions can be managed by the ",(0,o.kt)("strong",{parentName:"p"},"MOBILE SESSION MANAGEMENT"),":"),(0,o.kt)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,o.kt)("a",{class:"button",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"MOBILE SESSION MANAGEMENT component")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and unzip the zip file"),(0,o.kt)("li",{parentName:"ul"},"Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase"),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"Components")," folder next to the 4D database with the app's data. "),(0,o.kt)("li",{parentName:"ul"},"Place the ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," component in the newly created ",(0,o.kt)("strong",{parentName:"li"},"Components")," folder."),(0,o.kt)("li",{parentName:"ul"},"Restart 4D.  "),(0,o.kt)("li",{parentName:"ul"},"Click on the Execute button from the toolbar"),(0,o.kt)("li",{parentName:"ul"},"In the 4D Methods Explorer, select the ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," method and click on the ",(0,o.kt)("strong",{parentName:"li"},"Execute")," button. "),(0,o.kt)("li",{parentName:"ul"},"The Apps window will appear displaying all of your apps: ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,o.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list. ")),(0,o.kt)("h2",{id:"how-it-looks-on-a-device"},"How it looks on a device"),(0,o.kt)("h3",{id:"settings-screen"},"Settings screen"),(0,o.kt)("p",null,"A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (",(0,o.kt)("em",{parentName:"p"},"i.e."),", your app has more than four tables)."),(0,o.kt)("p",null,"Settings allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consult your remote URL and it's state"),(0,o.kt)("li",{parentName:"ul"},"Log out (if connected as an Authorized User)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Login &amp; Settings screen",src:n(3923).Z})),(0,o.kt)("h3",{id:"reset-remote-url"},"Reset remote url"),(0,o.kt)("p",null,"You can easily update your remote url from iPhone Settings :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your iPhone Settings"),(0,o.kt)("li",{parentName:"ul"},"Select the app you want the remote url to be updated"),(0,o.kt)("li",{parentName:"ul"},'Switch on the "Reset server address" option')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reset remote url",src:n(4018).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then restart your app to reset the server address "),(0,o.kt)("li",{parentName:"ul"},"And finally define the new remote url")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update remote url",src:n(3028).Z})))}p.isMDXComponent=!0},3923:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Login-Settings-screen-Publishing-section-4D-for-iOS-be241cfa7f67de597f8249586991a3ac.png"},9307:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Publishing-section-4D-for-iOS-a02a3905e9c0f293e6eeba0752d95533.png"},4018:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Reset-remote-url-883bc554af33a07cad5c1d9b085528f6.png"},3028:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Update-remote-url-75a80128450b5e1cced832b75d2240fd.png"}}]);