(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7892],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5738:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return s},default:function(){return p}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),o={id:"detail-form-template-storyboard",title:"Detail Form Template Storyboard"},r={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"tutorials/creating-detail-forms/detail-form-template-storyboard",isDocsHomePage:!1,title:"Detail Form Template Storyboard",description:"Now it's time to create your iOS detail form interface with Xcode!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-storyboard",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-detail-forms/detail-form-template-storyboard.md",version:"current",frontMatter:{id:"detail-form-template-storyboard",title:"Detail Form Template Storyboard"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Install a template",permalink:"/go-mobile/fr/docs/tutorials/gallery/install-gallery-template"}},s=[{value:"Open the storyboard file with Xcode",id:"open-the-storyboard-file-with-xcode",children:[]},{value:"Add a Scroll View",id:"add-a-scroll-view",children:[]},{value:"Add a Vertical Stack View",id:"add-a-vertical-stack-view",children:[]},{value:"Add Views to the Stack Views",id:"add-views-to-the-stack-views",children:[]},{value:"Add an Image View to Field View 1",id:"add-an-image-view-to-field-view-1",children:[]},{value:"Add Labels to Field View 2",id:"add-labels-to-field-view-2",children:[{value:"Title label",id:"title-label",children:[]},{value:"Content label",id:"content-label",children:[]}]},{value:"How to get data into your cells",id:"how-to-get-data-into-your-cells",children:[{value:"Image View",id:"image-view",children:[]},{value:"Labels",id:"labels",children:[]}]},{value:"Add TAGS to the cells to be duplicated",id:"add-tags-to-the-cells-to-be-duplicated",children:[{value:"Field View 2",id:"field-view-2",children:[]},{value:"First label",id:"first-label",children:[]},{value:"Second label",id:"second-label",children:[]},{value:"Constraints",id:"constraints",children:[]},{value:"Customize your app",id:"customize-your-app",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now it's time to create your iOS detail form interface with Xcode!"),(0,l.kt)("p",null,"Here's the result we want to achieve:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Storyboard custom detailform](assets/en/custom-detailform/storyboard-custom-detailform.png)")),(0,l.kt)("p",null,"For each cell, we're going to add a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Profile header image"),(0,l.kt)("li",{parentName:"ul"},"A field to be duplicated")),(0,l.kt)("h2",{id:"open-the-storyboard-file-with-xcode"},"Open the storyboard file with Xcode"),(0,l.kt)("p",null,"First, open your storyboard file in Xcode."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Empty storyboard custom template](assets/en/custom-detailform/empty-storyboard-custom-detailform-template.png)")),(0,l.kt)("p",null,"It's quite empty, so let's add some content!"),(0,l.kt)("h2",{id:"add-a-scroll-view"},"Add a Scroll View"),(0,l.kt)("p",null,'For our detail form to be scrollable, the first step is to drag and drop a "Scroll View" from the ',(0,l.kt)("strong",{parentName:"p"},"Object library"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add Scroll View Storyboard](assets/en/custom-detailform/add-scrollview-storyboard.png)")),(0,l.kt)("p",null,"From the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Scroll View Width value to 359 and the Height value to 667. Then set the X value to 8 and the Y value to 0."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Scroll View position height and width](assets/en/custom-detailform/scrollview-position-height-width.png)")),(0,l.kt)("p",null,"Next, add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Scrollview Constraints](assets/en/custom-detailform/scrollview-constraints.png)")),(0,l.kt)("h2",{id:"add-a-vertical-stack-view"},"Add a Vertical Stack View"),(0,l.kt)("p",null,"Drag and drop a Vertical Stack View from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," in Scroll View. Then, from the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window) set the Width value to 359 and the Height value to 202. Finally, set the X value to 0 and the Y value to 8."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add stackview Storyboard](assets/en/custom-detailform/add-vertical-stackview-storyboard.png)")),(0,l.kt)("p",null,"Since the Stack View width and height are defined by the elements inside it, we will configure the size and constraints later."),(0,l.kt)("h2",{id:"add-views-to-the-stack-views"},"Add Views to the Stack Views"),(0,l.kt)("p",null,"Drag and drop a view from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," to the Stack View you've just added to your storyboard. Let's name it ",(0,l.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add Field View 1](assets/en/custom-detailform/add-view1-storyboard.png)")),(0,l.kt)("p",null,"Then drag and drop another view from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," directly into the Document Outline at the same level as Field View 1 (to include it in the Stack View) and name it ",(0,l.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add Field View 2](assets/en/custom-detailform/add-view2-storyboard.png)")),(0,l.kt)("p",null,"To add space between the views, select your Stack View and set the spacing value to 8 (in the Attributes Inspector)."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Stackview spacing](assets/en/custom-detailform/stackview-spacing.png)")),(0,l.kt)("p",null,"Select both ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," and ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," and in the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set Width value to 359 and the Height value to 97."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![views position height and width](assets/en/custom-detailform/views-position-height-width-storyboard.png)")),(0,l.kt)("p",null,"Select ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," add three constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, and Top: 0):"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Field Views constraints](assets/en/custom-detailform/fieldView-1-Field-View-2-constraints.png)")),(0,l.kt)("p",null,"For the Stack View to have the same width as the Scroll View, you need to add a constraint:"),(0,l.kt)("p",null,"Press Ctrl and drag the Stack View to the Scroll View. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints. Choose Equal Width!"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Stack View Equal Width](assets/en/custom-detailform/stackview-equal-width-scrollview.png)")),(0,l.kt)("p",null,"Next, with the Stack View selected add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, Top: 8, and Bottom: 0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Stackview constraints](assets/en/custom-detailform/stackview-constraints.png)")),(0,l.kt)("p",null,"Here's what you'll see when constraints have been added :"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Stackview final constraints](assets/en/custom-detailform/stackview-constraints-final.png)")),(0,l.kt)("p",null,"Now that you have two views in your Stack View and you've defined constraints, let's focus on Field View 1."),(0,l.kt)("h2",{id:"add-an-image-view-to-field-view-1"},"Add an Image View to Field View 1"),(0,l.kt)("p",null,"From the ",(0,l.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,l.kt)("strong",{parentName:"p"},"Image View")," into Field View 1."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add Image View storyboard](assets/en/custom-detailform/add-imageview-storyboard.png)")),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 359 and the Height value to 97. Then set the X value to 0 and the Y value to 0."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Image View position height and width](assets/en/custom-detailform/imageview-position-height-width.png)")),(0,l.kt)("p",null,"Next, add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing:0, Leading:0, Top:0, and Bottom:0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Image View constraints](assets/en/custom-detailform/imageview-constraints.png)")),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," change the Intrinsic Size from ",(0,l.kt)("strong",{parentName:"p"},"Default")," to ",(0,l.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Intrinsic size Image View](assets/en/custom-detailform/intrinsic-size-imageview.png)")),(0,l.kt)("h2",{id:"add-labels-to-field-view-2"},"Add Labels to Field View 2"),(0,l.kt)("h3",{id:"title-label"},"Title label"),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Object library"),", drag and drop a  ",(0,l.kt)("strong",{parentName:"p"},"Label")," into Field View 2 and set the Width value to 343 and the Height value to 22. Then set the X value to 8 and the Y value to 8."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add label](assets/en/custom-detailform/add-label1-storyboard.png)")),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),'". Then in the ',(0,l.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," and the color to ",(0,l.kt)("strong",{parentName:"p"},"BackgroundColor"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Title label font and color](assets/en/custom-detailform/title-label-font-and-color.png)")),(0,l.kt)("h3",{id:"content-label"},"Content label"),(0,l.kt)("p",null,"Duplicate the Title label and set the duplicate's Width value to 339 and the Height value to 44. Then set the X value to 12 and the Y value to 37."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Add label](assets/en/custom-detailform/add-label2-storyboard.png)")),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),'". Then from the ',(0,l.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," and the color to ",(0,l.kt)("strong",{parentName:"p"},"Black Color"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Content label font and color](assets/en/custom-detailform/content-label-font-and-color.png)")),(0,l.kt)("p",null,"Select the Content and Title labels and add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Title and Content labels constraints](assets/en/custom-detailform/titlelabel-contentlabel-contraints.png)")),(0,l.kt)("p",null,"You're done with graphical elements! All of your constraints are well defined :)"),(0,l.kt)("h2",{id:"how-to-get-data-into-your-cells"},"How to get data into your cells"),(0,l.kt)("h3",{id:"image-view"},"Image View"),(0,l.kt)("p",null,"Select your Image View and go to ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,l.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![User defined runtime attributes](assets/en/custom-detailform/user-defined-runtime-attributes.png)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": Start with bindTo to activate binding on the component. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Identity inspector storyboard](assets/en/custom-detailform/identity-inspector-storyboard.png)")),(0,l.kt)("h3",{id:"labels"},"Labels"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},"first label")," we are going to add several lines mainly to display icons:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Label1 User Defined Runtime Attributes](assets/en/custom-detailform/label1-user-defined-runtime-attributes.png)")),(0,l.kt)("p",null,"You also need to set the Class to ",(0,l.kt)("inlineCode",{parentName:"p"},"IconLabel")," and check the ",(0,l.kt)("strong",{parentName:"p"},"Inherit Module From Target")," checkbox as we can see below:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Label1 Custom Class](assets/en/custom-detailform/label1-custom-class.png)")),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"second label")," and add a row in the Defined Runtime Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Label2 User Defined Runtime Attributes](assets/en/custom-detailform/label2-user-defined-runtime-attributes.png)")),(0,l.kt)("h2",{id:"add-tags-to-the-cells-to-be-duplicated"},"Add TAGS to the cells to be duplicated"),(0,l.kt)("p",null,"Field View 2 includes elements that will be duplicated so you can have as many field as you define in the project editor."),(0,l.kt)("p",null,"Each storyboard element has a Object ID. For example, if you select Field View 2 and go to the ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Object ID Storyboard](assets/en/custom-detailform/object-id-storyboard.png)")),(0,l.kt)("p",null,"In order to tell the project editor that all of the elements included in this view will be duplicated, we need to add TAG to each element and constraints."),(0,l.kt)("p",null,"The process is a little bit tricky... Let's begin by opening the storyboard file with your favorite code editor!"),(0,l.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: ",(0,l.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Search for this ID in the storyboard xml code and replace it with ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-001")," each time it appears. As you can see, this Object ID is mentioned several times so be careful!"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Storyboard xml](assets/en/custom-detailform/storyboard-xml.png)")),(0,l.kt)("p",null,"Save the storyboard xml file. As you can see, the Field View 2 Object ID has changed in your storyboard in Xcode:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Field View 2 Object ID](assets/en/custom-detailform/field-view-2-object-id.png)")),(0,l.kt)("h3",{id:"first-label"},"First label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now, get the ",(0,l.kt)("strong",{parentName:"li"},"first label")," Object ID from the Identity Inspector and replace it with ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-002")," each time it appears in the storyboard xml code.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Label 1 Object ID](assets/en/custom-detailform/label1-object-id.png)")),(0,l.kt)("p",null,"Done with the first label!"),(0,l.kt)("h3",{id:"second-label"},"Second label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Next, get the ",(0,l.kt)("strong",{parentName:"li"},"second label")," Oject ID from the Identity Inspector and replace it with ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-003")," each time it appears in the storyboard xml code.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Label 2 Object ID](assets/en/custom-detailform/label2-object-id.png)")),(0,l.kt)("p",null,"Voil\xe0!"),(0,l.kt)("h3",{id:"constraints"},"Constraints"),(0,l.kt)("p",null,"Both labels have constraints that we need to tag, too:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Tag constraints](assets/en/custom-detailform/duplicated-constraints.png)")),(0,l.kt)("p",null,"Just like View Field 2 and label, get all ",(0,l.kt)("strong",{parentName:"p"},"7 Constraints")," Object IDs from the Identity Inspector and replace them with: ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-009")," and ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,l.kt)("p",null,"Go to your project editor and select your detail template from the Forms section, then click on Build."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Custom detail template forms](assets/en/custom-detailform/custom-detail-template-forms.png)")),(0,l.kt)("p",null,"Not bad for a first attempt! :)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![iPhone Demo](assets/en/custom-detailform/iphone-demo.png)")),(0,l.kt)("p",null,"Field View 2 is well duplicated! Let's see if we can make this app a bit more interesting!"),(0,l.kt)("h3",{id:"customize-your-app"},"Customize your app"),(0,l.kt)("p",null,"We're going to add a corner radius to the Image View, as well as Field View 2."),(0,l.kt)("p",null,"Select your Image View and add the two following lines in the User Defined Runtime Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,"and"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![iPhone Demo](assets/en/custom-detailform/imageview-corner-radius.png)")),(0,l.kt)("p",null,"Next, select Field View 2 and add the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![iPhone Demo](assets/en/custom-detailform/fieldview2-corner-radius.png)")),(0,l.kt)("p",null,"You can now build your project from the project editor!"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)")),(0,l.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,l.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter project resources. Click on ",(0,l.kt)("strong",{parentName:"p"},"Final Project")," below to download the completed template folder."),(0,l.kt)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomDetailForm/archive/c1be487dcbb83e5812c5fd8dd5e7422a79956c48.zip"},"CUSTOM DETAILFORM FINAL TEMPLATE")))}p.isMDXComponent=!0}}]);