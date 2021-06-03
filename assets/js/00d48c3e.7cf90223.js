(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[242],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||n;return r?o.createElement(f,l(l({ref:t},m),{},{components:r})):o.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46721:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var o=r(22122),a=r(19756),n=(r(67294),r(3905)),l={id:"detailform-create-template",title:"Detail form templates"},i={unversionedId:"customizing-projects/detailform-create-template",id:"customizing-projects/detailform-create-template",isDocsHomePage:!1,title:"Detail form templates",description:"OBJECTIVES",source:"@site/docs/customizing-projects/detailform-create-template.md",sourceDirName:"customizing-projects",slug:"/customizing-projects/detailform-create-template",permalink:"/go-mobile/docs/customizing-projects/detailform-create-template",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/customizing-projects/detailform-create-template.md",version:"current",frontMatter:{id:"detailform-create-template",title:"Detail form templates"}},c=[{value:"Download the Starter Project",id:"download-the-starter-project",children:[]},{value:"Add a detail form template to your mobile project",id:"add-a-detail-form-template-to-your-mobile-project",children:[]},{value:"Detail form template folder content",id:"detail-form-template-folder-content",children:[]}],p={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,n.kt)("p",{parentName:"blockquote"},"Create your first list form template.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,n.kt)("p",{parentName:"blockquote"},"Click ","[here]",(0,n.kt)("inlineCode",{parentName:"p"},"(../getting-started/requirements)")," to see what you'll need to get started!")),(0,n.kt)("p",null,"In this tutorial, we'll guide you through the creation of a detail form template. It will display an ",(0,n.kt)("strong",{parentName:"p"},"image header"),", as well as ",(0,n.kt)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS app."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom template final result",src:r(4506).Z})),(0,n.kt)("h2",{id:"download-the-starter-project"},"Download the Starter Project"),(0,n.kt)("p",null,"To begin, download the ",(0,n.kt)("strong",{parentName:"p"},"Starter Project"),", which includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Custom Detail form")," folder (custom Detail form template folder)"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Contact.4dbase")," file (Contact demo database with a ready to use mobile app project)")),(0,n.kt)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,n.kt)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"CUSTOM DETAIL FORM STARTER PROJECT")),(0,n.kt)("p",null,"You are now ready to create your first detail form template !"),(0,n.kt)("h2",{id:"add-a-detail-form-template-to-your-mobile-project"},"Add a detail form template to your mobile project"),(0,n.kt)("p",null,"First, create a ",(0,n.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mobile folder custom template",src:r(87305).Z})),(0,n.kt)("p",null,"Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the ",(0,n.kt)("strong",{parentName:"p"},"Contact Demo App")," "),(0,n.kt)("p",null,"Finally go to the ",(0,n.kt)("strong",{parentName:"p"},"Forms section")," in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Forms section",src:r(21407).Z})),(0,n.kt)("p",null,"Now let's focus on the ",(0,n.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,n.kt)("h2",{id:"detail-form-template-folder-content"},"Detail form template folder content"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px that will be displayed in the project editor when you select your custom template among others"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a manifest.json")," file that includes a basic description of the template"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"a template.svg")," file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields"),(0,n.kt)("li",{parentName:"ul"},"Source folder that includes the ",(0,n.kt)("strong",{parentName:"li"},"storyboard")," (graphical interface) and ",(0,n.kt)("strong",{parentName:"li"},"swift")," file (code for the form)")),(0,n.kt)("p",null,"What are those files, what it is used for and how to customize it ?"))}m.isMDXComponent=!0},21407:function(e,t,r){"use strict";t.Z=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},4506:function(e,t,r){"use strict";t.Z=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},87305:function(e,t,r){"use strict";t.Z=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);