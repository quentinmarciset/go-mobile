"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2933],{74114:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var i=a(83117),n=a(80102),l=(a(67294),a(3905)),o=["components"],r={id:"detail-form-template-storyboard",title:"iOS Storyboard"},s=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R4/tutorials/creating-detail-forms/detail-form-template-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS detail form interface with Xcode.",source:"@site/versioned_docs/version-19-R4/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/creating-detail-forms/detail-form-template-storyboard.md",tags:[],version:"19-R4",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R4/tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Android Layout",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-layout"}},p={},c=[{value:"Open the storyboard file with Xcode",id:"open-the-storyboard-file-with-xcode",level:2},{value:"Add a Scroll View",id:"add-a-scroll-view",level:2},{value:"Add a Vertical Stack View",id:"add-a-vertical-stack-view",level:2},{value:"Add Views to the Stack Views",id:"add-views-to-the-stack-views",level:2},{value:"Add an Image View to Field View 1",id:"add-an-image-view-to-field-view-1",level:2},{value:"Add Labels to Field View 2",id:"add-labels-to-field-view-2",level:2},{value:"Title label",id:"title-label",level:3},{value:"Content label",id:"content-label",level:3},{value:"How to get data into your cells",id:"how-to-get-data-into-your-cells",level:2},{value:"Image View",id:"image-view",level:3},{value:"Labels",id:"labels",level:3},{value:"Add TAGS to the cells to be duplicated",id:"add-tags-to-the-cells-to-be-duplicated",level:2},{value:"Field View 2",id:"field-view-2",level:3},{value:"First label",id:"first-label",level:3},{value:"Second label",id:"second-label",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Customize your app",id:"customize-your-app",level:3},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now it's time to create your iOS detail form interface with Xcode."),(0,l.kt)("p",null,"Here's the result we want to achieve:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Storyboard custom detailform",src:a(97223).Z,width:"1377",height:"761"})),(0,l.kt)("p",null,"For this template, we're going to add a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Profile header image"),(0,l.kt)("li",{parentName:"ul"},"A field to be duplicated")),(0,l.kt)("h2",{id:"open-the-storyboard-file-with-xcode"},"Open the storyboard file with Xcode"),(0,l.kt)("p",null,"First, open your storyboard file in Xcode."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Empty storyboard custom template",src:a(13263).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"It's quite empty, so let's add some content!"),(0,l.kt)("h2",{id:"add-a-scroll-view"},"Add a Scroll View"),(0,l.kt)("p",null,'For our detail form to be scrollable, the first step is to drag and drop a "Scroll View" from the ',(0,l.kt)("strong",{parentName:"p"},"Object library"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add Scroll View Storyboard",src:a(12993).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"From the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Scroll View Width value to 359 and the Height value to 667. Then set the X value to 8 and the Y value to 0."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Scroll View position height and width",src:a(87076).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Next, add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Scrollview Constraints",src:a(31141).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"add-a-vertical-stack-view"},"Add a Vertical Stack View"),(0,l.kt)("p",null,"Drag and drop a Vertical Stack View from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," in Scroll View. Then, from the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window) set the Width value to 359 and the Height value to 202. Finally, set the X value to 0 and the Y value to 8."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add stackview Storyboard",src:a(35169).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Since the Stack View width and height are defined by the elements inside it, we will configure the size and constraints later."),(0,l.kt)("h2",{id:"add-views-to-the-stack-views"},"Add Views to the Stack Views"),(0,l.kt)("p",null,"Drag and drop a view from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," to the Stack View you've just added to your storyboard. Let's name it ",(0,l.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add Field View 1",src:a(93702).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Then drag and drop another view from the ",(0,l.kt)("strong",{parentName:"p"},"Object library")," directly into the Document Outline at the same level as Field View 1 (to include it in the Stack View) and name it ",(0,l.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add Field View 2",src:a(1497).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"To add space between the views, select your Stack View and set the spacing value to 8 (in the Attributes Inspector)."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Stackview spacing",src:a(75644).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Select both ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," and ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," and in the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set Width value to 359 and the Height value to 97."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"views position height and width",src:a(69670).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Select ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," add three constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, and Top: 0):"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Field Views constraints",src:a(61718).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"For the Stack View to have the same width as the Scroll View, you need to add a constraint:"),(0,l.kt)("p",null,"Press ",(0,l.kt)("strong",{parentName:"p"},"Ctrl")," and drag the Stack View to the Scroll View. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints. Choose Equal Width!"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Stack View Equal Width",src:a(10190).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Next, with the Stack View selected add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, Top: 8, and Bottom: 0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Stackview constraints",src:a(97201).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Here's what you'll see when constraints have been added :"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Stackview final constraints",src:a(78459).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Now that you have two views in your Stack View and you've defined constraints, let's focus on Field View 1."),(0,l.kt)("h2",{id:"add-an-image-view-to-field-view-1"},"Add an Image View to Field View 1"),(0,l.kt)("p",null,"From the ",(0,l.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,l.kt)("strong",{parentName:"p"},"Image View")," into Field View 1."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add Image View storyboard",src:a(39025).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 359 and the Height value to 97. Then set the X value to 0 and the Y value to 0."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Image View position height and width",src:a(64606).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Next, add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing:0, Leading:0, Top:0, and Bottom:0) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Image View constraints",src:a(97937).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Size inspector panel")," change the Intrinsic Size from ",(0,l.kt)("strong",{parentName:"p"},"Default")," to ",(0,l.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Intrinsic size Image View",src:a(34381).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"add-labels-to-field-view-2"},"Add Labels to Field View 2"),(0,l.kt)("h3",{id:"title-label"},"Title label"),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Object library"),", drag and drop a  ",(0,l.kt)("strong",{parentName:"p"},"Label")," into Field View 2 and set the Width value to 343 and the Height value to 22. Then set the X value to 8 and the Y value to 8."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add label",src:a(79974).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),'". Then in the ',(0,l.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," and the color to ",(0,l.kt)("strong",{parentName:"p"},"BackgroundColor"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Title label font and color",src:a(69477).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"content-label"},"Content label"),(0,l.kt)("p",null,"Duplicate the Title label and set the duplicate's Width value to 339 and the Height value to 44. Then set the X value to 12 and the Y value to 37."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Add label",src:a(26557).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),'". Then from the ',(0,l.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," and the color to ",(0,l.kt)("strong",{parentName:"p"},"Black Color"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Content label font and color",src:a(82075).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Select the Content and Title labels and add four constraints by clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Title and Content labels constraints",src:a(36952).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"You're done with graphical elements! All of your constraints are well defined."),(0,l.kt)("h2",{id:"how-to-get-data-into-your-cells"},"How to get data into your cells"),(0,l.kt)("h3",{id:"image-view"},"Image View"),(0,l.kt)("p",null,"Select your Image View and go to ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,l.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"User defined runtime attributes",src:a(45539).Z,width:"1164",height:"1092"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": Start with bindTo to activate binding on the component. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Identity inspector storyboard",src:a(59890).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"labels"},"Labels"),(0,l.kt)("p",null,"For the ",(0,l.kt)("strong",{parentName:"p"},"first label")," we are going to add several lines mainly to display icons:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Label1 User Defined Runtime Attributes",src:a(40265).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"You also need to set the Class to ",(0,l.kt)("inlineCode",{parentName:"p"},"IconLabel")," and check the ",(0,l.kt)("strong",{parentName:"p"},"Inherit Module From Target")," checkbox as we can see below:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Label1 Custom Class",src:a(87163).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"second label")," and add a row in the Defined Runtime Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Label2 User Defined Runtime Attributes",src:a(14744).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"add-tags-to-the-cells-to-be-duplicated"},"Add TAGS to the cells to be duplicated"),(0,l.kt)("p",null,"Field View 2 includes elements that will be duplicated so you can have as many field as you define in the project editor."),(0,l.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Object ID Storyboard",src:a(31628).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"In order to tell the project editor that all of the elements included in this view will be duplicated, we need to add TAG to each element and constraints."),(0,l.kt)("p",null,"The process is a little bit tricky... Let's begin by opening the storyboard file with your favorite code editor!"),(0,l.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: ",(0,l.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Search for this ID in the storyboard xml code and replace it with ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-001")," each time it appears. As you can see, this Object ID is mentioned several times so be careful!"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Storyboard xml",src:a(2306).Z,width:"922",height:"227"})),(0,l.kt)("p",null,"Save the storyboard xml file. As you can see, the Field View 2 Object ID has changed in your storyboard in Xcode:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Field View 2 Object ID",src:a(54110).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"first-label"},"First label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now, get the ",(0,l.kt)("strong",{parentName:"li"},"first label")," Object ID from the Identity Inspector and replace it with ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-002")," each time it appears in the storyboard xml code.")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Label 1 Object ID",src:a(53935).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Done with the first label."),(0,l.kt)("h3",{id:"second-label"},"Second label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Next, get the ",(0,l.kt)("strong",{parentName:"li"},"second label")," Oject ID from the Identity Inspector and replace it with ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-003")," each time it appears in the storyboard xml code.")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Label 2 Object ID",src:a(38825).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Voil\xe0!"),(0,l.kt)("h3",{id:"constraints"},"Constraints"),(0,l.kt)("p",null,"Both labels have constraints that we need to tag, too:"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Tag constraints",src:a(1803).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Just like View Field 2 and label, get all ",(0,l.kt)("strong",{parentName:"p"},"7 Constraints")," Object IDs from the Identity Inspector and replace them with: ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-009")," and ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,l.kt)("p",null,"Go to your project editor and select your detail template from the Forms section, then click on Build."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Custom detail template forms",src:a(48044).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Not bad for a first attempt!"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"iPhone Demo",src:a(79591).Z,width:"1417",height:"907"})),(0,l.kt)("p",null,"Field View 2 is well duplicated! Let's see if we can make this app a bit more interesting!"),(0,l.kt)("h3",{id:"customize-your-app"},"Customize your app"),(0,l.kt)("p",null,"We're going to add a corner radius to the Image View, as well as Field View 2."),(0,l.kt)("p",null,"Select your Image View and add the two following lines in the User Defined Runtime Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,"and"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"iPhone Demo",src:a(16710).Z,width:"1163",height:"1092"})),(0,l.kt)("p",null,"Next, select Field View 2 and add the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"iPhone Demo",src:a(90607).Z,width:"1163",height:"1092"})),(0,l.kt)("p",null,"You can now build your project from the project editor!"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Custom template final result",src:a(91740).Z,width:"1417",height:"907"})),(0,l.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,l.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter project resources. "),(0,l.kt)("p",null,"Download the completed template folder:"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39025:function(e,t,a){t.Z=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},79974:function(e,t,a){t.Z=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},26557:function(e,t,a){t.Z=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},12993:function(e,t,a){t.Z=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},35169:function(e,t,a){t.Z=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},93702:function(e,t,a){t.Z=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},1497:function(e,t,a){t.Z=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},82075:function(e,t,a){t.Z=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},48044:function(e,t,a){t.Z=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},91740:function(e,t,a){t.Z=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},1803:function(e,t,a){t.Z=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},13263:function(e,t,a){t.Z=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},54110:function(e,t,a){t.Z=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},61718:function(e,t,a){t.Z=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},90607:function(e,t,a){t.Z=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},59890:function(e,t,a){t.Z=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},97937:function(e,t,a){t.Z=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},64606:function(e,t,a){t.Z=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},34381:function(e,t,a){t.Z=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},79591:function(e,t,a){t.Z=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},87163:function(e,t,a){t.Z=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},53935:function(e,t,a){t.Z=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},40265:function(e,t,a){t.Z=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},38825:function(e,t,a){t.Z=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},14744:function(e,t,a){t.Z=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},31628:function(e,t,a){t.Z=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},31141:function(e,t,a){t.Z=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},87076:function(e,t,a){t.Z=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},78459:function(e,t,a){t.Z=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},97201:function(e,t,a){t.Z=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},10190:function(e,t,a){t.Z=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},75644:function(e,t,a){t.Z=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},97223:function(e,t,a){t.Z=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},2306:function(e,t,a){t.Z=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},69477:function(e,t,a){t.Z=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},36952:function(e,t,a){t.Z=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},45539:function(e,t,a){t.Z=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},69670:function(e,t,a){t.Z=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);