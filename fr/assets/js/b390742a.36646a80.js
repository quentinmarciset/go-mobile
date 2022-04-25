"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8882],{23026:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),l=["components"],i={id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},s=void 0,u={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R3/tutorials/creating-detail-forms/detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s",description:"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. Ce mod\xe8le affichera un en-t\xeate d'image et des champs titre et contenu qui seront dupliqu\xe9s dans les applications iOS et Android qui seront g\xe9n\xe9r\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R3",frontMatter:{id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},sidebar:"version-19-R3/tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-list-forms/list-form-layout"},next:{title:"Ic\xf4nes du formulaire d\xe9taill\xe9",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-icon"}},d={},m=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile",id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile",level:2},{value:"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu",id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu",level:2}],c={toc:m};function p(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. Ce mod\xe8le affichera un ",(0,a.kt)("strong",{parentName:"p"},"en-t\xeate d'image")," et ",(0,a.kt)("strong",{parentName:"p"},"des champs titre et contenu")," qui seront dupliqu\xe9s dans les applications iOS et Android qui seront g\xe9n\xe9r\xe9s."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom template final result",src:r(68879).Z,width:"1417",height:"907"})),(0,a.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,a.kt)("p",null,"Pour commencer, t\xe9l\xe9chargez le ",(0,a.kt)("strong",{parentName:"p"},"Projet Starter"),", qui comprend :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un dossier ",(0,a.kt)("strong",{parentName:"li"},"Custom Detail form")," (dossier contenant le mod\xe8le personnalis\xe9 du formulaire d\xe9taill\xe9)"),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Projet Starter")),(0,a.kt)("h2",{id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile"},"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile"),(0,a.kt)("p",null,"Cr\xe9ez d'abord un dossier ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," dans lequel vous glisserez et d\xe9poserez le dossier ",(0,a.kt)("strong",{parentName:"p"},"Custom Detail form"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder custom template",src:r(25843).Z,width:"1342",height:"367"})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(29004).Z,width:"1072",height:"994"})),(0,a.kt)("p",null,"Now let's focus on the ",(0,a.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,a.kt)("h2",{id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu"},"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu"),(0,a.kt)("p",null,"Dans ce dossier, vous trouverez :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une ic\xf4ne ",(0,a.kt)("strong",{parentName:"li"},"layoutIconx2.png")," d'une r\xe9solution de 160x160px, qui sera affich\xe9e dans l'\xe9diteur de projet lorsque vous s\xe9lectionnerez votre mod\xe8le personnalis\xe9"),(0,a.kt)("li",{parentName:"ul"},"Un fichier ",(0,a.kt)("strong",{parentName:"li"},"manifest.json"),", qui contient une description simple du mod\xe8le"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),p=n,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return r?o.createElement(f,l(l({ref:t},d),{},{components:r})):o.createElement(f,l({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29004:function(e,t,r){t.Z=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},68879:function(e,t,r){t.Z=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},25843:function(e,t,r){t.Z=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);