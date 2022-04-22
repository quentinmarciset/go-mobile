"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1859],{45992:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],l={id:"list-form-storyboard",title:"iOS Storyboard"},s=void 0,p={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"version-19-R3/tutorials/creating-list-forms/list-form-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS list form interface with Xcode.",source:"@site/versioned_docs/version-19-R3/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/docs/19-R3/tutorials/creating-list-forms/list-form-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-list-forms/list-form-storyboard.md",tags:[],version:"19-R3",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R3/tutorials",previous:{title:"Multi-criteria Search",permalink:"/go-mobile/docs/19-R3/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Android Layout",permalink:"/go-mobile/docs/19-R3/tutorials/creating-list-forms/list-form-layout"}},d={},c=[{value:"Open the storyboard file with Xcode",id:"open-the-storyboard-file-with-xcode",level:2},{value:"Add an Image View",id:"add-an-image-view",level:2},{value:"Add title and subtitle labels",id:"add-title-and-subtitle-labels",level:2},{value:"Label customization",id:"label-customization",level:2},{value:"How to get data into your cells",id:"how-to-get-data-into-your-cells",level:2},{value:"Image View",id:"image-view",level:3},{value:"Labels",id:"labels",level:3},{value:"Customize your app",id:"customize-your-app",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to create your iOS list form interface with Xcode."),(0,o.kt)("p",null,"Here's the result we want to achieve:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard custom listform",src:a(28939).Z,width:"1359",height:"754"})),(0,o.kt)("p",null,"For each cell, we're going to add a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Profile image"),(0,o.kt)("li",{parentName:"ul"},"Title "),(0,o.kt)("li",{parentName:"ul"},"Subtitle")),(0,o.kt)("h2",{id:"open-the-storyboard-file-with-xcode"},"Open the storyboard file with Xcode"),(0,o.kt)("p",null,"First, open your storyboard file in Xcode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty storyboard custom template",src:a(4044).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"It's quite empty, so let's add some content!"),(0,o.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,o.kt)("strong",{parentName:"p"},"Image View"),' into a cell. You can search for "Image View" in the search bar at the bottom of the Object Library.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Image View storyboard",src:a(92401).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Then set the X value to 8 and the Y value to 3."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View position height and width",src:a(25931).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Next, add a constraint (Leading: 8) by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints button")," (at the bottom of the Interface Builder window). Add width and height constraints too, as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View leading space width height",src:a(81189).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Finally, click on the ",(0,o.kt)("strong",{parentName:"p"},"Align button"),' (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View align vertically",src:a(14143).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Your Image View is now well positioned."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View final",src:a(30100).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Now let's work on the cell's labels."),(0,o.kt)("h2",{id:"add-title-and-subtitle-labels"},"Add title and subtitle labels"),(0,o.kt)("p",null,"Let's begin by ",(0,o.kt)("strong",{parentName:"p"},"adding a View"),'. Search for "View" in the ',(0,o.kt)("strong",{parentName:"p"},"Object library")," and drag it into the cell container."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add View Storyboard",src:a(70354).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Then set the X value to 126 and the Y value to 10."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View position height and width",src:a(55645).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"For the Image View, add four constraints by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View contraints Storyboard",src:a(55125).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Drag and drop a label into the View you just added from the Object Library."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add label Storyboard",src:a(49136).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Duplicate the label")," and in the ",(0,o.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the X value to 8 and the Y value to 48."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Duplicate the label",src:a(44047).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Select both labels add four constraints by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels contraints storyboard",src:a(31401).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"With a label selected, double-click on the ",(0,o.kt)("strong",{parentName:"p"},"Height constraint")," to edit it. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label height constraint edition",src:a(35972).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Change the relation from Equal to ",(0,o.kt)("strong",{parentName:"p"},"Greater Than or Equal")," so it can have a variable height (to handle multiline labels). "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change relation label height constraint",src:a(62916).Z,width:"1189",height:"1006"})),(0,o.kt)("p",null,"Repeat the process for the second label."),(0,o.kt)("h2",{id:"label-customization"},"Label customization"),(0,o.kt)("p",null,"From the attribute inspector (on the right side of the Interface Builder window),  you can customize your label's font colors. Let's make the second label ",(0,o.kt)("strong",{parentName:"p"},"Dark Grey Color")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label color dark grey",src:a(43329).Z,width:"1296",height:"1006"})),(0,o.kt)("p",null,"You can also select the dominant color for your app:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label color background color",src:a(41139).Z,width:"1296",height:"1006"})),(0,o.kt)("p",null,"From the attribute inspector, you can also customize the font. Select both labels and select Font > Custom > ",(0,o.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label font custom",src:a(56186).Z,width:"1296",height:"1006"})),(0,o.kt)("p",null,"To complete the customizations, select both labels and ",(0,o.kt)("strong",{parentName:"p"},"enter 0 for Lines")," in the inspector window. This allows the number of lines to be unlimited."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label lines number",src:a(97956).Z,width:"1169",height:"990"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The provided storyboard is optimized to have a ",(0,o.kt)("strong",{parentName:"p"},"variable cell height")," depending on the contents of each cell."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Row height tableview cell",src:a(15277).Z,width:"1169",height:"990"})),(0,o.kt)("h2",{id:"how-to-get-data-into-your-cells"},"How to get data into your cells"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"Select your Image View and go to ",(0,o.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,o.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User defined runtime attributes",src:a(22115).Z,width:"1256",height:"1006"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": Begin with bindTo to activate binding on the component. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Identity inspector storyboard",src:a(86815).Z,width:"1169",height:"990"})),(0,o.kt)("h3",{id:"labels"},"Labels"),(0,o.kt)("p",null,"Select the first label and add a row in the Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field 2 Binding",src:a(19323).Z,width:"1164",height:"920"})),(0,o.kt)("p",null,"Select the second label and add a row in the Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field 3 Binding",src:a(34051).Z,width:"1164",height:"920"})),(0,o.kt)("p",null,"You can change the ",(0,o.kt)("strong",{parentName:"p"},"storyboard display labels")," to have better visibility: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double-click the first label to edit it and enter ",(0,o.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,o.kt)("li",{parentName:"ul"},"Double-click the second label to edit it and enter ",(0,o.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard label display names",src:a(24324).Z,width:"1171",height:"984"})),(0,o.kt)("p",null,"Go to your project editor, select your list form template from the Forms section, then select Build and Run."),(0,o.kt)("p",null,"Here is the simulator result :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:a(75442).Z,width:"1417",height:"992"})),(0,o.kt)("h2",{id:"customize-your-app"},"Customize your app"),(0,o.kt)("p",null,"The last step is adding a corner radius to the Image View to have a better design."),(0,o.kt)("p",null,"Select your Image View and add the two following lines in the User Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"12")))),(0,o.kt)("p",null,"and"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ImageView corner Radius",src:a(93385).Z,width:"1164",height:"920"})),(0,o.kt)("p",null,"You can now build your project from the project editor!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom template final result",src:a(25453).Z,width:"1417",height:"992"})),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,o.kt)("p",null,"In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R3/tutorials/creating-detail-forms/detail-form-template"},"detail form templates"),"."),(0,o.kt)("p",null,"Download the completed template list folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Download")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92401:function(e,t,a){t.Z=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},49136:function(e,t,a){t.Z=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},70354:function(e,t,a){t.Z=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},62916:function(e,t,a){t.Z=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},25453:function(e,t,a){t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},44047:function(e,t,a){t.Z=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},4044:function(e,t,a){t.Z=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},19323:function(e,t,a){t.Z=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},34051:function(e,t,a){t.Z=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},86815:function(e,t,a){t.Z=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},14143:function(e,t,a){t.Z=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},93385:function(e,t,a){t.Z=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},30100:function(e,t,a){t.Z=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},81189:function(e,t,a){t.Z=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},25931:function(e,t,a){t.Z=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},41139:function(e,t,a){t.Z=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},43329:function(e,t,a){t.Z=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},56186:function(e,t,a){t.Z=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},35972:function(e,t,a){t.Z=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},97956:function(e,t,a){t.Z=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},31401:function(e,t,a){t.Z=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},15277:function(e,t,a){t.Z=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},75442:function(e,t,a){t.Z=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},28939:function(e,t,a){t.Z=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},24324:function(e,t,a){t.Z=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},22115:function(e,t,a){t.Z=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},55125:function(e,t,a){t.Z=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},55645:function(e,t,a){t.Z=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);