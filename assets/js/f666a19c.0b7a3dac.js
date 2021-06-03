(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2773],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93229:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i={id:"custom-login-form",title:"Custom Login Form"},s={unversionedId:"tutorials/creating-ios-app/custom-login-form",id:"tutorials/creating-ios-app/custom-login-form",isDocsHomePage:!1,title:"Custom Login Form",description:"OBJECTIVES",source:"@site/docs/tutorials/creating-ios-app/custom-login-form.md",sourceDirName:"tutorials/creating-ios-app",slug:"/tutorials/creating-ios-app/custom-login-form",permalink:"/go-mobile/docs/tutorials/creating-ios-app/custom-login-form",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-ios-app/custom-login-form.md",version:"current",frontMatter:{id:"custom-login-form",title:"Custom Login Form"},sidebar:"tutorials",previous:{title:"Contact App",permalink:"/go-mobile/docs/tutorials/creating-ios-app/create-contact-app"},next:{title:"Xcode",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/what-is-xcode"}},l=[{value:"STEP 1. Getting started",id:"step-1-getting-started",children:[]},{value:"STEP 2. Include and use a custom login form",id:"step-2-include-and-use-a-custom-login-form",children:[]},{value:"STEP 3. On Mobile app Authentication database method",id:"step-3-on-mobile-app-authentication-database-method",children:[]},{value:"STEP 4. Project Methods",id:"step-4-project-methods",children:[{value:"Authentication method",id:"authentication-method",children:[]},{value:"GenerateQRCODE method",id:"generateqrcode-method",children:[]}]},{value:"STEP 5. Website",id:"step-5-website",children:[{value:"index.html",id:"indexhtml",children:[]},{value:"createQRCode.html",id:"createqrcodehtml",children:[]},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",children:[]}]},{value:"STEP 6. Get the entire senario",id:"step-6-get-the-entire-senario",children:[{value:"Login into your website home page",id:"login-into-your-website-home-page",children:[]},{value:"Generate the QR Code",id:"generate-the-qr-code",children:[]},{value:"Build your app on a real device",id:"build-your-app-on-a-real-device",children:[]}]},{value:"STEP 7. Where to go from here?",id:"step-7-where-to-go-from-here",children:[]}],c={toc:l};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("p",{parentName:"blockquote"},"Use a custom login form"),(0,r.kt)("p",{parentName:"blockquote"},"Allow authenticated users to login by scanning a QRCode")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,r.kt)("p",{parentName:"blockquote"},"A website with authenticated users"),(0,r.kt)("p",{parentName:"blockquote"},"4D 18R6 minimum"),(0,r.kt)("p",{parentName:"blockquote"},"Real iOS mobile device (simulator do not simulate camera)")),(0,r.kt)("p",null,"This tutorial will allow you to quickly and easily integrate a custom ",(0,r.kt)("a",{parentName:"p",href:"https://4d-for-ios.github.io/gallery/#/type/form-login"},"login form"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Scenario: You already have a website with authenticated users and you want then to login into their app just by scanning a QRCode")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")),(0,r.kt)("p",{parentName:"blockquote"},"Selecting a custom login form from the Project editor is not implemented yet but let's see how to do that manually")),(0,r.kt)("h2",{id:"step-1-getting-started"},"STEP 1. Getting started"),(0,r.kt)("p",null,"In this tutorial, we're going to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Include a custom login form"),(0,r.kt)("li",{parentName:"ul"},"Add the ability for your app users to login just by scanning a QRCode")),(0,r.kt)("p",null,"First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:"),(0,r.kt)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomLoginForm/archive/main.zip"},"Starter project")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")),(0,r.kt)("p",{parentName:"blockquote"},"This project already includes a Users table with a Login and a Password for each authenticated user.")),(0,r.kt)("h2",{id:"step-2-include-and-use-a-custom-login-form"},"STEP 2. Include and use a custom login form"),(0,r.kt)("p",null,"To use a custom login form, the first thing you'll need to do is creating a ",(0,r.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," folder."),(0,r.kt)("p",null,"Download the Sign in With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QRCode login form")," and simply drop it in the login folder you've just created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login folder",src:n(78085).Z})),(0,r.kt)("p",null,"Then open the ",(0,r.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp")," file"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project.4dmobileapp",src:n(53567).Z})),(0,r.kt)("p",null,"With your project closed, and add the following line : ",(0,r.kt)("em",{parentName:"p"},'"login": "/SignInWithQRCode",')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "info": {\n        "version": 5,\n        "target": "iOS",\n        "ideVersion": "1870",\n        "ideBuildVersion": "261295",\n        "componentBuild": ""\n    },\n    "login": "/SignInWithQRCode",\n    ...\n\n')),(0,r.kt)("p",null,"This will allow to initialize the custom template and use it during the build process."),(0,r.kt)("p",null,"You are done for the custom template int\xe9gration! So quite an easy process :)"),(0,r.kt)("h2",{id:"step-3-on-mobile-app-authentication-database-method"},"STEP 3. On Mobile app Authentication database method"),(0,r.kt)("p",null,"Open the QRCode mobile project and go right to the Publishing section. "),(0,r.kt)("p",null,"From here check the Authentication feature and Create the database method clicking on the Create button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publishing section",src:n(71370).Z})),(0,r.kt)("p",null,"This is how it should look to authenticate users :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Informations provided by mobile application\n$response:=New object  // Informations returned to mobile application\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // Get the password from the table\n    \n    If (Verify password hash($password; $request.parameters.token))\n        // Comparison with what you receive in the request\n        \n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),(0,r.kt)("h2",{id:"step-4-project-methods"},"STEP 4. Project Methods"),(0,r.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,r.kt)("p",null,"Here we get the variable from the form and check if those values exist in the User table :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//Retrieve all the variables of the form\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// Get the login and pswd variable from the authentication web page\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// Shared variable creation to access to it in the code\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// Search if the login / pswd exist and if the user can be authentified\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// If the login / pswd exist the login / pswd are initialised in the share variable\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n    \n    // Redirection to the web page\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n    \nElse \n    // Back to the home page\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),(0,r.kt)("h3",{id:"generateqrcode-method"},"GenerateQRCODE method"),(0,r.kt)("p",null,"Here we generated a vqrCodeData that is a json that include the user email and the encrtypted password that are the data that are going to be emebeded in the QRCode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Use storage variable\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// Process variable creation (json value with mail and encrypted pswd)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// Redirection to the QRcode webpage\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),(0,r.kt)("h2",{id:"step-5-website"},"STEP 5. Website"),(0,r.kt)("p",null,"For this tutorial, three html pages are already available into the WebFolder folder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The authentication page (index.html)"),(0,r.kt)("li",{parentName:"ul"},"The QRcode generation page (createQRCode.html)"),(0,r.kt)("li",{parentName:"ul"},"The final page the user will scan from his mobile device (generatedQRCode.shtml)")),(0,r.kt)("p",null,"Let's have a focus on those three pages :"),(0,r.kt)("h3",{id:"indexhtml"},"index.html"),(0,r.kt)("p",null,"Here, we just use a 4DACTION to post login and password to be used in the ",(0,r.kt)("em",{parentName:"p"},"Authentication Project Method")," that we are going to see in step 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),(0,r.kt)("h3",{id:"createqrcodehtml"},"createQRCode.html"),(0,r.kt)("p",null,"Here, we use call the ",(0,r.kt)("em",{parentName:"p"},"GenerateQRCODE Project Method")," using a 4DACTION:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),(0,r.kt)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),(0,r.kt)("p",null,"In this last page, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"[4D tags](https://doc.4d.com/4Dv18R6/4D/18-R6/4D-Transformation-Tags.300-5198150.en.html)")," to get the ",(0,r.kt)("em",{parentName:"p"},"data")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n  \n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n  \n')),(0,r.kt)("h2",{id:"step-6-get-the-entire-senario"},"STEP 6. Get the entire senario"),(0,r.kt)("h3",{id:"login-into-your-website-home-page"},"Login into your website home page"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com"))," in the Login field and ",(0,r.kt)("strong",{parentName:"p"},"TEST")," in the Password field in your website home page and click Login (Which is an existing record in the User table)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login form",src:n(61022).Z})),(0,r.kt)("h3",{id:"generate-the-qr-code"},"Generate the QR Code"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"HERE")," button to generate the QR Code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create QR Code",src:n(33522).Z})),(0,r.kt)("p",null,"You will be redirected to the final QR Code page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generated QR Code",src:n(96782).Z})),(0,r.kt)("h3",{id:"build-your-app-on-a-real-device"},"Build your app on a real device"),(0,r.kt)("p",null,"Install your mobile app from the project editor on a real device."),(0,r.kt)("p",null,"Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app."),(0,r.kt)("p",null,"Here is the final result :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign in with QR Code",src:n(66392).Z})),(0,r.kt)("h2",{id:"step-7-where-to-go-from-here"},"STEP 7. Where to go from here?"),(0,r.kt)("p",null,"The step 2 covers how to include easily any custom login form in your mobile app. So you should now be able just followin this step, to create your own custom login form and use it on your own.  "),(0,r.kt)("p",null,"Reading next steps you are now able to include the Sign In With QRCode login and allow your authenticated users to scan a QRCode to login into their app."))}p.isMDXComponent=!0},53567:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4dmobileapp-file-7cfeb3ed913af5e2efd4e5648fa04fb8.png"},33522:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-qr-code-92fb34962678fd5aec2c78c3975485e2.png"},96782:function(e,t,n){"use strict";t.Z=n.p+"assets/images/generated-qr-code-b8adf3b5a3147675e82e1c11828bfe16.png"},78085:function(e,t,n){"use strict";t.Z=n.p+"assets/images/login-folder-5b1131cc505b021c9991c73d79d626b2.png"},61022:function(e,t,n){"use strict";t.Z=n.p+"assets/images/login-form-503af282635c8c852d6ec6ff0697d820.png"},71370:function(e,t,n){"use strict";t.Z=n.p+"assets/images/publishing-section-88709c4b88a53b4c808e536eaa85a51f.png"},66392:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sign-in-with-qr-code-f835be625ce5eece635c10088e55430c.gif"}}]);