(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4054],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,i(i({ref:e},p),{},{components:n})):o.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7150:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={id:"one-to-many-custom-button",title:"One to Many - Custom button"},l={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"tutorials/relations/one-to-many-custom-button",isDocsHomePage:!1,title:"One to Many - Custom button",description:"As we have seen with all previous tutorials, 4D for iOS give you the freedom to create lots of custom things!",source:"@site/docs/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-custom-button",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/relations/one-to-many-custom-button.md",version:"current",frontMatter:{id:"one-to-many-custom-button",title:"One to Many - Custom button"},sidebar:"tutorials",previous:{title:"One to Many - Title definition",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-title-definition"},next:{title:"One to Many - Actions",permalink:"/go-mobile/docs/tutorials/relations/one-to-many-actions"}},s=[{value:"Include the button",id:"include-the-button",children:[]},{value:"Modify the button",id:"modify-the-button",children:[{value:"Custom colors and fonts",id:"custom-colors-and-fonts",children:[]},{value:"Button round corners",id:"button-round-corners",children:[]},{value:"Size and constraints",id:"size-and-constraints",children:[]},{value:"Add TAGS",id:"add-tags",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],u={toc:s};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As we have seen with all previous tutorials, 4D for iOS give you the freedom to create lots of custom things!"),(0,r.kt)("p",null,"As for custom templates or custom formatters, you can create custom Relation Buttons."),(0,r.kt)("p",null,"To that end, nothing more simple! You just have to drop your custom button in your custom template."),(0,r.kt)("p",null,"Let's get started by downloading the Starter project that includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a database with its mobile project"),(0,r.kt)("li",{parentName:"ul"},"a standard Relation button")),(0,r.kt)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"STARTER CUSTOM BUTTON")),(0,r.kt)("h2",{id:"include-the-button"},"Include the button"),(0,r.kt)("p",null,"The first step is including the button.xib button into your custom template so that 4D for iOS can use it."),(0,r.kt)("p",null,"To use the button, you just need to drop it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact")," folder."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom button path](assets/en/relations/Relation-custom-button-path.png)")),(0,r.kt)("p",null,"The first step is done!"),(0,r.kt)("h2",{id:"modify-the-button"},"Modify the button"),(0,r.kt)("p",null,"Open the .xib file with Xcode. "),(0,r.kt)("p",null,"It should look like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS.png)")),(0,r.kt)("p",null,"And from the attribute inspector, you can change for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"colors and fonts"),(0,r.kt)("li",{parentName:"ul"},"the button style"),(0,r.kt)("li",{parentName:"ul"},"the button size...")),(0,r.kt)("p",null,"Let's change the button color and the button label font!"),(0,r.kt)("h3",{id:"custom-colors-and-fonts"},"Custom colors and fonts"),(0,r.kt)("p",null,"Select the button and change the color and font from the attribute inspector."),(0,r.kt)("p",null,"For the background, let's select the Label Color to have the best contrast in Light and Dark mode."),(0,r.kt)("p",null,"For the font color let's put a System background color with a helvetica Neue Medium font."),(0,r.kt)("p",null,"Finally, don't forget to select the System background color Tint to apply this color to the button icon."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom relation button](assets/en/relations/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color.png)")),(0,r.kt)("p",null,"You should get this result in your Simulator in Dark and in Light mode:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom relation color and font](assets/en/relations/Custom-relation-button-Light-and-Dark-mode-font-and-color.png)")),(0,r.kt)("h3",{id:"button-round-corners"},"Button round corners"),(0,r.kt)("p",null,"Let's add some round corners to the relationButton!"),(0,r.kt)("p",null,"To do so, open the Identity Inspector."),(0,r.kt)("p",null,"Select your Button and add the two following lines in the User Defined Runtime Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",null,"and"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom relation color and font](assets/en/relations/Custom-relation-button-Xcode-round-corners.png)")),(0,r.kt)("p",null,"You can now build your project from the project editor!"),(0,r.kt)("p",null,"The result should look like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom relation color and font](assets/en/relations/Custom-relation-button-round-corners.png)")),(0,r.kt)("h3",{id:"size-and-constraints"},"Size and constraints"),(0,r.kt)("p",null,"Keep in mind that if you ",(0,r.kt)("strong",{parentName:"p"},"add constraints")," into your button, you will also have to modifiy the xib xml file to ",(0,r.kt)("strong",{parentName:"p"},"add some TAGS")," as for custom Detail form templates. This allows the button to be well duplicated when several relations are available in the same detail view."),(0,r.kt)("p",null,"How convenient, since we plan on adding a few constraints!"),(0,r.kt)("h4",{id:"add-constraints"},"Add constraints"),(0,r.kt)("p",null,"For this tutorial, we are just going to add a button height because we want it to look bigger on the screen."),(0,r.kt)("p",null,"Step 1. First select the view and change the height from 123 to 40"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Button view height](assets/en/relations/Button-view-height.png)")),(0,r.kt)("p",null,"Step 2. Double click on the ",(0,r.kt)("strong",{parentName:"p"},"Top Space Constraint")," and change it from 8 to 0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Top Space constraint](assets/en/relations/Top-Space-constraint.png)")),(0,r.kt)("p",null,"Step 3. Do the same thing with ",(0,r.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," and change it from 8 to 0"),(0,r.kt)("p",null,"You should get this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Custom  button constraints](assets/en/relations/Custom-button-constraints.png)")),(0,r.kt)("p",null,"Step 4. Add a height constraint of 40"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Button height constraint](assets/en/relations/Button-height-constraint.png)")),(0,r.kt)("p",null,"You should get this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Horizontal in container](assets/en/relations/Custom-relation-button-constraints.png)")),(0,r.kt)("p",null,"In order to indicate in the project editor that all of the elements included in this view will be duplicated, we need to add a TAG to each element and constraint."),(0,r.kt)("h3",{id:"add-tags"},"Add TAGS"),(0,r.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,r.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Object ID Storyboard](assets/en/relations/Custom-button-object-id-storyboard.png)")),(0,r.kt)("p",null,"The process is a little bit tricky... So let's begin by opening the storyboard file with your favorite code editor!"),(0,r.kt)("h4",{id:"add-a-tag-to-the-height-constraint"},"Add a tag to the height constraint"),(0,r.kt)("p",null,"Step 1. Select it from the Storyboard to get the Object ID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Horizontal constraint object ID](assets/en/relations/Horizontal-constraint-object-ID.png)")),(0,r.kt)("p",null,"Step 2. Search for this ID in the xml file and put ",(0,r.kt)("strong",{parentName:"p"},"TAG-RL-007")," instead (a Tag that is not already used)."),(0,r.kt)("p",null,"Step 3. Save the xml file "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Horizontal constraint xml file](assets/en/relations/Horizontal-constraint-xml-file.png)")),(0,r.kt)("p",null,"Step 4. Focus on the Storyboard to check if the constraint has been updated correctly"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"![Horizontal object ID updated](assets/en/relations/Horizontal-object-id-updated.png)")),(0,r.kt)("p",null,"And that's it! Your button is now fully duplicable if you have more that one relation button to display..."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"In this tutorial, we've covered the basics for creating custom relation buttons. Click on Final Project below to download the custom relation button."),(0,r.kt)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"FINAL CUSTOM BUTTON")))}p.isMDXComponent=!0}}]);