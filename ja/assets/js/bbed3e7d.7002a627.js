"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8695],{87223:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],r={id:"one-to-many-custom-button",title:"One to Many - Custom button"},s=void 0,u={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"version-19-R4/tutorials/relations/one-to-many-custom-button",title:"One to Many - Custom button",description:"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things.",source:"@site/versioned_docs/version-19-R4/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/ja/docs/tutorials/relations/one-to-many-custom-button",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/relations/one-to-many-custom-button.md",tags:[],version:"19-R4",frontMatter:{id:"one-to-many-custom-button",title:"One to Many - Custom button"},sidebar:"version-19-R4/tutorials",previous:{title:"One to Many - Title definition",permalink:"/go-mobile/ja/docs/tutorials/relations/one-to-many-title-definition"},next:{title:"One to Many - Actions",permalink:"/go-mobile/ja/docs/tutorials/relations/one-to-many-actions"}},c={},d=[{value:"Include the button",id:"include-the-button",level:2},{value:"Modify the button",id:"modify-the-button",level:2},{value:"Custom colors and fonts",id:"custom-colors-and-fonts",level:3},{value:"Button round corners",id:"button-round-corners",level:3},{value:"Size and constraints",id:"size-and-constraints",level:3},{value:"Add constraints",id:"add-constraints",level:4},{value:"Add TAGS",id:"add-tags",level:3},{value:"Add a tag to the height constraint",id:"add-a-tag-to-the-height-constraint",level:4},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],p={toc:d};function h(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things."),(0,i.kt)("p",null,"As for custom templates or custom formatters, you can create custom Relation Buttons."),(0,i.kt)("p",null,"To that end, nothing more simple! You just have to drop your custom button in your custom template."),(0,i.kt)("p",null,"Let's get started by downloading the Starter project that includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a database with its mobile project"),(0,i.kt)("li",{parentName:"ul"},"a standard Relation button")),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"Starter project")),(0,i.kt)("h2",{id:"include-the-button"},"Include the button"),(0,i.kt)("p",null,"The first step is including the button.xib button into your custom template so that 4D for iOS can use it."),(0,i.kt)("p",null,"To use the button, you just need to drop it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom button path",src:n(19087).Z,width:"2690",height:"734"})),(0,i.kt)("p",null,"The first step is done!"),(0,i.kt)("h2",{id:"modify-the-button"},"Modify the button"),(0,i.kt)("p",null,"Open the .xib file with Xcode. "),(0,i.kt)("p",null,"It should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom relation button",src:n(1390).Z,width:"2028",height:"1898"})),(0,i.kt)("p",null,"And from the attribute inspector, you can change for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"colors and fonts"),(0,i.kt)("li",{parentName:"ul"},"the button style"),(0,i.kt)("li",{parentName:"ul"},"the button size...")),(0,i.kt)("p",null,"Let's change the button color and the button label font!"),(0,i.kt)("h3",{id:"custom-colors-and-fonts"},"Custom colors and fonts"),(0,i.kt)("p",null,"Select the button and change the color and font from the attribute inspector."),(0,i.kt)("p",null,"For the background, let's select the Label Color to have the best contrast in Light and Dark mode."),(0,i.kt)("p",null,"For the font color let's put a System background color with a helvetica Neue Medium font."),(0,i.kt)("p",null,"Finally, don't forget to select the System background color Tint to apply this color to the button icon."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom relation button",src:n(51984).Z,width:"2026",height:"1886"})),(0,i.kt)("p",null,"You should get this result in your Simulator in Dark and in Light mode:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom relation color and font",src:n(11692).Z,width:"1701",height:"992"})),(0,i.kt)("h3",{id:"button-round-corners"},"Button round corners"),(0,i.kt)("p",null,"Let's add some round corners to the relationButton!"),(0,i.kt)("p",null,"To do so, open the Identity Inspector."),(0,i.kt)("p",null,"Select your Button and add the two following lines in the User Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"12")))),(0,i.kt)("p",null,"and"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom relation color and font",src:n(86250).Z,width:"2026",height:"1886"})),(0,i.kt)("p",null,"You can now build your project from the project editor!"),(0,i.kt)("p",null,"The result should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom relation color and font",src:n(48482).Z,width:"1701",height:"992"})),(0,i.kt)("h3",{id:"size-and-constraints"},"Size and constraints"),(0,i.kt)("p",null,"Keep in mind that if you ",(0,i.kt)("strong",{parentName:"p"},"add constraints")," into your button, you will also have to modifiy the xib xml file to ",(0,i.kt)("strong",{parentName:"p"},"add some TAGS")," as for custom Detail form templates. This allows the button to be well duplicated when several relations are available in the same detail view."),(0,i.kt)("p",null,"How convenient, since we plan on adding a few constraints!"),(0,i.kt)("h4",{id:"add-constraints"},"Add constraints"),(0,i.kt)("p",null,"For this tutorial, we are just going to add a button height because we want it to look bigger on the screen."),(0,i.kt)("p",null,"Step 1. First select the view and change the height from 123 to 40"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Button view height",src:n(97545).Z,width:"2030",height:"1858"})),(0,i.kt)("p",null,"Step 2. Double click on the ",(0,i.kt)("strong",{parentName:"p"},"Top Space Constraint")," and change it from 8 to 0"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Top Space constraint",src:n(22614).Z,width:"2030",height:"1858"})),(0,i.kt)("p",null,"Step 3. Do the same thing with ",(0,i.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," and change it from 8 to 0"),(0,i.kt)("p",null,"You should get this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Custom  button constraints",src:n(5531).Z,width:"2030",height:"1858"})),(0,i.kt)("p",null,"Step 4. Add a height constraint of 40"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Button height constraint",src:n(4054).Z,width:"2030",height:"1858"})),(0,i.kt)("p",null,"You should get this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Horizontal in container",src:n(86111).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"In order to indicate in the project editor that all of the elements included in this view will be duplicated, we need to add a TAG to each element and constraint."),(0,i.kt)("h3",{id:"add-tags"},"Add TAGS"),(0,i.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Object ID Storyboard",src:n(2757).Z,width:"2050",height:"1280"})),(0,i.kt)("p",null,"The process is a little bit tricky... So let's begin by opening the storyboard file with your favorite code editor!"),(0,i.kt)("h4",{id:"add-a-tag-to-the-height-constraint"},"Add a tag to the height constraint"),(0,i.kt)("p",null,"Step 1. Select it from the Storyboard to get the Object ID"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Horizontal constraint object ID",src:n(73853).Z,width:"2050",height:"1280"})),(0,i.kt)("p",null,"Step 2. Search for this ID in the xml file and put ",(0,i.kt)("strong",{parentName:"p"},"TAG-RL-007")," instead (a Tag that is not already used)."),(0,i.kt)("p",null,"Step 3. Save the xml file "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Horizontal constraint xml file",src:n(85740).Z,width:"1782",height:"1434"})),(0,i.kt)("p",null,"Step 4. Focus on the Storyboard to check if the constraint has been updated correctly"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Horizontal object ID updated",src:n(10008).Z,width:"2050",height:"1280"})),(0,i.kt)("p",null,"And that's it! Your button is now fully duplicable if you have more that one relation button to display..."),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.kt)("p",null,"In this tutorial, we've covered the basics for creating custom relation buttons. Click on Final Project below to download the custom relation button."),(0,i.kt)("p",null,"Download the completed project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"Download")))}h.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,l(l({ref:e},c),{},{components:n})):o.createElement(m,l({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4054:function(t,e,n){e.Z=n.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},97545:function(t,e,n){e.Z=n.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},5531:function(t,e,n){e.Z=n.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},2757:function(t,e,n){e.Z=n.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},11692:function(t,e,n){e.Z=n.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},86250:function(t,e,n){e.Z=n.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},86111:function(t,e,n){e.Z=n.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},48482:function(t,e,n){e.Z=n.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},73853:function(t,e,n){e.Z=n.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},85740:function(t,e,n){e.Z=n.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},10008:function(t,e,n){e.Z=n.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"},19087:function(t,e,n){e.Z=n.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},51984:function(t,e,n){e.Z=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},1390:function(t,e,n){e.Z=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},22614:function(t,e,n){e.Z=n.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"}}]);