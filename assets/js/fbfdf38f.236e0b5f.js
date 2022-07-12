"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[253],{6359:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={id:"using-action-parameters",title:"Using action parameters"},r=void 0,s={unversionedId:"tutorials/actions/using-action-parameters",id:"version-19-R5/tutorials/actions/using-action-parameters",title:"Using action parameters",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R5/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/docs/19-R5/tutorials/actions/using-action-parameters",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/using-action-parameters.md",tags:[],version:"19-R5",frontMatter:{id:"using-action-parameters",title:"Using action parameters"},sidebar:"tutorials",previous:{title:"Adding actions in templates",permalink:"/go-mobile/docs/19-R5/tutorials/actions/adding-actions-template"},next:{title:"Many to One relations",permalink:"/go-mobile/docs/19-R5/tutorials/relations/many-to-one-relations"}},l={},c=[{value:"STEP 1. Add action",id:"step-1-add-action",level:2},{value:"STEP 2. Edit action",id:"step-2-edit-action",level:2},{value:"STEP 3. Delete action",id:"step-3-delete-action",level:2},{value:"STEP 4. Send a comment action",id:"step-4-send-a-comment-action",level:2},{value:"STEP 5. Create the On Mobile App Action",id:"step-5-create-the-on-mobile-app-action",level:2},{value:"STEP 6. Create All the methods you need",id:"step-6-create-all-the-methods-you-need",level:2},{value:"addAction",id:"addaction",level:3},{value:"editAction",id:"editaction",level:3},{value:"deleteAction",id:"deleteaction",level:3},{value:"sendEmail",id:"sendemail",level:3},{value:"STEP 7. Build your app",id:"step-7-build-your-app",level:2},{value:"STEP 8. Where to go from here?",id:"step-8-where-to-go-from-here",level:2}],p={toc:c};function d(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Define action parameters to edit the content of your app.")),(0,o.kt)("p",null,"In the tutorial on defining actions, we discovered how to execute 4D code from an iOS app by defining actions from the actions section."),(0,o.kt)("p",null,"In this tutorial, we're going to go further and create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an Add action to ",(0,o.kt)("strong",{parentName:"li"},"create a new task"),","),(0,o.kt)("li",{parentName:"ul"},"an Edit action that will allow you to ",(0,o.kt)("strong",{parentName:"li"},"edit existing tasks")," from the iOS app,"),(0,o.kt)("li",{parentName:"ul"},"a Delete action to ",(0,o.kt)("strong",{parentName:"li"},"delete an entity"),", and"),(0,o.kt)("li",{parentName:"ul"},"an action that will enable you to ",(0,o.kt)("strong",{parentName:"li"},"email a comment for a specific task"),".")),(0,o.kt)("p",null,"To begin, let's first download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," based on our existing Tasks iOS app:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Download")),(0,o.kt)("h2",{id:"step-1-add-action"},"STEP 1. Add action"),(0,o.kt)("p",null,"Let's begin simple. Open the Tasks mobile project and go directly to the ",(0,o.kt)("strong",{parentName:"p"},"Actions section"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Action section",src:n(29379).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"It's quite empty for the moment... Here is what we want: ",(0,o.kt)("strong",{parentName:"p"},"create a new task from the iOS app"),"."),(0,o.kt)("p",null,"For this, let's create an action using a preset ",(0,o.kt)("strong",{parentName:"p"},"Add")," action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the arrow in the ",(0,o.kt)("strong",{parentName:"li"},"+ button")," at the bottom of the Actions table."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Add action for")," option."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Task table"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add action creation",src:n(93977).Z,width:"2164",height:"2046"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A new action")," named ",(0,o.kt)("em",{parentName:"li"},'"addTasks"')," with ",(0,o.kt)("em",{parentName:"li"},'"Add..."')," as default label is displayed."),(0,o.kt)("li",{parentName:"ul"},"All available ",(0,o.kt)("strong",{parentName:"li"},"parameters")," and their ",(0,o.kt)("strong",{parentName:"li"},"properties")," are shown in the ",(0,o.kt)("strong",{parentName:"li"},"Actions Parameters")," section.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add action parameters",src:n(75903).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, all ",(0,o.kt)("strong",{parentName:"p"},"Add action parameters")," are created automatically and ready to use."),(0,o.kt)("h2",{id:"step-2-edit-action"},"STEP 2. Edit action"),(0,o.kt)("p",null,"Now let's create an action that will allow you to ",(0,o.kt)("strong",{parentName:"p"},"edit your app content"),"."),(0,o.kt)("p",null,"For this, we'll create an action using a preset ",(0,o.kt)("strong",{parentName:"p"},"Edit")," action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the arrow in the ",(0,o.kt)("strong",{parentName:"li"},"+ button")," at the bottom of the Actions table."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Edit action for")," option."),(0,o.kt)("li",{parentName:"ul"},"Select the Tasks table. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit action creation",src:n(54282).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, you will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A new action")," named ",(0,o.kt)("em",{parentName:"li"},'"editTasks"')," with ",(0,o.kt)("em",{parentName:"li"},'"Edit..."')," as the default label."),(0,o.kt)("li",{parentName:"ul"},"All available action ",(0,o.kt)("strong",{parentName:"li"},"parameters")," and their ",(0,o.kt)("strong",{parentName:"li"},"properties")," are displayed in the ",(0,o.kt)("strong",{parentName:"li"},"Actions parameters")," section.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit action parameters",src:n(35389).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Don't worry, we'll handle the 4D code for these actions later. :-)"),(0,o.kt)("h2",{id:"step-3-delete-action"},"STEP 3. Delete action"),(0,o.kt)("p",null,"The preset ",(0,o.kt)("strong",{parentName:"p"},"Delete")," action creation process is nearly the same as the Edit action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the arrow in the ",(0,o.kt)("strong",{parentName:"li"},"+ button")," at the bottom of the Actions table."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Delete action for")," option."),(0,o.kt)("li",{parentName:"ul"},"Select the Tasks table. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete action creation",src:n(70222).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"At this point, you will see a ",(0,o.kt)("strong",{parentName:"p"},"new action")," named ",(0,o.kt)("em",{parentName:"p"},'"deleteTasks"')," with ",(0,o.kt)("em",{parentName:"p"},'"Remove"')," as the default label."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete action",src:n(65596).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"You don't need to worry about parameters or properties for this type of action."),(0,o.kt)("h2",{id:"step-4-send-a-comment-action"},"STEP 4. Send a comment action"),(0,o.kt)("p",null,"Now we want to ",(0,o.kt)("strong",{parentName:"p"},"send a comment")," to a ",(0,o.kt)("strong",{parentName:"p"},"specific email")," depending on a specific task. To do so, click on the + button and create a new action named ",(0,o.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete action creation",src:n(71102).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Now let's create three parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the + button and select ",(0,o.kt)("strong",{parentName:"li"},"Title")," in the Action Parameters list to include it in the email you're going to send."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"Comment")," parameter and select Text area as the format property."),(0,o.kt)("li",{parentName:"ul"},"Create an ",(0,o.kt)("strong",{parentName:"li"},"email")," parameter and select Email address as the format property.")),(0,o.kt)("p",null,"Your Actions section should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send comment action creation",src:n(55019).Z,width:"2164",height:"2046"})),(0,o.kt)("h2",{id:"step-5-create-the-on-mobile-app-action"},"STEP 5. Create the On Mobile App Action"),(0,o.kt)("p",null,"Click on the Create button to create the ",(0,o.kt)("em",{parentName:"p"},"On Mobile App Action")," database method."),(0,o.kt)("p",null,"All of your actions will automatically be included in this database method."),(0,o.kt)("p",null,"The only thing you need to do is add a reference to your method(s) for the scenario(s) your want to handle."),(0,o.kt)("p",null,"Here's the final ",(0,o.kt)("em",{parentName:"p"},"On Mobile App Action")," database method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n        \n    : ($request.action="addTasks")\n        \n          // Insert here the code for the action "Add\u2026"\n        \n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n        \n        $result:=addAction ($o)\n        \n    : ($request.action="editTasks")\n        \n          // Insert here the code for the action "Edit\u2026"\n        \n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n        \n        $result:=editAction ($o)\n        \n        \n    : ($request.action="deleteTasks")\n        \n          // Insert here the code for the action "Remove"\n        \n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n        \n        $result:=deleteAction ($o)\n        \n    : ($request.action="sendComment")\n        \n          // Insert here the code for the action "Send Comment"\n        \n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n        \n        \n        $result:=sendMail ($o)\n        \n    Else \n        \n          // Unknown action\n        \nEnd case \n\n$0:=$result\n\n')),(0,o.kt)("h2",{id:"step-6-create-all-the-methods-you-need"},"STEP 6. Create All the methods you need"),(0,o.kt)("h3",{id:"addaction"},"addAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n    \n    $entity:=ds.Tasks.new()  //create a reference\n    \n    For each ($key;$in.parameters)\n        \n        $entity[$key]:=$in.parameters[$key]\n        \n    End for each \n    \n    $entity.save()  //save the entity\n    \n    \n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n    $out.statusText:="Task added"\n    \nElse \n    \n    $out.errors:=New collection("No Selection")\n    \nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"editaction"},"editAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n    \n    $entity:=$selection[0]\n    \n    For each ($key;$in.parameters)\n        \n        $entity[$key]:=$in.parameters[$key]\n        \n    End for each \n    \n    $status:=$entity.save()\n    \n    $out:=New object\n    \n    If ($status.success)\n        \n        $out.success:=True  // notify App that action success\n        $out.dataSynchro:=True  // notify App to refresh this entity\n        $out.statusText:="Task edited"\n        \n    Else \n        \n        $out:=$status  // return status to the App\n        \n    End if \n    \nElse \n    \n    $out.success:=False  // notify App that action failed\n    \nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n    \n    $entity:=$selection.drop()\n    \n    $out:=New object\n    \n    If ($entity.length=0)\n        \n        $out.success:=True  // notify App that action success\n        $out.dataSynchro:=True  // notify App to refresh this entity\n        $out.statusText:="Task deleted"\n        \n    Else \n        \n        $out:=$status  // return status to the App\n        \n    End if \n    \nElse \n    \n    $out.success:=False  // notify App that action failed\n    \nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"sendemail"},"sendEmail"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n    \n    $entity:=$selection[0]\n    \n    For each ($key;$in.parameters)\n        \n        $entity[$key]:=$in.parameters[$key]\n        \n    End for each \n    \n    $out:=New object\n    \n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n    \n    $transporter:=SMTP New transporter($server)\n    \n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n    \n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notify App that action success\n        $out.statusText:="Mail sent"\n        \n    Else \n        $out.success:=False  // notify App that action failed\n        $out.statusText:="Mail not sent"\n        \n    End if \n    \nElse \n    \n    $out.success:=False  // notify App that action failed\n    \nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("p",null,"Don't forget to add your own values for the ",(0,o.kt)("strong",{parentName:"p"},"sendEmail")," action."),(0,o.kt)("h2",{id:"step-7-build-your-app"},"STEP 7. Build your app"),(0,o.kt)("p",null,"It's time to build your app! "),(0,o.kt)("p",null,"Now, if you click on the Action button in the navigation bar, you'll be able to ",(0,o.kt)("strong",{parentName:"p"},"create a new task"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new task",src:n(31723).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Holding and maintaining pressure on your new task cell in the List Form, will show that an ",(0,o.kt)("strong",{parentName:"p"},"Edit...")," action is available in the action list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit task",src:n(93114).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Send a comment using the ",(0,o.kt)("strong",{parentName:"p"},"Send comment")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send task comment",src:n(61499).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"And finally you can delete an entity using the ",(0,o.kt)("strong",{parentName:"p"},"Delete...")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Delete task",src:n(45829).Z,width:"1701",height:"992"})),(0,o.kt)("h2",{id:"step-8-where-to-go-from-here"},"STEP 8. Where to go from here?"),(0,o.kt)("p",null,"Congratulations! Your Tasks iOS app is now complete and you can now modify your app data direclty from your device and sychronize it with your server!"),(0,o.kt)("p",null,"Download the completed project: "),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Download completed project")))}d.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31723:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},45829:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},93114:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},61499:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},29379:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},93977:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},75903:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},70222:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},65596:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},54282:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},35389:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},71102:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},55019:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);