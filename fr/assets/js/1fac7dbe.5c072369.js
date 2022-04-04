"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9191],{97944:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return g}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],i={id:"create-static-data-formatter",title:"Create a static data formatter"},s=void 0,m={unversionedId:"tutorials/data-formatter/create-static-data-formatter",id:"tutorials/data-formatter/create-static-data-formatter",title:"Create a static data formatter",description:"OBJECTIVES",source:"@site/docs/tutorials/data-formatter/create-static-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-static-data-formatter",permalink:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-static-data-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/create-static-formatter.md",tags:[],version:"current",frontMatter:{id:"create-static-data-formatter",title:"Create a static data formatter"},sidebar:"tutorials",previous:{title:"Mettre \xe0 jour un template",permalink:"/go-mobile/fr/docs/next/tutorials/gallery/update-gallery-template"},next:{title:"Create Swift formatter",permalink:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-swift-formatter"}},p={},g=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Create the formatters folder",id:"create-the-formatters-folder",level:2},{value:"Integer formatters",id:"integer-formatters",level:2},{value:"Integer to string",id:"integer-to-string",level:3},{value:"Integer to image",id:"integer-to-image",level:3},{value:"Text formatters",id:"text-formatters",level:2},{value:"Text to string",id:"text-to-string",level:3},{value:"Text to image",id:"text-to-image",level:3},{value:"Dark mode support",id:"dark-mode-support",level:2},{value:"Tintable color",id:"tintable-color",level:3},{value:"Optimized color pictures",id:"optimized-color-pictures",level:3},{value:"Open mobile project",id:"open-mobile-project",level:2},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",level:2}],d={toc:g};function u(t){var e=t.components,i=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("a",{parentName:"p",href:"requirements.html"},"here")," to see what you'll need to get started!")),(0,o.kt)("p",null,"In this tutorial, we'll guide you through the creation of various formatter examples."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons")," section, you can choose pre-packaged formats."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Available formats:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Text"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Date"),": Date, Short date, Long date, Full date"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Time"),": Time, Short time, Duration, Integer number"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Boolean"),': "No" or "Yes", "False" or "True"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integer"),": Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out"))),(0,o.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Download")),(0,o.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,o.kt)("p",null,"To begin, download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," and ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," folders that contain images (to use later for formatters that include images)"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Task Management.4dbase")," file (with a ready to use mobile app project)")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,o.kt)("p",null,"You're now ready to create your first formatters!"),(0,o.kt)("h2",{id:"create-the-formatters-folder"},"Create the formatters folder"),(0,o.kt)("p",null,"First, create a ",(0,o.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters")," folder."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter folder",src:a(24114).Z,width:"929",height:"367"})),(0,o.kt)("h2",{id:"integer-formatters"},"Integer formatters"),(0,o.kt)("h3",{id:"integer-to-string"},"Integer to string"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," folder in the formatters folder you've just created."),(0,o.kt)("li",{parentName:"ul"},"Then create a ",(0,o.kt)("strong",{parentName:"li"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter folder",src:a(35956).Z,width:"1130",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,o.kt)("h3",{id:"integer-to-image"},"Integer to image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create an ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," folder in the ",(0,o.kt)("strong",{parentName:"p"},"formatters")," folder you've created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter folder",src:a(91394).Z,width:"966",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then create an ",(0,o.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," folder. You can add the images from the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," in the StarterProject.zip to this new folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter images",src:a(12348).Z,width:"1119",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type")," : the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"assets"),": adjust the display size (width and height)")),(0,o.kt)("h2",{id:"text-formatters"},"Text formatters"),(0,o.kt)("h3",{id:"text-to-string"},"Text to string"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"textToString")," folder in the formatters folder you've just created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"textToString")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter folder",src:a(94478).Z,width:"967",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,o.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,o.kt)("h3",{id:"text-to-image"},"Text to image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," folder in the formatters folder you've just created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter folder",src:a(71310).Z,width:"971",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then create an ",(0,o.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," folder. You can add the images from the ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," in the StarterProject.zip to this new folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Formatter images",src:a(82390).Z,width:"1133",height:"367"})),(0,o.kt)("p",null,"Let's look at the contents of the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,o.kt)("h2",{id:"dark-mode-support"},"Dark mode support"),(0,o.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode."),(0,o.kt)("h3",{id:"tintable-color"},"Tintable color"),(0,o.kt)("p",null,"To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"tintable": true')," code line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,o.kt)("p",null,"Here is the result in light and dark modes: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{loading:"lazy",alt:"Data formatter",src:a(96867).Z,width:"231",height:"500"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{loading:"lazy",alt:"Data formatter",src:a(93318).Z,width:"231",height:"500"}))))),(0,o.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,o.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Data formatter",src:a(14563).Z,width:"1280",height:"720"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,o.kt)("p",null,"Here is the result in light mode and in dark mode: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{loading:"lazy",alt:"Data formatter",src:a(57932).Z,width:"1170",height:"2532"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{loading:"lazy",alt:"Data formatter",src:a(68405).Z,width:"1170",height:"2532"}))))),(0,o.kt)("h2",{id:"open-mobile-project"},"Open mobile project"),(0,o.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"Next, go to the ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Job field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"textToString")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Country field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Task Status")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," formatter for the ",(0,o.kt)("strong",{parentName:"li"},"Manager"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Text formatter",src:a(42407).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,o.kt)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Text formatter",src:a(86512).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"Download the completed formatter template folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Download")),(0,o.kt)("p",null,"And you're done!"))}u.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),m=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=m(a),u=n,c=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return a?r.createElement(c,l(l({ref:e},p),{},{components:a})):r.createElement(c,l({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14563:function(t,e,a){e.Z=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},93318:function(t,e,a){e.Z=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},68405:function(t,e,a){e.Z=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},91394:function(t,e,a){e.Z=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},35956:function(t,e,a){e.Z=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},71310:function(t,e,a){e.Z=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},94478:function(t,e,a){e.Z=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},24114:function(t,e,a){e.Z=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},12348:function(t,e,a){e.Z=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},82390:function(t,e,a){e.Z=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},86512:function(t,e,a){e.Z=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},42407:function(t,e,a){e.Z=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},96867:function(t,e,a){e.Z=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},57932:function(t,e,a){e.Z=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);